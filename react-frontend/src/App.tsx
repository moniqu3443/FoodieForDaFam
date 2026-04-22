import { BrowserRouter as Router, Routes, Route, Link, useState } from 'react-router-dom';
import Navbar from './components/Navbar';
import Register from './pages/Register';
import Login from './pages/Login';
import { userService } from './services/UserService';
import { User } from './types';

function Home() {
  const [loggedInUser, setLoggedInUser] = useState<User | null>(userService.getLoggedInUser());

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100">
      <Navbar />
      <div className="pt-20 p-8">
        <h1 className="text-5xl font-bold mb-8 text-gray-800 text-center">🍽️ FoodieForDaFam</h1>
        <p className="text-xl mb-12 text-center text-gray-600 max-w-2xl mx-auto">
          Connect families, chefs, shoppers, and volunteers for delicious home-cooked meals.
        </p>
        {loggedInUser ? (
          <div className="text-center">
            <p className="text-2xl mb-4">Welcome back, <span className="font-bold text-blue-600">{loggedInUser.userName}</span> ({loggedInUser.role})!</p>
            <div className="space-x-4">
              <Link to="/logout" className="bg-red-500 text-white px-6 py-3 rounded-xl hover:bg-red-600 font-semibold">Logout</Link>
            </div>
          </div>
        ) : (
          <div className="max-w-md mx-auto space-y-4">
            <Link
              to="/register"
              className="block w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-6 rounded-2xl text-xl font-semibold text-center hover:from-blue-600 hover:to-indigo-700 shadow-lg hover:shadow-xl transition-all"
            >
              👨‍🍳 Become a Chef / Shopper
            </Link>
            <Link
              to="/login"
              className="block w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-4 px-6 rounded-2xl text-xl font-semibold text-center hover:from-green-600 hover:to-emerald-700 shadow-lg hover:shadow-xl transition-all"
            >
              🔑 Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
