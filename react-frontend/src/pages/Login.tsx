import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userService } from '../services/UserService';

export default function Login() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const success = userService.loginByCredentials(userName, password);
    if (success) {
      setMessage('Login successful! Redirecting...');
      setTimeout(() => navigate('/'), 1500);
    } else {
      setMessage('Invalid credentials');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-100 to-green-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-600 hover:to-green-700 transition-all"
          >
            Login
          </button>
        </form>
        {message && (
          <p className="mt-4 p-3 bg-blue-100 border border-blue-400 text-blue-700 rounded-xl text-center font-medium">
            {message}
          </p>
        )}
        <p className="mt-6 text-center text-sm text-gray-600">
          New here? <Link to="/register" className="font-medium text-green-600 hover:text-green-500">Register</Link>
        </p>
      </div>
    </div>
  );
}
