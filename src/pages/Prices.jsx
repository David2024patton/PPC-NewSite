import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Bronze",
    subtitle: "Exterior-Only Protection",
    price: "35.95",
    description: "Monthly exterior treatment keep ants, spiders, wasps & more away.",
    includes: ["Spiders", "Ants", "Flies", "Wasps", "Stink Bugs", "Earwigs"],
    excludes: "Excludes: Fleas, Ticks, Bedbugs, WDO",
    perfectFor: "Budget-savvy homes & small businesses.",
    buttonText: "Choose Bronze",
    buttonClass: "bg-[#a1887f] hover:bg-[#8d776c] text-white",
    borderColor: "border-gray-300",
    link: "/checkout/bronze",
  },
  {
    name: "Silver",
    subtitle: "Interior + Exterior",
    price: "59.99",
    description: "Complete indoor + outdoor coverage ideal for families & pets.",
    includes: ["Spiders", "Ants", "Flies", "Mice", "Box Elder Bugs", "Wasps", "Earwigs"],
    excludes: "Excludes: Fleas, Ticks, Bedbugs, WDO",
    perfectFor: "Full indoor+outdoor peace of mind.",
    buttonText: "Choose Silver",
    buttonClass: "bg-[#78909c] hover:bg-[#607d8b] text-white",
    borderColor: "border-gray-300",
    link: "/checkout/silver",
  },
  {
    name: "Gold",
    subtitle: "Priority Interior & Exterior",
    price: "79.99",
    description: "Everything in Silver + fast response & seasonal deep checks.",
    includes: [
      "Spiders",
      "Ants",
      "Cockroaches",
      "Flies",
      "Mice",
      "Box Elder Bugs",
      "Wasps",
      "Stink Bugs",
      "Earwigs",
    ],
    bonus: ["Seasonal deep-dives", "24-hr callbacks & re-services"],
    excludes: "Excludes: WDO, Fleas & Ticks, Bedbugs",
    perfectFor: "Those who demand top-tier, year-round service.",
    buttonText: "Choose Gold",
    buttonClass: "bg-[#fbc02d] hover:bg-[#f9a825] text-black",
    borderColor: "border-yellow-400",
    mostPicked: true,
    link: "/checkout/gold",
  },
  {
    name: "Platinum",
    subtitle: "Full Coverage (Fleas+Ticks)",
    price: "95.94",
    description: "All-in one: Gold + Flea & Tick treatment, rodent stations & monitoring.",
    includes: [
      "Spiders",
      "Ants",
      "Cockroaches",
      "Flies",
      "Mice",
      "Box Elder Bugs",
      "Wasps",
      "Stink Bugs",
      "Earwigs",
      "Fleas",
      "Ticks",
      "Everything Else",
    ],
    bonus: ["Free rodent stations", "Free rodent monitoring"],
    perfectFor: "Large estates & busy homes needing unlimited coverage.",
    buttonText: "Choose Platinum",
    buttonClass: "bg-[#29b6f6] hover:bg-[#03a9f4] text-white",
    borderColor: "border-blue-400",
    link: "/checkout/platinum",
  },
];

const testimonials = [
  {
    quote:
      "Patriot Pest Control got rid of our ant invasion in just two visits. The tech was super professional, and I haven’t seen a single one since!",
    name: "Sarah L.",
    location: "Spokane, WA",
    rating: 5,
  },
  {
    quote:
      "Their Gold plan is worth every penny. The seasonal check-ups caught a wasp nest before it became a huge problem. Highly recommend!",
    name: "Mike R.",
    location: "Coeur d'Alene, ID",
    rating: 5,
  },
  {
    quote:
      "We have pets, so the Silver plan was perfect. The technicians were careful and used pet-safe products. Great peace of mind.",
    name: "Jessica P.",
    location: "Spokane Valley, WA",
    rating: 5,
  },
];

