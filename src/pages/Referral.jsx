import React from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Gift, Users, Award, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const Referral = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Referral Program - Patriot Pest Control Co</title>
        <meta
          name="description"
          content="Refer friends to Patriot Pest Control Co and earn free services! Get a free service call for every referral and a whole year free for four referrals."
        />
      </Helmet>
      <div className="bg-gray-50 py-12 sm:py-20">
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Gift className="mx-auto h-16 w-16 text-blue-600" />
            <h1 className="mt-4 text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Get FREE Service with Referrals!
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
              Love our service? Share it with friends and get rewarded!
            </p>
          </motion.div>

          <motion.div className="mt-12 grid gap-8 md:grid-cols-2" variants={containerVariants}>
            <motion.div
              className="bg-white rounded-2xl shadow-xl p-8 flex flex-col items-center"
              variants={itemVariants}
            >
              <Users className="h-12 w-12 text-green-500" />
              <h2 className="mt-4 text-2xl font-bold text-gray-900">
                Referral Rewards
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Get a FREE service call when your referral signs up for the same plan as yours or one
                level below. If they choose a plan two or more levels below (e.g., Platinum referring
                Bronze), enjoy 50% off your next service!
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-2xl shadow-xl p-8 flex flex-col items-center"
              variants={itemVariants}
            >
              <Award className="h-12 w-12 text-yellow-300" />
              <h2 className="mt-4 text-2xl font-bold">A YEAR of Service FREE!</h2>
              <p className="mt-2 text-lg opacity-90">
                Refer 4 friends who sign up, and your next full year of pest control is completely
                free!
              </p>
              <p className="mt-2 font-semibold text-yellow-300">(That's 4 quarterly services on us!)</p>
            </motion.div>
          </motion.div>

          <motion.div className="mt-12" variants={itemVariants}>
            <h2 className="text-3xl font-bold text-gray-900">How It Works</h2>
            <div className="mt-8 max-w-4xl mx-auto grid gap-8 sm:grid-cols-3">
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  1
                </div>
                <p className="mt-4 text-lg font-medium text-gray-700">
                  Tell your friends about us.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  2
                </div>
                <p className="mt-4 text-lg font-medium text-gray-700">
                  Make sure they mention your name when they sign up.
                </p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center justify-center h-12 w-12 rounded-full bg-blue-100 text-blue-600 font-bold text-xl">
                  3
                </div>
                <p className="mt-4 text-lg font-medium text-gray-700">
                  We'll credit your account with a free service!
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div className="mt-16" variants={itemVariants}>
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg">
              <Star className="mr-2 h-5 w-5" />
              Start Referring & Saving Today!
            </Button>
            <p className="mt-4 text-sm text-gray-500">
              Terms and conditions apply. Referred customer must complete their first paid service.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
};

export default Referral;
