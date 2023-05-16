import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import Main from "./components/Main";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app_body">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
}

export default App;
