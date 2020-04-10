import { createMuiTheme } from "@material-ui/core/styles"
import amber from "@material-ui/core/colors/blue"

export default createMuiTheme({
  palette: {
    primary: amber
  },
  typography: {
    h1: {
      fontSize: 28,
      fontWeight: 300
    }
  }
})