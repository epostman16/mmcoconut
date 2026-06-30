export const companyInfo = {
  name: "MM Coconut Processing Unit",
  shortName: "MM Coconut",
  tagline: "Premium Desiccated Coconut Powder Manufacturer & Supplier",
  description:
    "Specializing in fine-grade desiccated coconut powder — delivering quality coconut products from Tamil Nadu to customers across India.",
  address: {
    line1: "No: 0/1/162, Melamanakkudi Main Road",
    line2: "Puduvayal, Karaikudi (TK)",
    district: "Sivagangai District, Tamil Nadu – 630108",
    full: "No: 0/1/162, Melamanakkudi Main Road, Puduvayal, Karaikudi (TK), Sivagangai District, Tamil Nadu – 630108",
  },
  phone: "+91 96292 92085",
  phoneRaw: "919629292085",
  email: "info@mmcoconut.in",
  gstin: "33FBRPM3168J1Z4",
  udyam: "UDYAM-TN-21-0028346",
  coordinates: { lat: 10.091654, lng: 78.854345 },
  businessHours: {
    weekdays: "Monday – Saturday: 8:00 AM – 6:00 PM",
    sunday: "Sunday: Closed",
  },
  social: {
    facebook: "https://facebook.com",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    youtube: "https://youtube.com",
  },
};

export const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "500+", label: "Customers" },
  { value: "100%", label: "Quality Tested" },
  { value: "Pan India", label: "Supply Network" },
];

export const whyChooseUs = [
  {
    title: "Premium Quality",
    description:
      "Every batch undergoes rigorous quality checks to meet international standards.",
    icon: "Award",
  },
  {
    title: "Modern Processing",
    description:
      "State-of-the-art machinery ensures consistent quality and hygienic production.",
    icon: "Cog",
  },
  {
    title: "Sustainable Sourcing",
    description:
      "We source coconuts directly from Tamil Nadu farms, supporting local agriculture.",
    icon: "Leaf",
  },
  {
    title: "Pan India Delivery",
    description:
      "Reliable logistics network delivering fresh products across India on time.",
    icon: "Truck",
  },
  {
    title: "Export Ready",
    description:
      "Products meet export-grade specifications for international markets.",
    icon: "Globe",
  },
  {
    title: "Competitive Pricing",
    description:
      "Direct manufacturer pricing with no middlemen, ensuring best value.",
    icon: "IndianRupee",
  },
];

export type ProductCategory =
  | "all"
  | "oils"
  | "powders"
  | "raw-materials"
  | "by-products"
  | "industrial";

export interface Product {
  id: string;
  name: string;
  slug: string;
  category: ProductCategory;
  shortDescription: string;
  description: string;
  features: string[];
  applications: string[];
  image: string;
  gradient: string;
  featured?: boolean;
}

export const featuredProductSlug = "desiccated-coconut-powder";

export const productCategories: { id: ProductCategory; label: string }[] = [
  { id: "all", label: "All Products" },
  { id: "oils", label: "Oils" },
  { id: "powders", label: "Powders" },
  { id: "raw-materials", label: "Raw Materials" },
  { id: "by-products", label: "By-Products" },
  { id: "industrial", label: "Industrial" },
];

