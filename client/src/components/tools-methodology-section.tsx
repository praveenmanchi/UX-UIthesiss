import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { 
  Layers, 
  Users, 
  Zap, 
  GitBranch, 
  Code, 
  Brain,
  Clock,
  Target,
  TrendingUp,
  Package
} from 'lucide-react';
import CurvedToolTimeline from '@/components/curved-tool-timeline';
import UXTimelineChart from '@/components/ux-timeline-chart';
import MarketShareChart from '@/components/market-share-chart';
import SkillsEvolutionChart from '@/components/skills-evolution-chart';
import UXToolEvolutionChart from '@/components/ux-tool-evolution-chart';
import PullQuote from '@/components/pull-quote';
import DataCallout from '@/components/data-callout';
import FadeInSection from '@/components/fade-in-section';

export default function ToolsMethodologySection() {
  const toolTimelineEvents = [
    {
      year: "1997",
      title: "Dreamweaver Era",
      description: "WYSIWYG HTML editing brought visual web design to the masses. Designers adapted print tools like Photoshop (1990) for the web via image slicing.",
      details: "Flash (1996) enabled interactive animations, but designers struggled with limited tools purpose-built for digital interfaces.",
      impact: "Designers began adapting print tools for digital media, marking the transition from static to interactive design"
    },
    {
      year: "2005",
      title: "Web-Native Tools Emerge",
      description: "Fireworks and OmniGraffle introduced web-optimized workflows. Balsamiq (2008) revolutionized rapid low-fidelity prototyping.",
      details: "This era saw the first tools specifically designed for web workflow rather than adapted from print design.",
      impact: "Purpose-built tools for digital design emerged, establishing UX as a distinct discipline"
    },
    {
      year: "2010",
      title: "Sketch Revolution",
      description: "Sketch became the first UI-focused design tool, transforming how designers created digital interfaces with vector-based workflows.",
      details: "InVision (2013) and Marvel (2013) brought clickable prototypes, while Framer (2014) enabled code-based advanced interactions.",
      impact: "Specialized tools for UI design and prototyping established the modern UX toolkit"
    },
    {
      year: "2016",
      title: "Figma & Collaboration",
      description: "Figma introduced real-time collaboration, allowing multiple designers to work simultaneously. Adobe XD (2017) integrated with the Adobe ecosystem.",
      details: "Abstract (2017) brought version control to design, while Zeplin bridged the design-to-development handoff gap.",
      impact: "Cloud-based, real-time collaborative design became the industry standard"
    },
    {
      year: "2023",
      title: "AI & Systems",
      description: "AI tools like Midjourney and DALL-E entered design workflows. Design systems (Material, Carbon) became essential for consistency at scale.",
      details: "Penpot (2021) offered open-source collaboration, while Storybook enabled component-driven development.",
      impact: "Systematic design and AI augmentation defined the cutting edge of modern UX practice"
    }
  ];

  const toolTimeline = [
    {
      era: "1990s",
      title: "Print-to-Web Transition",
      tools: [
        { name: "Photoshop", year: "1990", type: "Raster graphics", innovation: "Web design via slicing" },
        { name: "Dreamweaver", year: "1997", type: "WYSIWYG editor", innovation: "Visual HTML editing" },
        { name: "Flash", year: "1996", type: "Animation", innovation: "Interactive web experiences" }
      ],
      keyInnovation: "Designers began adapting print tools for digital media"
    },
    {
      era: "2000s",
      title: "Early Digital Design",
      tools: [
        { name: "Fireworks", year: "2005", type: "Web graphics", innovation: "Optimized for web workflow" },
        { name: "Visio", year: "2000", type: "Diagramming", innovation: "Early wireframing" },
        { name: "OmniGraffle", year: "2005", type: "Wireframing", innovation: "Mac-native prototyping" },
        { name: "Balsamiq", year: "2008", type: "Mockups", innovation: "Low-fidelity rapid prototyping" }
      ],
      keyInnovation: "Purpose-built tools for digital design emerged"
    },
    {
      era: "2010-2015",
      title: "Vector Revolution",
      tools: [
        { name: "Sketch", year: "2010", type: "Vector UI", innovation: "First UI-focused design tool", highlight: true },
        { name: "InVision", year: "2013", type: "Prototyping", innovation: "Clickable prototypes" },
        { name: "Marvel", year: "2013", type: "Prototyping", innovation: "Simple prototype creation" },
        { name: "Principle", year: "2014", type: "Animation", innovation: "Timeline-based interactions" },
        { name: "Framer", year: "2014", type: "Code-based", innovation: "Advanced interactions" }
      ],
      keyInnovation: "Specialized tools for UI design and prototyping"
    },
    {
      era: "2016-2020",
      title: "Collaboration Era",
      tools: [
        { name: "Figma", year: "2016", type: "Collaborative", innovation: "Real-time collaboration", highlight: true },
        { name: "Adobe XD", year: "2017", type: "All-in-one", innovation: "Adobe ecosystem integration" },
        { name: "Abstract", year: "2017", type: "Version control", innovation: "Git for designers" },
        { name: "Zeplin", year: "2017", type: "Handoff", innovation: "Design-to-dev bridge" }
      ],
      keyInnovation: "Cloud-based, real-time collaborative design"
    },
    {
      era: "2020s",
      title: "Systems & AI",
      tools: [
        { name: "Design Systems", year: "2020", type: "Standards", innovation: "Material, Carbon, Polaris", highlight: true },
        { name: "Storybook", year: "2020", type: "Components", innovation: "Component documentation" },
        { name: "Penpot", year: "2021", type: "Open source", innovation: "Free collaborative design" },
        { name: "AI Tools", year: "2023", type: "AI-assisted", innovation: "Midjourney, DALL-E for design" }
      ],
      keyInnovation: "Systematic design and AI augmentation"
    }
  ];

  const methodologies = [
    {
      era: "Waterfall Era",
      period: "1990s",
      icon: <Clock className="w-5 h-5" />,
      characteristics: [
        "Sequential phases: Requirements → Design → Implementation → Testing",
        "Heavy documentation requirements",
        "Limited user feedback until launch",
        "Long development cycles (6-24 months)",
        "Change-resistant process"
      ],
      pros: ["Clear structure", "Predictable timelines", "Detailed documentation"],
      cons: ["Inflexible to changes", "Late user feedback", "High risk of failure"]
    },
    {
      era: "Agile Integration",
      period: "2000s",
      icon: <Target className="w-5 h-5" />,
      characteristics: [
        "2-week sprints with iterative delivery",
        "Cross-functional teams",
        "Regular user feedback loops",
        "Continuous improvement",
        "Adaptable to change"
      ],
      pros: ["Faster delivery", "Regular feedback", "Team collaboration"],
      cons: ["Less documentation", "Scope creep risk", "Requires culture shift"]
    },
    {
      era: "Lean UX",
      period: "2010s",
      icon: <Zap className="w-5 h-5" />,
      characteristics: [
        "Build-Measure-Learn cycles",
        "Minimum Viable Product (MVP) approach",
        "Rapid experimentation",
        "Data-driven decisions",
        "Waste reduction focus"
      ],
      pros: ["Fast validation", "Resource efficient", "Risk reduction"],
      cons: ["May lack polish", "Requires metrics setup", "Short-term focus risk"]
    },
    {
      era: "Design Thinking",
      period: "2010s",
      icon: <Brain className="w-5 h-5" />,
      characteristics: [
        "Five phases: Empathize, Define, Ideate, Prototype, Test",
        "Human-centered approach",
        "Divergent and convergent thinking",
        "Cross-disciplinary collaboration",
        "Problem reframing"
      ],
      pros: ["User empathy", "Innovation focus", "Structured creativity"],
      cons: ["Time intensive", "Requires facilitation", "Can be abstract"]
    },
    {
      era: "Design Sprints",
      period: "2016+",
      icon: <TrendingUp className="w-5 h-5" />,
      characteristics: [
        "5-day structured process",
        "Monday: Map the problem",
        "Tuesday: Sketch solutions",
        "Wednesday: Decide and storyboard",
        "Thursday: Prototype",
        "Friday: Test with users"
      ],
      pros: ["Fast results", "Clear process", "Team alignment"],
      cons: ["Intensive commitment", "Limited scope", "Requires preparation"]
    },
    {
      era: "DesignOps",
      period: "2020s",
      icon: <Package className="w-5 h-5" />,
      characteristics: [
        "Operational excellence for design teams",
        "Workflow standardization",
        "Tool and system management",
        "Design system governance",
        "Metrics and optimization"
      ],
      pros: ["Scalability", "Consistency", "Efficiency"],
      cons: ["Overhead cost", "Standardization tension", "Requires maturity"]
    }
  ];

  const keyInnovations = [
    {
      category: "Version Control",
      icon: <GitBranch className="w-5 h-5" />,
      items: [
        "Abstract (2017): Git-like versioning for Sketch",
        "Figma Branching (2021): Native version control",
        "Design file history and rollback",
        "Parallel design exploration"
      ]
    },
    {
      category: "Design Systems",
      icon: <Layers className="w-5 h-5" />,
      items: [
        "Component libraries with variants",
        "Design tokens for consistency",
        "Auto-layout and responsive design",
        "Shared team libraries"
      ]
    },
    {
      category: "Collaboration",
      icon: <Users className="w-5 h-5" />,
      items: [
        "Real-time multiplayer editing",
        "Commenting and annotations",
        "Stakeholder review modes",
        "Live design sessions"
      ]
    },
    {
      category: "Design-to-Code",
      icon: <Code className="w-5 h-5" />,
      items: [
        "Automatic code generation",
        "CSS/Swift/Kotlin export",
        "Developer handoff tools",
        "API-driven design systems"
      ]
    }
  ];

  const costEvolution = [
    { period: "1990s", individual: "$3,000+", team: "$15,000+", note: "Desktop licenses" },
    { period: "2000s", individual: "$2,000+", team: "$10,000+", note: "Suite bundles" },
    { period: "2010s", individual: "$99/year", team: "$500/year", note: "Subscription model" },
    { period: "2020s", individual: "$0-15/mo", team: "$45/editor/mo", note: "Freemium + SaaS" }
  ];

  return (
    <section className="relative">
      {/* Introduction */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <p className="text-muted uppercase tracking-wider text-sm font-mono">Part 4</p>
              <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
                Tools & Methodology Evolution
              </h2>
            </div>

            <div className="max-w-3xl mx-auto prose prose-lg space-y-6 text-foreground/90 leading-relaxed">
              <p>
                The evolution of UX/UI design tools mirrors the profession's journey from <strong>print adaptation to digital-native thinking</strong>. 
                What began as designers using Photoshop to slice images for web pages has transformed into a sophisticated ecosystem of 
                collaborative, cloud-based platforms that enable <strong>real-time design systems at scale</strong>.
              </p>
              
              <p>
                This transformation wasn't just technological—it fundamentally changed <strong>how teams work together</strong>. 
                The shift from waterfall to agile methodologies, the rise of design thinking, and the emergence of DesignOps 
                reflect the profession's maturation from <strong>service provider to strategic partner</strong>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Tool Evolution Timeline */}
      <FadeInSection className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <CurvedToolTimeline
            title="Design Tool Evolution Timeline"
            description="From print adaptation to AI-augmented design systems — interactive timeline showing the tools that defined modern UX"
          />
        </div>
      </FadeInSection>
      
      {/* Detailed Tool Timeline (Legacy) */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-display font-bold mb-12 text-center">Tool Ecosystem by Era</h3>
          
          {/* Detailed Year Timeline */}
          <div className="mb-12 overflow-x-auto">
            <div className="min-w-[800px] relative pb-8">
              {/* Timeline Line */}
              <div className="absolute top-8 left-0 right-0 h-0.5 bg-accent/30" />
              
              {/* Year Markers */}
              <div className="flex justify-between items-start relative">
                {[
                  { year: "1990", event: "Photoshop", color: "blue" },
                  { year: "1996", event: "Flash", color: "red" },
                  { year: "1997", event: "Dreamweaver", color: "green" },
                  { year: "2005", event: "OmniGraffle", color: "purple" },
                  { year: "2008", event: "Balsamiq", color: "yellow" },
                  { year: "2010", event: "Sketch", color: "accent" },
                  { year: "2013", event: "InVision", color: "pink" },
                  { year: "2016", event: "Figma", color: "accent" },
                  { year: "2020", event: "Systems Era", color: "accent" },
                  { year: "2023", event: "AI Tools", color: "accent" }
                ].map((marker, index) => (
                  <div key={marker.year} className="flex flex-col items-center">
                    <div className={`w-4 h-4 rounded-full ${marker.color === 'accent' ? 'bg-accent border-2 border-accent' : 'bg-accent/30 border border-accent/50'} mb-2 z-10 relative bg-background`} />
                    <span className="text-xs font-mono font-bold text-accent">{marker.year}</span>
                    <span className="text-xs text-muted-foreground text-center mt-1 max-w-[60px]">{marker.event}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="space-y-12">
            {toolTimeline.map((era, index) => (
              <div key={era.era} className="relative">
                {/* Era Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="bg-accent/20 px-4 py-2 rounded-lg">
                    <span className="font-mono font-bold text-lg text-accent">{era.era}</span>
                  </div>
                  <h4 className="text-xl font-semibold">{era.title}</h4>
                </div>

                {/* Tools Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                  {era.tools.map((tool) => (
                    <Card 
                      key={tool.name}
                      className={`p-4 transition-all duration-200 ${
                        tool.highlight ? 'border-accent bg-accent/5' : 'hover:border-accent/50'
                      }`}
                    >
                      <div className="space-y-2">
                        <div className="flex items-start justify-between">
                          <h5 className="font-semibold">{tool.name}</h5>
                          <Badge variant="outline" className="text-xs">
                            {tool.year}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">{tool.type}</p>
                        <p className="text-sm text-foreground/80">{tool.innovation}</p>
                      </div>
                    </Card>
                  ))}
                </div>

                {/* Key Innovation */}
                <div className="bg-accent/10 border-l-4 border-accent px-4 py-3 rounded-r">
                  <p className="text-sm font-medium">
                    <span className="text-accent mr-2">→</span>
                    {era.keyInnovation}
                  </p>
                </div>

                {/* Timeline Connector */}
                {index < toolTimeline.length - 1 && (
                  <div className="absolute left-8 top-full h-12 w-0.5 bg-accent/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pull Quote from Steve Jobs */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <PullQuote
            quote="Design is not just what it looks like and feels like. Design is how it works."
            attribution="Steve Jobs"
          />
        </div>
      </div>

      {/* Integrated Charts */}
      <div className="py-8">
        <UXToolEvolutionChart />
        <MarketShareChart />
        <SkillsEvolutionChart />
      </div>

      {/* Figma Market Share Callout */}
      <div className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <DataCallout
            value="65% market share"
            label="Figma dominates the design tool market in 2024, with over 4 million users and real-time collaboration becoming the industry standard"
            type="chart"
          />
        </div>
      </div>

      {/* Methodology Evolution */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-display font-bold mb-8 text-center">Methodology Evolution</h3>
          
          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="comparison">Comparison</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {methodologies.map((method) => (
                  <Card key={method.era} className="p-6 hover:border-accent/50 transition-all duration-200">
                    <div className="space-y-4">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="p-2 bg-accent/10 rounded-lg text-accent">
                            {method.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">{method.era}</h4>
                            <p className="text-sm text-muted-foreground">{method.period}</p>
                          </div>
                        </div>
                      </div>

                      {/* Characteristics */}
                      <div className="space-y-2">
                        <p className="text-xs font-mono uppercase text-muted-foreground">Key Characteristics</p>
                        <ul className="space-y-1">
                          {method.characteristics.slice(0, 3).map((char, i) => (
                            <li key={i} className="text-sm text-foreground/80 flex items-start">
                              <span className="text-accent mr-2">•</span>
                              <span>{char}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="comparison" className="space-y-6">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left p-4">Methodology</th>
                      <th className="text-left p-4">Timeline</th>
                      <th className="text-left p-4">Best For</th>
                      <th className="text-left p-4">Team Size</th>
                      <th className="text-left p-4">Flexibility</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Waterfall</td>
                      <td className="p-4">6-24 months</td>
                      <td className="p-4">Fixed requirements</td>
                      <td className="p-4">Large (20+)</td>
                      <td className="p-4"><Badge variant="secondary">Low</Badge></td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Agile</td>
                      <td className="p-4">2-week sprints</td>
                      <td className="p-4">Evolving products</td>
                      <td className="p-4">Small-Medium (5-15)</td>
                      <td className="p-4"><Badge variant="default">High</Badge></td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Lean UX</td>
                      <td className="p-4">1-4 weeks</td>
                      <td className="p-4">Validation</td>
                      <td className="p-4">Small (3-7)</td>
                      <td className="p-4"><Badge variant="default">High</Badge></td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Design Thinking</td>
                      <td className="p-4">4-12 weeks</td>
                      <td className="p-4">Innovation</td>
                      <td className="p-4">Cross-functional</td>
                      <td className="p-4"><Badge>Medium</Badge></td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">Design Sprints</td>
                      <td className="p-4">5 days</td>
                      <td className="p-4">Rapid prototyping</td>
                      <td className="p-4">Small (5-7)</td>
                      <td className="p-4"><Badge variant="secondary">Low</Badge></td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="p-4 font-medium">DesignOps</td>
                      <td className="p-4">Ongoing</td>
                      <td className="p-4">Scale</td>
                      <td className="p-4">Large (30+)</td>
                      <td className="p-4"><Badge>Medium</Badge></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      {/* Key Innovations */}
      <div className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/20">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-3xl font-display font-bold mb-8 text-center">Key Innovations</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {keyInnovations.map((innovation) => (
              <Card key={innovation.category} className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg text-accent">
                    {innovation.icon}
                  </div>
                  <h4 className="font-semibold text-lg">{innovation.category}</h4>
                </div>
                <ul className="space-y-2">
                  {innovation.items.map((item, i) => (
                    <li key={i} className="text-sm text-foreground/80 flex items-start">
                      <span className="text-accent mr-2 mt-0.5">→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Cost Evolution */}
          <Card className="p-8 border-accent/30 bg-accent/5">
            <h4 className="font-semibold text-xl mb-6">Tool Cost Evolution</h4>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {costEvolution.map((cost) => (
                <div key={cost.period} className="space-y-2">
                  <Badge variant="outline" className="mb-2">{cost.period}</Badge>
                  <div className="space-y-1">
                    <p className="text-sm">
                      <span className="text-muted-foreground">Individual:</span>{' '}
                      <span className="font-mono font-semibold">{cost.individual}</span>
                    </p>
                    <p className="text-sm">
                      <span className="text-muted-foreground">Team:</span>{' '}
                      <span className="font-mono font-semibold">{cost.team}</span>
                    </p>
                    <p className="text-xs text-muted-foreground italic">{cost.note}</p>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Modern Capabilities */}
          <div className="mt-12 bg-gradient-to-r from-accent/10 to-accent/5 rounded-xl p-8">
            <h4 className="font-semibold text-xl mb-4">2025 State of the Art</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <p className="font-medium mb-2">AI Integration</p>
                <ul className="space-y-1 text-foreground/80">
                  <li>• Auto-layout suggestions</li>
                  <li>• Content generation</li>
                  <li>• Accessibility checking</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Enterprise Scale</p>
                <ul className="space-y-1 text-foreground/80">
                  <li>• 1000+ designer teams</li>
                  <li>• Global design systems</li>
                  <li>• Cross-platform consistency</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Developer Integration</p>
                <ul className="space-y-1 text-foreground/80">
                  <li>• Live code sync</li>
                  <li>• Component matching</li>
                  <li>• Automated testing</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conclusion */}
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-lg space-y-6 text-foreground/90 leading-relaxed">
          <p>
            The evolution from Photoshop slicing to modern design systems represents more than technological progress—it's 
            a <strong>fundamental shift in how digital products are conceived, designed, and delivered</strong>. Today's tools 
            enable collaboration at a scale unimaginable in the 1990s, while methodologies have evolved to embrace uncertainty 
            and change as core principles.
          </p>
          
          <blockquote className="border-l-4 border-accent pl-6 italic text-lg">
            "The best tool is the one your team will actually use. The best methodology is the one that delivers value to users. 
            The profession's maturity lies not in our tools, but in knowing when and how to use them."
          </blockquote>
          
          <p>
            As we enter the age of AI-assisted design and increasingly complex digital ecosystems, the tools and methodologies 
            will continue to evolve. But the core principle remains unchanged: <strong>human-centered design that bridges 
            the gap between user needs and technological possibilities</strong>.
          </p>
        </div>
      </div>
    </section>
  );
}