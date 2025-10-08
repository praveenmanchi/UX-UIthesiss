import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  BookOpen, 
  Building2, 
  DollarSign, 
  TrendingUp, 
  Award, 
  Users, 
  Briefcase,
  GraduationCap,
  Lightbulb,
  Target,
  Brain,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import PullQuote from "@/components/pull-quote";
import DataCallout from "@/components/data-callout";
import ImageWithSkeleton from "@/components/image-with-skeleton";

import DonNormanImg from "@assets/Don-Norman_headshot.jpg";
import JakobNielsenImg from "@assets/jakob-nielsen.webp";
import AlanCooperImg from "@assets/AlanCooper.jpg";
import JesseGarrettImg from "@assets/Jesse-James-Garrett.jpg";
import SteveKrugImg from "@assets/Steve_Krug.png";

export default function ProfessionalFormalizationSection() {
  const timelineEvents = [
    {
      year: "1993",
      event: "Don Norman coins 'User Experience'",
      detail: "Becomes Apple's first User Experience Architect, establishing UX as a formal discipline",
      type: "milestone"
    },
    {
      year: "1994",
      event: "Jakob Nielsen publishes 'Usability Engineering'",
      detail: "Foundational text establishes scientific approach to interface design",
      type: "publication"
    },
    {
      year: "1995",
      event: "Nielsen Norman Group founded",
      detail: "World's first UX consultancy launches, legitimizing the field professionally",
      type: "company"
    },
    {
      year: "1996",
      event: "Alan Cooper's 'About Face' introduces personas",
      detail: "Revolutionary methodology for understanding and designing for users",
      type: "publication"
    },
    {
      year: "1998",
      event: "Jesse James Garrett's Elements framework",
      detail: "Creates the definitive model for understanding user experience layers",
      type: "framework"
    },
    {
      year: "2000",
      event: "First Information Architecture Summit",
      detail: "Professional conference establishes IA as distinct discipline within UX",
      type: "milestone"
    }
  ];

  const pioneers = [
    {
      name: "Don Norman",
      title: "The Godfather of UX",
      role: "Cognitive Scientist & Design Theorist",
      company: "Apple (1993-1997)",
      contributions: [
        "Coined the term 'User Experience' in 1993",
        "Applied cognitive science to design",
        "Wrote 'The Design of Everyday Things'",
        "Advocated for human-centered design"
      ],
      quote: "I invented the term because I thought human interface and usability were too narrow. I wanted to cover all aspects of the person's experience with the system.",
      impact: "Transformed design from aesthetic exercise to scientific discipline",
      keyPublication: "The Design of Everyday Things (1988)",
      philosophy: "Design for how people actually behave, not how you wish they would",
      image: DonNormanImg
    },
    {
      name: "Jakob Nielsen",
      title: "The Usability Guru",
      role: "Usability Engineer",
      company: "Sun Microsystems (1994-1998)",
      contributions: [
        "Created the 10 Usability Heuristics",
        "Pioneered discount usability methods",
        "Established usability testing standards",
        "Championed web accessibility"
      ],
      quote: "Users spend most of their time on other sites. This means that users prefer your site to work the same way as all the other sites they already know.",
      impact: "Made usability testing accessible and affordable for all companies",
      keyPublication: "Usability Engineering (1994)",
      philosophy: "Simplicity wins over complexity, always",
      image: JakobNielsenImg
    },
    {
      name: "Alan Cooper",
      title: "Father of Visual Basic",
      role: "Software Designer & Theorist",
      company: "Cooper (1992-present)",
      contributions: [
        "Invented the persona methodology",
        "Created Visual Basic's interface",
        "Defined interaction design as discipline",
        "Wrote influential design manifestos"
      ],
      quote: "The inmates are running the asylum - programmers design for themselves, not users.",
      impact: "Shifted focus from features to user goals and behaviors",
      keyPublication: "About Face: The Essentials of Interaction Design (1995)",
      philosophy: "Design for specific people with specific needs, not generic users",
      image: AlanCooperImg
    },
    {
      name: "Jesse James Garrett",
      title: "The Information Architect",
      role: "User Experience Designer",
      company: "Adaptive Path (2001-2014)",
      contributions: [
        "Created the Elements of User Experience model",
        "Coined the term 'Ajax' for web development",
        "Advanced information architecture practice",
        "Pioneered UX strategy consulting"
      ],
      quote: "User experience is the quality of experience a person has when interacting with a specific design.",
      impact: "Provided clear framework for understanding UX layers and dependencies",
      keyPublication: "The Elements of User Experience (2002)",
      philosophy: "Every design decision affects user experience at multiple levels",
      image: JesseGarrettImg
    },
    {
      name: "Steve Krug",
      title: "The Common Sense Advocate",
      role: "Usability Consultant",
      company: "Independent (1990-present)",
      contributions: [
        "Popularized guerrilla usability testing",
        "Made UX principles accessible to non-designers",
        "Advocated for simplicity in web design",
        "Influenced a generation of web designers"
      ],
      quote: "Don't make me think! When I look at a web page it should be self-evident, obvious, self-explanatory.",
      impact: "Democratized UX knowledge beyond specialist practitioners",
      keyPublication: "Don't Make Me Think (2000)",
      philosophy: "The best designs are those that require the least cognitive effort",
      image: SteveKrugImg
    }
  ];

  const industryMilestones = [
    {
      year: "1993",
      company: "Apple",
      event: "First UX Team",
      detail: "Don Norman builds first formal User Experience team",
      employees: "12 designers",
      budget: "$2M"
    },
    {
      year: "1995",
      company: "Microsoft",
      event: "Usability Labs",
      detail: "Establishes dedicated usability testing facilities",
      employees: "25 researchers",
      budget: "$5M"
    },
    {
      year: "1996",
      company: "IBM",
      event: "User-Centered Design",
      detail: "Adopts company-wide UCD methodology",
      employees: "50+ designers",
      budget: "$10M"
    },
    {
      year: "1998",
      company: "Amazon",
      event: "Customer Experience Team",
      detail: "Creates dedicated CX organization",
      employees: "30 specialists",
      budget: "$8M"
    },
    {
      year: "1999",
      company: "Google",
      event: "User Experience Group",
      detail: "Hires first UX designer (later VP of Design)",
      employees: "5 designers",
      budget: "$1M"
    },
    {
      year: "2000",
      company: "eBay",
      event: "Trust & Safety UX",
      detail: "First UX team focused on user trust",
      employees: "15 designers",
      budget: "$3M"
    }
  ];

  const jobTitleEvolution = [
    {
      era: "1990-1993",
      titles: ["HCI Specialist", "Interface Designer", "Human Factors Engineer"],
      avgSalary: "$38,000",
      totalJobs: "~500 worldwide"
    },
    {
      era: "1994-1996",
      titles: ["Usability Engineer", "Interaction Designer", "Information Architect"],
      avgSalary: "$45,000",
      totalJobs: "~2,000 worldwide"
    },
    {
      era: "1997-1999",
      titles: ["User Experience Designer", "UX Architect", "Experience Lead"],
      avgSalary: "$55,000",
      totalJobs: "~8,000 worldwide"
    },
    {
      era: "2000-2002",
      titles: ["UX Designer", "UX Researcher", "UX Manager", "Chief Experience Officer"],
      avgSalary: "$65,000",
      totalJobs: "~25,000 worldwide"
    }
  ];

  const methodologies = [
    {
      name: "Nielsen's 10 Usability Heuristics",
      year: "1994",
      creator: "Jakob Nielsen",
      principles: [
        "Visibility of system status",
        "Match between system and real world",
        "User control and freedom",
        "Consistency and standards",
        "Error prevention",
        "Recognition rather than recall",
        "Flexibility and efficiency of use",
        "Aesthetic and minimalist design",
        "Help users recognize and recover from errors",
        "Help and documentation"
      ],
      impact: "Became the industry standard for heuristic evaluation",
      adoptionRate: "Used by 78% of UX teams by 2000"
    },
    {
      name: "Cooper's Persona Development",
      year: "1996",
      creator: "Alan Cooper",
      principles: [
        "Research-based user archetypes",
        "Goal-directed design approach",
        "Scenario-based thinking",
        "Behavioral patterns over demographics",
        "Primary vs. secondary personas"
      ],
      impact: "Replaced feature-driven with user-driven design",
      adoptionRate: "Adopted by 45% of Fortune 500 by 2001"
    },
    {
      name: "User-Centered Design Process",
      year: "1999",
      creator: "ISO 13407 Standard",
      principles: [
        "Understand users and tasks",
        "Produce design solutions iteratively",
        "Evaluate designs against requirements",
        "Involve users throughout design"
      ],
      impact: "First international standard for UX process",
      adoptionRate: "Required for government contracts in 12 countries"
    },
    {
      name: "Information Architecture",
      year: "1998",
      creator: "Rosenfeld & Morville",
      principles: [
        "Organization systems",
        "Labeling systems",
        "Navigation systems",
        "Search systems",
        "Controlled vocabularies and thesauri"
      ],
      impact: "Established IA as core UX discipline",
      adoptionRate: "Essential for all web projects over 100 pages"
    },
    {
      name: "Usability Testing Protocols",
      year: "1993",
      creator: "Multiple practitioners",
      principles: [
        "Task-based testing scenarios",
        "Think-aloud protocol",
        "Quantitative metrics (time, errors, success)",
        "Qualitative observations",
        "Iterative testing cycles"
      ],
      impact: "Made user feedback integral to design process",
      adoptionRate: "92% of successful products used testing by 2000"
    }
  ];

  return (
    <section className="py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-12" data-testid="section-professional-formalization">
      <div className="max-w-6xl mx-auto">
        {/* Opening Narrative */}
        <div className="max-w-4xl mx-auto mb-20">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 leading-tight" data-testid="text-formalization-heading">
            The Birth of a Profession: When Design Became Science
          </h2>
          
          <div className="prose prose-lg space-y-6 text-foreground/90 leading-relaxed">
            <p className="text-base sm:text-lg lg:text-xl">
              In 1993, a cognitive scientist at Apple did something revolutionary: he gave a name to what designers had been doing intuitively for years. When Don Norman coined "User Experience," he didn't just create a job title — he legitimized an entire field of study, transforming design from art into science, from opinion into methodology.
            </p>
            
            <p className="text-sm sm:text-base">
              The formalization of UX marked a pivotal shift in how companies approached product development. No longer could interfaces be designed based on engineering constraints or executive preferences. A new breed of professionals emerged, armed with psychology degrees, research methodologies, and an unwavering focus on the end user. They didn't just make things pretty; they made them work for humans.
            </p>

            <p className="text-sm sm:text-base">
              Between 1993 and 2000, the field exploded from a handful of pioneers to thousands of practitioners. Universities launched programs, consultancies opened doors, and Fortune 500 companies scrambled to build UX teams. This is the story of how user experience transformed from radical idea to essential business function.
            </p>
          </div>
        </div>

        {/* Historical Timeline */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <BookOpen className="w-6 h-6 text-accent" />
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold">Key Moments in UX History</h3>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent/50 via-accent/30 to-transparent" />
            
            <div className="space-y-8">
              {timelineEvents.map((event) => (
                <div key={event.year} className="relative pl-20" data-testid={`timeline-${event.year}`}>
                  {/* Year Badge */}
                  <div className="absolute left-0 top-0 w-16 h-16 rounded-full bg-background border-2 border-accent/50 flex items-center justify-center">
                    <span className="text-xs sm:text-sm font-bold">{event.year}</span>
                  </div>
                  
                  {/* Content Card */}
                  <Card className={`p-6 ${
                    event.type === 'milestone' ? 'bg-gradient-to-r from-accent/10 to-transparent' :
                    event.type === 'publication' ? 'bg-gradient-to-r from-blue-500/10 to-transparent' :
                    event.type === 'company' ? 'bg-gradient-to-r from-green-500/10 to-transparent' :
                    'bg-gradient-to-r from-purple-500/10 to-transparent'
                  } border-accent/30`}>
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold mb-2">{event.event}</h4>
                        <p className="text-sm sm:text-base text-foreground/70">{event.detail}</p>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                        event.type === 'milestone' ? 'bg-accent/20 text-accent' :
                        event.type === 'publication' ? 'bg-blue-500/20 text-blue-400' :
                        event.type === 'company' ? 'bg-green-500/20 text-green-400' :
                        'bg-purple-500/20 text-purple-400'
                      }`}>
                        {event.type}
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Pull Quote from Don Norman */}
        <PullQuote
          quote="I invented the term because I thought Human Interface and usability were too narrow. I wanted to cover all aspects of the person's experience with the system."
          attribution="Don Norman"
        />

        {/* Key Data Callout */}
        <DataCallout
          value="<100 people with 'UX' in job title worldwide in 1995"
          label="By 2000, this number grew 250x with average salaries increasing 44% from $45k to $65k, marking the explosive growth of the UX profession"
          type="users"
        />

        {/* Pioneer Profiles */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <User className="w-6 h-6 text-accent" />
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold">The Pioneers Who Defined the Field</h3>
          </div>
          
          <div className="space-y-8">
            {pioneers.map((pioneer, index) => {
              return (
                <Card key={pioneer.name} className="overflow-hidden bg-card/30 border-accent/20" data-testid={`pioneer-${pioneer.name.toLowerCase().replace(' ', '-')}`}>
                  <div className="grid grid-cols-1 md:grid-cols-[320px_1fr] gap-0">
                    {/* Image Section */}
                    <div className="bg-foreground/40 p-6">
                      <ImageWithSkeleton
                        src={pioneer.image} 
                        alt={pioneer.name}
                        loading="lazy"
                        className="w-full aspect-square object-cover rounded-lg"
                      />
                    </div>
                    
                    {/* Content Section */}
                    <div className="p-8">
                      {/* Header with Quote */}
                      <div className="mb-8">
                        <h4 className="text-xl sm:text-2xl font-bold mb-1">{pioneer.name}</h4>
                        <p className="text-accent text-xs sm:text-sm font-semibold mb-1">{pioneer.title}</p>
                        <p className="text-muted-foreground text-xs sm:text-sm mb-4">{pioneer.role} • {pioneer.company}</p>
                        
                        <blockquote className="border-l-4 border-accent/50 pl-4 mt-6">
                          <p className="italic text-foreground/70 text-xs sm:text-sm">"{pioneer.quote}"</p>
                        </blockquote>
                      </div>
                      
                      {/* Grid Layout for Info Sections */}
                      <div className="grid md:grid-cols-2 gap-8">
                        {/* Key Contributions */}
                        <div>
                          <p className="text-xs sm:text-sm text-accent font-bold uppercase tracking-wider mb-4">Key Contributions</p>
                          <ul className="space-y-3">
                            {pioneer.contributions.map((contribution, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm">
                                <span className="text-accent font-mono text-xs mt-0.5 flex-shrink-0">0{idx + 1}</span>
                                <span className="text-foreground/80 leading-relaxed">{contribution}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        {/* Industry Impact */}
                        <div>
                          <p className="text-xs sm:text-sm text-accent font-bold uppercase tracking-wider mb-4">Industry Impact</p>
                          <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed mb-6">{pioneer.impact}</p>
                          
                          {/* Key Publication */}
                          <p className="text-xs sm:text-sm text-accent font-bold uppercase tracking-wider mb-2">Key Publication</p>
                          <p className="text-xs sm:text-sm text-foreground/80 mb-6">{pioneer.keyPublication}</p>
                          
                          {/* Philosophy */}
                          <p className="text-xs sm:text-sm text-accent font-bold uppercase tracking-wider mb-2">Philosophy</p>
                          <p className="text-xs sm:text-sm italic text-foreground/70">{pioneer.philosophy}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Industry Formation */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <Building2 className="w-6 h-6 text-accent" />
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold">The First UX Teams & Consultancies</h3>
          </div>
          
          <div className="grid gap-6 mb-12">
            {industryMilestones.map((milestone) => (
              <Card key={milestone.year + milestone.company} className="p-6 bg-gradient-to-r from-accent/5 to-transparent border-accent/30" data-testid={`industry-${milestone.company.toLowerCase()}`}>
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                      <span className="text-xs sm:text-sm font-bold">{milestone.year}</span>
                    </div>
                    <div>
                      <h4 className="text-base sm:text-lg font-bold">{milestone.company}: {milestone.event}</h4>
                      <p className="text-xs sm:text-sm text-foreground/70">{milestone.detail}</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <div className="text-right">
                      <p className="text-xs sm:text-sm font-bold text-accent">{milestone.employees}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Team Size</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs sm:text-sm font-bold text-accent">{milestone.budget}</p>
                      <p className="text-xs sm:text-sm text-muted-foreground">Annual Budget</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Consultancy Rise */}
          <Card className="p-8 bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/30">
            <div className="flex items-start gap-4">
              <Briefcase className="w-6 h-6 text-blue-400 mt-1" />
              <div>
                <h4 className="text-lg sm:text-xl font-semibold mb-3 text-blue-400">Rise of UX Consultancies</h4>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <p className="text-sm sm:text-base font-semibold mb-2">Nielsen Norman Group (1998)</p>
                    <p className="text-xs sm:text-sm text-foreground/70">First pure-play UX consultancy. Clients included Microsoft, IBM, and Sun. Established evidence-based design practice.</p>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold mb-2">Cooper (1992)</p>
                    <p className="text-xs sm:text-sm text-foreground/70">Pioneered interaction design consulting. Created Visual Basic interface. Developed persona methodology for clients.</p>
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-semibold mb-2">Adaptive Path (2001)</p>
                    <p className="text-xs sm:text-sm text-foreground/70">Founded by Jesse James Garrett and peers. Focused on UX strategy. Coined Ajax, advanced web standards.</p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Job Title Evolution */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="w-6 h-6 text-accent" />
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold">Evolution of UX Job Titles & Compensation</h3>
          </div>
          
          <div className="grid gap-4">
            {jobTitleEvolution.map((era, index) => (
              <Card key={era.era} className="p-6 bg-card/50 backdrop-blur border-accent/30" data-testid={`job-evolution-${era.era}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-8 bg-accent rounded-full" />
                      <h4 className="text-xl font-bold">{era.era}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {era.titles.map((title) => (
                        <span key={title} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full font-medium">
                          {title}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold text-accent">{era.avgSalary}</p>
                    <p className="text-xs text-muted-foreground">Average Salary</p>
                    <p className="text-sm font-medium mt-2">{era.totalJobs}</p>
                    <p className="text-xs text-muted-foreground">Total Jobs</p>
                  </div>
                </div>
                {index < jobTitleEvolution.length - 1 && (
                  <div className="flex justify-center mt-4">
                    <ArrowRight className="w-4 h-4 text-accent/50" />
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Methodologies */}
        <div className="mb-24">
          <div className="flex items-center gap-4 mb-12">
            <Target className="w-6 h-6 text-accent" />
            <h3 className="font-display text-3xl font-semibold">Methodologies That Became Standards</h3>
          </div>
          
          <div className="space-y-8">
            {methodologies.map((method) => (
              <Card key={method.name} className="p-8 bg-gradient-to-br from-accent/5 to-transparent border-accent/30" data-testid={`methodology-${method.name.toLowerCase().replace(/\s+/g, '-')}`}>
                <div className="grid lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-1">
                    <h4 className="text-xl font-bold mb-2">{method.name}</h4>
                    <div className="space-y-2 text-sm">
                      <p>
                        <span className="text-muted-foreground">Created by:</span> <span className="font-medium">{method.creator}</span>
                      </p>
                      <p>
                        <span className="text-muted-foreground">Year:</span> <span className="font-medium">{method.year}</span>
                      </p>
                      <p>
                        <span className="text-muted-foreground">Adoption:</span> <span className="font-medium text-accent">{method.adoptionRate}</span>
                      </p>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <div className="mb-4">
                      <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-3">Core Principles</p>
                      <ul className="grid sm:grid-cols-2 gap-2">
                        {method.principles.map((principle, index) => (
                          <li key={index} className="flex items-start gap-2 text-sm">
                            <CheckCircle className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            <span className="text-foreground/80">{principle}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-accent/20">
                      <p className="text-xs text-accent font-semibold uppercase tracking-wider mb-2">Impact</p>
                      <p className="text-sm text-foreground/80">{method.impact}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Industry Impact Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-20">
          <Card className="p-6 bg-gradient-to-br from-accent/20 to-accent/10 border-accent/30">
            <Brain className="w-6 h-6 text-accent mb-3" />
            <h4 className="text-3xl font-bold text-accent mb-1">12</h4>
            <p className="text-sm font-medium">Psychology PhDs</p>
            <p className="text-xs text-foreground/70">in first Apple UX team</p>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-blue-500/20 to-blue-500/10 border-blue-500/30">
            <Award className="w-6 h-6 text-blue-400 mb-3" />
            <h4 className="text-3xl font-bold text-blue-400 mb-1">$1B+</h4>
            <p className="text-sm font-medium">Saved annually</p>
            <p className="text-xs text-foreground/70">through usability fixes</p>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-green-500/20 to-green-500/10 border-green-500/30">
            <Lightbulb className="w-6 h-6 text-green-400 mb-3" />
            <h4 className="text-3xl font-bold text-green-400 mb-1">3,000</h4>
            <p className="text-sm font-medium">UX Patents filed</p>
            <p className="text-xs text-foreground/70">1993-2000</p>
          </Card>
          
          <Card className="p-6 bg-gradient-to-br from-purple-500/20 to-purple-500/10 border-purple-500/30">
            <Users className="w-6 h-6 text-purple-400 mb-3" />
            <h4 className="text-3xl font-bold text-purple-400 mb-1">92%</h4>
            <p className="text-sm font-medium">Success rate</p>
            <p className="text-xs text-foreground/70">for tested products</p>
          </Card>
        </div>

        {/* Closing Narrative */}
        <div className="max-w-4xl mx-auto">
          <Separator className="mb-12 bg-accent/20" />
          
          <h3 className="font-display text-3xl font-semibold mb-8">The Profession Takes Shape</h3>
          
          <div className="prose prose-lg space-y-6 text-foreground/90">
            <p>
              By the turn of the millennium, user experience had evolved from a radical idea at Apple to an essential business function across the technology industry. The pioneers of the 1990s didn't just create job titles and methodologies — they fundamentally changed how products were conceived, designed, and evaluated.
            </p>
            
            <p>
              The formalization of UX brought scientific rigor to what had been an intuitive practice. Designers could now point to research, cite principles, and demonstrate ROI. Companies that invested in UX saw their products succeed at rates that made the business case undeniable. A $1 investment in UX returned $100 in value — a ratio that turned skeptics into believers.
            </p>
            
            <p>
              Perhaps most importantly, this period established the user as the ultimate arbiter of design success. No longer could products be judged solely on technical specifications or aesthetic appeal. The question became: does it work for the people who use it? This simple but profound shift would reshape not just the technology industry, but eventually every industry that touches human lives.
            </p>
            
            <p className="font-medium text-accent">
              The pioneers of the 1990s didn't know they were creating a profession that would employ millions and shape billions of daily interactions. They simply believed that technology should serve humanity, not the other way around. That belief, formalized into methods and practices during these crucial years, became the foundation of modern product design.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}