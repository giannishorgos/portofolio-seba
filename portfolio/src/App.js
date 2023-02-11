import logo from "./logo.svg";
import "./App.css";
import Home from "./Screens/Home/Home";
import Menu from "./components/Menu/Menu";

function App() {
    return (
        <div className="App">
            <Menu />
            <Home />
        </div>
    );
}

export default App;
