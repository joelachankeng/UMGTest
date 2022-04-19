module.exports = {
  // mode: 'jit', // Just-In-Time Compiler+
  purge: {
    enabled: true,
    content: [
      '../wordpress/wp-content/**/*.php',
      '../wordpress/wp-content/plugins/**/*.php',
      '../wordpress/wp-content/themes/**/*.php'
    ]
  },
  theme: { 
    /*
    |-------------------------------------------------------------------------------
    | Colors                                    https://tailwindcss.com/docs/colors
    |-------------------------------------------------------------------------------
    |
    | Here you can specify the colors used in your project. To get you started,
    | we've provided a generous palette of great looking colors that are perfect
    | for prototyping, but don't hesitate to change them for your project. You
    | own these colors, nothing will break if you change everything about them.
    |
    | We've used literal color names ("red", "blue", etc.) for the default
    | palette, but if you'd rather use functional names like "primary" and
    | "secondary", or even a numeric scale like "100" and "200", go for it.
    |
    */
    colors: {
      black: "#000000",
      white: "#ffffff",
      primary: "#05406e",
      "primary-dark": "#0b304d",
      secondary: "#3881c3",
      "secondary-light": "#58c4c6",
      "secondary-lightest": "#e2feff",
      tertiary: "#401414",
      accent: "#f05a28",
      "accent-2": "#5aa01a",
      dividers: "#d8d8d8",
      error: "#790000",

      screen: "rgba(255, 255, 255, 0.9)",
      "screen-lighter": "rgba(255, 255, 255, 0.5)",
      "screen-lightest": "rgba(255, 255, 255, 0.2)",

      transparent: "transparent"
    },
    /*
    |-----------------------------------------------------------------------------
    | Screens                      https://tailwindcss.com/docs/responsive-design
    |-----------------------------------------------------------------------------
    |
    | Screens in Tailwind are translated to CSS media queries. They define the
    | responsive breakpoints for your project. By default Tailwind takes a
    | "mobile first" approach, where each screen size represents a minimum
    | viewport width. Feel free to have as few or as many screens as you
    | want, naming them in whatever way you'd prefer for your project.
    |
    | Tailwind also allows for more complex screen definitions, which can be
    | useful in certain situations. Be sure to see the full responsive
    | documentation for a complete list of options.
    |
    | Class name: .{screen}:{utility}
    |
    */
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
    },
    /*
    |-----------------------------------------------------------------------------
    | Fonts                                    https://tailwindcss.com/docs/fonts
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your project's font stack, or font families.
    | Keep in mind that Tailwind doesn't actually load any fonts for you.
    | If you're using custom fonts you'll need to import them prior to
    | defining them here.
    |
    | By default we provide a native font stack that works remarkably well on
    | any device or OS you're using, since it just uses the default fonts
    | provided by the platform.
    |
    | Class name: .font-{name}
    |
    */
    fonts: {
      sans: [
          "Open Sans",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif"
      ],
      serif: [
          "Constantia",
          "Lucida Bright",
          "Lucidabright",
          "Lucida Serif",
          "Lucida",
          "DejaVu Serif",
          "Bitstream Vera Serif",
          "Liberation Serif",
          "Georgia",
          "serif"
      ],
      mono: [
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace"
      ]
    },
  },
  variants: {},
  plugins: []
}