import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import HomePage from "./pages/HomePage";
import RequirementsUniversityPage from "./pages/RequirementsUniversityPage";
import RequirementsDegreePage from "./pages/RequirementsDegreePage";
import RequirementsResultsPage from "./pages/RequirementsResultsPage";
import RoadmapOptionsPage from "./pages/RoadmapOptionsPage";
import RoadmapResultsPage from "./pages/RoadmapResultsPage";
import UniversityPage from "./pages/UniversityPage";

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
          <Route path='/' element={<HomePage/>} />
          <Route path='/roadmap/options' element={<RoadmapOptionsPage/>} />
          <Route path='/roadmap/results' element={<RoadmapResultsPage/>} />
          <Route path='/requirements/university' element={<RequirementsUniversityPage/>} />
          <Route path='/requirements/degree' element={<RequirementsDegreePage/>} />
          <Route path='/requirements/results' element={<RequirementsResultsPage/>} />
          <Route path='/university' element={<UniversityPage/>} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
