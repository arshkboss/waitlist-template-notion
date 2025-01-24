"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { Twitter, Github, Globe2, Bitcoin, DollarSign, User, Mail, ArrowRight } from 'lucide-react';
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
            {/* Enhanced Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#48CAE4]/20 via-transparent to-[#023E8A]/20" />
            
            {/* Fluted Glass Effect - Multiple overlapping stripes */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute h-[120%] w-[5%] rotate-12 backdrop-blur-md bg-white/[0.01]"
                        style={{
                            left: `${i * 5}%`,
                            transform: `rotate(12deg) translateY(-10%) translateZ(${i * 2}px)`,
                            backdropFilter: `blur(${8 + (i % 3) * 4}px)`,
                            opacity: 0.01 + (i % 3) * 0.01
                        }}
                    />
                ))}
            </div>

            {/* Animated Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a0f1c]/50 to-[#0a0f1c] animate-pulse" />

            {/* Main Content */}
            <div className="relative w-full flex flex-col md:flex-row">
                {/* Left Side - Content */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
                    <div className="mb-8 animate-fade-in-up">
                        <Badge variant="secondary" className="text-sm font-medium tracking-wider  shadow-lg mb-4  hover:shadow-xl">
                            <Icon icon="cryptocurrency:usd" className="w-4 h-4 mr-2 animate-pulse" />
                            PayFlow | Global Payment Solutions
                        </Badge>
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight animate-fade-in-up delay-100">
                            Immerse Yourself in
                            <br />
                            <span className="bg-gradient-to-r from-[#c8eff7] via-[#0096C7] to-[#023E8A] text-transparent bg-clip-text animate-gradient">
                                Refracted Payments
                            </span>
                        </h1>
                        <p className="text-[#90E0EF]/80 text-lg md:text-xl leading-relaxed max-w-xl animate-fade-in-up delay-200">
                            Experience the future of payments. Break through traditional barriers with our revolutionary cross-border payment platform.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all hover:scale-105 animate-fade-in-up delay-300">
                            <h3 className="font-semibold mb-1 text-white">Global Coverage</h3>
                            <p className="text-sm text-[#90E0EF]/60">160+ countries supported</p>
                        </div>
                        <div className="p-4 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 hover:border-white/20 transition-all hover:scale-105 animate-fade-in-up delay-400">
                            <h3 className="font-semibold mb-1 text-white">Low Fees</h3>
                            <p className="text-sm text-[#90E0EF]/60">Up to 80% cheaper than banks</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Form */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex items-center justify-center">
                    <div className="w-full max-w-md animate-fade-in-up delay-500">
                        <div className="relative group">
                            {/* Multi-layered glass effect for form background */}
                            <div className="absolute inset-0 backdrop-blur-3xl rounded-2xl bg-white/[0.02] group-hover:bg-white/[0.03] transition-colors" />
                            <div className="absolute inset-2 backdrop-blur-2xl rounded-xl bg-white/[0.01]" />
                            <div className="absolute inset-4 backdrop-blur-xl rounded-lg bg-white/[0.01]" />
                            
                            <form 
                                onSubmit={handleSubmit} 
                                className="relative space-y-4 rounded-2xl p-8 border border-white/10 backdrop-blur-md group-hover:border-white/20 transition-all"
                            >
                                <div className="space-y-2">
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                                        <input
                                            type="text"
                                            placeholder="Full name"
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#48CAE4]/50 transition-all hover:border-white/20"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-[#48CAE4]/50 transition-all hover:border-white/20"
                                            required
                                        />
                                    </div>
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="group w-full py-3 px-4 bg-gradient-to-r from-[#48CAE4] to-[#023E8A] text-white rounded-xl font-medium 
                                             hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-[#48CAE4]/50
                                             transform transition-all hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed
                                             relative overflow-hidden"
                                >
                                    {loading ? (
                                        <span className="flex items-center justify-center">
                                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            Processing...
                                        </span>
                                    ) : (
                                        <span className="flex items-center justify-center">
                                            Explore technology
                                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer with hover effects */}
            <footer className="absolute bottom-0 w-full py-4 text-center">
                <div className="flex justify-center space-x-6 mb-2">
                    <a href="https://twitter.com/payflow" target="_blank" rel="noopener noreferrer" 
                       className="text-white/60 hover:text-[#48CAE4] transition-colors hover:scale-110 transform">
                        <Twitter className="w-5 h-5" />
                    </a>
                    <a href="https://github.com/payflow" target="_blank" rel="noopener noreferrer"
                       className="text-white/60 hover:text-[#48CAE4] transition-colors hover:scale-110 transform">
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
