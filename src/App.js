import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Nabvar";
import EventViewerPage from "./components/pages/EventViewerPage";
function App() {
  return (
    <div className="flex flex-col h-screen">
      <NavBar/>
      <EventViewerPage/>
    </div>
  );
}

export default App;
