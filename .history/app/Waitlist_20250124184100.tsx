"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Twitter, Github } from 'lucide-react';

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
        <div className="relative min-h-screen overflow-hidden bg-[#e5e5ee]">
            {/* Larger, morphing gradient blobs */}
            <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-[#3aabf6] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-morph"></div>
            <div className="absolute top-40 -right-20 w-[600px] h-[600px] bg-[#91a7b3] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-morph animation-delay-2000"></div>
            <div className="absolute -bottom-40 left-40 w-[600px] h-[600px] bg-[rgb(221,226,228)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-morph animation-delay-4000"></div>
            <div className="absolute bottom-0 right-20 w-[600px] h-[600px] bg-[#00B4D8] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-morph animation-delay-6000"></div>

            <div className="relative flex flex-col min-h-screen">
                <header className="pt-16 pb-12 text-center px-6">
                    <p className="text-sm font-medium text-[#90E0EF] mb-4 tracking-wider uppercase">Gyre App | End-to-end CRM</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                        Join the waitlist for
                    </h1>
                    <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-[#48CAE4] via-[#90E0EF] to-[#CAF0F8] text-transparent bg-clip-text mb-8">
                        Manage web3 Relationships
                    </h2>
                    <p className="max-w-2xl mx-auto text-[#90E0EF]/80 text-lg md:text-xl leading-relaxed">
                        Transform your Web3 community management with our revolutionary CRM platform. 
                        Built for DAOs, NFT projects, and Web3 communities.
                    </p>
                </header>

                <main className="flex-grow flex flex-col items-center justify-center p-6">
                    <div className="w-full max-w-md">
                        <div className="relative">
                            <div className="absolute inset-0 backdrop-blur-sm rounded-2xl"></div>
                            
                            <form 
                                onSubmit={handleSubmit} 
                                className="relative space-y-4 bg-white/10 rounded-2xl p-8 shadow-lg backdrop-blur-md transform transition-all hover:scale-[1.02]"
                            >
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        placeholder="Full name..."
                                        className="w-full px-4 py-3 rounded-lg border border-[#0096C7]/30 bg-white/10 text-white placeholder-[#90E0EF]/50 focus:outline-none focus:ring-2 focus:ring-[#48CAE4] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="email"
                                        placeholder="Email address..."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-[#0096C7]/30 bg-white/10 text-white placeholder-[#90E0EF]/50 focus:outline-none focus:ring-2 focus:ring-[#48CAE4] transition-all"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 px-4 bg-gradient-to-r from-[#0077B6] to-[#0096C7] text-white rounded-lg font-medium 
                                             hover:from-[#023E8A] hover:to-[#0077B6] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#0096C7]
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

                            {/* Feature highlights */}
                            <div className="mt-8 grid grid-cols-2 gap-4 text-center text-[#CAF0F8]">
                                <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                                    <h3 className="font-semibold mb-1">Community Analytics</h3>
                                    <p className="text-sm opacity-80">Real-time insights and engagement metrics</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white/5 backdrop-blur-sm">
                                    <h3 className="font-semibold mb-1">Token Gating</h3>
                                    <p className="text-sm opacity-80">Exclusive access management</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="py-8 text-center">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="https://twitter.com/gyreapp" target="_blank" rel="noopener noreferrer" 
                           className="text-[#90E0EF] hover:text-[#CAF0F8] transition-colors">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/gyreapp" target="_blank" rel="noopener noreferrer"
                           className="text-[#90E0EF] hover:text-[#CAF0F8] transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                    <p className="text-sm text-[#90E0EF]/60">
                        &copy; {new Date().getFullYear()} Gyre App. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Waitlist;
