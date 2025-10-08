import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Cpu, Monitor, Mouse, Users, Lightbulb, Package } from "lucide-react";
import PullQuote from "@/components/pull-quote";
import DataCallout from "@/components/data-callout";
import ExpandablePioneerCard from "@/components/expandable-pioneer-card";
import FadeInSection from "@/components/fade-in-section";
import ComputingDemocratizationScatter from "@/components/computing-democratization-scatter";
import ImageWithSkeleton from "@/components/image-with-skeleton";
import { motion } from "framer-motion";
import { ReactNode } from "react";

import VannevarBushImg from "@assets/Vannevar-Bush-1500-800.jpg";
import DouglasEngelbartImg from "@assets/Douglas_Engelbart.jpg";
import IvanSutherlandImg from "@assets/300px-Ivan_Sutherland_1592.jpg";
import AlanKayImg from "@assets/Kay.webp";
import LarryTeslerImg from "@assets/Larry Tesler .jpg";

interface CriticalMomentDataPoint {
  name: string;
  year: number;
  category: string;
  era: "Early Era" | "GUI Era";
  icon: ReactNode;
  person: string;
  description: string;
}

export default function OriginsSection() {
  const criticalMomentsData: CriticalMomentDataPoint[] = [
    {
      name: "Sketchpad",
      year: 1963,
      category: "Computer Graphics",
      era: "Early Era",
      icon: <Monitor className="w-full h-full" />,
      person: "Ivan Sutherland",
      description: "First GUI program with light pen for direct manipulation"
    },
    {
      name: "Mother of All Demos",
      year: 1968,
      category: "Input Devices",
      era: "Early Era",
      icon: <Mouse className="w-full h-full" />,
      person: "Douglas Engelbart",
      description: "Demonstrated mouse, windows, hypertext, and collaboration"
    },
    {
      name: "Xerox Alto",
      year: 1973,
      category: "GUI Systems",
      era: "GUI Era",
      icon: <Cpu className="w-full h-full" />,
      person: "Xerox PARC Team",
      description: "First computer with GUI and mouse as primary interaction"
    },
    {
      name: "Xerox Star",
      year: 1981,
      category: "Commercial Products",
      era: "GUI Era",
      icon: <Package className="w-full h-full" />,
      person: "Xerox Corporation",
      description: "First commercial computer with GUI, icons, and WYSIWYG"
    }
  ];

  const criticalMomentsCategories = [
    "Computer Graphics",
    "Input Devices",
    "GUI Systems",
    "Commercial Products"
  ];

  const criticalMomentsYears = [1963, 1968, 1973, 1978, 1981];
  
  const getCriticalMomentsEraColor = (era: string) => {
    switch (era) {
      case "Early Era":
        return "hsl(217, 100%, 53%)"; // IBM Blue
      case "GUI Era":
        return "hsl(142, 63%, 39%)"; // Success Green
      default:
        return "hsl(0, 0%, 45%)";
    }
  };

  const getCriticalMomentsYPosition = (category: string) => {
    const index = criticalMomentsCategories.indexOf(category);
    return (index / (criticalMomentsCategories.length - 1)) * 100;
  };

  const getCriticalMomentsXPosition = (year: number) => {
    return ((year - 1963) / (1981 - 1963)) * 100;
  };

  const pioneers = [
    {
      name: "Vannevar Bush",
      title: "Information Architecture Visionary",
      years: "1890-1974",
      contribution: "His 1945 essay 'As We May Think' described the Memex, envisioning a future where humans could navigate vast amounts of interconnected information through associative trails - the conceptual foundation of hypertext.",
      quote: "Consider a future device... in which an individual stores all his books, records, and communications, and which is mechanized so that it may be consulted with exceeding speed and flexibility.",
      legacy: "Inspired Douglas Engelbart and Ted Nelson to pursue hypertext systems",
      image: VannevarBushImg
    },
    {
      name: "Douglas Engelbart",
      title: "Human Augmentation Pioneer",
      years: "1925-2013",
      contribution: "Founded the Augmentation Research Center at Stanford Research Institute. Invented the computer mouse, developed early hypertext systems, and pioneered collaborative computing tools.",
      quote: "The digital revolution is far more significant than the invention of writing or even of printing.",
      legacy: "His 1968 demo influenced every major advancement in personal computing",
      image: DouglasEngelbartImg
    },
    {
      name: "Ivan Sutherland",
      title: "Computer Graphics Pioneer",
      years: "1938-Present",
      contribution: "Created Sketchpad in 1963, demonstrating that computers could be used for more than just processing numbers. Introduced concepts of graphical computing and direct manipulation interfaces.",
      quote: "The ultimate display would, of course, be a room within which the computer can control the existence of matter.",
      legacy: "Father of computer graphics, VR pioneer, Turing Award winner",
      image: IvanSutherlandImg
    },
    {
      name: "Alan Kay",
      title: "Object-Oriented UI Inventor",
      years: "1940-Present",
      contribution: "Conceived the Dynabook concept - a portable computer for children. Led development of Smalltalk at Xerox PARC, creating the first true object-oriented programming language with a graphical interface.",
      quote: "The best way to predict the future is to invent it.",
      legacy: "Influenced Steve Jobs, pioneered modern educational computing",
      image: AlanKayImg
    },
    {
      name: "Larry Tesler",
      title: "Modeless Interface Champion",
      years: "1945-2020",
      contribution: "Invented cut, copy, and paste operations. Advocated for modeless interfaces where users don't need to switch between different states. Made computing more intuitive for non-programmers.",
      quote: "There's no mode that can't be eliminated.",
      legacy: "His 'no modes' philosophy shaped modern user interface design",
      image: LarryTeslerImg
    }
  ];

  return (
    <>
      {/* Opening Hero Section with Dark Sage Background */}
      <section 
        className="py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-12 bg-[#6b7a5d]" 
        data-testid="section-origins-hero"
      >
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {/* Section Label and Pagination Dots */}
            <div className="flex items-start justify-between">
              <span 
                className="text-foreground/60 uppercase tracking-[0.2em] text-xs sm:text-sm font-sans font-medium" 
                data-testid="label-section-1"
              >
                Section 1
              </span>
              
              {/* Pagination Dots */}
              <div className="flex items-center gap-2" data-testid="pagination-dots">
                <div className="w-2.5 h-2.5 rounded-full bg-black" data-testid="dot-active" />
                <div className="w-2.5 h-2.5 rounded-full bg-black/20" data-testid="dot-inactive-1" />
                <div className="w-2.5 h-2.5 rounded-full bg-black/20" data-testid="dot-inactive-2" />
                <div className="w-2.5 h-2.5 rounded-full bg-black/20" data-testid="dot-inactive-3" />
              </div>
            </div>
            
            {/* Headline */}
            <h2 
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] text-foreground" 
              data-testid="text-origins-heading"
            >
              Before the pixel, there was the vision
            </h2>

            {/* Body Text */}
            <div className="space-y-6 text-foreground/90">
              <p className="text-sm sm:text-base leading-[1.8] text-justify">
                Long before screens glowed with graphical interfaces, before mice clicked and fingers tapped, visionaries imagined a future where humans and computers would collaborate as partners. This is the untold prehistory of UX/UI design — a story that begins not with pixels, but with profound questions about human cognition and information architecture.
              </p>

              <p className="text-sm sm:text-base leading-[1.8] text-justify">
                In the aftermath of World War II, as early computers filled entire rooms and required specialized operators, a handful of pioneers dared to imagine something radical: machines that would augment human intelligence rather than merely calculate. They envisioned systems that would feel natural, interfaces that would disappear into intuition, and tools that would amplify human creativity.
              </p>

              <p className="text-sm sm:text-base leading-[1.8] text-justify">
                These weren't designers in the modern sense — they were mathematicians, engineers, and cognitive scientists. Yet their work laid the foundation for everything we now call user experience. They asked the questions that still drive our field: How should humans and computers communicate? What makes an interface intuitive? How can technology enhance rather than replace human capabilities?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Section with Original Styling */}
      <section className="py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-12" data-testid="section-origins">
        <div className="max-w-6xl mx-auto">
          {/* Critical Moments Scatter Plot */}
          <div className="mb-24">
            <div className="w-full bg-[#f5f2ed] py-12 px-6 rounded-lg">
              <div className="max-w-6xl mx-auto">
                <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-bold text-center mb-2 text-foreground">
                  Critical Moments in Pre-Digital Interface History
                </h3>
                
                {/* Legend */}
                <div className="flex justify-center gap-6 mb-8 flex-wrap">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(217, 100%, 53%)" }} />
                    <span className="text-xs sm:text-sm font-sans text-foreground">Early Era (1963-1970)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "hsl(142, 63%, 39%)" }} />
                    <span className="text-xs sm:text-sm font-sans text-foreground">GUI Era (1971-1981)</span>
                  </div>
                </div>

                {/* Chart Container */}
                <div className="relative bg-muted/50 border border-foreground/10 rounded-lg p-4 sm:p-6 md:p-8">
                  {/* Y-axis labels */}
                  <div className="absolute left-0 top-4 sm:top-6 md:top-8 bottom-4 sm:bottom-6 md:bottom-8 w-24 sm:w-32 md:w-40 flex flex-col justify-between text-right pr-2 sm:pr-3 md:pr-4">
                    {criticalMomentsCategories.map((cat, index) => (
                      <div key={cat} className="text-[10px] sm:text-xs font-sans text-foreground/70 leading-tight" style={{ 
                        transform: 'translateY(-50%)',
                        position: 'absolute',
                        top: `${(index / (criticalMomentsCategories.length - 1)) * 100}%`,
                        right: '1rem'
                      }}>
                        {cat}
                      </div>
                    ))}
                  </div>

                  {/* Chart area */}
                  <div className="ml-24 sm:ml-32 md:ml-40 relative h-64 sm:h-72 md:h-[350px]">
                    {/* Grid lines - vertical */}
                    {criticalMomentsYears.map((year) => (
                      <div
                        key={`grid-v-${year}`}
                        className="absolute top-0 bottom-0 border-l border-black/5"
                        style={{ left: `${getCriticalMomentsXPosition(year)}%` }}
                      />
                    ))}

                    {/* Grid lines - horizontal */}
                    {criticalMomentsCategories.map((cat, index) => (
                      <div
                        key={`grid-h-${cat}`}
                        className="absolute left-0 right-0 border-t border-black/5"
                        style={{ top: `${(index / (criticalMomentsCategories.length - 1)) * 100}%` }}
                      />
                    ))}

                    {/* Data points with icons */}
                    {criticalMomentsData.map((moment, index) => (
                      <motion.div
                        key={`${moment.name}-${index}`}
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: index * 0.15, duration: 0.5 }}
                        className="absolute cursor-pointer transform -translate-x-1/2 -translate-y-1/2 group"
                        style={{
                          left: `${getCriticalMomentsXPosition(moment.year)}%`,
                          top: `${getCriticalMomentsYPosition(moment.category)}%`,
                        }}
                        data-testid={`icon-${moment.category.toLowerCase().replace(/\s+/g, '-')}-${moment.name.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {/* Icon container with colored background */}
                        <div 
                          className="w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9 rounded-lg flex items-center justify-center p-1 sm:p-1.5 md:p-2 shadow-md transition-all duration-200 group-hover:scale-125 group-hover:shadow-lg"
                          style={{
                            backgroundColor: getCriticalMomentsEraColor(moment.era),
                            color: 'white'
                          }}
                        >
                          {moment.icon}
                        </div>
                        
                        {/* Hover tooltip */}
                        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10">
                          <div className="bg-card border border-primary/40 text-foreground text-xs rounded-lg px-3 py-2 shadow-xl max-w-xs">
                            <div className="font-bold">{moment.name}</div>
                            <div className="text-muted-foreground">{moment.year} - {moment.person}</div>
                            <div className="text-muted-foreground text-[10px] mt-1">{moment.description}</div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* X-axis labels */}
                    <div className="absolute left-0 right-0 -bottom-6 flex justify-between">
                      {criticalMomentsYears.map((year) => (
                        <div
                          key={`x-label-${year}`}
                          className="text-[10px] sm:text-xs text-foreground/70 font-mono"
                          style={{ 
                            position: 'absolute',
                            left: `${getCriticalMomentsXPosition(year)}%`,
                            transform: 'translateX(-50%)'
                          }}
                        >
                          {year}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Research Centers Callout */}
          <Card className="p-8 mb-20 bg-accent/10 border-accent/30">
            <div className="flex items-start gap-4">
              <Users className="w-6 h-6 text-accent mt-1" />
              <div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3">Early HCI Research Centers</h4>
                <div className="grid md:grid-cols-3 gap-6 text-foreground/80">
                  <div>
                    <p className="font-semibold text-accent text-sm sm:text-base">MIT</p>
                    <p className="text-sm sm:text-base">Lincoln Laboratory pioneered interactive computing with TX-0 and TX-2 computers, enabling Sutherland's Sketchpad.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent text-sm sm:text-base">Stanford Research Institute</p>
                    <p className="text-sm sm:text-base">Engelbart's Augmentation Research Center developed NLS (oN-Line System), the first hypertext system with a mouse.</p>
                  </div>
                  <div>
                    <p className="font-semibold text-accent text-sm sm:text-base">Xerox PARC</p>
                    <p className="text-sm sm:text-base">The Computer Science Laboratory created Alto and Star, defining the desktop metaphor we still use today.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Pioneers Section */}
          <FadeInSection className="mb-20">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-12">The Visionaries Who Defined Our Digital Future</h3>
            
            <div className="space-y-8">
              {pioneers.map((pioneer, index) => {
                return (
                  <Card key={pioneer.name} className="overflow-hidden bg-card/30 border-accent/20" data-testid={`visionary-${pioneer.name.toLowerCase().replace(' ', '-')}`}>
                    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-0">
                      {/* Image Section */}
                      <div className="bg-black/40 min-h-[250px] md:min-h-0">
                        <ImageWithSkeleton
                          src={pioneer.image} 
                          alt={pioneer.name}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      
                      {/* Content Section */}
                      <div className="p-8 space-y-6">
                        {/* Header */}
                        <div className="space-y-1">
                          <h4 className="text-2xl sm:text-3xl font-bold">{pioneer.name}</h4>
                          <p className="text-xs sm:text-sm text-muted-foreground font-mono">{pioneer.years}</p>
                          <p className="text-accent text-sm sm:text-base font-semibold">{pioneer.title}</p>
                        </div>
                        
                        {/* Contribution */}
                        <p className="text-sm sm:text-base text-foreground/90 leading-relaxed">
                          {pioneer.contribution}
                        </p>
                        
                        {/* Quote */}
                        <blockquote className="border-l-4 border-accent/40 pl-6 py-2">
                          <p className="italic text-sm sm:text-base text-foreground/80">"{pioneer.quote}"</p>
                        </blockquote>
                        
                        {/* Legacy */}
                        <p className="text-sm sm:text-base text-foreground/70">
                          {pioneer.legacy}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
          </FadeInSection>

          {/* Pull Quote from Alan Kay */}
          <PullQuote
            quote="The best way to predict the future is to invent it."
            attribution="Alan Kay"
          />

          {/* Data Callouts */}
          <DataCallout
            value="$220,000 in today's dollars"
            label="The 1973 Xerox Alto cost ($32,000 originally) - making it accessible only to research institutions, yet it defined personal computing's future"
            type="money"
          />

          {/* Birth of GUI Section */}
          <div className="max-w-4xl mx-auto mb-24">
            <Separator className="mb-12 bg-accent/20" />
            
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-8">The Birth of Graphical Interfaces</h3>
            
            <div className="prose prose-lg space-y-6 text-foreground/90">
              <p className="text-sm sm:text-base">
                The transition from command-line interfaces to graphical user interfaces wasn't merely a technical evolution — it was a philosophical revolution. When the Xerox Alto displayed its first bitmapped screen in 1973, it represented a fundamental shift in how we conceive the relationship between humans and computers.
              </p>
              
              <p className="text-sm sm:text-base">
                For the first time, computers could show rather than tell. Icons replaced commands. The mouse enabled direct manipulation. The desktop metaphor made abstract digital concepts tangible. These weren't just new features; they were new languages for human-computer interaction.
              </p>
              
              <p className="text-sm sm:text-base">
                The researchers at Xerox PARC didn't just create new technology — they created new possibilities for human expression and creativity. Their work proved that computers could be tools for everyone, not just programmers. The GUI democratized computing, setting the stage for the personal computer revolution and, ultimately, for the field of UX/UI design itself.
              </p>
              
              <p className="text-base sm:text-lg lg:text-xl font-medium text-accent">
                What began as academic research in the 1960s and 1970s would, within a generation, transform into a multi-billion dollar industry and reshape human civilization. The foundations laid by these pioneers continue to support every swipe, tap, and click we make today.
              </p>
            </div>
          </div>

          {/* Computing Democratization Scatter Plot */}
          <div className="mb-24">
            <ComputingDemocratizationScatter />
          </div>
        </div>
      </section>
    </>
  );
}
