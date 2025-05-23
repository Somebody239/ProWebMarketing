"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ChevronsUpDown, ArrowRight, CheckCircle } from "lucide-react";

interface JobListingProps {
  title: string;
  department: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Remote";
  description: string;
  requirements: string[];
  slug: string;
}

const jobListings: JobListingProps[] = [
  {
    title: "Senior SEO Specialist",
    department: "Marketing",
    location: "New York or Remote",
    type: "Full-time",
    description: "Join our SEO team to develop and implement strategies that drive organic growth for our clients. You'll work with cross-functional teams to optimize websites, conduct keyword research, and analyze performance data.",
    requirements: [
      "3+ years of experience in SEO strategy and implementation",
      "Experience with SEO tools such as Ahrefs, SEMrush, and Google Search Console",
      "Strong analytical skills and data-driven approach",
      "Excellent communication and project management abilities"
    ],
    slug: "senior-seo-specialist"
  },
  {
    title: "Web Developer",
    department: "Development",
    location: "San Francisco or Remote",
    type: "Full-time",
    description: "Create exceptional websites and web applications for our clients using modern frameworks and best practices. You'll collaborate with designers and marketing specialists to build websites that are both beautiful and effective.",
    requirements: [
      "2+ years experience with React, Next.js, or similar frameworks",
      "Strong understanding of HTML, CSS, and JavaScript",
      "Experience with responsive design and performance optimization",
      "Knowledge of SEO best practices for web development"
    ],
    slug: "web-developer"
  },
  {
    title: "Social Media Manager",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Manage social media presence for multiple clients across platforms. Create engaging content, develop social media strategies, and analyze performance to drive growth and engagement.",
    requirements: [
      "2+ years experience managing social media for brands",
      "Proficiency with social media management tools",
      "Experience with paid social campaigns",
      "Strong copywriting and content creation skills"
    ],
    slug: "social-media-manager"
  },
  {
    title: "PPC Campaign Specialist",
    department: "Marketing",
    location: "New York or Remote",
    type: "Full-time",
    description: "Develop and manage pay-per-click advertising campaigns across Google Ads, Meta, and other platforms. Optimize campaigns for maximum ROI and work with clients to achieve their marketing goals.",
    requirements: [
      "2+ years experience managing PPC campaigns",
      "Google Ads and Meta Ads certifications preferred",
      "Experience with analytics and reporting tools",
      "Strong understanding of conversion optimization"
    ],
    slug: "ppc-campaign-specialist"
  },
  {
    title: "Graphic Designer",
    department: "Creative",
    location: "Remote",
    type: "Full-time",
    description: "Create compelling visual content for digital marketing campaigns, websites, and social media. Work with the creative team to develop brand identities and maintain design consistency across channels.",
    requirements: [
      "3+ years experience in graphic design",
      "Proficiency with Adobe Creative Suite",
      "Strong portfolio showcasing digital design work",
      "Experience with UI/UX design principles"
    ],
    slug: "graphic-designer"
  },
  {
    title: "Content Marketing Strategist",
    department: "Marketing",
    location: "Remote",
    type: "Full-time",
    description: "Develop content strategies that align with client goals and target audiences. Create editorial calendars, write compelling content, and work with SEO specialists to ensure content effectiveness.",
    requirements: [
      "3+ years experience in content marketing",
      "Excellent writing and editing skills",
      "Experience with SEO content creation",
      "Knowledge of content performance analytics"
    ],
    slug: "content-marketing-strategist"
  }
];

