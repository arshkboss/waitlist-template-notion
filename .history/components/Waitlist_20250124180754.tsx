"use client";
import React, { useState } from 'react';

const Waitlist = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle the email submission logic here
        console.log('Email submitted:', email);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Header */}
            <header className="bg-gray-800 text-white p-4 text-center">
                <h1 className="text-2xl font-bold">Join Our Waitlist</h1>
            </header>

            {/* Main Content */}
            <main className="flex-grow flex flex-col items-center justify-center p-4">
                <form onSubmit={handleSubmit} className="w-full max-w-md">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 p-2 w-full rounded-md"
                        required
                    />
                    <button
                        type="submit"
                        className="mt-4 bg-blue-600 text-white p-2 rounded-md w-full"
                    >
                        Join Waitlist
                    </button>
                </form>
            </main>

            {/* Footer */}
            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; {new Date().getFullYear()} Your Brand Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Waitlist; 