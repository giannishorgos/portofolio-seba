
import "./App.css";
import Home from "./Screens/Home/Home";
import Menu from "./components/Menu/Menu";
import Logo from "./components/Logo/Logo";
import Projects from "./Screens/ProjectsScreen/Projects";
import { Route, Router, Routes } from 'react-router-dom';


function App() {
    return (
        <div className="App">
            {/* <Logo /> */}
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </div>
    );
}

export default App;
