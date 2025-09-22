import { MapPin, Users, Clock } from "lucide-react";

export const serviceAreas = [
  {
    slug: "spokane",
    name: "Spokane",
    state: "WA",
    description: "Top-rated pest control services for homes and businesses across Spokane.",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1593224573696-18a301f1878b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "walla-walla",
    name: "Walla Walla",
    state: "WA",
    description: "Protecting Walla Walla's agricultural and residential properties from pests.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1621335890196-0834650b9470?q=80&w=1974&auto=format&fit=crop",
  },
  {
    slug: "yakima",
    name: "Yakima",
    state: "WA",
    description: "Comprehensive pest solutions for the entire Yakima Valley region.",
    icon: Clock,
    image:
      "https://images.unsplash.com/photo-1581966883192-49439a09299b?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "kennewick",
    name: "Kennewick",
    state: "WA",
    description: "Expert pest management for Kennewick and the Tri-Cities area.",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1618502243145-d1a890331b4a?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "pasco",
    name: "Pasco",
    state: "WA",
    description: "Reliable and effective pest control services for Pasco residents.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1541550993969-421032e43644?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "richland",
    name: "Richland",
    state: "WA",
    description: "Keeping Richland homes and businesses safe from unwanted pests.",
    icon: Clock,
    image:
      "https://images.unsplash.com/photo-1560381353-41a7b4ea5758?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "post-falls",
    name: "Post Falls",
    state: "ID",
    description: "Your local pest control experts in Post Falls, Idaho.",
    icon: MapPin,
    image:
      "https://images.unsplash.com/photo-1633094930908-e991321803a7?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "hayden",
    name: "Hayden",
    state: "ID",
    description: "Dedicated pest management for the Hayden community.",
    icon: Users,
    image:
      "https://images.unsplash.com/photo-1598300230334-d4c5a33e29d3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "coeur-dalene",
    name: "Coeur d'Alene",
    state: "ID",
    description: "Protecting beautiful Coeur d'Alene from all types of pests.",
    icon: Clock,
    image:
      "https://images.unsplash.com/photo-1601781092239-15671458a76a?q=80&w=2070&auto=format&fit=crop",
  },
];

export const serviceAreaData = {
  spokane: {
    name: "Spokane",
    state: "WA",
    description: "Professional pest control services throughout Spokane and surrounding areas.",
    population: "220,000+",
    coverage: "Complete city coverage",
    responseTime: "24-48 hours",
    neighborhoods: [
      "Downtown Spokane",
      "South Hill",
      "North Side",
      "West Central",
      "East Central",
      "Brownes Addition",
    ],
    commonPests: ["Ants", "Spiders", "Rodents", "Wasps", "Box Elder Bugs", "Cluster Flies"],
    climate:
      "Spokane's four-season climate creates varying pest pressures throughout the year, requiring specialized seasonal treatments.",
  },
  "walla-walla": {
    name: "Walla Walla",
    state: "WA",
    description:
      "Reliable pest control services for Walla Walla's residential and commercial properties.",
    population: "35,000+",
    coverage: "City-wide service",
    responseTime: "24-48 hours",
    neighborhoods: ["Downtown", "Eastgate", "Westgate", "College Place area"],
    commonPests: ["Ants", "Spiders", "Rodents", "Termites", "Wasps", "Earwigs"],
    climate:
      "The agricultural environment of Walla Walla creates unique pest challenges that our experts are equipped to handle.",
  },
  yakima: {
    name: "Yakima",
    state: "WA",
    description: "Comprehensive pest control solutions for Yakima Valley residents and businesses.",
    population: "95,000+",
    coverage: "Greater Yakima area",
    responseTime: "24-48 hours",
    neighborhoods: ["Downtown Yakima", "West Valley", "East Valley", "Terrace Heights", "Gleed"],
    commonPests: ["Ants", "Spiders", "Rodents", "Wasps", "Beetles", "Silverfish"],
    climate:
      "Yakima's semi-arid climate and agricultural setting require specialized pest management strategies.",
  },
  kennewick: {
    name: "Kennewick",
    state: "WA",
    description: "Expert pest control services for Kennewick and the Tri-Cities area.",
    population: "85,000+",
    coverage: "Full city coverage",
    responseTime: "24-48 hours",
    neighborhoods: ["Downtown Kennewick", "Southridge", "Canyon Lakes", "Highlands"],
    commonPests: ["Ants", "Spiders", "Rodents", "Wasps", "Camel Crickets", "Stink Bugs"],
    climate:
      "The Columbia River proximity and desert climate create specific pest control needs we address effectively.",
  },
  pasco: {
    name: "Pasco",
    state: "WA",
    description: "Professional pest management services throughout Pasco and surrounding areas.",
    population: "75,000+",
    coverage: "Complete city service",
    responseTime: "24-48 hours",
    neighborhoods: ["Downtown Pasco", "West Pasco", "Road 68 Corridor", "Broadmoor"],
    commonPests: ["Ants", "Spiders", "Rodents", "Wasps", "Beetles", "Crickets"],
    climate:
      "Pasco's growing urban environment and agricultural surroundings require comprehensive pest control approaches.",
  },
  richland: {
    name: "Richland",
    state: "WA",
    description: "Trusted pest control solutions for Richland homes and businesses.",
    population: "60,000+",
    coverage: "City-wide service",
    responseTime: "24-48 hours",
    neighborhoods: ["Downtown Richland", "Badger Mountain", "Horn Rapids", "West Richland"],
    commonPests: ["Ants", "Spiders", "Rodents", "Wasps", "Earwigs", "Silverfish"],
    climate:
      "Richland's riverside location and planned communities present unique pest management opportunities.",
  },
  "post-falls": {
    name: "Post Falls",
    state: "ID",
    description:
      "Your local pest control experts in Post Falls, Idaho, providing fast and effective solutions.",
    population: "40,000+",
    coverage: "Full city coverage",
    responseTime: "24-48 hours",
    neighborhoods: ["Downtown", "Prairie", "Riverside", "Montrose"],
    commonPests: ["Ants", "Spiders", "Wasps", "Rodents", "Hobo Spiders"],
    climate:
      "Post Falls' proximity to the Spokane River can attract various pests, which we are experts at managing.",
  },
  hayden: {
    name: "Hayden",
    state: "ID",
    description:
      "Dedicated pest management for the Hayden community, protecting homes near the beautiful Hayden Lake.",
    population: "15,000+",
    coverage: "Hayden & Hayden Lake areas",
    responseTime: "24-48 hours",
    neighborhoods: ["Hayden Lake", "Avondale", "Broadmoore Estates"],
    commonPests: ["Spiders", "Ants", "Wasps", "Rodents", "Pine Beetles"],
    climate:
      "The forested and lakeside environment requires specialized attention to prevent pest infestations.",
  },
  "coeur-dalene": {
    name: "Coeur d'Alene",
    state: "ID",
    description:
      "Protecting beautiful Coeur d'Alene from all types of pests, from the lakefront to the city center.",
    population: "55,000+",
    coverage: "Greater Coeur d'Alene area",
    responseTime: "24-48 hours",
    neighborhoods: ["Downtown", "Fort Grounds", "Sanders Beach", "The Garden District"],
    commonPests: ["Ants", "Spiders", "Wasps", "Rodents", "Termites"],
    climate:
      "A popular tourist destination, Coeur d'Alene requires diligent pest control to protect homes and businesses.",
  },
};