export const products: Product[] = [
  {
    id: "3",
    name: "Desiccated Coconut Powder",
    slug: "desiccated-coconut-powder",
    category: "powders",
    featured: true,
    shortDescription:
      "Our flagship fine-grade desiccated coconut powder for bakery, confectionery, and food manufacturing.",
    description:
      "Our signature product — premium desiccated coconut powder with consistent moisture content, uniform particle size, and natural white color. Hygienically processed and packed in food-grade pouches, it is trusted by bakeries, confectionery makers, and food processors across India.",
    features: [
      "Low moisture content",
      "Uniform fine particle size",
      "Natural white color",
      "Food-grade packaging",
      "Extended shelf life",
      "Bulk & retail supply",
    ],
    applications: ["Bakery", "Confectionery", "Ice cream", "Snack foods", "Food manufacturing"],
    image: "/images/desiccated-coconut-powder.png",
    gradient: "from-stone-100 to-stone-300",
  },
  {
    id: "1",
    name: "Coconut Oil",
    slug: "coconut-oil",
    category: "oils",
    shortDescription: "Pure, refined coconut oil for cooking and industrial use.",
    description:
      "Our premium coconut oil is extracted using modern processing techniques from carefully selected coconuts. Ideal for cooking, cosmetics, and industrial applications.",
    features: [
      "100% pure coconut extract",
      "High smoke point",
      "Long shelf life",
      "Available in bulk quantities",
    ],
    applications: ["Cooking", "Cosmetics", "Pharmaceuticals", "Industrial lubricants"],
    image: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?w=800&q=80",
    gradient: "from-amber-600 to-amber-800",
  },
  {
    id: "2",
    name: "Virgin Coconut Oil",
    slug: "virgin-coconut-oil",
    category: "oils",
    shortDescription: "Cold-pressed virgin coconut oil retaining natural nutrients.",
    description:
      "Cold-pressed virgin coconut oil preserves all natural antioxidants, vitamins, and lauric acid. Perfect for health-conscious consumers and premium cosmetic brands.",
    features: [
      "Cold-pressed extraction",
      "Rich in lauric acid",
      "No chemical processing",
      "Premium export grade",
    ],
    applications: ["Health supplements", "Skincare", "Hair care", "Gourmet cooking"],
    image: "https://images.unsplash.com/photo-1605844554081-565c79ddb34?w=800&q=80",
    gradient: "from-green-600 to-emerald-800",
  },
  {
    id: "4",
    name: "Coconut Copra",
    slug: "coconut-copra",
    category: "raw-materials",
    shortDescription: "Sun-dried copra for oil extraction and processing.",
    description:
      "High-quality sun-dried coconut copra with optimal oil content. Sourced from premium coconuts and processed under hygienic conditions.",
    features: [
      "High oil content",
      "Sun-dried naturally",
      "Low free fatty acid",
      "Bulk supply available",
    ],
    applications: ["Oil extraction", "Food processing", "Animal feed"],
    image: "https://images.unsplash.com/photo-1589983360006-ca3bb87908e3?w=800&q=80",
    gradient: "from-amber-700 to-amber-900",
  },
  {
    id: "5",
    name: "Coconut Shell Products",
    slug: "coconut-shell-products",
    category: "by-products",
    shortDescription: "Processed coconut shells for activated carbon and crafts.",
    description:
      "Clean, processed coconut shells suitable for activated carbon production, handicrafts, and industrial applications.",
    features: [
      "Clean and dried",
      "Uniform size grading",
      "Low ash content",
      "Eco-friendly material",
    ],
    applications: ["Activated carbon", "Handicrafts", "Fuel briquettes", "Landscaping"],
    image: "https://images.unsplash.com/photo-1550990774-122ec5c37eaa?w=800&q=80",
    gradient: "from-stone-600 to-stone-800",
  },
  {
    id: "6",
    name: "Coconut Husk Products",
    slug: "coconut-husk-products",
    category: "by-products",
    shortDescription: "Coconut husk chips and products for horticulture.",
    description:
      "Premium coconut husk products including chips and blocks for horticulture, erosion control, and industrial applications.",
    features: [
      "High water retention",
      "Natural pH balance",
      "Biodegradable",
      "Various chip sizes",
    ],
    applications: ["Horticulture", "Erosion control", "Growing medium", "Mulching"],
    image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&q=80",
    gradient: "from-amber-800 to-amber-950",
  },
  {
    id: "7",
    name: "Coconut Fiber (Coir)",
    slug: "coconut-fiber-coir",
    category: "by-products",
    shortDescription: "Premium coir fiber for mattresses and geotextiles.",
    description:
      "High-quality coconut coir fiber extracted using modern decorticating equipment. Available in various grades for diverse industrial applications.",
    features: [
      "Strong and durable",
      "Natural elasticity",
      "Mold resistant",
      "Multiple grade options",
    ],
    applications: ["Mattresses", "Geotextiles", "Rope making", "Erosion mats"],
    image: "https://images.unsplash.com/photo-1615485925510-7ce4a72f4cb8?w=800&q=80",
    gradient: "from-yellow-700 to-amber-900",
  },
  {
    id: "8",
    name: "Coconut Charcoal",
    slug: "coconut-charcoal",
    category: "industrial",
    shortDescription: "High-grade coconut shell charcoal for industrial use.",
    description:
      "Premium coconut shell charcoal with high carbon content and low ash. Ideal for metallurgy, water filtration, and BBQ applications.",
    features: [
      "High carbon content",
      "Low ash and sulfur",
      "Long burning time",
      "Consistent quality",
    ],
    applications: ["Metallurgy", "Water filtration", "BBQ", "Activated carbon"],
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=800&q=80",
    gradient: "from-neutral-700 to-neutral-900",
  },
  {
    id: "9",
    name: "Coconut Cake",
    slug: "coconut-cake",
    category: "by-products",
    shortDescription: "Protein-rich coconut cake for animal feed.",
    description:
      "Nutrient-rich coconut cake residue from oil extraction. High in protein and fiber, making it an excellent animal feed supplement.",
    features: [
      "High protein content",
      "Rich in fiber",
      "Oil residue removed",
      "Bulk packaging",
    ],
    applications: ["Cattle feed", "Poultry feed", "Fish feed", "Organic fertilizer"],
    image: "https://images.unsplash.com/photo-1627483298239-f95ded94db2c?w=800&q=80",
    gradient: "from-orange-700 to-orange-900",
  },
  {
    id: "10",
    name: "Coconut Based Industrial Raw Materials",
    slug: "coconut-industrial-raw-materials",
    category: "industrial",
    shortDescription: "Versatile coconut derivatives for industrial manufacturing.",
    description:
      "A comprehensive range of coconut-based industrial raw materials tailored for manufacturers across food, cosmetic, and chemical industries.",
    features: [
      "Custom specifications",
      "Bulk quantities",
      "Consistent supply",
      "Technical support",
    ],
    applications: [
      "Food manufacturing",
      "Cosmetics",
      "Chemical industry",
      "Biofuel production",
    ],
    image: "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=800&q=80",
    gradient: "from-emerald-700 to-green-900",
  },
];

