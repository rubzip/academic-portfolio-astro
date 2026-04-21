/* Some CSS utility classes and base variables are adapted from Astro Paper 
  by Satnaing (https://github.com/satnaing/astro-paper) 
  Released under the MIT License.
*/

export interface ThemeColors {
    background: string;
    foreground: string;
    accent: string;
    muted: string;
    border: string;
    surface: string;
}

export const LIGHT_THEMES = {
    default: {
        background: "#ffffff",
        foreground: "#111827",
        accent: "#3b82f6",
        muted: "#6b7280",
        border: "#e5e7eb",
        surface: "#f9fafb",
    },
    lobster: {
        background: "#f6eee1",
        foreground: "#012c56",
        accent: "#e14a39",
        muted: "#efd8b0",
        border: "#dc9891",
        surface: "#f6eee1",
    },
    leafBlue: {
        background: "#f2f5ec",
        foreground: "#353538",
        accent: "#1158d1",
        muted: "#bbc789",
        border: "#7cadff",
        surface: "#f2f5ec",
    },
    pinkyLight: {
        background: "#fafcfc",
        foreground: "#222e36",
        accent: "#d3006a",
        muted: "#f1bad4",
        border: "#e3a9c6",
        surface: "#fafcfc",
    },
};

export const DARK_THEMES = {
    default: {
        background: "#212737",
        foreground: "#eaedf3",
        accent: "#ff6b01",
        muted: "#343f60",
        border: "#ab4b08",
        surface: "#212737",
    },
    astroPaper1: {
        background: "#2f3741",
        foreground: "#e6e6e6",
        accent: "#1ad9d9",
        muted: "#596b81",
        border: "#3b4655",
        surface: "#2f3741",
    },
    deepOyster: {
        background: "#21233d",
        foreground: "#f4f7f5",
        accent: "#ff5256",
        muted: "#4a4e86",
        border: "#b12f32",
        surface: "#21233d",
    },
    pikkyDark: {
        background: "#353640",
        foreground: "#e9edf1",
        accent: "#ff78c8",
        muted: "#715566",
        border: "#86436b",
        surface: "#353640",
    },
    astroDarkHighContrast: {
        background: "#212737",
        foreground: "#eaedf3",
        accent: "#ff6b01",
        muted: "#8a3302",
        border: "#ab4b08",
        surface: "#212737",
    },
    astroDark: {
        background: "#212737",
        foreground: "#eaedf3",
        accent: "#ff6b01",
        muted: "#8a3302",
        border: "#ab4b08",
        surface: "#212737",
    },
    astroDeepPurple: {
        background: "#212737",
        foreground: "#eaedf3",
        accent: "#eb3fd3",
        muted: "#7d4f7c",
        border: "#642451",
        surface: "#212737",
    },
    astroPaper4: {
        background: "#000123",
        foreground: "#eaedf3",
        accent: "#617bff",
        muted: "#0c0e4f",
        border: "#303f8a",
        surface: "#000123",
    },
};

export type LightThemeName = keyof typeof LIGHT_THEMES;
export type DarkThemeName = keyof typeof DARK_THEMES;
