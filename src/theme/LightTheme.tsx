import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const Light = createMuiTheme({
    typography:{
        fontFamily:"Ubuntu",

    },

    palette: {

      primary: {
        main: "#13003e",
      },
      secondary: {
        main: '#fb6761',
      },
    },
  });

  export default Light;