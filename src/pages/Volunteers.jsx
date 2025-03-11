import React from 'react';
import NavBarr from '../nav/NavBarr';
import { User } from 'lucide-react';

const ElderCard = ({ name, location, language }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 w-full border border-gray-200 hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-start gap-4">
                <div className="bg-blue-100 p-3 rounded-full flex items-center justify-center">
                    <User className="text-slate-600 w-6 h-6" />
                </div>

                <div className="flex-1">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold text-gray-800 mb-2">{name}</h2>

                    <div className="space-y-1">
                        <div className="flex items-center text-sm text-gray-600">
                            <span className="font-medium mr-2">Location:</span> {location}
                        </div>
                        <div className="flex items-center text-sm text-gray-600">
                            <span className="font-medium mr-2">Language:</span> {language}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

const Volunteers = () => {
    const elderData = [
        {
            name: "Elder 1",
            location: "Pune, Maharashtra",
            language: "Marathi, Hindi"
        },
        {
            name: "Elder 4",
            location: "Delhi, New Delhi",
            language: "English, Hindi"
        },
        {
            name: "Elder 2",
            location: "Mumbai, Maharashtra",
            language: "Marathi, Hindi, English"
        },
        {
            name: "Elder 3",
            location: "Bengaluru, Karnataka",
            language: "Kannada, English, Hindi"
        },
        {
            name: "Elder 5",
            location: "Hyderabad, Telangana",
            language: "Telugu, Hindi, English"
        },
        {
            name: "Elder 6",
            location: "Chennai, Tamil Nadu",
            language: "Tamil, English"
        },
        {
            name: "Elder 7",
            location: "Kolkata, West Bengal",
            language: "Bengali, Hindi, English"
        },
        {
            name: "Elder 8",
            location: "Ahmedabad, Gujarat",
            language: "Gujarati, Hindi, English"
        },
        {
            name: "Elder 9",
            location: "Ahmedabad, Gujarat",
            language: "Gujarati, Hindi, English"
        }
    ];

    return (
        <div className="bg-[#F4EDE5] min-h-screen pb-16">
            <NavBarr />

            <div className="container mx-auto px-4 pt-8 md:pt-12">
                <div className="text-center mb-10">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-10">Welcome!</h1>

                    <div className="inline-block bg-white py-2 px-6 md:px-8 rounded-3xl border border-black shadow-sm ">
                        <h2 className=" text-xl md:text-2xl lg:text-3xl font-semibold">MATCH WITH AN ELDER</h2>
                    </div>
                </div>

                <div className="mt-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {elderData.map((elder, idx) => (
                            <ElderCard
                                key={idx}
                                name={elder.name}
                                location={elder.location}
                                language={elder.language}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Volunteers;