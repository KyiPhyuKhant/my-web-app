import React from "react";
import { EXPERIENCES } from "../data.jsx";

export default function Experiences() {
    const [expandedTopic, setExpandedTopic] = React.useState(null);

    function toggleAccordion(topic) {
        setExpandedTopic(expandedTopic === topic ? null : topic);
    }

    return (
        <div className="max-w-3xl mx-auto">
            <h2 className="text-xl font-bold mb-4">Experiences</h2>
            <div className="space-y-4">

                <div className="border border-gray-300 rounded-lg">
                    <button
                        onClick={() => toggleAccordion('water')}
                        className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                    >
                        <span className="text-lg font-semibold">Water</span>
                    </button>
                    {expandedTopic === 'water' && (
                        <div className="p-4 bg-white border-t border-gray-300">
                            <h3 className="text-lg font-bold">{EXPERIENCES.water.title}</h3>
                            <p className="my-2">{EXPERIENCES.water.description}</p>
                            <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto">
                                <code>{EXPERIENCES.water.code}</code>
                            </pre>
                        </div>
                    )}
                </div>


                <div className="border border-gray-300 rounded-lg">
                    <button
                        onClick={() => toggleAccordion('sugar')}
                        className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 focus:outline-none"
                    >
                        <span className="text-lg font-semibold">Sugar</span>
                    </button>
                    {expandedTopic === 'sugar' && (
                        <div className="p-4 bg-white border-t border-gray-300">
                            <h3 className="text-lg font-bold">{EXPERIENCES.sugar.title}</h3>
                            <p className="my-2">{EXPERIENCES.sugar.description}</p>
                            <pre className="bg-gray-100 p-2 rounded-md overflow-x-auto">
                                <code>{EXPERIENCES.sugar.code}</code>
                            </pre>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
