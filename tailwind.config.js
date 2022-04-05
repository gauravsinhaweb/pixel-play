module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    // backgroundColor: (theme) => ({
    //   ...theme("colors"),
    //   primary: "#141414",
    //   secondary: "#016795",
    //   tertiary: "#1E488F",
    //   highlight: "#1E488F",
    // }),
    // colors: {
    //   // Configure your color palette here
    //   primary: "#FFFFFF",
    //   secondary: "#016795",
    //   tertiary: "#1E488F",
    //   white: "#ffffff",
    //   red: "#991B1B",
    // },
    // fontFamily: {
    //   serif: ["poppins"],
    // },
  },
  variants: {
    backgroundColor: ["active"],
    width: ["responsive", "hover", "focus"],
    transitionProperty: ["responsive", "motion-safe", "motion-reduce"],
    extend: {
      opacity: ["disabled"],
    },
  },
  plugins: [],
};
