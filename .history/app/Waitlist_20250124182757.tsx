import React, { useState } from 'react';
import axios from 'axios';
import { Twitter, Github, Medium } from 'lucide-react';

const NOTION_API_URL = 'https://api.notion.com/v1/pages'; // Notion API endpoint
const DATABASE_ID = 'your_database_id'; // Replace with your actual database ID
const NOTION_API_KEY = 'your_notion_api_key'; // Replace with your actual integration token

const Waitlist = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await axios.post(NOTION_API_URL, {
                parent: { database_id: DATABASE_ID },
                properties: {
                    Email: {
                        title: [
                            {
                                text: {
                                    content: email,
                                },
                            },
                        ],
                    },
                },
            }, {
                headers: {
                    'Authorization': `Bearer ${NOTION_API_KEY}`,
                    'Content-Type': 'application/json',
                    'Notion-Version': '2022-06-28', // Use the latest version
                },
            });

            console.log('Email submitted:', response.data);
            setEmail(''); // Clear the input field
        } catch (err) {
            console.error('Error submitting email:', err);
            setError('Failed to submit email. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="relative min-h-screen overflow-hidden bg-slate-50">
            {/* Animated gradient blobs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>

            <div className="relative flex flex-col min-h-screen">
                <header className="pt-16 pb-8 text-center">
                    <p className="text-sm font-medium text-indigo-600 mb-2">Gyre App | End-to-end CRM</p>
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        Join the waitlist for
                    </h1>
                    <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-transparent bg-clip-text">
                        Manage web3 Relationships
                    </h2>
                </header>

                <main className="flex-grow flex flex-col items-center justify-center p-6">
                    <div className="w-full max-w-md">
                        <form onSubmit={handleSubmit} className="space-y-4 backdrop-blur-sm bg-white/80 rounded-2xl p-8 shadow-lg transform transition-all hover:scale-[1.02]">
                            <div className="space-y-2">
                                <input
                                    type="text"
                                    placeholder="Full name..."
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-white/50"
                                />
                            </div>
                            <div className="space-y-2">
                                <input
                                    type="email"
                                    placeholder="Email address..."
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-white/50"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 px-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-medium 
                                         hover:from-indigo-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                                         transform transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Processing...
                                    </span>
                                ) : 'Join the waitlist →'}
                            </button>
                            {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                        </form>
                    </div>
                </main>

                <footer className="py-8 text-center">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="https://twitter.com/gyreapp" target="_blank" rel="noopener noreferrer" 
                           className="text-gray-600 hover:text-indigo-600 transition-colors">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/gyreapp" target="_blank" rel="noopener noreferrer"
                           className="text-gray-600 hover:text-indigo-600 transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                        <a href="https://medium.com/@gyreapp" target="_blank" rel="noopener noreferrer"
                           className="text-gray-600 hover:text-indigo-600 transition-colors">
                            <Medium className="w-6 h-6" />
                        </a>
                    </div>
                    <p className="text-sm text-gray-600">
                        &copy; {new Date().getFullYear()} Gyre App. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Waitlist;
