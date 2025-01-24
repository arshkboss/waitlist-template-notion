import React, { useState } from 'react';
import axios from 'axios';

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
        <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-100 to-gray-200">
            <header className="bg-blue-600 text-white p-6 text-center shadow-md">
                <h1 className="text-3xl font-bold">Join Our Waitlist</h1>
                <p className="mt-2 text-lg">Be the first to know when we launch!</p>
            </header>

            <main className="flex-grow flex flex-col items-center justify-center p-6">
                <form onSubmit={handleSubmit} className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="border border-gray-300 p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        required
                    />
                    <button
                        type="submit"
                        className="mt-4 bg-blue-600 text-white p-3 rounded-md w-full hover:bg-blue-700 transition duration-200"
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Join Waitlist'}
                    </button>
                    {error && <p className="text-red-500 mt-2">{error}</p>}
                </form>
            </main>

            <footer className="bg-blue-600 text-white p-4 text-center">
                <p>&copy; {new Date().getFullYear()} Your Brand Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Waitlist;
