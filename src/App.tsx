import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Users from './pages/Users';

function App() {

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
