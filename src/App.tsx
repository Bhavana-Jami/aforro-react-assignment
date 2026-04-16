import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from './pages/Dashboard';
import { Route, Routes } from 'react-router-dom';
import Users from './pages/Users';
import { useState } from "react";
function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar open={open} setOpen={setOpen}/>
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar setOpen={setOpen} />
        <main className="p-6 overflow-y-auto">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="*" element={<h1>No UI built for this route yet!</h1>} />
          </Routes>
        </main>
      </div>
    </div>
  )
}

export default App
