import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Film,
  Scissors,
  Youtube,
  PenTool,
  Palette,
  Instagram,
  Tv,
} from "lucide-react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description = "" }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="w-full"
    >
      <Card className="h-full bg-black border border-purple-500/20 hover:border-purple-500/50 overflow-hidden">
        <CardContent className="p-6 flex flex-col items-center text-center">
          <div className="mb-4 p-3 rounded-full bg-purple-900/20 text-purple-400">
            {icon}
          </div>
          <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-400 text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <Film size={24} />,
      title: "Reels & Shorts",
      description:
        "Engaging short-form content optimized for maximum engagement and reach.",
    },
    {
      icon: <Scissors size={24} />,
      title: "Vlog Editing",
      description:
        "Professional vlog edits with smooth transitions and engaging pacing.",
    },
    {
      icon: <Tv size={24} />,
      title: "Cash Cow Videos",
      description:
        "Optimized content designed to maximize views and monetization.",
    },
    {
      icon: <PenTool size={24} />,
      title: "Motion Graphics",
      description:
        "Eye-catching animations and visual effects to enhance your content.",
    },
    {
      icon: <Youtube size={24} />,
      title: "YouTube Video Editing",
      description:
        "Full-length video editing with SEO optimization and audience retention focus.",
    },
    {
      icon: <Palette size={24} />,
      title: "Color Correction & Transitions",
      description:
        "Professional color grading and seamless transitions for cinematic quality.",
    },
    {
      icon: <Instagram size={24} />,
      title: "Instagram/Facebook Promo",
      description:
        "Attention-grabbing promotional content for social media platforms.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My Services
          </h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional video editing services tailored to elevate your content
            and engage your audience.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
