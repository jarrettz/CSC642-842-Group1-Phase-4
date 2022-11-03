import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import RequirementsResultsPage from "./pages/RequirementsResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/requirements-results' element={<RequirementsResultsPage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
