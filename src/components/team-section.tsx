"use client";

import { Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TestimonialAvatar } from "./placeholder-image";
import { useRef } from "react";
import { useInView } from "framer-motion";

const teamMembers = [
  {
    name: "Kishan Joshi",
    role: "Co-Founder & Designer",
    subRole: "Maker of this website",
    bio: "As co-founder and lead designer, Kishan brings creative vision and artistic expertise to Pro Web Marketing. His passion for design excellence ensures our clients receive visually stunning websites that capture their brand essence and engage their audience.",
    image: "/images/team-1.jpg",
    email: "kishan.cut@gmail.com"
  },
  {
    name: "Abhimanyu Malik",
    role: "Co-Founder & Developer",
    bio: "As co-founder and lead developer, Abhimanyu brings technical mastery to Pro Web Marketing. His expertise in coding and development ensures our clients' websites are not only beautiful but also highly functional and performant.",
    image: "/images/team-2.jpg",
    email: "abhimanyu.malik.86@gmail.com"
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
    <section className="py-16 bg-gradient-to-b from-background via-background/95 to-background" id="team" ref={ref}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center justify-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm mb-3">
            <span className="font-medium">Our Team</span>
          </div>
          <h2 className="section-title mb-4">Meet Our Team</h2>
          <p className="text-lg text-muted-foreground">
            Our small but mighty team brings together the skills needed to create impressive websites for our clients.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group h-full"
            >
              <Card className="overflow-visible border border-border/50 shadow-md hover:shadow-xl transition-shadow duration-300 mt-8 rounded-xl h-full">
                <CardContent className="relative px-5 py-4 h-full flex flex-col">
                  <div className="absolute -top-6 -left-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-background rounded-full -m-2 blur-[2px]"></div>
                      <Avatar className="h-20 w-20 ring-[3px] ring-border relative">
                        <AvatarImage
                          src={member.image}
                          alt={member.name}
                          className="object-cover rounded-full ring-2 ring-background"
                          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                            const target = e.currentTarget;
                            target.onerror = null;
                            target.style.display = "none";
                          }}
                        />
                        <AvatarFallback className="bg-primary text-primary-foreground text-2xl">
                          <TestimonialAvatar name={member.name} size={80} />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  <div className="pl-16 pt-1">
                    <h3 className="text-lg font-semibold leading-tight mb-0.5">{member.name}</h3>
                    <p className="text-primary text-sm font-medium leading-snug">{member.role}</p>
                    {member.subRole && (
                      <p className="text-muted-foreground text-[11px] mt-0.5 leading-tight">{member.subRole}</p>
                    )}
                  </div>
                  
                  <div className="mt-2 flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex items-center mt-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={16} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-3">
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
