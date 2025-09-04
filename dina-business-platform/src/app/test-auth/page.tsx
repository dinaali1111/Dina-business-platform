'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function TestPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await response.json();
      setMessage(`Register: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setMessage(`Register Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogin = async () => {
    setIsLoading(true);
    setMessage('');

    try {
      const response = await fetch('/api/auth/user-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setMessage(`Login: ${JSON.stringify(data, null, 2)}`);
    } catch (error) {
      setMessage(`Login Error: ${error}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Test Authentication System</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">User Input</h2>
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Actions</h2>
            <button
              onClick={handleRegister}
              disabled={isLoading || !name || !email || !password}
              className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              {isLoading ? 'Loading...' : 'Register User'}
            </button>
            <button
              onClick={handleLogin}
              disabled={isLoading || !email || !password}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white py-3 px-6 rounded-lg font-semibold transition-colors"
            >
              {isLoading ? 'Loading...' : 'Login User'}
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Quick Test Buttons</h2>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                setName('John Doe');
                setEmail('john@test.com');
                setPassword('123456');
              }}
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg"
            >
              Fill Test Data
            </button>
            <button
              onClick={() => {
                setEmail('user@dina.com');
                setPassword('user123');
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg"
            >
              Fill Demo User
            </button>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-3">Navigation Links</h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/register" className="bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg">
              Go to Register Page
            </Link>
            <Link href="/user-login" className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
              Go to Login Page
            </Link>
            <Link href="/dashboard" className="bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg">
              Go to Dashboard
            </Link>
            <Link href="/" className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-4 rounded-lg">
              Go to Home
            </Link>
          </div>
        </div>

        {message && (
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Response:</h3>
            <pre className="text-sm bg-white p-3 rounded border overflow-auto max-h-64">
              {message}
            </pre>
          </div>
        )}
      </div>
    </div>
  );
}
