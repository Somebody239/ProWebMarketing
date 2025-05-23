"use client";

import {
  LinkedinIcon,
  TwitterIcon,
  Mail
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TestimonialAvatar } from "./placeholder-image";
import { useRef } from "react";
import { useInView } from "framer-motion";

const teamMembers = [
  {
    name: "Kishan Joshi",
    role: "Co-Founder & Developer",
    bio: "Kishan brings technical expertise and vision to Pro Web Marketing, ensuring clients receive modern, responsive websites that deliver exceptional user experiences.",
    image: "/images/team-1.jpg",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "prowebmarketing1234@gmail.com"
  },
  {
    name: "Abhimanyu Malik",
    role: "Co-Founder & Designer",
    bio: "Abhimanyu leads our design efforts, creating visually stunning websites that capture each client's unique brand identity and business goals.",
    image: "/images/team-2.jpg",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "prowebmarketing1234@gmail.com"
  },
  {
    name: "Matthew Elias",
    role: "Co-Founder & Project Manager",
    bio: "Matthew oversees our client projects from start to finish, ensuring clear communication, timely delivery, and exceptional results that exceed expectations.",
    image: "/images/team-3.jpg",
    linkedin: "https://linkedin.com",
    twitter: "https://twitter.com",
    email: "prowebmarketing1234@gmail.com"
  }
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background via-background/95 to-background" id="team" ref={ref}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-4">
            <span className="font-medium">Our Team</span>
          </div>
          <h2 className="section-title">Meet Our Team</h2>
          <p className="text-xl text-muted-foreground">
            Our small but mighty team brings together the skills needed to create impressive websites for our clients.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="relative overflow-hidden aspect-square">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-primary/50 flex items-center justify-center">
                    <Avatar className="h-24 w-24 border-4 border-white/30">
                      <AvatarImage
                        src={member.image}
                        alt={member.name}
                        onError={(e) => {
                          // @ts-expect-error - Event target type is not properly inferred
                          e.target.onerror = null;
                          e.target.style.display = "none";
                        }}
                      />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                        <TestimonialAvatar name={member.name} size={96} />
                      </AvatarFallback>
                    </Avatar>
                  </div>
                </div>

                <CardContent className="pt-6 pb-4 relative">
                  <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>

                  <div className="flex space-x-4 items-center">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s LinkedIn`}
                    >
                      <LinkedinIcon size={18} />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`${member.name}'s Twitter`}
                    >
                      <TwitterIcon size={18} />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Interested in working with us on your next website project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-primary hover:underline"
          >
            Contact Us Today <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
