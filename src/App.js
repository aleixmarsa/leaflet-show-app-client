import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/Nabvar";
import EventViewerPage from "./components/pages/EventViewerPage";
function App() {
  return (
    <div>
      <NavBar />
      <EventViewerPage />
    </div>
  );
}

export default App;
