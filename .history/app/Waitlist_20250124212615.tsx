"use client";
import React, { useState } from 'react';
import axios from 'axios';
import { 
    Twitter, Github, 
    User, Mail, ArrowRight, Shield, 
    Globe, Clock, CreditCard 
} from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Icon } from '@iconify/react';

const NOTION_API_URL = 'https://api.notion.com/v1/pages'; // Notion API endpoint
const DATABASE_ID = 'your_database_id'; // Replace with your actual database ID
const NOTION_API_KEY = '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'; // Replace with your actual integration token



const FloatingSymbols = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large Symbols */}
        <div className="absolute text-white/[0.02] text-6xl font-bold rotate-12 left-[10%] top-[15%]">₹</div>
        <div className="absolute text-white/[0.03] text-5xl font-bold -rotate-15 right-[15%] top-[25%]">$</div>
        <div className="absolute text-white/[0.015] text-7xl font-bold rotate-45 left-[20%] top-[45%]">€</div>
        
        {/* Medium Symbols */}
        <div className="absolute text-white/[0.025] text-4xl font-bold -rotate-12 right-[25%] top-[40%]">£</div>
        <div className="absolute text-white/[0.02] text-5xl font-bold rotate-90 left-[30%] top-[60%]">¥</div>
        <div className="absolute text-white/[0.015] text-4xl font-bold rotate-180 right-[20%] top-[55%]">₹</div>
        
        <div className="absolute text-white/[0.025] text-4xl font-bold -rotate-12 right-[15%] top-[70%]">₡</div>
        <div className="absolute text-white/[0.02] text-5xl font-bold rotate-90 left-[10%] top-[30%]">₦</div>
        <div className="absolute text-white/[0.015] text-4xl font-bold rotate-180 right-[20%] top-[55%]">₭</div>
        {/* Small Symbols */}
        <div className="absolute text-white/[0.03] text-3xl font-bold rotate-45 left-[15%] bottom-[25%]">₽</div>
        <div className="absolute text-white/[0.02] text-3xl font-bold -rotate-45 right-[30%] bottom-[35%]">₸</div>
        <div className="absolute text-white/[0.025] text-2xl font-bold rotate-12 left-[25%] bottom-[20%]">₮</div>
        
        {/* Extra Small Symbols */}
        <div className="absolute text-white/[0.015] text-2xl font-bold -rotate-90 right-[10%] bottom-[15%]">₩</div>
        <div className="absolute text-white/[0.02] text-xl font-bold rotate-135 left-[35%] bottom-[30%]">₴</div>
        <div className="absolute text-white/[0.03] text-xl font-bold -rotate-135 right-[35%] bottom-[25%]">₫</div>
    </div>
);

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
            <div className="absolute inset-0 bg-gradient-to-br from-[#7CD2E3FF] via-[#12495a] to-[#023E8A]/50 animate-gradient-slow" />
            
            {/* Enhanced Vertical Fluted Glass Effect */}
            <div className="absolute right-0 top-0 w-1/3 h-full overflow-hidden">
                
                
               

                {/* Base glass layers */}
                
                <div className="absolute inset-0 backdrop-blur-xl bg-white/[0.01] transform -translate-x-4" />
            </div>

            {/* Add FloatingSymbols before the form */}
            <div className="absolute right-0 top-0 w-1/3 h-full">
                <FloatingSymbols />
            </div>

            {/* Main Content */}
            <div className="relative w-full flex flex-col md:flex-row min-h-screen">
                {/* Left Side Content */}
                <div className="w-full md:w-2/3 p-4 md:p-8 lg:p-16 flex flex-col justify-center">
                    <div className="mb-8 animate-fade-in-up">
                        <Badge variant="secondary" className="text-sm font-medium tracking-wider shadow-lg mb-4 hover:shadow-xl">
                            <Icon icon="cryptocurrency:usd" className="w-4 h-4 mr-2 animate-pulse" />
                            PayFlow | Global Payment Solutions
                        </Badge>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 
                                     tracking-tight animate-fade-in-up delay-100">
                            Immerse Yourself in
                            <br />
                            <span className="bg-gradient-to-r from-[#c8eff7] via-[#0096C7] to-[#023E8A] 
                                           text-transparent bg-clip-text animate-gradient">
                                Refracted Payments
                            </span>
                        </h1>
                        <p className="text-[#90E0EF]/80 text-base sm:text-lg md:text-xl leading-relaxed 
                                     max-w-xl animate-fade-in-up delay-200">
                            Experience the future of payments. Break through traditional barriers with our 
                            revolutionary cross-border payment platform.
                        </p>
                    </div>

                    {/* Feature Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12 max-w-4xl">
                        <FeatureCard 
                            icon={<Globe className="w-6 h-6 text-[#48CAE4] animate-breathe" />}
                            title="Global Coverage"
                            description="160+ countries supported"
                            delay="300"
                        />
                        <FeatureCard 
                            icon={<Shield className="w-6 h-6 text-[#48CAE4] animate-breathe" />}
                            title="Bank-Grade Security"
                            description="End-to-end encryption"
                            delay="400"
                        />
                        <FeatureCard 
                            icon={<Clock className="w-6 h-6 text-[#48CAE4] animate-breathe" />}
                            title="Instant Transfers"
                            description="24/7 real-time processing"
                            delay="500"
                        />
                        <FeatureCard 
                            icon={<CreditCard className="w-6 h-6 text-[#48CAE4] animate-breathe" />}
                            title="Low Fees"
                            description="Up to 80% cheaper than banks"
                            delay="600"
                        />
                    </div>
                </div>

                {/* Right Side Form */}
                <div className="w-full md:w-1/3 p-4 md:p-8 lg:p-16 flex items-center justify-center relative">
                    <div className="w-full max-w-md animate-fade-in-up delay-500 relative z-10">
                        
                        <form 
                            onSubmit={handleSubmit} 
                            className="relative space-y-6 rounded-2xl p-6 md:p-8 shadow-md
                                     bg-white/[0.02] transition-all"
                        >
                            <div className="space-y-4">
                            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
                            Join the Waitlist
                        </h2>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/80" />
                                    <input
                                        type="text"
                                        placeholder="Full name"
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 
                                                 bg-white/[0.03] text-white placeholder-white/80 
                                                 focus:outline-none focus:ring-2 focus:ring-[#48CAE4]/50 
                                                 transition-all hover:border-white/20"
                                    />
                                </div>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/80" />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 
                                                 bg-white/[0.03] text-white placeholder-white/80 
                                                 focus:outline-none focus:ring-2 focus:ring-[#48CAE4]/50 
                                                 transition-all hover:border-white/20"
                                        required
                                    />
                                </div>
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full py-3 px-4 bg-white/10 text-white rounded-xl font-medium 
                                         hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-[#48CAE4]/50
                                         transform transition-all active:scale-[0.98] disabled:opacity-50 
                                         disabled:cursor-not-allowed group relative overflow-hidden"
                            >
                                {loading ? (
                                    <span className="flex items-center justify-center">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" 
                                             xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" 
                                                    stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" 
                                                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                        </svg>
                                        Processing...
                                    </span>
                                ) : (
                                    <span className="flex items-center justify-center group">
                                        Join Waitlist
                                        <ArrowRight className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
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

interface FeatureCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    delay: string;
}

// Update the FeatureCard component with proper typing
const FeatureCard = ({ icon, title, description, delay }: FeatureCardProps) => (
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
