"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Twitter, Github, Globe2, Bitcoin, DollarSign } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Icon } from '@iconify/react';

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
        <div className="relative min-h-screen overflow-hidden bg-[#0a0f1c] flex">
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#48CAE4]/20 via-transparent to-[#023E8A]/20" />
            <div className="absolute inset-0">
                <div className="absolute left-0 top-0 w-1/2 h-full bg-gradient-to-r from-[#023E8A]/10 to-transparent" />
                <div className="absolute right-0 bottom-0 w-1/2 h-full bg-gradient-to-l from-[#48CAE4]/10 to-transparent" />
            </div>

            {/* Glass Panels */}
            <div className="absolute inset-0 flex">
                <div className="w-1/3 h-[120%] -rotate-12 -translate-x-16 -translate-y-16 bg-white/[0.02] backdrop-blur-sm transform-gpu" />
                <div className="w-1/3 h-[120%] -rotate-12 translate-x-32 translate-y-16 bg-white/[0.02] backdrop-blur-sm transform-gpu" />
                <div className="w-1/3 h-[120%] -rotate-12 translate-x-80 -translate-y-8 bg-white/[0.02] backdrop-blur-sm transform-gpu" />
            </div>

            {/* Main Content */}
            <div className="relative w-full flex flex-col md:flex-row">
                {/* Left Side - Content */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                    <div className="mb-8">
                        <Badge variant="secondary" className="text-sm font-medium tracking-wider animate-pulse shadow-lg mb-4">
                            <Icon icon="cryptocurrency:usd" className="w-4 h-4 mr-2" />
                            PayFlow | Global Payment Solutions
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                            Immerse Yourself in
                            <br />
                            <span className="bg-gradient-to-r from-[#48CAE4] via-[#0096C7] to-[#023E8A] text-transparent bg-clip-text">
                                Refracted Payments
                            </span>
                        </h1>
                        <p className="text-[#90E0EF]/80 text-lg md:text-xl leading-relaxed max-w-xl">
                            Elevate your global transactions with 3D secure payments. Break through traditional barriers with our revolutionary cross-border payment platform.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10">
                            <h3 className="font-semibold mb-1 text-white">Global Coverage</h3>
                            <p className="text-sm text-[#90E0EF]/60">160+ countries supported</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10">
                            <h3 className="font-semibold mb-1 text-white">Low Fees</h3>
                            <p className="text-sm text-[#90E0EF]/60">Up to 80% cheaper than banks</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center">
                    <div className="w-full max-w-md">
                        <div className="relative">
                            <div className="absolute inset-0 backdrop-blur-xl rounded-2xl bg-white/[0.02]" />
                            
                            <form 
                                onSubmit={handleSubmit} 
                                className="relative space-y-4 rounded-2xl p-8 border border-white/10 backdrop-blur-md"
                            >
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        placeholder="Full name..."
                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#48CAE4]/50 transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#48CAE4]/50 transition-all"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 px-4 bg-gradient-to-r from-[#48CAE4] to-[#023E8A] text-white rounded-xl font-medium 
                                             hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#48CAE4]/50
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
                                    ) : 'Explore technology →'}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="absolute bottom-0 w-full py-4 text-center">
                <div className="flex justify-center space-x-6 mb-2">
                    <a href="https://twitter.com/payflow" target="_blank" rel="noopener noreferrer" 
                       className="text-white/60 hover:text-[#48CAE4] transition-colors">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/payflow" target="_blank" rel="noopener noreferrer"
                       className="text-white/60 hover:text-[#48CAE4] transition-colors">
                        <Github className="w-5 h-5" />
                    </a>
                </div>
                <p className="text-sm text-white/40">
                    &copy; {new Date().getFullYear()} PayFlow. All rights reserved.
                </p>
            </footer>
        </div>
    );
};

export default Waitlist;
