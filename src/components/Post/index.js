import { Paper } from '@material-ui/core';
import { createMuiTheme, Theme, MuiThemeProvider } from '@material-ui/core/styles';
import MUIRichTextEditor from 'mui-rte';

export const defaultTheme: Theme = createMuiTheme({
    palette: {
        primary: {
            main: "#000000"
        }
    }
})

Object.assign(defaultTheme, {
    overrides: {
        MUIRichTextEditor: {
            root: {
                // backgroundColor: "#ebebeb",
            },
            container: {
                display: "flex",
                flexDirection: "column"
            },
            editor: {
                backgroundColor: "#ebebeb",
                padding: "20px",
                height: "200px",
                maxHeight: "200px",
                overflow: "auto"
            },
            toolbar: {
                borderTop: "1px solid gray",
                // backgroundColor: "#ebebeb",
                height: '50px'
            },
            placeHolder: {
                backgroundColor: "#ebebeb",
                paddingLeft: 20,
                width: "inherit",
                position: "absolute",
                top: "20px"
            },
            anchorLink: {
                color: "#333333",
                textDecoration: "underline"
            }
        }
    }
})

export default function Post() {
  return (
    <Paper>
      <MuiThemeProvider theme={defaultTheme}>
        <MUIRichTextEditor label="Start typing..." inlineToolbar={true} style={{height: '200px'}} />
      </MuiThemeProvider>
    </Paper>
  )
}
