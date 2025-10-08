import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Monitor, MousePointer, Package, Users, Briefcase, BarChart2, Zap, Trophy, DollarSign, TrendingUp } from "lucide-react";
import PullQuote from "@/components/pull-quote";
import DataCallout from "@/components/data-callout";
import TimelineTrack from "@/components/timeline-track";
import TimelineMinimap from "@/components/timeline-minimap";
import StackedAreaChart from "@/components/stacked-area-chart";
import ProportionalBarGroup from "@/components/proportional-bar-group";
import FadeInSection from "@/components/fade-in-section";

export default function GuiRevolutionSection() {
  const timelineEvents = [
    {
      year: "1983",
      title: "Apple Lisa",
      description: "First mass-marketed personal computer with a GUI and mouse. Priced at $9,995 ($31,000 in 2025 dollars), it was a commercial failure with only 10,000 units sold.",
      details: "Despite poor sales, the Lisa proved that graphical interfaces were technically viable for personal computers, paving the way for future innovations.",
      impact: "Proved GUI was possible for personal computers, establishing the foundation for the Macintosh"
    },
    {
      year: "1984",
      title: "Macintosh Launch",
      description: "The computer for the rest of us - affordable GUI computing at $2,495 ($7,500 in 2025). Sold 70,000 units in first 100 days, finally making graphical interfaces accessible.",
      details: "With its famous 1984 Super Bowl commercial and revolutionary design, the Macintosh transformed Apple from a niche player into a cultural phenomenon.",
      impact: "Made GUI accessible to creative professionals and established Apple as an innovation leader"
    },
    {
      year: "1985",
      title: "Windows 1.0",
      description: "Microsoft's first graphical operating environment for MS-DOS, priced at just $99 ($280 in 2025). Initially received poor reviews due to limited functionality.",
      details: "Though criticized as a Mac copycat, Windows 1.0 marked Microsoft's strategic entry into the GUI market that would eventually dominate the industry.",
      impact: "Microsoft's entry into GUI market, beginning a decades-long competition with Apple"
    },
    {
      year: "1990",
      title: "Windows 3.0 Breakthrough",
      description: "First commercially successful version of Windows at $149 ($350 in 2025). Sold 10 million copies in 2 years, finally delivering a usable GUI for the PC masses.",
      details: "Windows 3.0's Program Manager and File Manager became the standard interface pattern, and its improved performance made it viable for business use.",
      impact: "GUI becomes mainstream on PCs, shifting market dominance from Apple to Microsoft"
    },
    {
      year: "1995",
      title: "Windows 95 Revolution",
      description: "Revolutionary OS with the iconic Start menu and taskbar, priced at $209 ($420 in 2025). Sold 40 million copies in the first year with a $700 million marketing campaign.",
      details: "The Start Me Up campaign featuring The Rolling Stones made Windows 95 a cultural event. Lines formed at midnight launches worldwide.",
      impact: "GUI becomes essential for all computer users, achieving over 90% market share by 2000"
    }
  ];

  const designPrinciples = [
    {
      name: "WYSIWYG",
      fullName: "What You See Is What You Get",
      description: "Documents appear on screen exactly as they will when printed, eliminating the guesswork of command-line formatting.",
      icon: <Monitor className="w-6 h-6" />,
      example: "MacWrite and MacPaint pioneered this principle in 1984",
      modernUsage: "Foundation of all modern document editors and design tools"
    },
    {
      name: "Direct Manipulation",
      fullName: "Interact with objects, not commands",
      description: "Users can click, drag, and manipulate visual representations of data directly, rather than typing abstract commands.",
      icon: <MousePointer className="w-6 h-6" />,
      example: "Drag-and-drop file management introduced with Macintosh",
      modernUsage: "Touch interfaces extend this principle to smartphones and tablets"
    },
    {
      name: "Desktop Metaphor",
      fullName: "Digital workspace mimics physical office",
      description: "Files, folders, trash cans, and desktops provide familiar mental models for organizing digital information.",
      icon: <Package className="w-6 h-6" />,
      example: "Xerox Star's office metaphor adopted by both Apple and Microsoft",
      modernUsage: "Still the dominant paradigm for file management systems"
    },
    {
      name: "Visual Consistency",
      fullName: "Unified design language across applications",
      description: "Standardized UI elements and behaviors create predictable, learnable interfaces across different programs.",
      icon: <Zap className="w-6 h-6" />,
      example: "Apple's Human Interface Guidelines (1987) set the standard",
      modernUsage: "Design systems like Material Design and iOS HIG continue this tradition"
    },
    {
      name: "Menu Systems",
      fullName: "Hierarchical organization of commands",
      description: "Pull-down menus, context menus, and toolbars organize complex functionality into discoverable, accessible structures.",
      icon: <BarChart2 className="w-6 h-6" />,
      example: "Lisa's menu bar became the standard for decades",
      modernUsage: "Evolved into ribbons, hamburger menus, and command palettes"
    }
  ];

  const companyProfiles = [
    {
      company: "Apple",
      leader: "Steve Jobs",
      philosophy: "Design-First Innovation",
      approach: "Premium experience for creative professionals",
      keyMoments: [
        {
          year: "1979",
          event: "Steve Jobs visits Xerox PARC",
          impact: "Sees Alto demo, immediately understands GUI's potential"
        },
        {
          year: "1983",
          event: "Lisa launch",
          impact: "Over-engineered and overpriced, but proves the concept"
        },
        {
          year: "1984",
          event: "Macintosh Super Bowl ad",
          impact: "Positions Apple as revolutionary alternative to IBM"
        },
        {
          year: "1985",
          event: "Jobs forced out of Apple",
          impact: "GUI innovation stagnates until his return in 1997"
        }
      ],
      quote: "Design is not just what it looks like and feels like. Design is how it works.",
      marketStrategy: "Target creative professionals and education markets with premium, integrated experiences",
      revenue1990: "$5.5 billion",
      marketShare1990: "15% of personal computers"
    },
    {
      company: "Microsoft",
      leader: "Bill Gates",
      philosophy: "Pragmatic Ubiquity",
      approach: "Affordable software for every PC",
      keyMoments: [
        {
          year: "1981",
          event: "MS-DOS becomes IBM PC standard",
          impact: "Establishes Microsoft as OS leader before GUI era"
        },
        {
          year: "1985",
          event: "Windows 1.0 ships late",
          impact: "Poor initial reception, seen as Mac copycat"
        },
        {
          year: "1990",
          event: "Windows 3.0 breakthrough",
          impact: "Finally delivers usable GUI for PC masses"
        },
        {
          year: "1995",
          event: "Windows 95 launch",
          impact: "$700 million marketing campaign, computing goes mainstream"
        }
      ],
      quote: "Your most unhappy customers are your greatest source of learning.",
      marketStrategy: "License to all PC manufacturers, iterate rapidly based on market feedback",
      revenue1990: "$1.8 billion",
      marketShare1990: "90% of PC operating systems"
    }
  ];

  const marketAreaData = [
    { year: "1984", macs: 0.07, windows: 0 },
    { year: "1985", macs: 0.2, windows: 0.02 },
    { year: "1987", macs: 0.8, windows: 0.5 },
    { year: "1990", macs: 1.5, windows: 10 },
    { year: "1992", macs: 3.0, windows: 25 },
    { year: "1995", macs: 4.5, windows: 60 },
    { year: "1997", macs: 4.0, windows: 150 },
    { year: "2000", macs: 3.5, windows: 300 }
  ];

  const proportionalBarData = [
    {
      year: "1984",
      label: "Mac launches",
      segments: [
        { value: 0.07, color: "hsl(217, 100%, 53%)", label: "Macintosh" },
        { value: 0.01, color: "hsl(142, 63%, 39%)", label: "Other GUI" }
      ],
      total: 0.08
    },
    {
      year: "1990",
      label: "Windows 3.0 breakthrough",
      segments: [
        { value: 1.5, color: "hsl(217, 100%, 53%)", label: "Macintosh" },
        { value: 10, color: "hsl(142, 63%, 39%)", label: "Windows" }
      ],
      total: 11.5
    },
    {
      year: "1995",
      label: "Windows 95 dominance",
      segments: [
        { value: 4.5, color: "hsl(217, 100%, 53%)", label: "Macintosh" },
        { value: 60, color: "hsl(142, 63%, 39%)", label: "Windows" }
      ],
      total: 64.5
    },
    {
      year: "2000",
      label: "Peak market saturation",
      segments: [
        { value: 3.5, color: "hsl(217, 100%, 53%)", label: "Macintosh" },
        { value: 300, color: "hsl(142, 63%, 39%)", label: "Windows" }
      ],
      total: 303.5
    }
  ];

  return (
    <section className="py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-12 bg-primary/5" data-testid="section-gui-revolution">
      <div className="max-w-6xl mx-auto">
        {/* Opening Narrative */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight" data-testid="text-revolution-heading">
            The GUI Wars: When Computing Became Personal
          </h2>
          
          <div className="prose prose-lg space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-base sm:text-lg lg:text-xl">
              In 1979, a young Steve Jobs walked into Xerox PARC and witnessed the future. What he saw — a computer controlled by pointing and clicking rather than typing commands — would spark a revolution that transformed computers from corporate tools into personal creative instruments. This is the story of how two companies, Apple and Microsoft, took an academic research project and turned it into the foundation of modern computing.
            </p>
            
            <p className="text-sm sm:text-base">
              The commercialization of the graphical user interface wasn't just a business competition; it was a battle for the soul of computing. Would computers be beautiful, intuitive tools for creative expression, as Apple envisioned? Or practical, affordable utilities for every desk, as Microsoft pursued? The answer, ultimately, was both — but the journey there reshaped entire industries and established design principles we still follow today.
            </p>
          </div>
        </div>

        {/* Historical Timeline - Interactive */}
        <FadeInSection className="mb-24 relative">
          <TimelineTrack 
            events={timelineEvents}
            title="The Race to Democratize Computing"
            description="From Xerox PARC to Windows 95: How two companies transformed computing forever"
          />
          <TimelineMinimap 
            events={timelineEvents}
            sectionId="revolution"
          />
        </FadeInSection>

        {/* Pull Quote */}
        <PullQuote
          quote="The computer for the rest of us"
          attribution="Apple Macintosh tagline"
        />

        {/* Design Wars Callout */}
        <Card className="p-8 mb-20 bg-gradient-to-br from-red-500/10 to-transparent border-red-500/30">
          <div className="flex items-start gap-4">
            <Briefcase className="w-6 h-6 text-red-400 mt-1" />
            <div>
              <h4 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-red-400">The Look and Feel Lawsuits</h4>
              <div className="space-y-3 text-foreground/80">
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">1988:</span> Apple sues Microsoft for copyright infringement over Windows 2.0, claiming it copies the "look and feel" of Macintosh.
                </p>
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">1989:</span> Apple extends lawsuit to HP's NewWave, seeking to establish GUI elements as copyrightable expression.
                </p>
                <p className="text-sm sm:text-base">
                  <span className="font-semibold">1994:</span> Courts rule that GUI elements are functional, not artistic expression. Microsoft wins, establishing that interface concepts cannot be monopolized.
                </p>
                <p className="font-medium text-accent text-sm sm:text-base">
                  Impact: This ruling allowed GUI innovation to flourish across the industry, preventing any single company from owning fundamental interface concepts.
                </p>
              </div>
            </div>
          </div>
        </Card>

        {/* Company Profiles */}
        <div className="mb-24">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-12">Two Visions, One Revolution</h3>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {companyProfiles.map((profile) => (
              <Card key={profile.company} className="p-8 bg-card/50 backdrop-blur border-accent/30" data-testid={`profile-${profile.company.toLowerCase()}`}>
                <div className="mb-6">
                  <h4 className="text-2xl sm:text-3xl font-bold mb-2">{profile.company}</h4>
                  <p className="text-base sm:text-lg text-accent">{profile.philosophy}</p>
                  <p className="text-xs sm:text-sm text-muted-foreground mt-1">Led by {profile.leader}</p>
                </div>
                
                <blockquote className="border-l-4 border-accent/50 pl-4 mb-6 italic text-sm sm:text-base text-foreground/70">
                  "{profile.quote}"
                  <footer className="text-xs sm:text-sm mt-2 not-italic">— {profile.leader}</footer>
                </blockquote>
                
                <div className="space-y-4 mb-6">
                  <p className="text-xs sm:text-sm font-medium text-accent">Strategy:</p>
                  <p className="text-xs sm:text-sm text-foreground/80">{profile.marketStrategy}</p>
                  
                  <div className="space-y-2">
                    <p className="text-xs sm:text-sm font-medium text-accent">Key Moments:</p>
                    {profile.keyMoments.map((moment) => (
                      <div key={moment.year} className="flex gap-3 text-xs sm:text-sm">
                        <span className="font-mono text-accent/70">{moment.year}</span>
                        <div className="flex-1">
                          <p className="font-medium">{moment.event}</p>
                          <p className="text-muted-foreground text-xs">{moment.impact}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-accent/20">
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-accent">{profile.revenue1990}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">1990 Revenue</p>
                  </div>
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-accent">{profile.marketShare1990}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">1990 Market Share</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Market Share Stacked Area Chart */}
        <StackedAreaChart
          data={marketAreaData}
          areas={[
            { dataKey: "macs", name: "Macintosh Users", color: "hsl(217, 100%, 53%)" },
            { dataKey: "windows", name: "Windows Users", color: "hsl(142, 63%, 39%)" }
          ]}
          title="GUI Operating System Adoption (1984-2000)"
          description="The dramatic shift from Macintosh dominance to Windows ubiquity"
          yAxisLabel="Users (millions)"
        />

        {/* Proportional Market Share Bars */}
        <ProportionalBarGroup
          data={proportionalBarData}
          title="Market Share Evolution"
          description="Comparative market dominance at key milestones in GUI history"
        />

        {/* Core Design Principles */}
        <div className="mb-24">
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-12">Design Principles That Shaped Computing</h3>
          
          <div className="grid gap-6">
            {designPrinciples.map((principle) => (
              <Card key={principle.name} className="p-6 bg-card/50 backdrop-blur border-border hover:border-accent/50 transition-colors" data-testid={`principle-${principle.name.toLowerCase()}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center flex-shrink-0">
                    {principle.icon}
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-baseline gap-3 mb-3">
                      <h4 className="text-xl sm:text-2xl font-bold">{principle.name}</h4>
                      <span className="text-xs sm:text-sm text-muted-foreground">({principle.fullName})</span>
                    </div>
                    
                    <p className="text-sm sm:text-base text-foreground/80 mb-4">{principle.description}</p>
                    
                    <div className="grid sm:grid-cols-2 gap-4 pt-4 border-t border-accent/20">
                      <div>
                        <p className="text-xs sm:text-sm text-accent font-semibold uppercase tracking-wider mb-1">Historical Example</p>
                        <p className="text-xs sm:text-sm text-foreground/70">{principle.example}</p>
                      </div>
                      <div>
                        <p className="text-xs sm:text-sm text-accent font-semibold uppercase tracking-wider mb-1">Modern Legacy</p>
                        <p className="text-xs sm:text-sm text-foreground/70">{principle.modernUsage}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Data Callout for Windows 95 */}
        <DataCallout
          value="40 million copies in first year"
          label="Windows 95 became the largest software launch in history, with a $700M marketing budget including licensing 'Start Me Up' by The Rolling Stones"
          type="chart"
        />

        {/* Closing Narrative */}
        <div className="max-w-4xl mx-auto">
          <Separator className="mb-12 bg-accent/20" />
          
          <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-8">From Revolution to Foundation</h3>
          
          <div className="prose prose-lg space-y-6 text-foreground/90">
            <p className="text-sm sm:text-base">
              The GUI revolution of the 1980s and 1990s wasn't just about making computers easier to use — it was about reimagining the relationship between humans and machines. Apple's vision of computers as "bicycles for the mind" and Microsoft's dream of "a computer on every desk" both came true, creating an industry worth trillions and transforming how humanity creates, communicates, and thinks.
            </p>
            
            <p className="text-sm sm:text-base">
              The principles established during these GUI wars — direct manipulation, visual consistency, WYSIWYG editing — became so fundamental that we now take them for granted. Every smartphone swipe, every drag-and-drop action, every menu you navigate traces its lineage back to these pioneering days when two companies fought to define the future of human-computer interaction.
            </p>
            
            <p className="text-base sm:text-lg lg:text-xl font-medium text-accent">
              What started as a $32,000 research computer at Xerox became a $3 trillion industry. The GUI didn't just change how we use computers — it changed what computers could be: not just tools for calculation, but extensions of human creativity and thought.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}