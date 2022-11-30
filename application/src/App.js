import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from "./pages/HomePage";
import RequirementsUniversityPage from "./pages/RequirementsUniversityPage";
import RequirementsDegreePage from "./pages/RequirementsDegreePage";
import RequirementsResultsPage from "./pages/RequirementsResultsPage";
import RegistrationPages from "./pages/RegistrationPages";


const theme = createTheme({
  palette: {
    primary: {
      light: '#eeffff',
      main: '#bbdefb',
      dark: '#8aacc8',
      contrastText: '#000000',
    }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RegistrationPages/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
