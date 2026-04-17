import argparse
import tempfile
from pathlib import Path
from typing import Tuple

import cairosvg
from PIL import Image

RGBAColor = Tuple[int, int, int, int]

def _generate_favicon_svg(
    letter: str,
    color_text: RGBAColor,
    color_background: RGBAColor,
    fname_out: Path,
    size: int = 128,
    letter_prop: float = 0.9,
    bold: bool = False,
    italic: bool = False,
    underline: bool = False,
    strike: bool = False,
    font_family: str = "sans-serif"
) -> None:
    
    def rgba_to_css(rgba: RGBAColor) -> str:
        return f"rgba({rgba[0]}, {rgba[1]}, {rgba[2]}, {rgba[3]/255:.2f})"

    fill_text = rgba_to_css(color_text)
    fill_bg = rgba_to_css(color_background)

    weight = "bold" if bold else "normal"
    style = "italic" if italic else "normal"
    font_size = int(size * letter_prop)

    extra = ""
    if underline:
        extra += f'<line x1="20%" x2="80%" y1="85%" y2="85%" stroke="{fill_text}" stroke-width="4%"/>'
    if strike:
        extra += f'<line x1="20%" x2="80%" y1="50%" y2="50%" stroke="{fill_text}" stroke-width="4%"/>'

    svg_content = f"""<svg xmlns="http://www.w3.org/2000/svg" width="{size}" height="{size}" viewBox="0 0 {size} {size}">
  <rect width="100%" height="100%" fill="{fill_bg}" />
  <text x="50%" y="50%" dy=".35em" font-family="{font_family}" font-size="{font_size}"
        font-weight="{weight}" font-style="{style}" text-anchor="middle"
        fill="{fill_text}">{letter}</text>
  {extra}
</svg>"""

    fname_out.write_text(svg_content, encoding="utf-8")
    print(f"✅ SVG generated: {fname_out}")

def _svg_to_png(svg_file: Path, png_file: Path, size: int) -> None:
    cairosvg.svg2png(
        url=str(svg_file),
        write_to=str(png_file),
        output_width=size,
        output_height=size
    )
    print(f"✅ PNG generado: {png_file}")

def _svg_to_ico(svg_file: Path, ico_file: Path, sizes: Tuple[int, ...] = (16, 32, 48, 64, 128, 256)) -> None:
    with tempfile.TemporaryDirectory() as tmpdirname:
        tmp_dir = Path(tmpdirname)
        png_files = []
        
        for s in sizes:
            tmp_png = tmp_dir / f"tmp_{s}.png"
            _svg_to_png(svg_file, tmp_png, size=s)
            png_files.append(tmp_png)

        imgs = [Image.open(p) for p in png_files]
        imgs[0].save(ico_file, format="ICO", sizes=[(s, s) for s in sizes])
        print(f"✅ ICO generado: {ico_file}")

def generate_favicons(
    letter: str = "A",
    color_text: RGBAColor = (255, 255, 255, 255),
    color_background: RGBAColor = (0, 0, 0, 255),
    folder_out: str = "favicons",
    letter_prop: float = 0.8,
    bold: bool = True,
    italic: bool = False,
    underline: bool = False,
    strike: bool = False,
    font_family: str = "system-ui, sans-serif"
) -> None:
    
    folder = Path(folder_out)
    folder.mkdir(parents=True, exist_ok=True)
    
    svg_file = folder / "favicon.svg"
    _generate_favicon_svg(
        letter=letter,
        color_text=color_text,
        color_background=color_background,
        fname_out=svg_file,
        letter_prop=letter_prop,
        bold=bold,
        italic=italic,
        underline=underline,
        strike=strike,
        font_family=font_family
    )

    ico_file = folder / "favicon.ico"
    _svg_to_ico(svg_file=svg_file, ico_file=ico_file)
    
    print(f"\n🎉 Completado en: {folder.absolute()}")

def parse_color(color_str: str) -> RGBAColor:
    try:
        parts = tuple(map(int, color_str.split(',')))
        if len(parts) == 3:
            return (parts[0], parts[1], parts[2], 255)
        elif len(parts) == 4:
            return (parts[0], parts[1], parts[2], parts[3])
        else:
            raise ValueError
    except:
        raise argparse.ArgumentTypeError(f"Formato inválido: '{color_str}'. Usa 'R,G,B' o 'R,G,B,A'")

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument("-l", "--letter", type=str, required=True)
    parser.add_argument("-bg", "--background", type=parse_color, default="0,0,0,0")
    parser.add_argument("-t", "--text", type=parse_color, default="255,255,255,255")
    parser.add_argument("-o", "--out", type=str, default="favicons")
    args = parser.parse_args()

    generate_favicons(
        letter=args.letter,
        color_background=args.background,
        color_text=args.text,
        folder_out=args.out
    )