import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./routes";
import { Light } from "@mui/icons-material";
import { LightTheme } from "./shared/themes";

export const App = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </ThemeProvider>
  );
};
