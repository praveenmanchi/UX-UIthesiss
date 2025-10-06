import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Clock, Cpu, Monitor, Mouse, Users, Lightbulb } from "lucide-react";
import PullQuote from "@/components/pull-quote";
import DataCallout from "@/components/data-callout";
import ExpandablePioneerCard from "@/components/expandable-pioneer-card";
import FadeInSection from "@/components/fade-in-section";
import VannevarBushImg from "@assets/Visionaries/Vannevar-Bush-1500-800.jpg";
import DouglasEngelbartImg from "@assets/Visionaries/Douglas_Engelbart.jpg";
import IvanSutherlandImg from "@assets/Visionaries/Ivan_Sutherland_1592.jpg";
import AlanKayImg from "@assets/Visionaries/Kay.webp";
import LarryTeslerImg from "@assets/Visionaries/Larry Tesler .jpg";

export default function OriginsSection() {
  const timelineEvents = [
    {
      year: "1945",
      title: "The Memex Vision",
      person: "Vannevar Bush",
      description: "Conceived the Memex - a theoretical device that would store books, records, and communications, allowing users to follow associative trails through information.",
      impact: "Precursor to hypertext and the World Wide Web",
      icon: <Lightbulb className="w-5 h-5" />
    },
    {
      year: "1963",
      title: "Birth of Computer Graphics",
      person: "Ivan Sutherland",
      description: "Created Sketchpad at MIT - the first program to use a graphical user interface with a light pen for direct manipulation.",
      impact: "First GUI program, foundation of CAD systems",
      icon: <Monitor className="w-5 h-5" />
    },
    {
      year: "1968",
      title: "The Mother of All Demos",
      person: "Douglas Engelbart",
      description: "Demonstrated the computer mouse, windows, hypertext, graphics, video conferencing, and collaborative real-time editing.",
      impact: "90-minute demo that defined computing's future",
      icon: <Mouse className="w-5 h-5" />
    },
    {
      year: "1973",
      title: "First GUI Computer",
      person: "Xerox PARC Team",
      description: "The Xerox Alto became the first computer designed with a graphical user interface and mouse as primary interaction.",
      impact: "Cost $32,000 ($220,000 in 2025 dollars)",
      icon: <Cpu className="w-5 h-5" />
    },
    {
      year: "1981",
      title: "Commercial GUI Era",
      person: "Xerox Corporation",
      description: "The Xerox Star (8010) became the first commercially available computer with a GUI, icons, folders, and WYSIWYG editing.",
      impact: "Inspired Apple Lisa and Macintosh",
      icon: <Monitor className="w-5 h-5" />
    }
  ];

  const pioneers = [
    {
      name: "Vannevar Bush",
      title: "Information Architecture Visionary",
      years: "1890-1974",
      contribution: "His 1945 essay 'As We May Think' described the Memex, envisioning a future where humans could navigate vast amounts of interconnected information through associative trails - the conceptual foundation of hypertext.",
      quote: "Consider a future device... in which an individual stores all his books, records, and communications, and which is mechanized so that it may be consulted with exceeding speed and flexibility.",
      legacy: "Inspired Douglas Engelbart and Ted Nelson to pursue hypertext systems"
    },
    {
      name: "Douglas Engelbart",
      title: "Human Augmentation Pioneer",
      years: "1925-2013",
      contribution: "Founded the Augmentation Research Center at Stanford Research Institute. Invented the computer mouse, developed early hypertext systems, and pioneered collaborative computing tools.",
      quote: "The digital revolution is far more significant than the invention of writing or even of printing.",
      legacy: "His 1968 demo influenced every major advancement in personal computing"
    },
    {
      name: "Ivan Sutherland",
      title: "Computer Graphics Pioneer",
      years: "1938-Present",
      contribution: "Created Sketchpad in 1963, demonstrating that computers could be used for more than just processing numbers. Introduced concepts of graphical computing and direct manipulation interfaces.",
      quote: "The ultimate display would, of course, be a room within which the computer can control the existence of matter.",
      legacy: "Father of computer graphics, VR pioneer, Turing Award winner"
    },
    {
      name: "Alan Kay",
      title: "Object-Oriented UI Inventor",
      years: "1940-Present",
      contribution: "Conceived the Dynabook concept - a portable computer for children. Led development of Smalltalk at Xerox PARC, creating the first true object-oriented programming language with a graphical interface.",
      quote: "The best way to predict the future is to invent it.",
      legacy: "Influenced Steve Jobs, pioneered modern educational computing"
    },
    {
      name: "Larry Tesler",
      title: "Modeless Interface Champion",
      years: "1945-2020",
      contribution: "Invented cut, copy, and paste operations. Advocated for modeless interfaces where users don't need to switch between different states. Made computing more intuitive for non-programmers.",
      quote: "There's no mode that can't be eliminated.",
      legacy: "His 'no modes' philosophy shaped modern user interface design"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" data-testid="section-origins">
      <div className="max-w-6xl mx-auto">
        {/* Opening Narrative */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="font-display text-5xl sm:text-6xl font-bold mb-8 leading-tight" data-testid="text-origins-heading">
            Before the pixel, there was the vision
          </h2>
          
          <div className="prose prose-lg space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-xl">
              Long before screens glowed with graphical interfaces, before mice clicked and fingers tapped, visionaries imagined a future where humans and computers would collaborate as partners. This is the untold prehistory of UX/UI design — a story that begins not with pixels, but with profound questions about human cognition and information architecture.
            </p>
            
            <p>
              In the aftermath of World War II, as early computers filled entire rooms and required specialized operators, a handful of pioneers dared to imagine something radical: machines that would augment human intelligence rather than merely calculate. They envisioned systems that would feel natural, interfaces that would disappear into intuition, and tools that would amplify human creativity.
            </p>
            
            <p>
              These weren't designers in the modern sense — they were mathematicians, engineers, and cognitive scientists. Yet their work laid the foundation for everything we now call user experience. They asked the questions that still drive our field: How should humans and computers communicate? What makes an interface intuitive? How can technology enhance rather than replace human capabilities?
            </p>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <Clock className="w-6 h-6 text-accent" />
            <h3 className="font-display text-3xl font-semibold">Critical Moments in Pre-Digital Interface History</h3>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px h-full w-0.5 bg-accent/30" />
            
            {/* Timeline Events */}
            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={event.year}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                  data-testid={`timeline-event-${event.year}`}
                >
                  <div className="flex-1" />
                  
                  {/* Center dot and year */}
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center">
                      {event.icon}
                    </div>
                  </div>
                  
                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'} pl-20 md:pl-0`}>
                    <Card className="p-6 bg-card/50 backdrop-blur border-accent/30 hover:border-accent/50 transition-colors">
                      <div className="flex items-baseline gap-3 mb-2">
                        <span className="text-2xl font-bold text-accent">{event.year}</span>
                        <h4 className="text-xl font-semibold">{event.title}</h4>
                      </div>
                      <p className="text-sm text-muted-foreground mb-2">by {event.person}</p>
                      <p className="text-foreground/80 mb-3">{event.description}</p>
                      <div className="flex items-center gap-2">
                        <div className="w-1 h-4 bg-accent/50" />
                        <p className="text-sm font-medium text-accent/80">{event.impact}</p>
                      </div>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Research Centers Callout */}
        <Card className="p-8 mb-20 bg-accent/10 border-accent/30">
          <div className="flex items-start gap-4">
            <Users className="w-6 h-6 text-accent mt-1" />
            <div>
              <h4 className="text-xl font-semibold mb-3">Early HCI Research Centers</h4>
              <div className="grid md:grid-cols-3 gap-6 text-foreground/80">
                <div>
                  <p className="font-semibold text-accent">MIT</p>
                  <p className="text-sm">Lincoln Laboratory pioneered interactive computing with TX-0 and TX-2 computers, enabling Sutherland's Sketchpad.</p>
                </div>
                <div>
                  <p className="font-semibold text-accent">Stanford Research Institute</p>
                  <p className="text-sm">Engelbart's Augmentation Research Center developed NLS (oN-Line System), the first hypertext system with a mouse.</p>
                </div>
                <div>
                  <p className="font-semibold text-accent">Xerox PARC</p>
                  <p className="text-sm">The Computer Science Laboratory created Alto and Star, defining the desktop metaphor we still use today.</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Pioneers Section */}
        <FadeInSection className="mb-20">
          <h3 className="font-display text-3xl font-semibold mb-12">The Visionaries Who Defined Our Digital Future</h3>
          
          <div className="space-y-6">
            {pioneers.map((pioneer, index) => {
              const images = [
                VannevarBushImg,
                DouglasEngelbartImg,
                IvanSutherlandImg,
                AlanKayImg,
                LarryTeslerImg
              ];
              
              return (
                <ExpandablePioneerCard
                  key={pioneer.name}
                  pioneer={pioneer}
                  imageUrl={images[index]}
                  index={index}
                />
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
        <div className="max-w-4xl mx-auto">
          <Separator className="mb-12 bg-accent/20" />
          
          <h3 className="font-display text-3xl font-semibold mb-8">The Birth of Graphical Interfaces</h3>
          
          <div className="prose prose-lg space-y-6 text-foreground/90">
            <p>
              The transition from command-line interfaces to graphical user interfaces wasn't merely a technical evolution — it was a philosophical revolution. When the Xerox Alto displayed its first bitmapped screen in 1973, it represented a fundamental shift in how we conceive the relationship between humans and computers.
            </p>
            
            <p>
              For the first time, computers could show rather than tell. Icons replaced commands. The mouse enabled direct manipulation. The desktop metaphor made abstract digital concepts tangible. These weren't just new features; they were new languages for human-computer interaction.
            </p>
            
            <p>
              The researchers at Xerox PARC didn't just create new technology — they created new possibilities for human expression and creativity. Their work proved that computers could be tools for everyone, not just programmers. The GUI democratized computing, setting the stage for the personal computer revolution and, ultimately, for the field of UX/UI design itself.
            </p>
            
            <p className="text-xl font-medium text-accent">
              What began as academic research in the 1960s and 1970s would, within a generation, transform into a multi-billion dollar industry and reshape human civilization. The foundations laid by these pioneers continue to support every swipe, tap, and click we make today.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}