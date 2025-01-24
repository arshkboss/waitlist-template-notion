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
        <div className="relative min-h-screen overflow-hidden bg-[var(--color-bg-primary)]">
            {/* Morphing gradient blobs */}
            <div className="absolute top-0 -left-20 w-[600px] h-[600px] bg-[var(--color-primary-200)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-morph"></div>
            <div className="absolute top-40 -right-20 w-[600px] h-[600px] bg-[var(--color-primary-300)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-morph animation-delay-2000"></div>
            <div className="absolute -bottom-40 left-40 w-[600px] h-[600px] bg-[var(--color-primary-400)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-morph animation-delay-4000"></div>
            <div className="absolute bottom-0 right-20 w-[600px] h-[600px] bg-[var(--color-primary-500)] rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-morph animation-delay-6000"></div>

            <div className="relative flex flex-col min-h-screen">
                <header className="justify-center items-center pt-16 px-4">
                    <p className="text-sm font-medium text-[var(--color-text-secondary)] mb-4 tracking-wider uppercase text-center">
                        PayFlow | Global Payment Solutions
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold text-[var(--color-text-primary)] mb-6 tracking-tight text-center">
                        Seamless International
                        <br />
                        <span className="bg-gradient-to-r from-[var(--color-accent-100)] via-[var(--color-accent-200)] to-[var(--color-accent-300)] text-transparent bg-clip-text">
                            Payment Solutions
                        </span>
                    </h1>
                    <p className="max-w-2xl mx-auto text-[var(--color-text-secondary)] text-lg md:text-xl leading-relaxed text-center">
                        Break down payment barriers with our revolutionary cross-border payment platform. 
                        Fast, secure, and cost-effective transactions for businesses worldwide.
                    </p>
                </header>

                <main className="flex-grow flex flex-col items-center justify-center p-6">
                    <div className="w-full max-w-md">
                        <div className="relative">
                            <div className="absolute inset-0 backdrop-blur-sm rounded-2xl"></div>
                            
                            <form 
                                onSubmit={handleSubmit} 
                                className="relative space-y-4 bg-white/90 rounded-2xl p-8 shadow-lg backdrop-blur-md transform transition-all hover:scale-[1.02]"
                            >
                                <div className="space-y-2">
                                    <input
                                        type="text"
                                        placeholder="Full name..."
                                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-200)] transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <input
                                        type="email"
                                        placeholder="Business email..."
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full px-4 py-3 rounded-lg border border-[var(--color-border)] bg-white text-[var(--color-text-primary)] placeholder-[var(--color-text-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-200)] transition-all"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full py-3 px-4 bg-gradient-to-r from-[var(--color-primary-200)] to-[var(--color-primary-500)] text-white rounded-lg font-medium 
                                             hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--color-primary-200)]
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
                                    ) : 'Get Early Access →'}
                                </button>
                                {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                            </form>

                            {/* Feature highlights */}
                            <div className="mt-8 grid grid-cols-2 gap-4 text-center">
                                <div className="p-4 rounded-lg bg-white/80 backdrop-blur-sm">
                                    <h3 className="font-semibold mb-1 text-[var(--color-text-primary)]">Global Coverage</h3>
                                    <p className="text-sm text-[var(--color-text-muted)]">160+ countries supported</p>
                                </div>
                                <div className="p-4 rounded-lg bg-white/80 backdrop-blur-sm">
                                    <h3 className="font-semibold mb-1 text-[var(--color-text-primary)]">Low Fees</h3>
                                    <p className="text-sm text-[var(--color-text-muted)]">Up to 80% cheaper than banks</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="py-8 text-center">
                    <div className="flex justify-center space-x-6 mb-4">
                        <a href="https://twitter.com/payflow" target="_blank" rel="noopener noreferrer" 
                           className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-200)] transition-colors">
                            <Twitter className="w-6 h-6" />
                        </a>
                        <a href="https://github.com/payflow" target="_blank" rel="noopener noreferrer"
                           className="text-[var(--color-text-secondary)] hover:text-[var(--color-primary-200)] transition-colors">
                            <Github className="w-6 h-6" />
                        </a>
                    </div>
                    <p className="text-sm text-[var(--color-text-muted)]">
                        &copy; {new Date().getFullYear()} PayFlow. All rights reserved.
                    </p>
                </footer>
            </div>
        </div>
    );
};

export default Waitlist;
