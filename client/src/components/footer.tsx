import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Mail, Twitter, Linkedin, Github, Rss, ExternalLink, CheckCircle } from 'lucide-react';
import logoSvg from "@assets/UXUI-logo.svg";

export default function Footer() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubscribed(true);
    setIsSubmitting(false);
  };

  const citations = [
    {
      id: 1,
      author: "Norman, Don",
      title: "The Design of Everyday Things",
      year: "1988",
      source: "Basic Books"
    },
    {
      id: 2,
      author: "Nielsen, Jakob",
      title: "Usability Engineering",
      year: "1993",
      source: "Academic Press"
    },
    {
      id: 3,
      author: "Cooper, Alan",
      title: "About Face: The Essentials of Interaction Design",
      year: "1995",
      source: "Wiley"
    },
    {
      id: 4,
      author: "Krug, Steve",
      title: "Don't Make Me Think: A Common Sense Approach to Web Usability",
      year: "2000",
      source: "New Riders"
    },
    {
      id: 5,
      author: "Nielsen Norman Group",
      title: "State of UX Report 2024",
      year: "2024",
      source: "NN/g Publications"
    },
    {
      id: 6,
      author: "Forrester Research",
      title: "The Business Impact of Customer Experience",
      year: "2023",
      source: "Forrester"
    },
    {
      id: 7,
      author: "McKinsey & Company",
      title: "The Business Value of Design",
      year: "2018",
      source: "McKinsey Design"
    },
    {
      id: 8,
      author: "ISO",
      title: "ISO 9241-210:2019 Ergonomics of human-system interaction",
      year: "2019",
      source: "International Organization for Standardization"
    }
  ];

  const resources = {
    keyReferences: [
      { name: "Design Systems Handbook", url: "#", description: "Comprehensive guide to modern design systems" },
      { name: "UX Collective Archives", url: "#", description: "Historical perspectives on UX evolution" },
      { name: "ACM Digital Library", url: "#", description: "Academic HCI and UX research papers" }
    ],
    dataSources: [
      { name: "Bureau of Labor Statistics", url: "#", description: "Employment and salary data" },
      { name: "Stack Overflow Survey 2024", url: "#", description: "Developer and designer statistics" },
      { name: "Design Census 2023", url: "#", description: "Industry demographics and trends" }
    ],
    furtherReading: [
      { name: "The Evolution of User Experience Design", url: "#", description: "MIT Technology Review" },
      { name: "A Brief History of Human-Computer Interaction", url: "#", description: "Stanford HCI Group" },
      { name: "The Future of UX: 2025 and Beyond", url: "#", description: "Adobe Design Insights" }
    ]
  };

  return (
    <footer className="bg-background border-t border-accent mt-32">
      {/* Email Capture Section */}
      <section className="bg-secondary/20 py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            {!isSubscribed ? (
              <>
                <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-3">Stay Updated on UX/UI Research</h3>
                <p className="text-sm sm:text-base text-muted-foreground mb-8">Get insights on design evolution and industry analysis</p>
                
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
                    className="flex-1 bg-background border-accent/30 focus:border-accent"
                    required
                    data-testid="input-email-subscribe"
                  />
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="bg-accent hover:bg-accent/90 text-background font-semibold"
                    data-testid="button-subscribe"
                  >
                    {isSubmitting ? (
                      <>Subscribing...</>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        Subscribe
                      </>
                    )}
                  </Button>
                </form>
                
                <p className="text-xs sm:text-sm text-muted-foreground mt-4">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center space-y-3">
                <CheckCircle className="w-12 h-12 text-accent" />
                <h3 className="font-display text-xl sm:text-2xl font-semibold">Thank You for Subscribing!</h3>
                <p className="text-sm sm:text-base text-muted-foreground">You'll receive our latest research insights soon.</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-12 text-center">Research Resources</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Key References */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-6 text-accent">Key References</h4>
              <ul className="space-y-4">
                {resources.keyReferences.map((ref, index) => (
                  <li key={index}>
                    <a 
                      href={ref.url} 
                      className="group flex flex-col space-y-1"
                      data-testid={`link-reference-${index}`}
                    >
                      <span className="text-sm sm:text-base text-foreground group-hover:text-accent transition-colors flex items-center">
                        {ref.name}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{ref.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Data Sources */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-6 text-accent">Data Sources</h4>
              <ul className="space-y-4">
                {resources.dataSources.map((source, index) => (
                  <li key={index}>
                    <a 
                      href={source.url} 
                      className="group flex flex-col space-y-1"
                      data-testid={`link-datasource-${index}`}
                    >
                      <span className="text-sm sm:text-base text-foreground group-hover:text-accent transition-colors flex items-center">
                        {source.name}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{source.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Further Reading */}
            <div>
              <h4 className="font-semibold text-base sm:text-lg mb-6 text-accent">Further Reading</h4>
              <ul className="space-y-4">
                {resources.furtherReading.map((article, index) => (
                  <li key={index}>
                    <a 
                      href={article.url} 
                      className="group flex flex-col space-y-1"
                      data-testid={`link-reading-${index}`}
                    >
                      <span className="text-sm sm:text-base text-foreground group-hover:text-accent transition-colors flex items-center">
                        {article.name}
                        <ExternalLink className="w-3 h-3 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </span>
                      <span className="text-xs sm:text-sm text-muted-foreground">{article.description}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Research Methodology */}
          <div className="mt-12 p-6 bg-secondary/10 rounded-lg border border-accent/20">
            <h4 className="font-semibold text-base sm:text-lg mb-3 text-accent">Research Methodology</h4>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              This research synthesizes data from multiple sources including academic papers, industry reports, 
              employment statistics, and historical documentation. We employed quantitative analysis of salary 
              trends, job market data, and tool adoption rates, combined with qualitative analysis of design 
              paradigm shifts and professional evolution. All data points are cross-referenced with at least 
              two independent sources for accuracy.
            </p>
          </div>
        </div>
      </section>

      <Separator className="bg-accent/20" />

      {/* Citations Section */}
      <section className="py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-8 text-center">Citations</h3>
          
          <div className="max-w-4xl mx-auto">
            <ol className="space-y-3">
              {citations.map((citation) => (
                <li key={citation.id} className="flex text-xs sm:text-sm">
                  <span className="text-accent font-semibold mr-3 min-w-[20px]">[{citation.id}]</span>
                  <span className="text-muted-foreground">
                    {citation.author}. ({citation.year}). <em>{citation.title}</em>. {citation.source}.
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <Separator className="bg-accent/20" />

      {/* Bottom Footer */}
      <section className="py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="mb-4">
                <img 
                  src={logoSvg} 
                  alt="UX/UI Timeline" 
                  className="h-8 w-auto brightness-0 dark:brightness-0 dark:invert mb-4"
                  data-testid="logo-footer"
                />
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground">
                Comprehensive research on the evolution of user experience design from 1980 to 2024.
              </p>
            </div>

            {/* Footer Links */}
            <div className="md:col-span-2">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-sm sm:text-base mb-4 text-accent">Research</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors" data-testid="link-about">
                        About This Research
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors" data-testid="link-methodology">
                        Methodology
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors" data-testid="link-contact">
                        Contact
                      </a>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-sm sm:text-base mb-4 text-accent">Legal</h4>
                  <ul className="space-y-2">
                    <li>
                      <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors" data-testid="link-privacy">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors" data-testid="link-terms">
                        Terms of Use
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-xs sm:text-sm text-muted-foreground hover:text-accent transition-colors" data-testid="link-license">
                        License
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="md:col-span-1">
              <h4 className="font-semibold text-sm sm:text-base mb-4 text-accent">Connect</h4>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Twitter"
                  data-testid="link-twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                  data-testid="link-linkedin"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="GitHub"
                  data-testid="link-github"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a 
                  href="#" 
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="RSS Feed"
                  data-testid="link-rss"
                >
                  <Rss className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          <Separator className="bg-accent/20 mb-8" />

          {/* Copyright & Attribution */}
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              <p>© 2024 UX/UI Timeline Research. All rights reserved.</p>
              <p className="mt-1">
                Licensed under{' '}
                <a href="https://creativecommons.org/licenses/by-sa/4.0/" className="text-accent hover:underline">
                  Creative Commons BY-SA 4.0
                </a>
              </p>
            </div>
            
            <div className="text-xs sm:text-sm text-muted-foreground text-center md:text-right">
              <p>Data compiled from public sources.</p>
              <p className="mt-1">Last updated: January 2025</p>
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}