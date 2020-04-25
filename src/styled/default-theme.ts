const defaultTheme = {
  color: {
    primary1: "#CBF3F0",
    primary2: "#2EC4B6",

    secondary1: "#FF9F1C",
    secondary2: "#FFBF69",

    mono1: "#f9f9f9",
    mono2: "#f0f1f5",
    mono3: "#c6ccd5",
    mono4: "#5f6978",
    mono5: "#132437",
  },
  font: {
    xxs: "10px",
    xs: "12px",
    s: "14px",
    m: "16px",
    l: "18px",
    xl: "20px",
    xxl: "24px",
    big: "30px",
    jumbo: "40px",

    family: "'Source Code Pro', monospace",
  },
};

export interface ITheme {
  color: {};
  font: {};
}

export { defaultTheme };
