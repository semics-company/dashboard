import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const Dark = createMuiTheme({
    typography:{
        fontFamily:"Ubuntu"
    },

    palette: {
        primary: {
        main: "#000",
      },
    },
  });

export default Dark