const Prices = () => {
  const { toast } = useToast();
  const [selected, setSelected] = useState(plans.map(() => false));
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const handleSelect = (index) => {
    const newSelected = [...selected];
    newSelected[index] = !newSelected[index];
    setSelected(newSelected);
  };

  const handleChoosePlan = () => {
    toast({
      title: "🚧 Feature In Progress",
      description:
        "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
    });
  };

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <Helmet>
        <title>Pricing Plans - Patriot Pest Control Co</title>
        <meta
          name="description"
          content="Choose the best pest control plan for your home or business. Compare our Bronze, Silver, Gold, and Platinum plans to find the perfect fit."
        />
      </Helmet>
      <div className="bg-[#1e3a8a] py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
              Protect Your Home! <br /> Choose Your Pest Plan
              
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-blue-200">
              Select your plan, schedule service, and say goodbye to unwanted guests.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-4 lg:gap-4 items-end">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative flex flex-col bg-white rounded-lg shadow-2xl p-6 border-2 ${plan.borderColor} ${plan.mostPicked ? "lg:scale-105 z-10" : ""}`}
              >
                {plan.mostPicked && (
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-yellow-400 text-black text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Most Picked
                    </div>
                  </div>
                )}
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold text-gray-900">{plan.name}</h2>
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={`compare-${index}`}
                      checked={selected[index]}
                      onCheckedChange={() => handleSelect(index)}
                    />
                    <Label
                      htmlFor={`compare-${index}`}
                      className="text-sm font-medium text-gray-500"
                    >
                      Compare
                    </Label>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mb-4">{plan.subtitle}</p>
                <p className="mb-4">
                  <span
                    className={`text-4xl font-extrabold ${plan.mostPicked ? "text-yellow-500" : "text-gray-900"}`}
                  >
                    ${plan.price}
                  </span>
                  <span className="text-lg font-medium text-gray-500">/mo</span>
                </p>
                <p className="text-gray-600 text-sm mb-6 min-h-[40px]">{plan.description}</p>

                <ul className="space-y-2 text-sm text-gray-700 mb-6">
                  {plan.includes.map((item) => (
                    <li key={item} className="flex items-center">
                      <span className="text-gray-500 mr-2">•</span> {item}
                    </li>
                  ))}
                </ul>

                {plan.bonus && (
                  <>
                    <p className="font-bold text-sm text-gray-800 mb-2">Bonus:</p>
                    <ul className="space-y-2 text-sm text-gray-700 mb-6">
                      {plan.bonus.map((item) => (
                        <li key={item} className="flex items-center">
                          <span className="text-gray-500 mr-2">•</span> {item}
                        </li>
                      ))}
                    </ul>
                  </>
                )}

                <div className="mt-auto">
                  {plan.excludes && (
                    <p className="text-xs text-red-600 font-semibold mb-2">{plan.excludes}</p>
                  )}
                  <p className="text-sm font-semibold text-gray-800 mb-6">
                    Perfect For:{" "}
                    <span className="font-normal text-gray-600">{plan.perfectFor}</span>
                  </p>
                  {plan.link ? (
                    <Button
                      asChild
                      className={`w-full font-bold text-base py-3 h-auto ${plan.buttonClass}`}
                    >
                      <Link to={plan.link}>{plan.buttonText}</Link>
                    </Button>
                  ) : (
                    <Button
                      onClick={handleChoosePlan}
                      className={`w-full font-bold text-base py-3 h-auto ${plan.buttonClass}`}
                    >
                      {plan.buttonText}
                    </Button>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button
              onClick={handleChoosePlan}
              variant="outline"
              className="bg-white/10 text-white hover:bg-white/20 border-white/30"
            >
              Compare Selected
            </Button>
          </div>
        </div>
      </div>

      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Customers Are Saying</h2>
          <div className="relative">
            <div className="overflow-hidden">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
                className="p-8"
              >
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-xl text-gray-700 italic mb-4">
                  “{testimonials[currentTestimonial].quote}”
                </blockquote>
                <p className="font-semibold text-gray-900">
                  – {testimonials[currentTestimonial].name},{" "}
                  {testimonials[currentTestimonial].location}
                </p>
              </motion.div>
            </div>
            <Button
              onClick={prevTestimonial}
              variant="ghost"
              size="icon"
              className="absolute left-0 top-1/2 -translate-y-1/2"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              onClick={nextTestimonial}
              variant="ghost"
              size="icon"
              className="absolute right-0 top-1/2 -translate-y-1/2"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          <div className="mt-12">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold"
            >
              <Link to="/checkout/platinum">Give Me The Platinum Plan!</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Prices;
