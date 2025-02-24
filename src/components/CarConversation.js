import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";

const conversationSteps = [
    { speaker: "ramesh", text: "हाय दिनेश भाई! कैसे हो?" },
    { speaker: "dinesh", text: "मैं अच्छा हूँ, तुम कैसे हो?" },
    { speaker: "ramesh", text: "दिनेश भाई, मेरी कार प्रॉब्लम कर रही है।" },
    { speaker: "dinesh", text: "अच्छा!" },
    { speaker: "ramesh", text: "कोई अच्छा मेकेनिक का नाम जो अच्छी रिपेयरिंग करता हो?" },
    { speaker: "dinesh", text: "ओके, नरेश भाई हैं, वो ठीक कर देंगे। मैं उनका नंबर देता हूँ।" },
    { speaker: "ramesh", text: "ओके, भेजो।" },
    { speaker: "dinesh", text: "9001323068", special: "calling" },
    { speaker: "ramesh", text: "नरेश भाई, मेरी कार प्रॉब्लम कर रही है।" },
    { speaker: "naresh", text: "क्या प्रॉब्लम कर रही है?" },
    { speaker: "ramesh", text: "पता नहीं!" },
    { speaker: "naresh", text: "कोई बात नहीं, आप कार लेके आ जाओ।" },
    { speaker: "naresh", text: "मैं रिपेयर कर दूँगा" },
    { speaker: "ramesh", text: "ओके!" },
    { speaker: "ramesh", text: "Thank you" }
];

const CarConversation = () => {
    const [currentStep, setCurrentStep] = useState(0);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        if (currentStep < conversationSteps.length) {
            const timeout = setTimeout(() => {
                setMessages([conversationSteps[currentStep]]);
                setCurrentStep(currentStep + 1);
            }, 3000);
            return () => clearTimeout(timeout);
        }
    }, [currentStep]);

    return (
        <div className="flex flex-col items-center justify-center min-h-[70px] bg-[#0f0f0f] text-white p-4">
            <div className="w-full max-w-sm bg-gray-900 p-4 rounded-lg shadow-lg relative">
                {messages.map((msg, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.9 }}
                        className={`flex items-center space-x-3 mb-3 ${msg.speaker === "ramesh" ? "justify-end" : "justify-start"
                            }`}
                    >
                        {msg.speaker !== "ramesh" && (
                            <div className="flex items-center space-x-2">
                                <FaUser className="text-blue-500 text-xl" />
                                <span className="text-sm text-gray-300">{msg.speaker}</span>
                            </div>
                        )}
                        <div className="bg-gray-800 text-sm p-3 rounded-2xl max-w-xs">
                            {msg.text}
                        </div>
                        {msg.speaker === "ramesh" && (
                            <div className="flex items-center space-x-2">
                                <span className="text-sm text-gray-300">{msg.speaker}</span>
                                <FaUser className="text-green-500 text-xl" />
                            </div>
                        )}
                    </motion.div>
                ))}
                {messages.length > 0 && messages[messages.length - 1].special === "calling" && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mt-3 text-yellow-400"
                    >
                        📞 कॉलिंग...
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default CarConversation;
