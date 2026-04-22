import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { userService } from '../services/UserService';
import { RegisterForm, Role } from '../types';

export default function Register() {
  const [form, setForm] = useState<RegisterForm>({ userName: '', email: '', role: 'USER' as Role, password: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = userService.registerWithPassword(form);
    setMessage(`Registered ${user.userName} as ${user.role}!`);
    setTimeout(() => navigate('/'), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Register Chef/Shopper</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
            <input
              type="text"
              value={form.userName}
              onChange={(e) => setForm({...form, userName: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input
              type="email"
              value={form.email}
              onChange={(e) => setForm({...form, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Role</label>
            <select
              value={form.role}
              onChange={(e) => setForm({...form, role: e.target.value as Role})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="USER">User</option>
              <option value="CHEF">Chef</option>
              <option value="SHOPPER">Shopper</option>
              <option value="VOLUNTEER">Volunteer</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
            <input
              type="password"
              value={form.password}
              onChange={(e) => setForm({...form, password: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-3 px-4 rounded-xl font-semibold hover:from-blue-600 hover:to-blue-700 transition-all"
          >
            Register
          </button>
        </form>
        {message && <p className="mt-4 p-3 bg-green-100 border border-green-400 text-green-700 rounded-xl text-center font-medium">{message}</p>}
        <p className="mt-6 text-center text-sm text-gray-600">
          Already have account? <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">Login here</Link>
        </p>
      </div>
    </div>
  );
}
