import AppTemplate from "./templates/AppTemplate";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./components/routes/AppRoutes";
import { ThemeProvider } from "@mui/material/styles";
import { GlobalStyles } from "./theme/GlobalStyles";
import theme from "./theme";
import "./i18n";

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <AppTemplate>
          <AppRoutes />
        </AppTemplate>
      </ThemeProvider>
    </Router>
  );
}

export default App;
