import { createTheme } from "@mui/material";

const theme = createTheme({
    typography: {
		fontFamily: "kalpurush",
	},
    palette:{
        primary:{
            main:"#009164",  
            light: "#00916424" ,
            // dark:"#009164",
            contrastText:"#fff"
        },
        secondary:{
			main:"#64748B",  
        },
     
		error: {
			light: "#d0736e",
			main: "#c1453d",
			dark: "#b1160d",
			contrastText: "#fff",
		},
    },
    components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: "unset",
					// borderRadius: 8,
				},
			},
		},
	},
})

export default theme;