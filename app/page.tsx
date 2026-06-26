'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Shield, 
  Thermometer, 
  Award, 
  Globe, 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle2, 
  ChevronRight, 
  ChevronLeft,
  ArrowRight, 
  Menu, 
  X, 
  FileText, 
  Sparkles, 
  Coins, 
  Truck, 
  Activity, 
  Wheat, 
  Eye, 
  Scissors, 
  CheckSquare, 
  Package,
  Clock,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Send,
  MessageSquare,
  Compass,
  Zap,
  Check
} from 'lucide-react';
import MirraLogo from './components/MirraLogo';

// Custom interface for Inquiry
interface Inquiry {
  id: string;
  name: string;
  email: string;
  product: string;
  message: string;
  date: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const [productCategory, setProductCategory] = useState<'all' | 'cattle' | 'goats' | 'sheep'>('all');
  const [scrolled, setScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-play slider effect (every 8 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1));
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productInterest: 'General Inquiry',
    message: ''
  });
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Scroll handler for navigation styling
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    // Simulate network delay
    setTimeout(() => {
      const newInquiry: Inquiry = {
        id: `RFQ-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.name,
        email: formData.email,
        product: formData.productInterest,
        message: formData.message,
        date: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
        })
      };

      setInquiries([newInquiry, ...inquiries]);
      setFormSubmitted(true);
      setSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        productInterest: 'General Inquiry',
        message: ''
      });
    }, 1200);
  };

  const processSteps = [
    {
      step: 1,
      title: "Livestock Selection",
      shortDesc: "Selecting healthy cattle, sheep, and goats from Ethiopia's most fertile grazing zones.",
      icon: Sparkles,
      detail: "Our team of veterinary professionals and livestock experts travels directly to renowned pastoral regions like Borena and the highlands to hand-select animals. We focus strictly on healthy, high-grade cattle, sheep, and goats that display robust physical development.",
      highlights: ["Origin Verification", "Visual Health Checks", "Sourced from Natural Pastures"]
    },
    {
      step: 2,
      title: "Livestock Procurement",
      shortDesc: "Purchasing based on strict export standards and tailored customer specifications.",
      icon: Coins,
      detail: "Sourcing is handled transparently through certified pastoralist cooperatives and trusted suppliers. We negotiate fair prices to support local agricultural communities while ensuring that only top-tier livestock matching target weights are selected for procurement.",
      highlights: ["Fair-Trade Sourcing", "Target Weight Matching", "Documented Provenance"]
    },
    {
      step: 3,
      title: "Assembly & Transport",
      shortDesc: "Transporting and assembling animals at designated holding facilities.",
      icon: Truck,
      detail: "Livestock is transported in specialized, high-ventilation trucks to prevent physical stress. Upon arrival at our quarantine and holding facilities, animals are grouped into spacious, stress-free environments to rest, hydrate, and adjust.",
      highlights: ["Stress-Free Transport", "High-Ventilation Fleets", "Spacious Holding Grounds"]
    },
    {
      step: 4,
      title: "Veterinary Inspection",
      shortDesc: "Comprehensive clinical health exams and disease screening by government certified vets.",
      icon: Activity,
      detail: "Each animal undergoes rigorous diagnostic testing and clinical evaluation under the supervision of qualified quarantine veterinarians. Only livestock certified 100% free of transboundary animal diseases is cleared for processing.",
      highlights: ["State Quarantine Protocols", "Blood & Health Screenings", "Official Vet Certifications"]
    },
    {
      step: 5,
      title: "Fattening & Conditioning",
      shortDesc: "Controlled feeding programs utilizing high-nutrition natural feeds.",
      icon: Wheat,
      detail: "In our holding feedlots, animals are fed premium, balanced rations consisting of high-protein agricultural feed, natural grass, and clean minerals. This guarantees optimal muscle-to-fat balance and produces exceptionally tender chilled meat.",
      highlights: ["100% Organic Feed Rations", "Strict Diet Monitoring", "Premium Marbling Development"]
    },
    {
      step: 6,
      title: "Pre-Slaughter Inspection",
      shortDesc: "Final clinical assessment within 24 hours prior to processing.",
      icon: Eye,
      detail: "A final veterinary inspection is performed immediately prior to processing. Animals must be perfectly healthy and fully rested (minimum 12-24 hours fast with access to water) to ensure absolute meat safety and quality standards are maintained.",
      highlights: ["Antemortem Vet Checks", "Stress Minimization", "Strict 24-Hour Inspection Window"]
    },
    {
      step: 7,
      title: "Hygienic Slaughtering",
      shortDesc: "Strict sanitary conditions complying fully with Halal and ISO requirements.",
      icon: Scissors,
      detail: "Processing is executed in world-class, ISO-certified facilities under meticulous sanitary controls. The entire workflow complies fully with international slaughtering standards and strict Islamic Halal directives, certified by authorized Islamic authorities.",
      highlights: ["100% Halal Certified", "ISO Sanitation Standards", "Meticulous Sterile Environment"]
    },
    {
      step: 8,
      title: "Meat Processing & Grading",
      shortDesc: "Professional cutting, trimming, grading, and preparation by skilled butchers.",
      icon: Award,
      detail: "Carcasses are expertly trimmed, graded, and portioned by highly skilled meat-processing professionals. Each cut is carefully shaped according to specific client requests (whole carcasses, six-way cuts, or custom primal cuts) to optimize presentation.",
      highlights: ["Precision Meat-Cutting", "Accurate Meat Grading", "Tailored Custom Cuts"]
    },
    {
      step: 9,
      title: "Strict Quality Control",
      shortDesc: "Thorough postmortem inspections ensuring absolute hygiene and safety.",
      icon: CheckSquare,
      detail: "Our quality assurance inspectors carry out comprehensive post-slaughter evaluations. We enforce strict Hazard Analysis Critical Control Point (HACCP) principles, performing regular microbiological testing to guarantee zero contamination.",
      highlights: ["HACCP Compliance", "Postmortem Diagnostics", "Microbiological Screening"]
    },
    {
      step: 10,
      title: "Chilling Process",
      shortDesc: "Immediate blast-chilling maintained strictly under 0-4°C to preserve freshness.",
      icon: Thermometer,
      detail: "Processed carcasses are transferred instantly to specialized chilling chambers. The core meat temperature is brought down to a stable range of 0-4°C within hours. This blocks bacterial growth, locks in freshness, and matures the meat for peak tenderness.",
      highlights: ["Instant Temperature Drop", "Continuous Thermal Logs", "Freshness Locking (0-4°C)"]
    },
    {
      step: 11,
      title: "Packaging & Labeling",
      shortDesc: "Vacuum packaging and labeling according to international food regulations.",
      icon: Package,
      detail: "Chilled meat is packaged in heavy-duty food-grade vacuum shrink bags or wrapped securely in stockinettes. Labels provide full traceability details, including slaughter and packaging dates, country of origin, weight, and official health stamps.",
      highlights: ["Vacuum Sealing Technology", "Full Lot Traceability", "Import-Ready Labels"]
    }
  ];

  const productsList = [
    {
      id: "prod-borena-cattle",
      category: "cattle",
      name: "Borena Cattle",
      origin: "Southern Ethiopian Pastures (Borena)",
      badge: "High Demand",
      desc: "Widely recognized across the Middle East for exceptional meat quality, remarkable muscle structure, and optimal fat distribution. Raised entirely on natural, mineral-rich pastures.",
      weight: "350 - 450 kg live weight",
      image: "/images/premium_beef_steak.jpg",
      features: ["Fine marbling", "Outstanding tenderness", "100% grass-fed beef"]
    },
    {
      id: "prod-gambella-cattle",
      category: "cattle",
      name: "Gambella Cattle",
      origin: "Lush River Basins (Gambella)",
      badge: "Premium Grass-Fed",
      desc: "Revered for healthy growth, massive body structure, and lean meat. Sourced from water-rich plains, ensuring cattle develop robust health and clean, high-nutrition beef products.",
      weight: "400 - 500 kg live weight",
      image: "/images/premium_beef_steak.jpg",
      features: ["Highly nutritious lean beef", "Naturally raised", "Superb moisture retention"]
    },
    {
      id: "prod-borena-goats",
      category: "goats",
      name: "Borena Goats",
      origin: "Semi-Arid Southern Woodlands",
      badge: "Export Grade",
      desc: "Highly valued for superior meat-to-bone ratio and premium meat flavor. Sourced from robust herds in southern plains, adapting them beautifully for top-tier international markets.",
      weight: "30 - 45 kg live weight",
      image: "/images/premium_lamb_chops.jpg",
      features: ["Delicate texture", "Rich flavor profile", "Strictly veterinary-approved"]
    },
    {
      id: "prod-mountain-goats",
      category: "goats",
      name: "Mountain Goats",
      origin: "Ethiopian Highlands",
      badge: "Lean & Healthy",
      desc: "Sourced from high-altitude alpine regions. These goats browse on natural, diverse mountain shrubs, giving their meat a highly distinctive, aromatic, and low-fat premium profile.",
      weight: "25 - 38 kg live weight",
      image: "/images/premium_lamb_chops.jpg",
      features: ["Exceptionally lean meat", "Aromatic grazing flavor", "High protein, low cholesterol"]
    },
    {
      id: "prod-black-head-sheep",
      category: "sheep",
      name: "Black Head (Wanki) Sheep",
      origin: "Highland Grasslands",
      badge: "Best Seller",
      desc: "The absolute pride of Ethiopian mutton export. Adapted beautifully to highland climates, developing a highly preferred layer of premium sweet fat and tender meat.",
      weight: "28 - 40 kg live weight",
      image: "/images/premium_lamb_chops.jpg",
      features: ["Sweet fat cover", "Distinctive juicy texture", "Highly sought-after in Gulf states"]
    },
    {
      id: "prod-rutfedi-sheep",
      category: "sheep",
      name: "Rutfedi Sheep",
      origin: "Eastern Ethiopian Plains",
      badge: "High Yield",
      desc: "Sought-after for its exceptional meat yield, tender muscle fibers, and ideal fat-to-meat ratio. Sourced from expert sheep breeders adhering to organic feeding patterns.",
      weight: "30 - 42 kg live weight",
      image: "/images/premium_lamb_chops.jpg",
      features: ["Perfect meat-to-bone ratio", "High moisture retention", "Uniform carcasses"]
    }
  ];

  const filteredProducts = productCategory === 'all' 
    ? productsList 
    : productsList.filter(p => p.category === productCategory);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      
      {/* 1. NAVIGATION BAR (Sticky) */}
      <header 
        id="navbar-section"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'bg-emerald-950/95 backdrop-blur-md py-3 text-white border-b border-amber-500/30 shadow-sm' 
            : 'bg-emerald-950/90 py-4 text-white border-b border-amber-600/20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#" className="flex items-center group focus:outline-none" id="header-logo-link">
              <MirraLogo variant="dark" showTagline={false} className="h-10 sm:h-11 w-auto transition-transform duration-300 group-hover:scale-[1.02]" />
            </a>

            {/* Desktop Nav Links */}
            <nav className="hidden lg:flex items-center space-x-6 font-medium text-xs uppercase tracking-widest">
              <a 
                href="#about" 
                className="transition-colors hover:text-amber-400 text-emerald-100/90"
              >
                About Us
              </a>
              <a 
                href="#process" 
                className="transition-colors hover:text-amber-400 text-emerald-100/90"
              >
                Our Process
              </a>
              <a 
                href="#products" 
                className="transition-colors hover:text-amber-400 text-emerald-100/90"
              >
                Our Products
              </a>
              <a 
                href="#quality" 
                className="transition-colors hover:text-amber-400 text-emerald-100/90"
              >
                Quality
              </a>
              <a 
                href="#markets" 
                className="transition-colors hover:text-amber-400 text-emerald-100/90"
              >
                Markets
              </a>
              <a 
                href="#contact" 
                className="transition-colors hover:text-amber-400 text-emerald-100/90"
              >
                Contact
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden sm:flex items-center space-x-4">
              <a 
                href="#contact" 
                className="bg-amber-600 hover:bg-amber-500 text-white px-5 py-2.5 rounded-sm text-[11px] font-bold uppercase tracking-widest transition-colors focus:outline-none focus:ring-1 focus:ring-amber-500"
              >
                Get a Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-amber-500 text-current"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6 text-white" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Panel */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-emerald-950 border-t border-amber-600/30 text-white overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-3 font-medium text-xs uppercase tracking-widest">
                <a 
                  href="#about" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-sm hover:bg-emerald-900/80 hover:text-amber-400 transition-colors"
                >
                  About Us
                </a>
                <a 
                  href="#process" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-sm hover:bg-emerald-900/80 hover:text-amber-400 transition-colors"
                >
                  Our Process
                </a>
                <a 
                  href="#products" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-sm hover:bg-emerald-900/80 hover:text-amber-400 transition-colors"
                >
                  Our Products
                </a>
                <a 
                  href="#quality" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-sm hover:bg-emerald-900/80 hover:text-amber-400 transition-colors"
                >
                  Quality Assurance
                </a>
                <a 
                  href="#markets" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-sm hover:bg-emerald-900/80 hover:text-amber-400 transition-colors"
                >
                  Markets
                </a>
                <a 
                  href="#contact" 
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 rounded-sm hover:bg-emerald-900/80 hover:text-amber-400 transition-colors"
                >
                  Contact
                </a>
                <div className="pt-3 border-t border-amber-600/20">
                  <div className="text-[10px] text-emerald-200/50 uppercase tracking-widest font-black text-center mb-3">
                    Connect With Us
                  </div>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <a 
                      href="https://facebook.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="Facebook"
                      className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] transition-all flex items-center justify-center shadow-none"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://instagram.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="Instagram"
                      className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent transition-all flex items-center justify-center shadow-none"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://twitter.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="Twitter (X)"
                      className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center shadow-none"
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://linkedin.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="LinkedIn"
                      className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all flex items-center justify-center shadow-none"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://youtube.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="YouTube"
                      className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-all flex items-center justify-center shadow-none"
                    >
                      <Youtube className="w-4 h-4" />
                    </a>
                    <a 
                      href="https://telegram.org" 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="Telegram"
                      className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-[#24a1de] hover:text-white hover:border-[#24a1de] transition-all flex items-center justify-center shadow-none"
                    >
                      <Send className="w-4 h-4 -rotate-45 -translate-x-0.5" />
                    </a>
                    <a 
                      href="https://tiktok.com" 
                      target="_blank" 
                      rel="noreferrer" 
                      aria-label="TikTok"
                      className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center shadow-none"
                    >
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12.525.02c1.31.01 2.61-.01 3.91.02.08 1.53.63 3.02 1.59 4.23.83.99 1.95 1.7 3.2 2.05.01 1.25.01 2.5 0 3.75-1.16-.16-2.27-.67-3.17-1.42a8.55 8.55 0 0 1-1.53-1.67V15a8.12 8.12 0 0 1-8.13 8.13 8.12 8.12 0 0 1-8.13-8.13A8.12 8.12 0 0 1 12 6.89c.01 1.43-.02 2.87.01 4.3a3.81 3.81 0 0 0-3.81 3.81 3.81 3.81 0 0 0 3.81 3.81 3.81 3.81 0 0 0 3.81-3.81V0c-1.1-.01-2.2.02-3.3-.01v.03z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* 2. HERO SECTION (3-Slide Professional Interactive Slider) */}
      <section 
        id="hero-section"
        className="relative min-h-[92vh] flex items-center justify-center bg-emerald-950 text-white pt-24 overflow-hidden select-none"
      >
        {/* Geometric Grid dots background */}
        <div className="absolute inset-0 z-10 opacity-15 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]"></div>

        {/* Slides Content Container */}
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            {currentSlide === 0 ? (
              <motion.div
                key="slide-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0"
              >
                <img 
                  src="/images/ethiopian_highlands_pasture.jpg" 
                  alt="Ethiopian Highlands Pasture" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-25 scale-100 transition-transform duration-10000 ease-out"
                />
                {/* High contrast structural gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/90 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent"></div>
              </motion.div>
            ) : currentSlide === 1 ? (
              <motion.div
                key="slide-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-emerald-950/40"
              >
                <img 
                  src="/images/premium_beef_steak.jpg" 
                  alt="Premium Grass-Fed Beef" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-30 scale-100 transition-transform duration-10000 ease-out"
                />
                {/* High contrast structural gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/95 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent"></div>
              </motion.div>
            ) : (
              <motion.div
                key="slide-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 bg-emerald-950/40"
              >
                <img 
                  src="/images/premium_lamb_chops.jpg" 
                  alt="Premium Export Mutton & Sheep" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-30 scale-100 transition-transform duration-10000 ease-out"
                />
                {/* High contrast structural gradient */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-emerald-950/95 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Slider Controls */}
        <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-20 px-4 md:px-8 flex justify-between pointer-events-none">
          <button 
            onClick={() => setCurrentSlide((prev) => (prev === 0 ? 2 : prev - 1))}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-amber-500 bg-emerald-950/40 hover:bg-amber-600 hover:text-white transition-all flex items-center justify-center text-white/70 backdrop-blur-sm pointer-events-auto shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={() => setCurrentSlide((prev) => (prev === 2 ? 0 : prev + 1))}
            className="w-10 h-10 rounded-full border border-white/10 hover:border-amber-500 bg-emerald-950/40 hover:bg-amber-600 hover:text-white transition-all flex items-center justify-center text-white/70 backdrop-blur-sm pointer-events-auto shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Slide Bullets */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3 bg-emerald-950/40 px-4 py-2 rounded-full border border-white/5 backdrop-blur-sm">
          <button 
            onClick={() => setCurrentSlide(0)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === 0 ? 'bg-amber-500 w-6' : 'bg-white/40 hover:bg-white/80'}`}
            aria-label="Go to Slide 1"
          />
          <button 
            onClick={() => setCurrentSlide(1)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === 1 ? 'bg-amber-500 w-6' : 'bg-white/40 hover:bg-white/80'}`}
            aria-label="Go to Slide 2"
          />
          <button 
            onClick={() => setCurrentSlide(2)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === 2 ? 'bg-amber-500 w-6' : 'bg-white/40 hover:bg-white/80'}`}
            aria-label="Go to Slide 3"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 w-full">
          <AnimatePresence mode="wait">
            {currentSlide === 0 ? (
              <motion.div 
                key="content-0"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-block px-3 py-1 bg-red-800 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 rounded-sm text-white">
                    Ethiopian Premier Grade
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-display font-black leading-[1.05] tracking-tight text-white uppercase">
                    Premium Chilled <br className="hidden sm:inline" />
                    <span className="text-amber-400">Meat Export</span>
                  </h1>

                  <p className="text-sm sm:text-base text-emerald-100/80 max-w-xl font-light leading-relaxed">
                    &ldquo;Safe, fresh, and world-class livestock products from the lush highlands of Ethiopia to your global table.&rdquo; Sourced with deep care, verified under rigid veterinary health certifications, and certified 100% Halal.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <a 
                      href="#products" 
                      className="px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-sm text-xs uppercase tracking-widest transition-colors flex items-center justify-center space-x-2 group"
                    >
                      <span>Explore Our Products</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href="#process" 
                      className="px-6 py-3.5 bg-transparent hover:bg-white/10 border border-white/20 text-white font-bold rounded-sm text-xs uppercase tracking-widest transition-colors text-center"
                    >
                      Our Process
                    </a>
                  </div>
                </div>

                {/* Desktop side graphic/visual element */}
                <div className="hidden lg:block lg:col-span-5">
                  <div className="relative bg-emerald-900/60 p-8 rounded-sm border-l-4 border-amber-500 shadow-xl overflow-hidden backdrop-blur-sm">
                    {/* Visual Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10 space-y-6">
                      <div className="w-10 h-10 rounded-sm bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
                        <Thermometer className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-black text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3">Chilled Freshness Flow</h3>
                      <p className="text-xs text-emerald-100/70 leading-relaxed font-light">
                        Our high-end logistics system guarantees a flawless temperature margin between <strong className="text-amber-400">0°C to 4°C</strong> from pasture sourcing through flight transport, preserving prime taste and absolute sanitary hygiene.
                      </p>
                      
                      <div className="pt-2 space-y-3">
                        <div className="flex items-center space-x-2.5 text-xs text-emerald-100">
                          <Check className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="font-medium">Sourced from Borena & Highlands</span>
                        </div>
                        <div className="flex items-center space-x-2.5 text-xs text-emerald-100">
                          <Check className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="font-medium">100% Halal Certified Slaughtering</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            ) : currentSlide === 1 ? (
              <motion.div 
                key="content-1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-block px-3 py-1 bg-amber-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 rounded-sm text-emerald-950">
                    Uninterrupted Cold Logistics
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-display font-black leading-[1.05] tracking-tight text-white uppercase">
                    Unbroken Cold <br className="hidden sm:inline" />
                    <span className="text-amber-400">Chain Delivery</span>
                  </h1>

                  <p className="text-sm sm:text-base text-emerald-100/80 max-w-xl font-light leading-relaxed">
                    Our state-of-the-art logistics pipeline ensures temperature-controlled dispatch from ISO-certified processing facilities directly to target global airport terminals within 24 to 48 hours, locking in supreme freshness.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <a 
                      href="#contact" 
                      className="px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-sm text-xs uppercase tracking-widest transition-colors flex items-center justify-center space-x-2 group"
                    >
                      <span>Get Export Quote</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href="#markets" 
                      className="px-6 py-3.5 bg-transparent hover:bg-white/10 border border-white/20 text-white font-bold rounded-sm text-xs uppercase tracking-widest transition-colors text-center"
                    >
                      Our Markets
                    </a>
                  </div>
                </div>

                {/* Desktop side graphic/visual element */}
                <div className="hidden lg:block lg:col-span-5">
                  <div className="relative bg-emerald-900/60 p-8 rounded-sm border-l-4 border-amber-500 shadow-xl overflow-hidden backdrop-blur-sm">
                    {/* Visual Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10 space-y-6">
                      <div className="w-10 h-10 rounded-sm bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
                        <Truck className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-black text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3">24-48h Global Speed</h3>
                      <p className="text-xs text-emerald-100/70 leading-relaxed font-light">
                        Carcasses are instantly blast-chilled, vacuum-sealed under strict hygiene codes, and loaded into automated climate-tracked reefers to ensure zero thermal fluctuation before boarding cargo flights.
                      </p>
                      
                      <div className="pt-2 space-y-3">
                        <div className="flex items-center space-x-2.5 text-xs text-emerald-100">
                          <Check className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="font-medium">Unbroken Cold Chain &lt; 4°C</span>
                        </div>
                        <div className="flex items-center space-x-2.5 text-xs text-emerald-100">
                          <Check className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="font-medium">Direct Flights to Saudi Arabia & Jordan</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            ) : (
              <motion.div 
                key="content-2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
              >
                
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-block px-3 py-1 bg-amber-500 text-[10px] font-bold uppercase tracking-[0.3em] mb-2 rounded-sm text-emerald-950">
                    Sourcing Sincerity
                  </div>

                  <h1 className="text-4xl sm:text-5xl md:text-6.5xl font-display font-black leading-[1.05] tracking-tight text-white uppercase">
                    Ethical Grazing <br className="hidden sm:inline" />
                    <span className="text-amber-400">&amp; 100% Halal</span>
                  </h1>

                  <p className="text-sm sm:text-base text-emerald-100/80 max-w-xl font-light leading-relaxed">
                    Our premium livestock browse freely in the chemical-free pastures of the Borena Basin and high plains. All processing is hand-slaughtered by certified practitioners in absolute compliance with strict Halal and ISO 22000 rules.
                  </p>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
                    <a 
                      href="#quality" 
                      className="px-6 py-3.5 bg-amber-600 hover:bg-amber-500 text-white font-bold rounded-sm text-xs uppercase tracking-widest transition-colors flex items-center justify-center space-x-2 group"
                    >
                      <span>Quality &amp; Standards</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a 
                      href="#about" 
                      className="px-6 py-3.5 bg-transparent hover:bg-white/10 border border-white/20 text-white font-bold rounded-sm text-xs uppercase tracking-widest transition-colors text-center"
                    >
                      About Our Mission
                    </a>
                  </div>
                </div>

                {/* Desktop side graphic/visual element */}
                <div className="hidden lg:block lg:col-span-5">
                  <div className="relative bg-emerald-900/60 p-8 rounded-sm border-l-4 border-amber-500 shadow-xl overflow-hidden backdrop-blur-sm">
                    {/* Visual Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 rounded-full blur-3xl"></div>

                    <div className="relative z-10 space-y-6">
                      <div className="w-10 h-10 rounded-sm bg-amber-500/20 flex items-center justify-center text-amber-400 border border-amber-500/30">
                        <Award className="w-5 h-5" />
                      </div>
                      <h3 className="font-display font-black text-xs uppercase tracking-widest text-white border-b border-white/10 pb-3">Traceable & Pure</h3>
                      <p className="text-xs text-emerald-100/70 leading-relaxed font-light">
                        Every export batch is fully vetted by veterinary officers and verified with official animal health certificates from the Ministry of Agriculture, ensuring total safety confidence.
                      </p>
                      
                      <div className="pt-2 space-y-3">
                        <div className="flex items-center space-x-2.5 text-xs text-emerald-100">
                          <Check className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="font-medium">100% Free-Range Sourced Livestock</span>
                        </div>
                        <div className="flex items-center space-x-2.5 text-xs text-emerald-100">
                          <Check className="w-4 h-4 text-amber-400 shrink-0" />
                          <span className="font-medium">Accredited Halal Export Facilities</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </motion.div>
            )}
          </AnimatePresence>

          {/* Key Trust Badges Grid */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <h3 className="text-[10px] font-black text-amber-500 uppercase tracking-[0.25em] mb-6 text-center lg:text-left">
              Our Core Quality Standards
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-emerald-900/30">
              
              <div id="trust-badge-quality" className="flex items-start space-x-3.5 bg-emerald-900/40 p-5 border border-white/5 hover:border-amber-500/20 transition-all">
                <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Premium Quality</h4>
                  <p className="text-[11px] text-emerald-200/60 mt-1">International export standards guaranteed.</p>
                </div>
              </div>

              <div id="trust-badge-coldchain" className="flex items-start space-x-3.5 bg-emerald-900/40 p-5 border border-white/5 hover:border-amber-500/20 transition-all">
                <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Thermometer className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Chilled 0-4°C</h4>
                  <p className="text-[11px] text-emerald-200/60 mt-1">Strict, uninterrupted cold chain flow.</p>
                </div>
              </div>

              <div id="trust-badge-safety" className="flex items-start space-x-3.5 bg-emerald-900/40 p-5 border border-white/5 hover:border-amber-500/20 transition-all">
                <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Shield className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Food Safety</h4>
                  <p className="text-[11px] text-emerald-200/60 mt-1">HACCP certified, hygienic processing.</p>
                </div>
              </div>

              <div id="trust-badge-reach" className="flex items-start space-x-3.5 bg-emerald-900/40 p-5 border border-white/5 hover:border-amber-500/20 transition-all">
                <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xs font-black text-white uppercase tracking-wider">Global Reach</h4>
                  <p className="text-[11px] text-emerald-200/60 mt-1">Trusted worldwide with punctual delivery.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* 3. ABOUT US SECTION */}
      <section id="about" className="py-20 bg-[#fbf9f4] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-block px-3 py-1 bg-emerald-900 text-white font-black tracking-[0.2em] text-[10px] uppercase rounded-sm">
                Who We Are
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 leading-none uppercase">
                Pioneering Ethiopian <br />
                Chilled Meat Export
              </h2>
              <div className="w-16 h-1 bg-amber-500"></div>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Mirra Export Trading PLC is a leading Ethiopian meat export company specializing in the production and export of premium chilled meat products. We source high-quality livestock from Ethiopia&apos;s most renowned livestock-producing regions and follow a carefully managed process from livestock selection to international delivery.
              </p>
              <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                Our operations integrate advanced agricultural practices with fair-trade models, elevating rural farming communities while feeding global demands with pure, organic highland meat.
              </p>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Vision Box */}
              <div id="about-vision-box" className="bg-white p-8 rounded-sm border-l-4 border-amber-500 border-y border-r border-slate-200/80 shadow-none hover:bg-slate-50/50 transition-colors flex flex-col justify-between h-full relative overflow-hidden group">
                <div className="space-y-4">
                  <div className="w-10 h-10 rounded-sm bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600">
                    <Globe className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-black text-sm text-slate-900 uppercase tracking-widest">
                    Our Vision
                  </h3>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    To become one of the most trusted and preferred exporters of premium Ethiopian chilled meat products in international markets.
                  </p>
                </div>
                <div className="mt-6 text-[10px] text-emerald-900 font-bold uppercase tracking-widest flex items-center space-x-1">
                  <span>Reliable Growth</span>
                  <ChevronRight className="w-3 h-3" />
                </div>
              </div>

              {/* Mission Box */}
              <div id="about-mission-box" className="bg-emerald-950 text-white p-8 rounded-sm border-l-4 border-red-800 border-y border-r border-emerald-900 shadow-none relative overflow-hidden group">
                <div className="space-y-4 relative z-10">
                  <div className="w-10 h-10 rounded-sm bg-amber-500 flex items-center justify-center text-emerald-950">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-black text-sm text-amber-400 uppercase tracking-widest">
                    Our Mission
                  </h3>
                  <ul className="space-y-3 text-[11px] text-emerald-100/80 font-light">
                    <li className="flex items-start space-x-2">
                      <span className="w-1 h-1 bg-amber-400 shrink-0 mt-1.5"></span>
                      <span>Provide premium-quality chilled meat products complying with international food safety standards.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1 h-1 bg-amber-400 shrink-0 mt-1.5"></span>
                      <span>Build sustainable, trust-based partnerships with customers worldwide.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1 h-1 bg-amber-400 shrink-0 mt-1.5"></span>
                      <span>Contribute to Ethiopia&apos;s economic development through responsible, eco-safe export activities.</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <span className="w-1 h-1 bg-amber-400 shrink-0 mt-1.5"></span>
                      <span>Support livestock producers and local communities through fair and sustainable sourcing practices.</span>
                    </li>
                  </ul>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* 4. OUR PRODUCTION & EXPORT PROCESS */}
      <section id="process" className="py-20 bg-[#fdfcf9] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="inline-block px-3 py-1 bg-red-800 text-white font-black tracking-[0.2em] text-[10px] uppercase rounded-sm">
              Step-by-Step Excellence
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 leading-tight uppercase">
              Our Certified Supply Chain Process
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We govern every link of our chilled meat pipeline, from strict highland pasture selection to final flight delivery, guaranteeing fresh, high-grade organic meat.
            </p>
          </div>

          {/* Interactive Process Block */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Step Selection List (Left Pane) */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="bg-slate-50 p-4 rounded-sm border border-slate-200">
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] px-3 mb-3 flex items-center justify-between">
                  <span>Roadmap Navigation</span>
                  <span className="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                </div>
                <div className="max-h-[500px] overflow-y-auto pr-2 space-y-1.5 scrollbar-thin scrollbar-thumb-slate-200 scrollbar-track-transparent">
                  {processSteps.map((item, index) => {
                    const IconComp = item.icon;
                    const isActive = index === activeStep;
                    return (
                      <button
                        key={item.step}
                        id={`process-step-btn-${item.step}`}
                        onClick={() => setActiveStep(index)}
                        className={`w-full text-left p-3 rounded-sm transition-all flex items-center justify-between group focus:outline-none focus:ring-1 focus:ring-emerald-900 border-l-4 ${
                          isActive 
                            ? 'bg-emerald-950 text-white border-amber-500 shadow-none' 
                            : 'hover:bg-slate-100 text-slate-700 border-transparent'
                        }`}
                      >
                        <div className="flex items-center space-x-3 min-w-0">
                          <span className={`w-6 h-6 rounded-sm text-[10px] font-black flex items-center justify-center shrink-0 transition-colors ${
                            isActive 
                              ? 'bg-amber-500 text-slate-950' 
                              : 'bg-emerald-100 text-emerald-800 group-hover:bg-emerald-200'
                          }`}>
                            {item.step}
                          </span>
                          <div className="truncate text-[11px] font-bold uppercase tracking-wider">
                            {item.title}
                          </div>
                        </div>
                        <IconComp className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                          isActive ? 'text-amber-400 rotate-3 scale-105' : 'text-slate-400 group-hover:text-emerald-950'
                        }`} />
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Dynamic Detail Card (Right Pane) */}
            <div className="lg:col-span-7 h-full">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeStep}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -15 }}
                  transition={{ duration: 0.25 }}
                  id={`process-detail-card-${activeStep + 1}`}
                  className="bg-white border border-slate-200 p-8 sm:p-10 rounded-sm shadow-none h-full flex flex-col justify-between relative overflow-hidden border-l-4 border-emerald-900"
                >
                  <div className="space-y-6">
                    
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <div className="space-y-1.5">
                        <span className="text-[10px] font-black text-amber-700 uppercase tracking-widest bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-sm">
                          Step {processSteps[activeStep].step} of 11
                        </span>
                        <h3 className="text-xl sm:text-2xl font-display font-black text-slate-900 uppercase tracking-tight pt-1.5">
                          {processSteps[activeStep].title}
                        </h3>
                      </div>
                      
                      <div className="w-12 h-12 rounded-sm bg-emerald-950 flex items-center justify-center text-amber-400 shrink-0 shadow-none border border-emerald-900">
                        {(() => {
                          const IconComp = processSteps[activeStep].icon;
                          return <IconComp className="w-5 h-5" />;
                        })()}
                      </div>
                    </div>

                    <div className="border-t border-slate-200 pt-4">
                      <p className="text-slate-700 leading-relaxed text-xs sm:text-sm">
                        {processSteps[activeStep].detail}
                      </p>
                    </div>

                    {/* Highlights / Badges */}
                    <div className="space-y-2.5 pt-2">
                      <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-wider">
                        Key Safeguards
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {processSteps[activeStep].highlights.map((highlight, i) => (
                          <span 
                            key={i} 
                            className="bg-slate-50 border border-slate-200 text-emerald-950 text-xs font-bold px-3.5 py-1.5 rounded-sm flex items-center space-x-1.5"
                          >
                            <span className="w-1.5 h-1.5 bg-amber-500 shrink-0"></span>
                            <span>{highlight}</span>
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Navigation Footer for interactive pane */}
                  <div className="mt-8 pt-6 border-t border-slate-200 flex items-center justify-between">
                    <button
                      onClick={() => setActiveStep(prev => prev > 0 ? prev - 1 : processSteps.length - 1)}
                      className="text-xs font-black text-emerald-950 hover:text-emerald-800 transition-colors px-3 py-1.5 hover:bg-slate-100 rounded-sm focus:outline-none uppercase tracking-widest"
                    >
                      ← Previous
                    </button>
                    
                    <div className="flex space-x-1.5">
                      {processSteps.map((_, i) => (
                        <span 
                          key={i} 
                          className={`h-1.5 transition-all rounded-none ${
                            i === activeStep ? 'w-4 bg-emerald-900' : 'w-1.5 bg-slate-200'
                          }`}
                        />
                      ))}
                    </div>

                    <button
                      onClick={() => setActiveStep(prev => prev < processSteps.length - 1 ? prev + 1 : 0)}
                      className="text-xs font-black text-white bg-emerald-950 hover:bg-emerald-900 transition-colors px-4 py-2 rounded-sm flex items-center space-x-1 focus:outline-none uppercase tracking-widest"
                    >
                      <span>Next</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </motion.div>
              </AnimatePresence>
            </div>

          </div>

        </div>
      </section>

      {/* 5. OUR PRODUCTS SECTION */}
      <section id="products" className="py-20 bg-[#fbf9f4] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="space-y-3">
              <span className="inline-block px-3 py-1 bg-emerald-900 text-white font-black tracking-[0.2em] text-[10px] uppercase rounded-sm">
                Pure Livestock Sourcing
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 uppercase">
                Premium Chilled Meat Categories
              </h2>
              <p className="text-slate-600 text-xs sm:text-sm max-w-xl">
                We select our livestock from pristine, clean, chemical-free pasture highlands and Southern valleys. Fully veterinary checked and professionally graded.
              </p>
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-1.5 shrink-0">
              {(['all', 'cattle', 'goats', 'sheep'] as const).map((category) => (
                <button
                  key={category}
                  onClick={() => setProductCategory(category)}
                  className={`px-4 py-2 rounded-sm text-[10px] font-black uppercase tracking-widest transition-all focus:outline-none focus:ring-1 focus:ring-emerald-900 ${
                    productCategory === category
                      ? 'bg-emerald-950 text-white border border-emerald-950'
                      : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-100'
                  }`}
                >
                  {category === 'all' ? 'All Products' : category}
                </button>
              ))}
            </div>
          </div>

          {/* Product cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredProducts.map((product) => (
                <motion.div
                  layout
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  id={`product-card-${product.id}`}
                  className="bg-white rounded-sm border border-slate-200 shadow-none overflow-hidden hover:border-amber-500 transition-all flex flex-col justify-between h-full group"
                >
                  <div>
                    {/* Product Image */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100 border-b border-slate-100">
                      <img 
                        src={product.image} 
                        alt={product.name}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/25 to-transparent"></div>
                    </div>

                    {/* Top graphic accent representing fresh pastoral meat */}
                    <div className="h-1 bg-gradient-to-r from-emerald-900 via-amber-500 to-red-800"></div>

                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider bg-slate-100 px-2 py-0.5 rounded-sm">
                          {product.category}
                        </span>
                        
                        <span className="bg-amber-500/10 border border-amber-500/20 text-amber-800 text-[9px] font-black uppercase tracking-wider px-2 py-0.5 rounded-sm">
                          {product.badge}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <h3 className="text-base font-display font-black text-slate-900 uppercase tracking-wide group-hover:text-emerald-900 transition-colors">
                          {product.name}
                        </h3>
                        <div className="flex items-center space-x-1.5 text-[11px] text-slate-500 font-medium">
                          <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span>Origin: {product.origin}</span>
                        </div>
                      </div>

                      <p className="text-slate-600 text-xs leading-relaxed">
                        {product.desc}
                      </p>
                    </div>
                  </div>

                  <div className="p-6 bg-slate-50/55 border-t border-slate-200/60 space-y-4">
                    
                    <div className="flex items-center justify-between text-[11px] font-bold text-slate-700 uppercase tracking-wide">
                      <span>Target Live Weight:</span>
                      <span className="text-emerald-900 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-sm text-[10px] font-black">
                        {product.weight}
                      </span>
                    </div>

                    {/* Features list */}
                    <div className="space-y-2 border-t border-slate-200/50 pt-3">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center space-x-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-emerald-800 shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2">
                      <a 
                        href="#contact"
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            productInterest: `${product.name} Request`
                          }));
                        }}
                        className="w-full py-2.5 text-center bg-white hover:bg-emerald-950 hover:text-white border border-slate-300 hover:border-emerald-950 text-slate-800 font-black rounded-sm text-[10px] uppercase tracking-widest block transition-colors"
                      >
                        Inquire About This Category
                      </a>
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Quick Note about customized export specifications */}
          <div className="mt-12 text-left bg-emerald-950 text-white rounded-sm p-6 shadow-none max-w-4xl mx-auto border-l-4 border-amber-500 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs sm:text-sm leading-relaxed">
                💡 <strong className="text-amber-400">Custom Butchery & Cuts:</strong> We prepare orders matching specific customer parameters, such as average weight, tail-cut configurations, and particular primary fat trims. Contact our sales office for tailored export deals.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 6. QUALITY ASSURANCE SECTION */}
      <section id="quality" className="py-20 bg-[#fdfcf9] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
            <span className="inline-block px-3 py-1 bg-red-800 text-white font-black tracking-[0.2em] text-[10px] uppercase rounded-sm">
              Absolute Food Safety
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 uppercase leading-none">
              Our Uncompromised Quality Commitments
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              We operate under international food processing guidelines to assure clean, healthy, and highly fresh chilled meat packages to worldwide border posts.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* QA 1 */}
            <div id="qa-card-veterinary" className="bg-slate-50 p-7.5 rounded-sm border border-slate-200 flex flex-col justify-between hover:bg-white hover:border-amber-500 transition-all shadow-none group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-sm bg-emerald-950 text-white flex items-center justify-center border border-emerald-900 shrink-0">
                  <Shield className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-display font-black text-sm uppercase tracking-wider text-slate-900 group-hover:text-emerald-900 transition-colors">
                  Veterinary Health Certification
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  Every consignment is strictly accompanied by legal Veterinary Health Certificates signed by authorized government veterinary officers, guaranteeing zero pathogens.
                </p>
              </div>
              <div className="mt-6 text-[10px] font-bold text-emerald-950 uppercase tracking-widest flex items-center space-x-1.5 border-t border-slate-200 pt-4">
                <span className="w-1.5 h-1.5 bg-amber-500"></span>
                <span>Government Clearance Certified</span>
              </div>
            </div>

            {/* QA 2 */}
            <div id="qa-card-haccp" className="bg-slate-50 p-7.5 rounded-sm border border-slate-200 flex flex-col justify-between hover:bg-white hover:border-amber-500 transition-all shadow-none group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-sm bg-emerald-950 text-white flex items-center justify-center border border-emerald-900 shrink-0">
                  <CheckSquare className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-display font-black text-sm uppercase tracking-wider text-slate-900 group-hover:text-emerald-900 transition-colors">
                  Food Safety Compliance
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  We enforce a rigid Hazard Analysis Critical Control Point (HACCP) system inside our abattoir facilities, keeping chemical and organic safety records fully up to date.
                </p>
              </div>
              <div className="mt-6 text-[10px] font-bold text-emerald-950 uppercase tracking-widest flex items-center space-x-1.5 border-t border-slate-200 pt-4">
                <span className="w-1.5 h-1.5 bg-amber-500"></span>
                <span>HACCP Systems Implemented</span>
              </div>
            </div>

            {/* QA 3 */}
            <div id="qa-card-hygiene" className="bg-slate-50 p-7.5 rounded-sm border border-slate-200 flex flex-col justify-between hover:bg-white hover:border-amber-500 transition-all shadow-none group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-sm bg-emerald-950 text-white flex items-center justify-center border border-emerald-900 shrink-0">
                  <Scissors className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-display font-black text-sm uppercase tracking-wider text-slate-900 group-hover:text-emerald-900 transition-colors">
                  Hygienic Processing
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  Strict personnel dress codes, continuous sanitizing of processing tables, and medical screenings of our staff ensure that biological safety parameters remain absolute.
                </p>
              </div>
              <div className="mt-6 text-[10px] font-bold text-emerald-950 uppercase tracking-widest flex items-center space-x-1.5 border-t border-slate-200 pt-4">
                <span className="w-1.5 h-1.5 bg-amber-500"></span>
                <span>Sterilized Slaughter Flow</span>
              </div>
            </div>

            {/* QA 4 */}
            <div id="qa-card-monitoring" className="bg-slate-50 p-7.5 rounded-sm border border-slate-200 flex flex-col justify-between hover:bg-white hover:border-amber-500 transition-all shadow-none group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-sm bg-emerald-950 text-white flex items-center justify-center border border-emerald-900 shrink-0">
                  <Eye className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-display font-black text-sm uppercase tracking-wider text-slate-900 group-hover:text-emerald-900 transition-colors">
                  Continuous Quality Monitoring
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  Regular carcass temperature verification, microbiological inspections, and pH levels monitoring guarantee that fresh meat remains perfectly wholesome and safe.
                </p>
              </div>
              <div className="mt-6 text-[10px] font-bold text-emerald-950 uppercase tracking-widest flex items-center space-x-1.5 border-t border-slate-200 pt-4">
                <span className="w-1.5 h-1.5 bg-amber-500"></span>
                <span>Active QA Lab Verification</span>
              </div>
            </div>

            {/* QA 5 */}
            <div id="qa-card-coldstorage" className="bg-slate-50 p-7.5 rounded-sm border border-slate-200 flex flex-col justify-between hover:bg-white hover:border-amber-500 transition-all shadow-none group">
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-sm bg-emerald-950 text-white flex items-center justify-center border border-emerald-900 shrink-0">
                  <Thermometer className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-display font-black text-sm uppercase tracking-wider text-slate-900 group-hover:text-emerald-900 transition-colors">
                  Temperature-Controlled Storage
                </h3>
                <p className="text-slate-600 text-xs leading-relaxed font-light">
                  Immediately after grading, carcasses are placed in blast chilling and cold-storage chambers continuously kept under 4°C to seal hydration, texture, and flavor.
                </p>
              </div>
              <div className="mt-6 text-[10px] font-bold text-emerald-950 uppercase tracking-widest flex items-center space-x-1.5 border-t border-slate-200 pt-4">
                <span className="w-1.5 h-1.5 bg-amber-500"></span>
                <span>Chamber Range: 0°C to 4°C</span>
              </div>
            </div>

            {/* QA 6 */}
            <div id="qa-card-transport" className="bg-emerald-950 p-7.5 rounded-sm border-l-4 border-amber-500 border-y border-r border-emerald-900 text-white flex flex-col justify-between shadow-none group relative overflow-hidden">
              <div className="space-y-4 relative z-10">
                <div className="w-10 h-10 rounded-sm bg-amber-500 text-emerald-950 flex items-center justify-center">
                  <Truck className="w-5 h-5" />
                </div>
                <h3 className="font-display font-black text-sm uppercase tracking-wider text-amber-400">
                  Cold Chain Transportation
                </h3>
                <p className="text-emerald-100/70 text-xs leading-relaxed font-light">
                  Our refrigerated vans and cold-freight processes guarantee that meat temperature never fluctuates during land transfer to air-freight cargo bays, keeping shelf life extended.
                </p>
              </div>
              <div className="mt-6 text-[10px] font-bold text-amber-400 uppercase tracking-widest flex items-center space-x-1.5 border-t border-emerald-900/60 pt-4 relative z-10 font-black">
                <span className="w-1.5 h-1.5 bg-amber-500"></span>
                <span>Uninterrupted Cold Logistics</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. INTERNATIONAL MARKETS */}
      <section id="markets" className="py-20 bg-emerald-950 text-white relative overflow-hidden border-b border-amber-600/20">
        {/* Visual maps background / vector nodes representation */}
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIgZmlsbD0id2hpdGUiLz48L3N2Zz4=')]"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-block px-3 py-1 bg-red-800 text-white font-black tracking-[0.2em] text-[10px] uppercase rounded-sm">
                Global Logistics Partner
              </div>
              <h2 className="text-3xl sm:text-4xl font-display font-black leading-tight uppercase">
                Serving Global Markets <br />
                <span className="text-amber-400">
                  Your Sourcing Partner
                </span>
              </h2>
              <p className="text-emerald-100/80 text-xs sm:text-sm leading-relaxed font-light">
                We are proud to stand as a reliable, state-certified supplier of prime chilled meat across strategic international destinations. Our swift cold logistics pipeline connects the fertile heartlands of East Africa straight to global kitchen tables.
              </p>

              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-amber-500 uppercase tracking-widest">
                  Strategic Export Regions Highlighted
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-3 bg-emerald-900/60 border border-white/5 p-3.5 rounded-sm">
                    <div className="w-8 h-8 rounded-sm bg-amber-500 text-emerald-950 flex items-center justify-center font-black text-xs">
                      SA
                    </div>
                    <div>
                      <span className="text-xs font-black text-white uppercase tracking-wider">Saudi Arabia</span>
                      <p className="text-[10px] text-emerald-200/60">Major Port Of Entry Deals</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-emerald-900/60 border border-white/5 p-3.5 rounded-sm">
                    <div className="w-8 h-8 rounded-sm bg-amber-500 text-emerald-950 flex items-center justify-center font-black text-xs">
                      JO
                    </div>
                    <div>
                      <span className="text-xs font-black text-white uppercase tracking-wider">Jordan</span>
                      <p className="text-[10px] text-emerald-200/60">Hygienic Consignments</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 bg-emerald-900/60 border border-white/5 p-3.5 rounded-sm sm:col-span-2">
                    <div className="w-8 h-8 rounded-sm bg-amber-500 text-emerald-950 flex items-center justify-center font-black text-xs">
                      ME
                    </div>
                    <div>
                      <span className="text-xs font-black text-white uppercase tracking-wider">Broader Middle East & Gulf Cooperatives</span>
                      <p className="text-[10px] text-emerald-200/60">Direct air freight shipments within 24-48 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Logistics Pathway Map */}
            <div className="lg:col-span-6">
              <div className="bg-emerald-900/40 border border-white/10 p-8 rounded-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-2xl"></div>
                
                <h3 className="font-display font-black text-xs uppercase tracking-widest text-white mb-6 flex items-center space-x-2 border-b border-white/10 pb-3">
                  <Truck className="w-4 h-4 text-amber-500" />
                  <span>Cold Chain Shipping Timeline</span>
                </h3>

                <div className="space-y-6 relative before:absolute before:inset-y-2 before:left-[11px] before:w-px before:bg-amber-500/30">
                  
                  {/* Step 1 */}
                  <div className="flex items-start space-x-4 relative">
                    <div className="w-6 h-6 rounded-none bg-emerald-950 border border-amber-500/50 flex items-center justify-center font-black text-[10px] text-amber-400 z-10 shrink-0">
                      1
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest">0-6 Hours</span>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider mt-0.5">Sourcing & Quarantine</h4>
                      <p className="text-[11px] text-emerald-200/60 mt-1 leading-relaxed">
                        Cattle & Sheep sourced from lush grasslands, fully verified at state-monitored quarantine feedlots.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="flex items-start space-x-4 relative">
                    <div className="w-6 h-6 rounded-none bg-emerald-950 border border-amber-500/50 flex items-center justify-center font-black text-[10px] text-amber-400 z-10 shrink-0">
                      2
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest">6-12 Hours</span>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider mt-0.5">Hygienic Halal Slaughtering</h4>
                      <p className="text-[11px] text-emerald-200/60 mt-1 leading-relaxed">
                        ISO-certified processing and rapid blast-chilling at 0-4°C lock in premium freshness.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="flex items-start space-x-4 relative">
                    <div className="w-6 h-6 rounded-none bg-emerald-950 border border-amber-500/50 flex items-center justify-center font-black text-[10px] text-amber-400 z-10 shrink-0">
                      3
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest">12-24 Hours</span>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider mt-0.5">Air Cargo Boarding</h4>
                      <p className="text-[11px] text-emerald-200/60 mt-1 leading-relaxed">
                        Refrigerated delivery trucks load packaged cases straight to international air freight cargo bays.
                      </p>
                    </div>
                  </div>

                  {/* Step 4 */}
                  <div className="flex items-start space-x-4 relative">
                    <div className="w-6 h-6 rounded-none bg-emerald-950 border border-amber-500/55 flex items-center justify-center font-black text-[10px] text-amber-400 z-10 shrink-0">
                      4
                    </div>
                    <div>
                      <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest">Destination Arrival</span>
                      <h4 className="text-xs font-black text-white uppercase tracking-wider mt-0.5">Customs Clearance & Delivery</h4>
                      <p className="text-[11px] text-emerald-200/60 mt-1 leading-relaxed">
                        Safe delivery at international markets within 24-48 hours, fully complying with target health specs.
                      </p>
                    </div>
                  </div>

                </div>

                <div className="mt-8 pt-6 border-t border-white/10 flex justify-around items-center text-center">
                  <div>
                    <span className="block font-display font-black text-lg text-amber-400">100%</span>
                    <span className="text-[9px] text-emerald-200/60 uppercase tracking-widest">Freshness Lock</span>
                  </div>
                  <div className="border-r border-white/10 h-8"></div>
                  <div>
                    <span className="block font-display font-black text-lg text-emerald-400">&lt; 48h</span>
                    <span className="text-[9px] text-emerald-200/60 uppercase tracking-widest">Air Delivery</span>
                  </div>
                  <div className="border-r border-white/10 h-8"></div>
                  <div>
                    <span className="block font-display font-black text-lg text-amber-400">0-4°C</span>
                    <span className="text-[9px] text-emerald-200/60 uppercase tracking-widest">Cold Chain</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 8. CONTACT & FOOTER (With local inquiries history tracker) */}
      <section id="contact" className="py-20 bg-[#fbf9f4] border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Contact Details Panel */}
            <div className="lg:col-span-5 space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-3 py-1 bg-red-800 text-white font-black tracking-[0.2em] text-[10px] uppercase rounded-sm">
                  Establish Connection
                </div>
                <h2 className="text-3xl sm:text-4xl font-display font-black text-slate-950 uppercase leading-none">
                  Ready to Support Your Business Needs
                </h2>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed font-light">
                  We look forward to building stable partnerships with meat wholesale clients, state purchasing bodies, and grocery retailers across international boundaries. Contact our export desk today.
                </p>
              </div>

              {/* Office Details Cards */}
              <div className="space-y-4">
                
                <div id="contact-info-address" className="bg-white border border-slate-200 p-4.5 rounded-sm flex items-start space-x-4 shadow-none">
                  <div className="w-10 h-10 rounded-sm bg-emerald-950 text-white flex items-center justify-center shrink-0 border border-emerald-900">
                    <MapPin className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Company Address</h4>
                    <p className="text-xs font-black text-slate-800 uppercase tracking-wider mt-1">
                      Mirra Export Trading PLC
                    </p>
                    <p className="text-xs text-slate-600 mt-0.5 font-light">
                      Bole Sub-City, Ward 03, Addis Ababa, Ethiopia
                    </p>
                  </div>
                </div>

                <div id="contact-info-email" className="bg-white border border-slate-200 p-4.5 rounded-sm flex items-start space-x-4 shadow-none">
                  <div className="w-10 h-10 rounded-sm bg-emerald-950 text-white flex items-center justify-center shrink-0 border border-emerald-900">
                    <Mail className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Direct Correspondence</h4>
                    <p className="text-xs font-black text-emerald-900 hover:underline mt-1 uppercase tracking-wider">
                      <a href="mailto:info@mirraexport.com">info@mirraexport.com</a>
                    </p>
                    <p className="text-xs text-slate-500 mt-0.5 font-light">
                      We respond to wholesale RFQs within 12 business hours.
                    </p>
                  </div>
                </div>

                <div id="contact-info-phone" className="bg-white border border-slate-200 p-4.5 rounded-sm flex items-start space-x-4 shadow-none">
                  <div className="w-10 h-10 rounded-sm bg-emerald-950 text-white flex items-center justify-center shrink-0 border border-emerald-900">
                    <Phone className="w-5 h-5 text-amber-400" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Business Telephone</h4>
                    <p className="text-xs font-black text-slate-800 mt-1 uppercase tracking-wider">
                      +251 11 661 2345
                    </p>
                    <p className="text-xs text-slate-600 font-light mt-0.5">
                      Mobile desk: +251 91 123 4567
                    </p>
                  </div>
                </div>

              </div>

              {/* Company HQ Location Map */}
              <div className="border border-slate-200 p-6 bg-white rounded-sm shadow-none space-y-4">
                <div className="space-y-1">
                  <span className="text-[9px] uppercase tracking-widest font-black text-amber-600">Global Headquarters</span>
                  <h3 className="font-display font-black text-base uppercase tracking-tight text-slate-900">
                    Our Location
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-light">
                    Visit our export division headquarters located in the central trade hub of Addis Ababa.
                  </p>
                </div>
                
                <div className="relative w-full h-[240px] rounded-sm overflow-hidden bg-slate-100 border border-slate-150">
                  <iframe 
                    title="Mirra Export Trading PLC Headquarters Location Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3940.548769396347!2d38.78345!3d9.0142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85cef5ab402d%3A0x84683c6db5a2d61a!2sBole%2C%20Addis%20Ababa%2C%20Ethiopia!5e0!3m2!1sen!2sus!4v1719400000000!5m2!1sen!2sus"
                    className="absolute inset-0 w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  ></iframe>
                </div>
                
                <div className="flex items-center space-x-2 py-2 px-3 bg-slate-50 border border-slate-100 rounded-sm">
                  <MapPin className="w-4 h-4 text-red-700 shrink-0" />
                  <span className="text-[10px] uppercase tracking-wider font-black text-slate-600">
                    Bole Sub-City, Addis Ababa, Ethiopia
                  </span>
                </div>
              </div>

            </div>

            {/* Right Contact Form Panel */}
            <div className="lg:col-span-7">
              <div className="bg-white border border-slate-200 p-8 rounded-sm shadow-none relative overflow-hidden">
                
                <h3 className="font-display font-black text-xs uppercase tracking-widest text-slate-900 mb-6 flex items-center space-x-2 border-b border-slate-150 pb-3">
                  <FileText className="w-4 h-4 text-emerald-900" />
                  <span>Request Export Quote / Ask a Question</span>
                </h3>

                <AnimatePresence mode="wait">
                  {!formSubmitted ? (
                    <motion.form 
                      key="contact-form"
                      onSubmit={handleSubmit} 
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                    >
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">
                            Contact Name <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="text" 
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({...formData, name: e.target.value})}
                            placeholder="John Doe"
                            className="w-full border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 bg-slate-50/50 uppercase tracking-wider font-medium text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">
                            Business Email <span className="text-red-500">*</span>
                          </label>
                          <input 
                            type="email" 
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            placeholder="john@example.com"
                            className="w-full border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 bg-slate-50/50 text-slate-800"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">
                            Phone / WhatsApp
                          </label>
                          <input 
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            placeholder="+966 50 123 4567"
                            className="w-full border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 bg-slate-50/50 text-slate-800"
                          />
                        </div>

                        <div>
                          <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">
                            Product Interest
                          </label>
                          <select 
                            value={formData.productInterest}
                            onChange={(e) => setFormData({...formData, productInterest: e.target.value})}
                            className="w-full border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 bg-slate-50/50 text-slate-700 uppercase tracking-wider font-medium"
                          >
                            <option>General Inquiry</option>
                            <option>Borena Cattle</option>
                            <option>Gambella Cattle</option>
                            <option>Borena Goats</option>
                            <option>Mountain Goats</option>
                            <option>Black Head Sheep</option>
                            <option>Rutfedi Sheep</option>
                            <option>Custom Sourcing Deal</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[9px] font-black text-slate-500 uppercase tracking-widest mb-1.5">
                          Specify Message or RFQ requirements <span className="text-red-500">*</span>
                        </label>
                        <textarea 
                          rows={4}
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({...formData, message: e.target.value})}
                          placeholder="Please specify carcass quantities, destination airport code, and required weight cuts..."
                          className="w-full border border-slate-200 rounded-sm px-4 py-3 text-xs focus:outline-none focus:ring-1 focus:ring-amber-500 bg-slate-50/50 text-slate-800"
                        ></textarea>
                      </div>

                      <button 
                        type="submit"
                        disabled={submitting}
                        className="w-full py-3.5 bg-emerald-950 hover:bg-emerald-900 disabled:bg-slate-400 text-amber-400 font-black rounded-sm text-xs uppercase tracking-widest transition-colors shadow-none border border-emerald-900 flex items-center justify-center space-x-2 cursor-pointer focus:outline-none"
                      >
                        {submitting ? (
                          <>
                            <Clock className="w-4 h-4 animate-spin text-amber-400" />
                            <span>Processing Request...</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-4 h-4 text-amber-400" />
                            <span>Submit Formal Request</span>
                          </>
                        )}
                      </button>
                    </motion.form>
                  ) : (
                    <motion.div 
                      key="success-card"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="text-center py-8 space-y-5"
                    >
                      <div className="w-12 h-12 bg-emerald-950 border border-emerald-900 rounded-sm flex items-center justify-center text-amber-400 mx-auto">
                        <CheckCircle2 className="w-6 h-6" />
                      </div>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-display font-black uppercase tracking-widest text-slate-900">
                          RFQ Successfully Logged!
                        </h4>
                        <p className="text-xs text-slate-600 max-w-md mx-auto font-light">
                          Thank you for connecting with Mirra Export Trading PLC. Your commercial inquiry has been saved. An auto-response tracking email has been simulated for your reference.
                        </p>
                      </div>

                      <div className="bg-slate-50 p-4.5 rounded-sm border border-slate-200 text-left max-w-md mx-auto text-[10px] space-y-2 uppercase tracking-wider font-semibold">
                        <div className="flex justify-between">
                          <span className="text-slate-400">Reference:</span>
                          <strong className="text-emerald-950">{inquiries[0]?.id}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Interested In:</span>
                          <strong className="text-slate-800">{inquiries[0]?.product}</strong>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-slate-400">Submitted:</span>
                          <strong className="text-slate-800">{inquiries[0]?.date}</strong>
                        </div>
                      </div>

                      <button
                        onClick={() => setFormSubmitted(false)}
                        className="px-6 py-2.5 bg-emerald-950 hover:bg-emerald-900 text-amber-400 font-black rounded-sm text-[10px] uppercase tracking-widest transition-colors focus:outline-none border border-emerald-900"
                      >
                        Send Another Inquiry
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>

              {/* Inquiry History Log */}
              {inquiries.length > 0 && (
                <div className="mt-8 bg-white border border-slate-200 p-6 rounded-sm shadow-none space-y-4">
                  <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest flex items-center space-x-2 border-b border-slate-100 pb-3">
                    <MessageSquare className="w-4 h-4 text-amber-500" />
                    <span>Your Submitted Requests (Session Cache)</span>
                  </h4>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-[10px] uppercase tracking-wider font-bold">
                      <thead>
                        <tr className="border-b border-slate-200 text-slate-400">
                          <th className="pb-2 font-black">ID</th>
                          <th className="pb-2 font-black">Date</th>
                          <th className="pb-2 font-black">Category</th>
                          <th className="pb-2 font-black text-right">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100 text-slate-700">
                        {inquiries.map((inq) => (
                          <tr key={inq.id}>
                            <td className="py-2.5 font-black text-emerald-900">{inq.id}</td>
                            <td className="py-2.5 text-slate-500">{inq.date.split(',')[0]}</td>
                            <td className="py-2.5 truncate max-w-[120px] text-slate-800">{inq.product}</td>
                            <td className="py-2.5 text-right">
                              <span className="inline-flex items-center px-1.5 py-0.5 rounded-none text-[9px] font-black bg-amber-500/10 text-amber-600 uppercase tracking-widest border border-amber-500/20">
                                pending review
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>

          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-emerald-950 text-emerald-100/70 pt-16 pb-12 border-t border-amber-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/5">
            
            {/* Branding Column */}
            <div className="lg:col-span-4 space-y-5">
              <a href="#" className="flex items-center group focus:outline-none" id="footer-logo-link">
                <MirraLogo variant="dark" showTagline={true} className="h-14 w-auto transition-transform duration-300 group-hover:scale-[1.02]" />
              </a>
              <p className="text-xs text-emerald-100/60 leading-relaxed max-w-sm font-light">
                Premium meat exporters specialized in delivering 100% grass-fed, Halal, high-grade chilled beef, mutton, and goat products to strategic Middle Eastern and worldwide regions under rigid 0-4°C food-safety protocols.
              </p>
            </div>

            {/* Links Column */}
            <div className="lg:col-span-2 space-y-4">
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                Navigation
              </h4>
              <ul className="space-y-2 text-xs font-light">
                <li>
                  <a href="#about" className="hover:text-amber-400 transition-colors">About Us</a>
                </li>
                <li>
                  <a href="#process" className="hover:text-amber-400 transition-colors">Our Process</a>
                </li>
                <li>
                  <a href="#products" className="hover:text-amber-400 transition-colors">Our Products</a>
                </li>
                <li>
                  <a href="#quality" className="hover:text-amber-400 transition-colors">Quality Assurance</a>
                </li>
                <li>
                  <a href="#markets" className="hover:text-amber-400 transition-colors">International Markets</a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-amber-400 transition-colors">Contact Us</a>
                </li>
              </ul>
            </div>

            {/* Hours Column */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                Export Operations
              </h4>
              <ul className="space-y-3 text-xs font-light">
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 shrink-0 mt-1.5"></span>
                  <span><strong>Mon - Fri:</strong> 8:30 AM - 5:30 PM (EAT)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 shrink-0 mt-1.5"></span>
                  <span><strong>Saturday:</strong> 9:00 AM - 1:00 PM (EAT)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="w-1.5 h-1.5 bg-amber-500 shrink-0 mt-1.5"></span>
                  <span className="text-amber-400 font-semibold"><strong>Air Freight Loading:</strong> 24/7 Operations</span>
                </li>
              </ul>
            </div>

            {/* Social Media Column */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className="text-[10px] font-black text-white uppercase tracking-[0.2em]">
                Follow Logistics
              </h4>
              <p className="text-xs text-emerald-100/60 font-light">
                Connect with our commercial channels for regular price summaries, livestock reports, and cold freight schedules.
              </p>

              {/* Social Media Icons */}
              <div className="flex flex-wrap gap-2 pt-2">
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-[#1877f2] hover:text-white hover:border-[#1877f2] transition-all flex items-center justify-center shadow-none"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:text-white hover:border-transparent transition-all flex items-center justify-center shadow-none"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a 
                  href="https://twitter.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Twitter (X)"
                  className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center shadow-none"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a 
                  href="https://linkedin.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-[#0077b5] hover:text-white hover:border-[#0077b5] transition-all flex items-center justify-center shadow-none"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a 
                  href="https://youtube.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-[#ff0000] hover:text-white hover:border-[#ff0000] transition-all flex items-center justify-center shadow-none"
                >
                  <Youtube className="w-4 h-4" />
                </a>
                <a 
                  href="https://telegram.org" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="Telegram"
                  className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-[#24a1de] hover:text-white hover:border-[#24a1de] transition-all flex items-center justify-center shadow-none"
                >
                  <Send className="w-4 h-4 -rotate-45 -translate-x-0.5" />
                </a>
                <a 
                  href="https://tiktok.com" 
                  target="_blank" 
                  rel="noreferrer" 
                  aria-label="TikTok"
                  className="w-8 h-8 rounded-sm bg-emerald-900 border border-white/5 text-emerald-100 hover:bg-black hover:text-white hover:border-black transition-all flex items-center justify-center shadow-none"
                >
                  <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31.01 2.61-.01 3.91.02.08 1.53.63 3.02 1.59 4.23.83.99 1.95 1.7 3.2 2.05.01 1.25.01 2.5 0 3.75-1.16-.16-2.27-.67-3.17-1.42a8.55 8.55 0 0 1-1.53-1.67V15a8.12 8.12 0 0 1-8.13 8.13 8.12 8.12 0 0 1-8.13-8.13A8.12 8.12 0 0 1 12 6.89c.01 1.43-.02 2.87.01 4.3a3.81 3.81 0 0 0-3.81 3.81 3.81 3.81 0 0 0 3.81 3.81 3.81 3.81 0 0 0 3.81-3.81V0c-1.1-.01-2.2.02-3.3-.01v.03z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] text-emerald-100/40 uppercase tracking-widest font-bold">
            <p>© 2026 Mirra Export Trading PLC. All Rights Reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Terms of Sourcing</a>
              <a href="#" className="hover:text-amber-400 transition-colors">Halal Certificates</a>
            </div>
          </div>

        </div>
      </footer>

    </div>
  );
}