export default function CareersPage() {
  const [departmentFilter, setDepartmentFilter] = useState<string>("All");
  const [locationFilter, setLocationFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");

  const departments = ["All", "Marketing", "Development", "Creative", "Management", "Sales"];
  const locations = ["All", "New York", "San Francisco", "Remote"];

  const filteredJobs = jobListings.filter(job => {
    const matchesDepartment = departmentFilter === "All" || job.department === departmentFilter;
    const matchesLocation = locationFilter === "All" || job.location.includes(locationFilter);
    const matchesSearch = job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          job.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDepartment && matchesLocation && matchesSearch;
  });

  return (
    <main>
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Join Our <span className="text-gradient">Team</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Build your career at an innovative digital marketing agency where creativity, growth, and impact are at the core of everything we do.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Why work with us */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Why Work With Us</h2>
            <p className="text-xl text-muted-foreground">
              At ProWeb Marketing, we believe that exceptional work comes from exceptional people in an environment where they can thrive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Creative Freedom</h3>
                  <p className="text-muted-foreground">
                    We encourage innovation and creative thinking. Your ideas matter, and you'll have the freedom to bring them to life.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="12" y1="20" x2="12" y2="10"></line><line x1="18" y1="20" x2="18" y2="4"></line><line x1="6" y1="20" x2="6" y2="16"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Career Growth</h3>
                  <p className="text-muted-foreground">
                    We invest in your professional development with ongoing training, mentorship, and clear paths for advancement.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Collaborative Culture</h3>
                  <p className="text-muted-foreground">
                    Work with talented professionals in a supportive environment where teamwork and knowledge sharing are valued.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Work-Life Balance</h3>
                  <p className="text-muted-foreground">
                    We respect that life happens outside of work. Flexible schedules, remote options, and generous time-off policies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Impactful Work</h3>
                  <p className="text-muted-foreground">
                    Work on projects that make a real difference for clients across various industries and business challenges.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Card className="h-full border-none shadow-md hover:shadow-lg transition-shadow">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold">Competitive Benefits</h3>
                  <p className="text-muted-foreground">
                    Enjoy comprehensive health coverage, retirement plans, wellness programs, and performance bonuses.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Current openings */}
      <section className="py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-6">Current Openings</h2>
            <p className="text-xl text-muted-foreground mb-10">
              Find your next opportunity and join our growing team of marketing professionals.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
              <div>
                <label className="text-sm font-medium mb-2 block text-left">Department</label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  value={departmentFilter}
                  onChange={(e) => setDepartmentFilter(e.target.value)}
                >
                  {departments.map((dept, i) => (
                    <option key={i} value={dept}>{dept}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-left">Location</label>
                <select
                  className="w-full rounded-md border border-input bg-background px-3 py-2"
                  value={locationFilter}
                  onChange={(e) => setLocationFilter(e.target.value)}
                >
                  {locations.map((loc, i) => (
                    <option key={i} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block text-left">Search</label>
                <Input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden border-none shadow-md hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="p-6">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                          <div>
                            <h3 className="text-xl font-semibold">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-3 mt-2 text-sm text-muted-foreground">
                              <span>{job.department}</span>
                              <span>•</span>
                              <span>{job.location}</span>
                              <span>•</span>
                              <span>{job.type}</span>
                            </div>
                          </div>
                          <Button asChild>
                            <Link href={`/careers/${job.slug}`}>
                              View Position
                            </Link>
                          </Button>
                        </div>

                        <div className="mt-4">
                          <p className="text-muted-foreground mb-4">{job.description}</p>
                          <div className="space-y-2">
                            <h4 className="font-medium">Requirements:</h4>
                            <ul className="space-y-1">
                              {job.requirements.map((req, i) => (
                                <li key={i} className="flex items-start">
                                  <CheckCircle className="mr-2 h-5 w-5 text-primary shrink-0 mt-0.5" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))
            ) : (
              <div className="text-center py-12 border border-dashed border-border rounded-lg">
                <h3 className="text-xl font-semibold mb-2">No positions found</h3>
                <p className="text-muted-foreground mb-6">
                  Try adjusting your filters or check back later for new opportunities.
                </p>
                <Button onClick={() => {
                  setDepartmentFilter("All");
                  setLocationFilter("All");
                  setSearchQuery("");
                }}>
                  Reset Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Application process */}
      <section className="py-20 bg-muted/30">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <h2 className="text-3xl font-bold mb-6">Our Application Process</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  We've designed our hiring process to be straightforward and transparent. Here's what you can expect when you apply:
                </p>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                      1
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Application Review</h3>
                      <p className="text-muted-foreground">
                        Our team reviews your application, resume, and portfolio materials within 1-2 weeks.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                      2
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Initial Interview</h3>
                      <p className="text-muted-foreground">
                        A 30-minute video call with a team member to discuss your experience and interest in the role.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                      3
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Skills Assessment</h3>
                      <p className="text-muted-foreground">
                        Depending on the role, you may complete a practical assignment related to your skills.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                      4
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Team Interview</h3>
                      <p className="text-muted-foreground">
                        Meet with potential team members to ensure mutual fit and alignment with our culture.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0 mr-4">
                      5
                    </div>
                    <div>
                      <h3 className="text-lg font-medium mb-1">Offer Stage</h3>
                      <p className="text-muted-foreground">
                        If there's a strong match, we'll extend an offer and welcome you to the team!
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="border-none shadow-lg overflow-hidden">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-semibold mb-6">Don't See the Right Role?</h3>
                  <p className="text-muted-foreground mb-6">
                    We're always interested in connecting with talented individuals. Submit your information, and we'll keep you in mind for future opportunities.
                  </p>

                  <div className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-sm font-medium mb-2 block">Name</label>
                        <Input placeholder="Your name" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">Email</label>
                        <Input type="email" placeholder="Your email" />
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Area of Interest</label>
                      <select className="w-full rounded-md border border-input bg-background px-3 py-2">
                        <option value="">Select an area</option>
                        {departments.filter(d => d !== "All").map((dept, i) => (
                          <option key={i} value={dept}>{dept}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="text-sm font-medium mb-2 block">Resume/CV</label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer hover:bg-muted/50">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-muted-foreground" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                            </svg>
                            <p className="mb-2 text-sm text-muted-foreground">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">PDF or DOCX (MAX. 2MB)</p>
                          </div>
                          <input type="file" className="hidden" />
                        </label>
                      </div>
                    </div>

                    <Button className="w-full">Submit Application</Button>

                    <p className="text-xs text-muted-foreground text-center">
                      By submitting, you agree to our privacy policy and consent to being contacted about job opportunities.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-primary/10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to Take the Next Step?
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Explore our open positions and join a team that values innovation, collaboration, and growth.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg">
                View All Positions
              </Button>
              <Button variant="outline" size="lg">
                Learn About Our Culture
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