export const manufacturingSteps = [
  {
    step: "01",
    title: "Sourcing",
    description: "Premium coconuts sourced from Tamil Nadu farms and plantations.",
  },
  {
    step: "02",
    title: "Cleaning & Sorting",
    description: "Thorough cleaning and grading to ensure only the best coconuts are processed.",
  },
  {
    step: "03",
    title: "Processing",
    description: "Modern machinery processes coconuts with precision and hygiene.",
  },
  {
    step: "04",
    title: "Quality Testing",
    description: "Rigorous lab testing ensures every product meets quality standards.",
  },
  {
    step: "05",
    title: "Packaging",
    description: "Food-grade packaging preserves freshness and extends shelf life.",
  },
  {
    step: "06",
    title: "Distribution",
    description: "Efficient logistics deliver products across India and for export.",
  },
];

export const industries = [
  { name: "Food & Beverage", icon: "UtensilsCrossed" },
  { name: "Cosmetics & Personal Care", icon: "Sparkles" },
  { name: "Pharmaceuticals", icon: "Pill" },
  { name: "Agriculture", icon: "Wheat" },
  { name: "Animal Feed", icon: "Beef" },
  { name: "Industrial Manufacturing", icon: "Factory" },
  { name: "Hospitality", icon: "Hotel" },
  { name: "Export & Trading", icon: "Ship" },
];

export const testimonials = [
  {
    name: "Rajesh Kumar",
    company: "Kumar Foods Pvt. Ltd., Chennai",
    text: "MM Coconut has been our trusted supplier for over 5 years. Their coconut oil quality is consistently excellent, and delivery is always on time.",
    rating: 5,
  },
  {
    name: "Priya Menon",
    company: "Natural Beauty Co., Bangalore",
    text: "The virgin coconut oil from MM Coconut is exceptional. Our customers love the purity and natural aroma. Highly recommended for cosmetic manufacturers.",
    rating: 5,
  },
  {
    name: "Suresh Patel",
    company: "Patel Agro Industries, Mumbai",
    text: "Reliable bulk supplier with competitive pricing. Their desiccated coconut powder meets all our bakery specifications. Great partnership!",
    rating: 5,
  },
];

export const values = [
  {
    title: "Quality First",
    description: "Uncompromising commitment to product excellence in every batch.",
    icon: "ShieldCheck",
  },
  {
    title: "Integrity",
    description: "Transparent business practices and honest dealings with all stakeholders.",
    icon: "Handshake",
  },
  {
    title: "Innovation",
    description: "Continuous improvement in processing technology and product development.",
    icon: "Lightbulb",
  },
  {
    title: "Sustainability",
    description: "Eco-friendly practices that protect our environment for future generations.",
    icon: "Recycle",
  },
];

export const faqs = [
  {
    question: "What products does MM Coconut Processing Unit manufacture?",
    answer:
      "Our flagship product is desiccated coconut powder, along with coconut oil, virgin coconut oil, copra, coconut shell products, husk products, coir fiber, charcoal, coconut cake, and industrial raw materials.",
  },
  {
    question: "Do you supply products across India?",
    answer:
      "Yes, we have a pan-India supply network and deliver to customers across all major cities and industrial hubs in India. We also cater to export requirements.",
  },
  {
    question: "What is the minimum order quantity?",
    answer:
      "Minimum order quantities vary by product. Please contact us with your requirements and our team will provide customized pricing and MOQ details.",
  },
  {
    question: "Are your products quality certified?",
    answer:
      "Yes, all our products undergo rigorous quality testing. We are GST registered and UDYAM certified, adhering to food safety and industry standards.",
  },
  {
    question: "How can I place a bulk order?",
    answer:
      "You can reach us via phone at +91 96292 92085, WhatsApp, or through our contact form. Our sales team will assist you with pricing, samples, and delivery schedules.",
  },
  {
    question: "Do you offer product samples?",
    answer:
      "Yes, we provide product samples for evaluation upon request. Contact our sales team to arrange sample delivery for your evaluation.",
  },
];

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/products", label: "Products" },
  { href: "/contact", label: "Contact" },
];

export const footerLinks = {
  company: [
    { href: "/about", label: "About Us" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact Us" },
  ],
  products: [
    { href: "/products#desiccated-coconut-powder", label: "Desiccated Coconut Powder" },
    { href: "/products?category=oils", label: "Coconut Oils" },
    { href: "/products?category=powders", label: "Coconut Powders" },
    { href: "/products?category=by-products", label: "By-Products" },
    { href: "/products?category=industrial", label: "Industrial Materials" },
  ],
};
