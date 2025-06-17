import React from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface PortfolioItemProps {
  title: string;
  description: string;
  imageUrl: string;
  videoUrl?: string;
}

const PortfolioItem = ({
  title = "Video Title",
  description = "Short description of the video edit",
  imageUrl = "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
  videoUrl = "#",
}: PortfolioItemProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="relative overflow-hidden rounded-lg bg-black"
    >
      <Card className="border-0 overflow-hidden bg-transparent h-full">
        <div className="relative aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
            <div className="rounded-full bg-purple-600 p-3 shadow-[0_0_15px_rgba(168,85,247,0.5)]">
              <Play className="h-8 w-8 text-white" />
            </div>
          </div>
        </div>
        <CardContent className="p-4 bg-gray-900 bg-opacity-80">
          <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
          <p className="text-gray-300 text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const PortfolioSection = () => {
  const portfolioItems: PortfolioItemProps[] = [
    {
      title: "Cash Cow Edit",
      description:
        "Engaging cash cow video with captivating transitions and effects",
      imageUrl:
        "https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&q=80",
    },
    {
      title: "Instagram Reel",
      description:
        "Fast-paced, trendy reel edit with perfect timing and visual effects",
      imageUrl:
        "https://images.unsplash.com/photo-1574717024453-01ba57a1f307?w=800&q=80",
    },
    {
      title: "Vlog Montage",
      description:
        "Cinematic vlog edit with smooth transitions and color grading",
      imageUrl:
        "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&q=80",
    },
  ];

  return (
    <section id="portfolio" className="py-20 px-4 md:px-8 lg:px-16 bg-gray-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-purple-500">Best Edits</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Check out some of my recent work. Each project showcases my skills
            in different editing styles and techniques.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <PortfolioItem {...item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
