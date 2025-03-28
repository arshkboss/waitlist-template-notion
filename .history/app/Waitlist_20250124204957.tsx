"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { 
    Twitter, Github, Globe2, Bitcoin, DollarSign, 
    User, Mail, ArrowRight, Shield, Zap, 
    Globe, Clock, CreditCard 
} from 'lucide-react';
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
            <div className="absolute inset-0 bg-gradient-to-br from-[#48CAE4]/20 via-transparent to-[#023E8A]/20 animate-gradient-slow" />
            
            {/* Vertical Fluted Glass Effect - Right section */}
            <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden">
                {/* Primary glass stripes */}
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute top-0 h-full backdrop-blur-md bg-white/[0.02]"
                        style={{
                            left: `${i * (100 / 20)}%`,
                            width: `${100 / 20}%`,
                            backdropFilter: `blur(${8 + (i % 5) * 3}px)`,
                            opacity: 0.01 + (i % 4) * 0.008,
                            transform: `translateZ(${i * 0.5}px) scaleX(${0.9 + (i % 3) * 0.1})`,
                        }}
                    />
                ))}
                
                {/* Secondary overlapping stripes for depth */}
                {[...Array(10)].map((_, i) => (
                    <div
                        key={`overlay-${i}`}
                        className="absolute top-0 h-full backdrop-blur-lg bg-white/[0.01]"
                        style={{
                            left: `${10 + i * (100 / 10)}%`,
                            width: `${100 / 10}%`,
                            backdropFilter: `blur(${15 + (i % 3) * 5}px)`,
                            opacity: 0.015 + (i % 3) * 0.005,
                            transform: `translateZ(${i * 1}px) scaleX(1.2)`,
                        }}
                    />
                ))}

                {/* Base glass layer */}
                <div className="absolute inset-0 backdrop-blur-xl bg-white/[0.01]" />
            </div>

            {/* Main Content */}
            <div className="relative w-full flex flex-col md:flex-row">
                {/* Left Side Content */}
                <div className="w-full md:w-2/3 p-8 md:p-16 flex flex-col justify-center">
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

                    {/* Enhanced Feature Cards */}
                    <div className="grid grid-cols-2 gap-6 mt-12 max-w-4xl">
                        <FeatureCard 
                            icon={<Globe className="w-6 h-6 text-[#48CAE4] animate-slow-spin" />}
                            title="Global Coverage"
                            description="160+ countries supported"
                            delay="300"
                        />
                        <FeatureCard 
                            icon={<Shield className="w-6 h-6 text-[#48CAE4] animate-pulse" />}
                            title="Bank-Grade Security"
                            description="End-to-end encryption"
                            delay="400"
                        />
                        <FeatureCard 
                            icon={<Clock className="w-6 h-6 text-[#48CAE4] animate-bounce" />}
                            title="Instant Transfers"
                            description="24/7 real-time processing"
                            delay="500"
                        />
                        <FeatureCard 
                            icon={<CreditCard className="w-6 h-6 text-[#48CAE4] animate-float" />}
                            title="Low Fees"
                            description="Up to 80% cheaper than banks"
                            delay="600"
                        />
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/3 p-8 md:p-16 flex items-center justify-center relative">
                    <div className="w-full max-w-md animate-fade-in-up delay-500 relative z-10">
                        <h2 className="text-2xl font-bold text-white mb-6 text-center">
                            Join the Waitlist
                        </h2>
                        <form 
                            onSubmit={handleSubmit} 
                            className="space-y-4 rounded-2xl p-8 bg-white/[0.02] border border-white/10 backdrop-blur-sm
                                     hover:bg-white/[0.03] transition-all"
                        >
                            <div className="space-y-2">
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-white/[0.03] 
                                                 text-white placeholder-white/40 focus:outline-none focus:ring-2 
                                                 focus:ring-[#48CAE4]/50 transition-all hover:border-white/20"
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

// Feature Card Component
const FeatureCard = ({ icon, title, description, delay }) => (
    <div className={`p-6 rounded-xl bg-white/[0.03] backdrop-blur-md border border-white/10 
                    hover:border-white/20 transition-all hover:scale-105 animate-fade-in-up 
                    hover:bg-white/[0.05] group delay-${delay}`}>
        <div className="flex items-start space-x-4">
            <div className="p-2 rounded-lg bg-white/[0.05] group-hover:bg-white/[0.08] transition-colors">
                {icon}
            </div>
            <div>
                <h3 className="font-semibold mb-1 text-white">{title}</h3>
                <p className="text-sm text-[#90E0EF]/60">{description}</p>
            </div>
        </div>
    </div>
);

export default Waitlist;
