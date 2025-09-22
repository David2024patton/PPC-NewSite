import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Trophy, Rocket } from "lucide-react";

const GoldFTUpsellModal = ({ onClose }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 300, damping: 30 } },
    exit: { opacity: 0, scale: 0.9 },
  };

  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <motion.div
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        variants={modalVariants}
        className="bg-white rounded-lg shadow-2xl max-w-md w-full p-6 text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">🏆 PLATINUM UPGRADE AVAILABLE! 🏆</h2>
        <p className="text-lg font-semibold text-gray-700">Same price, MORE value!</p>
        <p className="text-sm text-gray-500 my-2">You're paying $95.94/mo anyway...</p>

        <p className="text-gray-700 mb-2">
          Why not get our PLATINUM plan with priority service and maximum coverage?
        </p>
        <p className="text-lg font-bold text-red-500 mb-4">
          <span className="text-gray-400 line-through mr-2">$95.94/mo</span>
          $85.94/mo for first 2 months!
        </p>

        <div className="flex flex-col gap-4">
          <Button
            onClick={() =>
              handleRedirect(
                "https://link.fastpaydirect.com/payment-link/687f88c0eba11042c68dc7c2?couponCode=PLATINUM",
              )
            }
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-base py-4 whitespace-normal h-auto"
          >
            <Rocket className="h-4 w-4 mr-2" />
            YES! Upgrade to PLATINUM
            <Rocket className="h-4 w-4 ml-2" />
          </Button>
          <Button
            onClick={onClose}
            variant="outline"
            className="w-full text-base py-4 whitespace-normal h-auto"
          >
            No Thanks, Keep Gold + Flea & Tick
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default GoldFTUpsellModal;
