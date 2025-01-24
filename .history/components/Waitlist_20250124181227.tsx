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
        <div className="flex flex-col min-h-screen">
            <header className="bg-gray-800 text-white p-4 text-center">
                <h1 className="text-2xl font-bold">Join Our Waitlist</h1>
            </header>

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
                        disabled={loading}
                    >
                        {loading ? 'Submitting...' : 'Join Waitlist'}
                    </button>
                    {error && <p className="text-red-500">{error}</p>}
                </form>
            </main>

            <footer className="bg-gray-800 text-white p-4 text-center">
                <p>&copy; {new Date().getFullYear()} Your Brand Name. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Waitlist;