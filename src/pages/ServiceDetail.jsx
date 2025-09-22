import React from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Shield } from "lucide-react";

const ServiceDetail = () => {
  const { serviceSlug } = useParams();

  const serviceData = {
    "residential-pest-control": {
      title: "Residential Pest Control in Spokane, WA",
      description:
        "Keep your home and family safe with our comprehensive residential pest control services. We offer effective, pet-safe, and minimally invasive solutions for your peace of mind.",
      icon: "🏠",
      hero: "Your Trusted Professionals for a Pest-Free Home Environment",
      detailedDescription:
        "Patriot Pest Control Co provides effective, reliable pest management for households throughout the Spokane area. Our highly trained staff, dedication to detail, and professional-grade equipment make us one of the most trusted exterminators for local families. We approach every home with a well-planned strategy, knowledgeable technicians, and flexible scheduling to fit your life.",
      features: [
        "Monthly, Bi-Monthly, and Quarterly Plans",
        "Safe for Children and Pets",
        "Complete Interior and Exterior Protection",
        "Customized Treatment Strategies",
        "Emergency Service Available",
        "100% Satisfaction Guarantee",
      ],
      benefits: [
        "Protect your family's health from pest-borne illnesses.",
        "Prevent costly property damage from infestations.",
        "Maintain a clean, comfortable, and safe living space.",
        "Enjoy year-round peace of mind.",
      ],
      process: [
        "A thorough inspection of your home to identify current and potential pest issues.",
        "Identification of pest entry points and conducive conditions.",
        "Development of a customized treatment and prevention plan.",
        "Safe, targeted application of treatments by certified professionals.",
        "Regular monitoring and maintenance to ensure long-term protection.",
      ],
      pests: [
        "Ants",
        "Spiders",
        "Roaches",
        "Wasps",
        "Silverfish",
        "Earwigs",
        "Millipedes",
        "Centipedes",
      ],
    },
    "commercial-pest-control": {
      title: "Commercial Pest Control for Spokane Businesses",
      description:
        "Protect your business, reputation, and bottom line with our professional commercial pest management solutions, tailored to your industry's specific needs.",
      icon: "🏢",
      hero: "Reliable Pest Management to Keep Your Business Compliant and Pest-Free",
      detailedDescription:
        "A single pest can damage your inventory, harm your reputation, and lead to costly shutdowns. Patriot Pest Control Co offers specialized Integrated Pest Management (IPM) programs for businesses across Spokane, WA. We help you maintain a clean, safe environment for your employees and customers while ensuring you meet all health and safety regulations.",
      features: [
        "Customized Integrated Pest Management (IPM) Programs",
        "Solutions for Restaurants, Offices, Warehouses, and more",
        "Detailed Digital Reporting for Audits and Compliance",
        "Flexible Scheduling (including after-hours service)",
        "Discreet and Professional Technicians",
        "Proactive Prevention and Monitoring",
      ],
      benefits: [
        "Protect your brand reputation and customer trust.",
        "Ensure compliance with local and federal health codes.",
        "Prevent inventory loss and property damage.",
        "Create a safer, healthier workplace for employees.",
      ],
      process: [
        "A comprehensive site assessment to identify risks and vulnerabilities.",
        "Development of a customized IPM program tailored to your industry.",
        "Strategic implementation of control measures and monitoring devices.",
        "Thorough documentation and reporting for compliance.",
        "Regular service and program optimization.",
      ],
      pests: ["Rodents", "Flies", "Cockroaches", "Ants", "Stored Product Pests", "Birds"],
    },
    "termite-control": {
      title: "Termite Treatment and Control in Spokane, WA",
      description:
        "Effective, pet-safe, and minimally invasive extermination of termites by your trusted local professionals. Protect your property from costly structural damage.",
      icon: "🐛",
      hero: "Advanced Termite Extermination to Safeguard Your Biggest Investment",
      detailedDescription:
        "Patriot Pest Control Co provides effective treatment and management for termites for real estate transactions and for households throughout the Spokane area. Subterranean termites, the most common type in our region, live in underground colonies and build mud tubes to access food sources—like the wood in your home. Without early detection, the damage can be extensive. Our highly trained staff uses the right equipment and a detail-oriented approach to eliminate termite threats efficiently.",
      features: [
        "Advanced Termite Detection Technology (e.g., Termatrac)",
        "Industry-Leading Liquid Treatments (e.g., Termidor)",
        "Strategic Termite Baiting Systems",
        "Pre-Construction and New Home Treatments",
        "Wood-Destroying Insect Reports (WDIR) for Real Estate",
        "Renewable Long-Term Warranties",
      ],
      benefits: [
        "Prevent thousands of dollars in structural damage.",
        "Protect your property's value and structural integrity.",
        "Gain peace of mind with long-term protection.",
        "Fulfill requirements for real estate transactions.",
      ],
      process: [
        "A comprehensive inspection of your property for signs of termites.",
        "Identification of termite species and extent of infestation.",
        "Selection of the most effective treatment method for your situation.",
        "Professional, targeted application of control products.",
        "Optional ongoing monitoring and warranty renewals.",
      ],
      pests: ["Subterranean Termites", "Dampwood Termites", "Carpenter Ants"],
    },
    "rodent-control": {
      title: "Rodent Control for Rats & Mice in Spokane",
      description:
        "Complete and humane elimination of rats and mice from your property. We don't just set traps—we find the source and prevent them from coming back.",
      icon: "🐭",
      hero: "Effective Rodent Removal, Exclusion, and Decontamination Services",
      detailedDescription:
        "Rats and mice are not just a nuisance; they pose significant health risks and can cause serious damage by gnawing on wires, insulation, and structural elements. Patriot Pest Control Co specializes in a comprehensive approach to rodent control. We identify and seal entry points, eliminate the current population, and provide sanitation services to clean up hazardous droppings and nesting materials, ensuring your property is safe and secure.",
      features: [
        "Humane and Effective Trapping Methods",
        "Thorough Entry Point Identification and Sealing (Exclusion)",
        "Attic and Crawlspace Cleanup and Decontamination",
        "Ongoing Monitoring and Bait Station Maintenance",
        "Damage Assessment and Prevention Advice",
        "Solutions for both Rats and Mice",
      ],
      benefits: [
        "Eliminate health risks from rodent-borne diseases.",
        "Prevent fire hazards from gnawed electrical wires.",
        "Stop contamination of food and surfaces.",
        "Secure your property against future invasions.",
      ],
      process: [
        "A detailed inspection to identify rodent type, activity, and entry points.",
        "Creation of a customized trapping and exclusion strategy.",
        "Strategic placement of traps and control devices.",
        "Professional sealing of all identified entry points.",
        "Cleanup, sanitation, and follow-up to ensure complete removal.",
      ],
      pests: ["House Mice", "Norway Rats", "Roof Rats", "Voles"],
    },
    "bed-bug-control": {
      title: "Bed Bug Treatment & Extermination in Spokane",
      description:
        "Get rid of bed bugs fast with our discreet and highly effective treatment options. We eliminate infestations at all life stages, ensuring you can sleep soundly again.",
      icon: "🛏️",
      hero: "Guaranteed Bed Bug Elimination to Restore Your Home and Peace of Mind",
      detailedDescription:
        "Bed bugs are notoriously difficult to eliminate. These tiny, resilient pests can hide in the smallest cracks and crevices, emerging at night to feed. Over-the-counter solutions often fail, allowing the infestation to grow. Patriot Pest Control Co uses professional-grade heat treatments and targeted applications to eradicate bed bugs from your home or business, including eggs, nymphs, and adults. Our process is thorough, discreet, and designed for maximum effectiveness.",
      features: [
        "High-Temperature Heat Treatments (Aprehend®)",
        "Targeted Conventional Treatment Programs",
        "Canine Bed Bug Inspections for Accurate Detection",
        "Detailed Client Preparation Checklists",
        "Follow-Up Inspections to Guarantee Elimination",
        "Discreet Service with Unmarked Vehicles",
      ],
      benefits: [
        "Complete elimination of all bed bug life stages, including eggs.",
        "Restore your ability to sleep comfortably and without anxiety.",
        "Prevent the spread of bed bugs to other areas of your property.",
        "Receive professional guidance and a proven, effective solution.",
      ],
      process: [
        "A thorough inspection to confirm the presence and scope of the infestation.",
        "Selection of the best treatment method (heat, conventional, or hybrid).",
        "Providing a clear preparation guide for the client.",
        "Execution of the treatment by certified bed bug specialists.",
        "Post-treatment inspection and follow-up to ensure 100% eradication.",
      ],
      pests: ["Bed Bugs (Cimex lectularius)"],
    },
    "mosquito-control": {
      title: "Mosquito Control Services in Spokane, WA",
      description:
        "Take back your yard! Our seasonal mosquito reduction services significantly reduce mosquito populations, allowing you to enjoy your outdoor spaces all season long.",
      icon: "🦟",
      hero: "Effective Mosquito Reduction for a More Enjoyable Outdoor Experience",
      detailedDescription:
        "Mosquitoes can ruin outdoor activities and pose health risks by transmitting diseases. Patriot Pest Control Co offers a comprehensive mosquito control program designed to target these pests where they live and breed. Our trained technicians apply a fine mist to foliage, bushes, and other common resting areas, creating a protective barrier that lasts for weeks. We also identify and treat standing water to stop mosquito larvae from developing.",
      features: [
        "Monthly Barrier Spray Programs (April-September)",
        "Identification and Treatment of Breeding Sites",
        "Special Event Sprays for Parties and Weddings",
        "All-Natural and Eco-Friendly Options Available",
        "Reduces Mosquitoes, Ticks, and Fleas",
        "Safe for Family and Pets Once Dry",
      ],
      benefits: [
        "Enjoy your deck, patio, and yard without constant swatting.",
        "Reduce the risk of mosquito-borne illnesses.",
        "Protect your family and pets from itchy bites.",
        "Make outdoor gatherings more pleasant for everyone.",
      ],
      process: [
        "A property assessment to identify mosquito resting and breeding areas.",
        "Application of a barrier spray to foliage and mosquito hotspots.",
        "Treatment of any standing water with larvicides.",
        "Recommendations for reducing breeding sites on your property.",
        "Recurring monthly visits to maintain the protective barrier.",
      ],
      pests: ["Aedes Mosquitoes", "Culex Mosquitoes", "Anopheles Mosquitoes"],
    },
    "ant-control": {
      title: "Ant Control & Extermination in Spokane",
      description:
        "Eliminate persistent ant trails and entire colonies with our targeted and effective ant control solutions, designed for common Spokane ant species.",
      icon: "🐜",
      hero: "Stop Ant Invasions at the Source for Long-Lasting Relief",
      detailedDescription:
        "Seeing a few ants is often a sign of a much larger colony hidden in walls, under floors, or in your yard. Patriot Pest Control Co specializes in identifying the specific ant species invading your home—like Carpenter Ants, Odorous House Ants, or Pavement Ants—and using advanced, targeted treatments to eliminate the entire colony. We go beyond temporary sprays to provide a comprehensive solution that stops them from coming back.",
      features: [
        "Identification of Specific Ant Species",
        "Advanced Non-Repellent Sprays and Baits",
        "Targeted Carpenter Ant Treatments",
        "Perimeter Defense to Stop Ants Before They Enter",
        "Interior and Exterior Treatment Programs",
        "Guidance on Preventing Future Infestations",
      ],
      benefits: [
        "Eliminate the entire colony, not just the ants you see.",
        "Prevent food contamination in your kitchen and pantry.",
        "Protect your home from wood damage caused by Carpenter Ants.",
        "Enjoy a clean, ant-free living environment.",
      ],
      process: [
        "A thorough inspection to locate nests, trails, and entry points.",
        "Identification of the ant species to determine the best treatment.",
        "Application of targeted baits and/or non-repellent insecticides.",
        "Creation of a protective barrier around your home's exterior.",
        "Follow-up service to ensure complete colony elimination.",
      ],
      pests: ["Carpenter Ants", "Odorous House Ants", "Pavement Ants", "Moisture Ants"],
    },
    "fly-control": {
      title: "Fly Control for Homes & Businesses in Spokane",
      description:
        "Effective solutions to control and eliminate nuisance flies and other flying pests from your property, targeting them at the source.",
      icon: "🪰",
      hero: "Reduce Fly Populations for a Cleaner, Healthier Environment",
      detailedDescription:
        "Flies are not only annoying but also carriers of numerous diseases, posing a health risk to homes and a major compliance issue for businesses. Patriot Pest Control Co offers comprehensive fly control programs that focus on sanitation, exclusion, and targeted treatments. We identify breeding sources and implement strategies to break the fly life cycle, providing both immediate relief and long-term prevention.",
      features: [
        "Identification of Fly Species and Breeding Sources",
        "Sanitation and Environmental Modification Consulting",
        "Installation of Insect Light Traps (ILTs)",
        "Targeted Baiting and Residual Treatments",
        "Drain and Grime Cleaning Services",
        "Exclusion Methods to Prevent Entry",
      ],
      benefits: [
        "Create a more hygienic environment for family, customers, and staff.",
        "Reduce the risk of food contamination and disease transmission.",
        "Improve customer experience and protect your business reputation.",
        "Enjoy your indoor and outdoor spaces without nuisance flies.",
      ],
      process: [
        "A detailed inspection to identify fly species and locate breeding sites.",
        "Recommendations for sanitation and structural improvements.",
        "Implementation of a multi-faceted control plan (traps, baits, treatments).",
        "Ongoing monitoring and maintenance of control devices.",
        "Regular program adjustments to ensure continued effectiveness.",
      ],
      pests: ["House Flies", "Fruit Flies", "Drain Flies", "Cluster Flies", "Blow Flies"],
    },
    "cockroach-control": {
      title: "Cockroach Extermination in Spokane, WA",
      description:
        "Fast, thorough, and discreet cockroach extermination for a clean, healthy, and roach-free environment. We eliminate infestations of all sizes.",
      icon: "🦗",
      hero: "Guaranteed Cockroach Elimination for Your Home or Business",
      detailedDescription:
        "Cockroaches are a major threat to health and safety, spreading bacteria, triggering allergies, and creating an unsanitary environment. They are also incredibly resilient and reproduce quickly, making professional intervention essential. Patriot Pest Control Co uses a combination of advanced baits, insect growth regulators (IGRs), and targeted applications to eliminate cockroach populations and prevent their return. Our methods are safe, effective, and designed for complete eradication.",
      features: [
        "Treatment for German, American, and other common roaches",
        "Advanced Cockroach Gel Baits",
        "Use of Insect Growth Regulators (IGRs) to stop reproduction",
        "Void and Crevice Treatments to target hiding spots",
        "Sanitation and Exclusion Consulting",
        "Guaranteed results with follow-up services",
      ],
      benefits: [
        "Protect your family or customers from cockroach-spread diseases.",
        "Eliminate a major trigger for asthma and allergies.",
        "Prevent food contamination and maintain a sanitary space.",
        "Restore your peace of mind and protect your reputation.",
      ],
      process: [
        "A comprehensive inspection to find all cockroach harborage areas.",
        "A strategic treatment plan using a combination of methods.",
        "Precise application of baits and IGRs in key locations.",
        "Clear communication on sanitation and prevention measures.",
        "Scheduled follow-up visits to monitor and ensure total elimination.",
      ],
      pests: [
        "German Cockroaches",
        "American Cockroaches",
        "Oriental Cockroaches",
        "Brown-banded Cockroaches",
      ],
    },
    "flea-control": {
      title: "Flea Control & Removal Services in Spokane",
      description:
        "Eliminate flea infestations from your home and yard, protecting your pets and family from itchy, painful bites with our comprehensive treatment.",
      icon: "🐾",
      hero: "Complete Flea Eradication for Your Pets and Your Home",
      detailedDescription:
        "A flea problem can escalate quickly. A few fleas brought in by a pet can lead to thousands in a matter of weeks, infesting carpets, furniture, and pet bedding. Patriot Pest Control Co provides a multi-step treatment process that targets fleas at every stage of their life cycle. We use a combination of adulticides to kill active fleas and insect growth regulators (IGRs) to prevent eggs and larvae from maturing, effectively breaking the cycle and ending the infestation.",
      features: [
        "Interior treatments for carpets, floors, and furniture",
        "Exterior yard treatments to target flea hotspots",
        "Use of fast-acting adulticides for immediate relief",
        "Application of long-lasting Insect Growth Regulators (IGRs)",
        "Pet-safe treatment options",
        "Detailed preparation guide for homeowners",
      ],
      benefits: [
        "Provide immediate relief for your pets from constant biting.",
        "Protect your family from flea bites and potential diseases.",
        "Eliminate the entire flea life cycle to prevent re-infestation.",
        "Make your home comfortable and livable again.",
      ],
      process: [
        "Providing a clear pre-treatment checklist for the homeowner.",
        "Thorough application of control products to all infested areas.",
        "Treating both indoor and outdoor environments as needed.",
        "Using a combination of adulticides and IGRs for full control.",
        "Advising on post-treatment steps, including coordination with veterinary care.",
      ],
      pests: ["Cat Fleas (Ctenocephalides felis)"],
    },
    "bee-control": {
      title: "Bee, Wasp & Hornet Control in Spokane",
      description:
        "Safe and effective removal of stinging insect nests from your property. We handle everything from wasps and hornets to carpenter bees.",
      icon: "🐝",
      hero: "Protect Your Family from Painful Stings with Professional Nest Removal",
      detailedDescription:
        "Wasp, hornet, and yellow jacket nests near your home can be a serious danger, especially for those with allergies. Attempting to remove them yourself can result in multiple painful stings. Patriot Pest Control Co technicians are equipped with specialized protective gear and treatment tools to safely and effectively remove stinging insect nests from your property. We also treat for wood-destroying carpenter bees to protect your home's structure.",
      features: [
        "Wasp, Hornet, and Yellow Jacket Nest Removal",
        "Treatment for Wood-Destroying Carpenter Bees",
        "Preventative treatments to deter future nesting",
        "Fast response for aggressive nest situations",
        "Safe removal from eaves, attics, walls, and ground nests",
        "Guaranteed removal of treated nests",
      ],
      benefits: [
        "Safely enjoy your yard and outdoor areas without fear of stings.",
        "Prevent allergic reactions and painful encounters.",
        "Protect your home from damage caused by carpenter bees.",
        "Ensure complete and safe removal by trained professionals.",
      ],
      process: [
        "Identification of the stinging insect species and nest location.",
        "Selection of the appropriate treatment method and safety protocols.",
        "Application of treatment to eliminate the colony.",
        "Removal of the nest (when accessible and safe to do so).",
        "Application of preventative products to treated areas.",
      ],
      pests: ["Wasps", "Hornets", "Yellow Jackets", "Carpenter Bees"],
    },
    "tick-control": {
      title: "Tick Control for Yards in Spokane, WA",
      description:
        "Reduce tick populations in your yard to protect your family and pets from Lyme disease and other tick-borne illnesses with our targeted treatments.",
      icon: "🌿",
      hero: "Create a Safer Outdoor Space with Effective Tick Reduction",
      detailedDescription:
        "Ticks are often found in tall grass, wooded areas, and leaf litter, waiting for a host to pass by. They can transmit serious diseases like Lyme disease and Rocky Mountain spotted fever. Patriot Pest Control Co offers targeted yard treatments that focus on these high-risk areas. Our applications significantly reduce the number of ticks on your property, lowering the risk of encounters for your family and pets.",
      features: [
        "Targeted treatments for tick habitats (wood lines, tall grass)",
        "Seasonal treatment programs for ongoing protection",
        "Reduces both tick and mosquito populations",
        "Pet-safe and family-safe applications",
        "Guidance on landscape modifications to deter ticks",
        "Pre-event treatments for outdoor gatherings",
      ],
      benefits: [
        "Dramatically reduce the risk of tick-borne diseases.",
        "Allow your children and pets to play more safely in the yard.",
        "Gain peace of mind during peak tick season.",
        "Enjoy your entire property, including wooded and transitional areas.",
      ],
      process: [
        "A thorough inspection of your yard to identify tick-conducive areas.",
        "Application of control products to wood lines, shrubs, and tall grasses.",
        "Providing recommendations for making your yard less attractive to ticks.",
        "Scheduling recurring treatments for season-long control.",
        "Clear communication on re-entry times for pets and family.",
      ],
      pests: ["Deer Ticks (Blacklegged Ticks)", "American Dog Ticks", "Rocky Mountain Wood Ticks"],
    },
  };

  const service = serviceData[serviceSlug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <p className="text-gray-600 text-lg mb-8">
            The requested service could not be found. Please check the URL or return to our services
            page.
          </p>
          <Button asChild>
            <Link to="/services">Back to Services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{service.title} - Patriot Pest Control Co</title>
        <meta
          name="description"
          content={`${service.description} Call (509) 471-5767 for a free quote.`}
        />
      </Helmet>

      {/* Hero Section */}
      <section className="hero-gradient text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-6">{service.icon}</div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">{service.hero}</p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                  <Link to="/prices">Get Free Quote</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  className="bg-red-600 hover:bg-red-700 shadow-xl shadow-red-500/60 hover:shadow-red-500/80 transition-all duration-300 transform hover:-translate-y-0.5"
                >
                  <a
                    href="tel:509-471-5767"
                    className="flex items-center justify-center space-x-2 text-white"
                  >
                    <Phone className="h-5 w-5" />
                    <span className="font-bold">Call (509) 471-5767</span>
                  </a>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Description Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="prose lg:prose-xl text-gray-700"
          >
            <p>{service.detailedDescription}</p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Service Features</h2>
            <p className="text-xl text-gray-600">
              What&apos;s included in our {service.title.toLowerCase()} service
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {service.features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-sm"
              >
                <CheckCircle className="h-5 w-5 text-green-500 mt-1 flex-shrink-0" />
                <span className="text-gray-700">{feature}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Benefits of Our Service</h2>
              <div className="flex flex-wrap justify-center gap-8">
                {service.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3 max-w-xs text-left">
                    <Shield className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              How we deliver effective {service.title.toLowerCase()}
            </p>
          </motion.div>

          <div className="relative max-w-5xl mx-auto">
            <div className="hidden md:block absolute top-5 left-1/2 w-0.5 h-[calc(100%-2.5rem)] bg-blue-200 -translate-x-1/2"></div>
            {service.process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative flex md:items-center mb-8 md:mb-0"
              >
                <div
                  className={`flex-1 md:text-right md:pr-12 ${index % 2 === 0 ? "md:order-1" : "md:order-3"}`}
                >
                  <p className="text-gray-700">{step}</p>
                </div>
                <div className="relative z-10 md:order-2">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center text-lg font-bold mx-auto">
                    {index + 1}
                  </div>
                </div>
                <div
                  className={`flex-1 md:pl-12 ${index % 2 === 0 ? "md:order-3" : "md:order-1"}`}
                ></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pests Covered */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4">Pests We Control</h2>
            <p className="text-xl text-blue-100">
              Common pests covered by our {service.title.toLowerCase()} service
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {service.pests.map((pest, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white bg-opacity-10 rounded-full px-4 py-2"
              >
                <span className="text-sm font-medium">{pest}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for a free inspection and customized {service.title.toLowerCase()}{" "}
              solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Link to="/prices">Schedule Free Inspection</Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-red-600 hover:bg-red-700 shadow-xl shadow-red-500/60 hover:shadow-red-500/80 transition-all duration-300 transform hover:-translate-y-0.5"
              >
                <a
                  href="tel:509-471-5767"
                  className="flex items-center justify-center space-x-2 text-white"
                >
                  <Phone className="h-5 w-5" />
                  <span className="font-bold">Call (509) 471-5767</span>
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ServiceDetail;
