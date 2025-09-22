import React, { useState /*, useEffect*/ } from "react";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Rocket, Star, Trophy, Gift, X } from "lucide-react";
import { Link } from "react-router-dom";

const ConfettiPiece = (
  {
    /*initialX, initialY, rotation, color*/
  },
) => {
  const duration = Math.random() * 3 + 4;
  const xEnd = Math.random() * 100 - 50;

  return (
    <motion.div
      style={{
        position: "absolute",
        left: `${initialX}%`,
        top: `${initialY}%`,
        backgroundColor: color,
        width: "10px",
        height: "10px",
        opacity: 0,
      }}
      animate={{
        top: "110%",
        x: `${xEnd}px`,
        opacity: [0, 1, 1, 0],
        rotate: rotation + 360,
      }}
      transition={{
        duration: duration,
        ease: "linear",
        repeat: Infinity,
        delay: Math.random() * 5,
      }}
    />
  );
};

const Confetti = () => {
  const colors = ["#fde047", "#f97316", "#22c55e", "#3b82f6", "#ec4899"];
  const pieces = Array.from({ length: 50 }).map((_, i) => ({
    id: i,
    initialX: Math.random() * 100,
    initialY: -10 - Math.random() * 20,
    rotation: Math.random() * 360,
    color: colors[i % colors.length],
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {pieces.map((p) => (
        <ConfettiPiece key={p.id} {...p} />
      ))}
    </div>
  );
};

const ReferralModal = (
  {
    /*onClose*/
  },
) => {
  const handleRedirect = (url) => {
    window.location.href = url;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-lg shadow-2xl max-w-lg w-full p-8 text-center relative"
        onClick={(e) => e.stopPropagation()}
      >
        <Button variant="ghost" size="icon" className="absolute top-2 right-2" onClick={onClose}>
          <X className="h-5 w-5" />
        </Button>
        <Gift className="h-16 w-16 mx-auto text-yellow-500 mb-4" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Get FREE Service with Referrals!</h2>
        <p className="text-lg text-gray-600 mb-6">
          Love our service? Share it with friends and get rewarded! Learn more on our{" "}
          <Link to="/referral" className="text-blue-600 hover:underline font-bold">
            Referral Page
          </Link>
          .
        </p>
        <div className="bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-4 rounded-md mb-8">
          <p className="font-bold text-xl">Refer 4 friends and get a YEAR of service FREE!</p>
          <p className="text-sm">(That's 4 quarterly services on us!)</p>
        </div>
        <Button
          onClick={() =>
            handleRedirect("https://link.fastpaydirect.com/payment-link/687f88c0eba11042c68dc7c2")
          }
          className="w-full bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-4"
        >
          Continue to Secure Checkout
        </Button>
      </motion.div>
    </motion.div>
  );
};

const PlatinumCheckout = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>Platinum Plan Checkout - Patriot Pest Control Co</title>
        <meta
          name="description"
          content="You've chosen the best! Secure your Platinum Pest Control Plan now for complete peace of mind."
        />
      </Helmet>
      <div className="relative min-h-screen w-full bg-[#1e3a8a] flex flex-col items-center justify-center p-4 overflow-hidden">
        <Confetti />

        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
          className="relative z-10 mb-8"
        >
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black font-bold text-lg sm:text-2xl px-4 py-3 sm:px-8 sm:py-4 rounded-full shadow-2xl flex items-center justify-center gap-2 sm:gap-4 text-center"
          >
            <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-amber-700" />
            <span className="leading-tight">🎉 CONGRATULATIONS! YOU CHOSE THE BEST PLAN! 🎉</span>
            <Trophy className="h-6 w-6 sm:h-8 sm:w-8 text-amber-700" />
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 120, delay: 0.5 }}
          className="relative bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center z-10"
        >
          <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-500 text-white text-sm font-bold px-4 py-1 rounded-full shadow-lg">
            🏆 PREMIUM CHOICE 🏆
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mt-4">
            You've Chosen the PLATINUM Plan!
          </h1>
          <p className="text-gray-600 mb-6">The Best of the Best - Full Coverage Protection!</p>

          <div className="bg-blue-500 text-white rounded-lg p-6 mb-6 text-left">
            <h2 className="text-2xl font-bold">Platinum - Full Coverage</h2>
            <p className="text-lg opacity-90 mb-4">$95.94/mo</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" /> Interior + Exterior
                Protection
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" /> Flea & Tick Treatment
                Included
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" /> Priority Service
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-green-300" /> Maximum Coverage
              </li>
            </ul>
          </div>

          <p className="text-2xl font-bold text-gray-800 mb-6">
            Total: <span className="text-blue-600">$95.94/mo</span>
          </p>

          <div className="relative">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-yellow-400"
                style={{
                  top: `${Math.sin(i * ((Math.PI * 2) / 5)) * 50 + 50}%`,
                  left: `${Math.cos(i * ((Math.PI * 2) / 5)) * 50 + 50}%`,
                  transform: "translate(-50%, -50%)",
                }}
                animate={{
                  scale: [1, 1.5, 1],
                  opacity: [0.5, 1, 0.5],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 3 + i,
                  repeat: Infinity,
                  ease: "linear",
                }}
              >
                <Star className="h-6 w-6 fill-current" />
              </motion.div>
            ))}
            <Button
              onClick={() => setShowModal(true)}
              size="lg"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xl py-8 h-auto relative z-10"
            >
              <Rocket className="h-6 w-6 mr-3 animate-pulse" />
              Secure My Platinum Plan
              <Rocket className="h-6 w-6 ml-3 animate-pulse" />
            </Button>
          </div>
        </motion.div>
      </div>
      <AnimatePresence>
        {showModal && <ReferralModal onClose={() => setShowModal(false)} />}
      </AnimatePresence>
    </>
  );
};

export default PlatinumCheckout;
