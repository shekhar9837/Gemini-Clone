import React from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { useState } from "react";

const API_KEY = 'AIzaSyAouH2CCoW5dCIuvlR0Zj1q-fYLbXG1AI8';
const genAI = new GoogleGenerativeAI(API_KEY);

const SearchBar = () => {
    const [input, setInput] = useState('');
    const [text, setText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const GenerateData = async () => {
        try {
            setIsLoading(true);
            // For text-only input, use the gemini-pro model
            const model = genAI.getGenerativeModel({ model: "gemini-pro" });
            const prompt = input;

            const result = await model.generateContent(prompt);
            const response = await result.response;
            const generatedText = await response.text();
            setText(generatedText);
        } catch (error) {
            console.error("Error generating content:", error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="text-start mb-6">
                <h1 className="text-3xl font-bold text-gray-800">Gemini AI Search</h1>
                <p className="text-gray-600">How can I assist you today?</p>
            </div>

            <div>
                <p>Gemini</p>
            {text && (
                    <textarea type="readonly"
                        value={text}
                        readOnly={true}
                        className="w-[80%] px-4 py-2 mt-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Generated Text"
                    />
                )}
            </div>

            <div className="w-[80%] flex absolute bottom-0">
            <form>
            <div className="flex-1 flex-col items-center bg-white rounded-lg shadow-md p-4">
        
                <input
                    type="text"
                    placeholder="Enter your query"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className=" px-4 py-2 mb-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                    onClick={GenerateData}
                    disabled={isLoading}
                    className={`px-4 py-2  text-white rounded-md  focus:outline-none ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`}
                >
                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </div>
            </form>
        </div>
        </div>
    );
};

export default SearchBar;
