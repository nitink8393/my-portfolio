import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowDownIcon } from "lucide-react";

interface HeroSectionProps {
  onContactClick?: () => void;
}

const HeroSection = ({
  onContactClick = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  },
}: HeroSectionProps) => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center bg-black overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-700/20 blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-500/20 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=70')] bg-cover opacity-10" />
      </div>
      <div className="container mx-auto px-4 z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* Text content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Professional <span className="text-purple-500">Video Editor</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Making your visuals look cool and cinematic.
            </p>
            <Button
              onClick={onContactClick}
              className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-6 rounded-md text-lg font-medium transition-all hover:shadow-[0_0_15px_rgba(168,85,247,0.5)]"
            >
              Let's Talk <ArrowDownIcon className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Profile image */}
          <motion.div
            className="flex-1 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-purple-500 shadow-[0_0_25px_rgba(168,85,247,0.5)]">
              <img
                src="https://i.ibb.co/vC363dSd/My.jpg"
                alt="Nitin - Video Editor"
                className="object-cover h-[311px] w-[322px]"
              />
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 1,
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        >
          <ArrowDownIcon className="h-8 w-8 text-purple-500" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
