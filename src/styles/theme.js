import { createTheme } from "@mui/material";

// export const theme = createTheme({
//     palette: {
//         primary: {
//             main: "#ff5722",
//         },
//         secondary: {
//             main: "#CDDC39",
//         },
//     },
// });




export const theme = createTheme({
    palette: {
        gradient: {
            main: "linear-gradient(-39deg, #4991f8 0%, #4bc1ff 100%)",
            mainChannel: "0 0 0",
            light: "linear-gradient(135deg, #4aaffd 0%, #4992f8 100%)",
            lightChannel: "0 0 0",
            dark: "linear-gradient(135deg, #4cc2ff 0%, #4aa0fa 100%)",
            darkChannel: "0 0 0",
            contrastText: "#fff",
            contrastTextChannel: "0 0 0"
        }
    }
});