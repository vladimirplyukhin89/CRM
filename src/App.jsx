import Sidebar from "./components/Sidebar/Sidebar";
import DashboardApp from "./components/DashboardApp/DashboardApp";

function App() {
  return (
    <>
      <div className="app">
        <Sidebar />
        <DashboardApp />
      </div>
    </>
  );
}

export default App;
