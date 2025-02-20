import { motion } from "framer-motion";
import { FaCar } from "react-icons/fa";
import { useState } from "react";

export default function CarAnimation() {
    const [isFast, setIsFast] = useState(false);

    return (
        <div className="absolute top-[86%] left-[30%] right-[30%] flex justify-center items-center">
            <motion.div
                className="text-gray-700 text-6xl"
                initial={{ scale: 0.5, x: -200 }}
                animate={{ scale: isFast ? 2 : 1, x: isFast ? 1000 : 0 }}
                transition={{ duration: isFast ? 1 : 3, ease: "easeInOut" }}
                onClick={() => setIsFast(true)}
                onAnimationComplete={() => setIsFast(false)}
            >
                <FaCar className="text-white" />
            </motion.div>
        </div>
    );
}



