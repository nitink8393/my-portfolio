import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Instagram, MessageSquare } from "lucide-react";

interface ContactSectionProps {
  email?: string;
  phone?: string;
  instagram?: string;
}

const ContactSection = ({
  email = "nitink8393@gmail.com",
  phone = "8393940767",
  instagram = "@nitin_edition2.0",
}: ContactSectionProps) => {
  return (
    <section
      id="contact"
      className="py-20 bg-black text-white min-h-[600px] flex items-center"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
            I Am Ready to Work With You
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Let's create something amazing together. Reach out to discuss your
            project needs and how I can help bring your vision to life.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
          <Card className="w-full md:w-auto bg-gray-900 border-purple-500 border overflow-hidden shadow-lg shadow-purple-500/20">
            <CardContent className="p-8">
              <div className="flex flex-col space-y-6">
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-gray-400">{email}</p>
                  </div>
                </a>

                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-sm text-gray-400">{phone}</p>
                  </div>
                </a>

                <a
                  href={`https://instagram.com/${instagram.replace("@", "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-gray-300 hover:text-purple-400 transition-colors"
                >
                  <div className="bg-purple-900/30 p-3 rounded-full">
                    <Instagram className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Instagram</p>
                    <p className="text-sm text-gray-400">{instagram}</p>
                  </div>
                </a>
              </div>
            </CardContent>
          </Card>

          <div className="w-full md:w-auto flex flex-col items-center">
            <h3 className="text-2xl font-bold mb-6 text-center">
              Ready to get started?
            </h3>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 text-white px-8 py-6 h-auto text-lg group transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
              onClick={() => window.open(`https://wa.me/${phone}`, "_blank")}
            >
              <MessageSquare className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Hire Me on WhatsApp
            </Button>
          </div>
        </div>

        <div className="text-center text-gray-500 text-sm mt-16">
          <p>Made with ❤️ by Nitin</p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
