module.exports = {
  mode: 'JIT',
  content: ['./pages/**/*.js', './components/**/*.js'],
  theme: {
    extend: {  
      fontFamily: {
        sans: ['IBM Plex Mono', 'monospace'],
        vt323: ['VT323', 'monospace']
      },
      container: {
        center: true,
        padding: '2rem'
      },
    },
    colors: {
      yellow: "#FABD2F",
      lime: "#B6BB26",
      olive: "#8EC07C",
      jade: "#458588",
      white: "#EBDBB2",
      dark: {
        900: "#1D2021",
        800: "#282828"
      },
      transparent: "transparent"
    },
  },
  plugins: [],
}
