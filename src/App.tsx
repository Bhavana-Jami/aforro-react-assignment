import './App.css'
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from './pages/Dashboard';

function App() {

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />

      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />

        <main className="p-6 overflow-y-auto">
          <Dashboard />
        </main>
      </div>
    </div>
  )
}

export default App
