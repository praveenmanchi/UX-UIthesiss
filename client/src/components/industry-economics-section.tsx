import { Building2, Users, TrendingUp, Globe, Briefcase, DollarSign, Target, Sparkles } from 'lucide-react';
import { SiApple, SiGoogle, SiMeta, SiAmazon, SiAdobe } from 'react-icons/si';
import PullQuote from '@/components/pull-quote';
import DataCallout from '@/components/data-callout';
import IndustryTimelineScatter from '@/components/industry-timeline-scatter';

export default function IndustryEconomicsSection() {
  return (
    <section className="py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-12" data-testid="section-industry-economics">
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="text-center space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight" data-testid="text-industry-heading">
            Industry & Economics
          </h2>
          <p className="text-base sm:text-lg text-foreground/70 max-w-3xl mx-auto">
            How the UX/UI profession transformed from a single role at Apple to a 
            $18 billion global industry with half a million professionals
          </p>
        </div>

        {/* Industry Timeline Scatter Plot */}
        <div className="mb-20">
          <IndustryTimelineScatter />
        </div>

        {/* Company Evolution Timeline */}
        <div className="space-y-8">
          <div className="border-l-2 border-accent/30 pl-8">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
              Company Evolution: Building Design Empires
            </h3>
            <p className="text-sm sm:text-base text-foreground/70 mb-8">
              From single designers to thousand-person teams in three decades
            </p>
          </div>

          <div className="grid gap-6">
            {/* Apple */}
            <div className="group bg-card/50 border border-border rounded-lg p-6 hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                  <SiApple className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h4 className="font-semibold text-base sm:text-lg">Apple</h4>
                    <span className="text-xs sm:text-sm text-muted-foreground font-mono">(1993-present)</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">1993:</span> Don Norman becomes first "User Experience Architect" - literally invents the UX title
                    </p>
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2007:</span> iPhone launch with ~50 designers reshapes entire industry
                    </p>
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2024:</span> 500+ designers maintaining design-led culture, Human Interface Guidelines influence millions
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-mono text-accent">1 → 500+ designers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-mono text-accent">50,000% growth</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Google */}
            <div className="group bg-card/50 border border-border rounded-lg p-6 hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                  <SiGoogle className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h4 className="font-semibold text-base sm:text-lg">Google</h4>
                    <span className="text-xs sm:text-sm text-muted-foreground font-mono">(2005-present)</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2005:</span> First dedicated UX team formed with 10 designers
                    </p>
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2014:</span> Material Design launches, becomes industry standard
                    </p>
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2024:</span> 2000+ designers, dedicated UX research labs, AI-first design initiatives
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-mono text-accent">10 → 2000+ designers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-mono text-accent">5 global UX labs</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Microsoft */}
            <div className="group bg-card/50 border border-border rounded-lg p-6 hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                  <Building2 className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h4 className="font-semibold text-base sm:text-lg">Microsoft</h4>
                    <span className="text-xs sm:text-sm text-muted-foreground font-mono">(1995-present)</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">1995:</span> Windows 95 UI team of 20 pioneers graphical interfaces
                    </p>
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2012:</span> Metro design language for Windows 8
                    </p>
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2024:</span> 1500+ designers, Fluent Design System across all products
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-mono text-accent">20 → 1500+ designers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-mono text-accent">Fluent Design System</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Meta */}
            <div className="group bg-card/50 border border-border rounded-lg p-6 hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                  <SiMeta className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h4 className="font-semibold text-base sm:text-lg">Facebook/Meta</h4>
                    <span className="text-xs sm:text-sm text-muted-foreground font-mono">(2006-present)</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2006:</span> First designer hired, focus on "move fast" philosophy
                    </p>
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2015:</span> Design team grows to 200, React framework changes frontend
                    </p>
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2024:</span> 800+ designers working on social, VR/AR, and metaverse
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-mono text-accent">1 → 800+ designers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-mono text-accent">VR/AR focus</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Amazon */}
            <div className="group bg-card/50 border border-border rounded-lg p-6 hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                  <SiAmazon className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h4 className="font-semibold text-base sm:text-lg">Amazon</h4>
                    <span className="text-xs sm:text-sm text-muted-foreground font-mono">(1998-present)</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">1998:</span> Early web designers focus on e-commerce usability
                    </p>
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2014:</span> Alexa team pioneers voice UI design
                    </p>
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2024:</span> 1000+ designers across retail, AWS, devices, "customer obsession"
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-mono text-accent">5 → 1000+ designers</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-mono text-accent">Customer obsession</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Adobe */}
            <div className="group bg-card/50 border border-border rounded-lg p-6 hover:border-accent/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg shrink-0">
                  <SiAdobe className="w-8 h-8 text-accent" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                    <h4 className="font-semibold text-base sm:text-lg">Adobe</h4>
                    <span className="text-xs sm:text-sm text-muted-foreground font-mono">(1990s-present)</span>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">1990s:</span> Tool maker for designers, Photoshop dominates
                    </p>
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2013:</span> Creative Cloud subscription model, XD for UX design
                    </p>
                    <p className="text-sm sm:text-base text-foreground/80">
                      <span className="font-semibold text-accent">2024:</span> Platform for designers, AI-powered Creative Cloud, Figma acquisition
                    </p>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-mono text-accent">Tools → Platform</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <DollarSign className="w-4 h-4 text-accent" />
                      <span className="text-xs sm:text-sm font-mono text-accent">$20B Figma deal</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Role Evolution & Specialization */}
        <div className="space-y-8">
          <div className="border-l-2 border-accent/30 pl-8">
            <h3 className="font-display text-xl sm:text-2xl md:text-3xl font-semibold mb-2">
              Role Evolution & Specialization
            </h3>
            <p className="text-sm sm:text-base text-foreground/70">
              From webmasters to specialized design engineers
            </p>
          </div>

          {/* Role Branching Diagram */}
          <div className="bg-card/50 border border-border rounded-lg p-8">
            <div className="space-y-8">
              {/* 1990s */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30"></div>
                <div className="pl-8">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-xs sm:text-sm text-accent font-semibold">1990s</span>
                    <div className="h-px bg-accent/20 flex-1"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-xs sm:text-sm">Webmaster</span>
                    <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-xs sm:text-sm">Graphic Designer</span>
                  </div>
                </div>
              </div>

              {/* 2000s */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30"></div>
                <div className="pl-8">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-xs sm:text-sm text-accent font-semibold">2000s</span>
                    <div className="h-px bg-accent/20 flex-1"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-xs sm:text-sm">Information Architect</span>
                    <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-xs sm:text-sm">Interaction Designer</span>
                    <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-xs sm:text-sm">Visual Designer</span>
                  </div>
                </div>
              </div>

              {/* 2010s */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30"></div>
                <div className="pl-8">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-accent font-semibold">2010s</span>
                    <div className="h-px bg-accent/20 flex-1"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-sm">UX Designer</span>
                    <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-sm">UI Designer</span>
                    <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-sm">UX Researcher</span>
                    <span className="px-3 py-1 bg-accent/10 border border-accent/30 rounded text-sm">UX Writer</span>
                  </div>
                </div>
              </div>

              {/* 2020s */}
              <div className="relative">
                <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-accent/30"></div>
                <div className="pl-8">
                  <div className="flex items-center gap-4 mb-3">
                    <span className="font-mono text-accent font-semibold">2020s</span>
                    <div className="h-px bg-accent/20 flex-1"></div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-accent/20 border border-accent/40 rounded text-sm font-medium">Product Designer</span>
                    <span className="px-3 py-1 bg-accent/20 border border-accent/40 rounded text-sm font-medium">Design Systems Engineer</span>
                    <span className="px-3 py-1 bg-accent/20 border border-accent/40 rounded text-sm font-medium">UX Engineer</span>
                    <span className="px-3 py-1 bg-accent/20 border border-accent/40 rounded text-sm font-medium">Conversation Designer</span>
                    <span className="px-3 py-1 bg-accent/20 border border-accent/40 rounded text-sm font-medium">AR/VR Designer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Economic Growth Data */}
        <div className="space-y-8">
          <div className="border-l-2 border-accent/30 pl-8">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
              Economic Impact & Growth
            </h3>
            <p className="text-foreground/70">
              The financial transformation of design from cost center to profit driver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Design Team Sizes */}
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-semibold text-lg">Team Size Evolution</h4>
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/70">1995</span>
                  <span className="font-mono font-semibold text-accent">2-3 designers</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/70">2005</span>
                  <span className="font-mono font-semibold text-accent">10-20 designers</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/70">2015</span>
                  <span className="font-mono font-semibold text-accent">30-100 designers</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/70">2024</span>
                  <span className="font-mono font-semibold text-accent">50-200 designers</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-foreground/60">Average for mid-to-large tech companies</p>
              </div>
            </div>

            {/* Budget Allocation */}
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-semibold text-lg">Design Budget Growth</h4>
                <DollarSign className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/70">1990s</span>
                  <span className="font-mono font-semibold text-accent">1% of tech budget</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/70">2000s</span>
                  <span className="font-mono font-semibold text-accent">2-3% of tech budget</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/70">2010s</span>
                  <span className="font-mono font-semibold text-accent">5-8% of tech budget</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/70">2020s</span>
                  <span className="font-mono font-semibold text-accent">5-15% of tech budget</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-foreground/60">Percentage of total technology investment</p>
              </div>
            </div>

            {/* ROI of Design */}
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-semibold text-lg">ROI of Design</h4>
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-3">
                <div className="space-y-2">
                  <p className="text-sm text-foreground/90">
                    <span className="font-semibold text-accent">2x</span> revenue growth for design-led companies
                  </p>
                  <p className="text-xs text-foreground/60">McKinsey Design Index (2018)</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-foreground/90">
                    <span className="font-semibold text-accent">32%</span> higher revenue growth
                  </p>
                  <p className="text-xs text-foreground/60">Design Management Institute (2015)</p>
                </div>
                <div className="space-y-2">
                  <p className="text-sm text-foreground/90">
                    <span className="font-semibold text-accent">56%</span> higher shareholder returns
                  </p>
                  <p className="text-xs text-foreground/60">Design Value Index (2020)</p>
                </div>
              </div>
            </div>

            {/* Unicorn Companies */}
            <div className="bg-card/50 border border-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <h4 className="font-semibold text-lg">Designer-Founded Unicorns</h4>
                <Sparkles className="w-5 h-5 text-accent" />
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/90">Airbnb</span>
                  <span className="font-mono text-sm text-accent">$75B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/90">Pinterest</span>
                  <span className="font-mono text-sm text-accent">$12B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/90">Canva</span>
                  <span className="font-mono text-sm text-accent">$40B</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-foreground/90">Figma</span>
                  <span className="font-mono text-sm text-accent">$20B</span>
                </div>
              </div>
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-xs text-foreground/60">Companies with designer co-founders</p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Callout for UX Professionals */}
        <DataCallout
          value="500,000+ UX professionals worldwide"
          label="From less than 100 people with 'UX' in their job title in 1995 to over half a million professionals today, the field has grown 5,000x in three decades"
          type="users"
        />

        {/* Current Industry State */}
        <div className="space-y-8">
          <div className="border-l-2 border-accent/30 pl-8">
            <h3 className="font-display text-2xl sm:text-3xl font-semibold mb-2">
              Current Industry State (2024)
            </h3>
            <p className="text-foreground/70">
              The global design profession by the numbers
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <Globe className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold font-mono text-accent mb-1">500,000+</div>
              <div className="text-sm text-foreground/70">UX Professionals Worldwide</div>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <DollarSign className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold font-mono text-accent mb-1">$18B</div>
              <div className="text-sm text-foreground/70">Design Tools Market</div>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <Users className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold font-mono text-accent mb-1">1:5-8</div>
              <div className="text-sm text-foreground/70">Designer to Engineer Ratio</div>
            </div>

            <div className="bg-gradient-to-br from-accent/20 to-accent/10 border border-accent/30 rounded-lg p-6 text-center">
              <Building2 className="w-8 h-8 text-accent mx-auto mb-3" />
              <div className="text-3xl font-bold font-mono text-accent mb-1">65%</div>
              <div className="text-sm text-foreground/70">Remote or Hybrid Work</div>
            </div>
          </div>

          <div className="bg-accent/5 border border-accent/20 rounded-lg p-6">
            <h4 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <Globe className="w-5 h-5 text-accent" />
              Global Talent Distribution Impact
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h5 className="font-medium text-foreground/90">Pre-Pandemic (2019)</h5>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    85% concentrated in tech hubs (SF, NYC, London, Berlin)
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Limited opportunities outside major cities
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Salary disparities based on location
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <h5 className="font-medium text-foreground/90">Post-Pandemic (2024)</h5>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    40% distributed across smaller cities and countries
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Remote-first companies dominating hiring
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent">•</span>
                    Location-adjusted but competitive global salaries
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Future Outlook */}
        <div className="bg-gradient-to-br from-accent/10 to-transparent border border-accent/30 rounded-lg p-8">
          <h3 className="font-display text-2xl font-semibold mb-4">The Next Decade: 2025-2035</h3>
          <div className="space-y-4 text-foreground/80">
            <p className="text-lg leading-relaxed">
              As we enter the AI era, the UX/UI profession stands at another inflection point. 
              The industry that grew from one person to half a million professionals now faces 
              its greatest transformation yet.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
              <div className="space-y-2">
                <h4 className="font-semibold text-accent">AI Integration</h4>
                <p className="text-sm text-foreground/70">
                  Design tools becoming AI-powered co-creators, not just productivity enhancers
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-accent">New Interfaces</h4>
                <p className="text-sm text-foreground/70">
                  Spatial computing, brain-computer interfaces, and ambient computing
                </p>
              </div>
              <div className="space-y-2">
                <h4 className="font-semibold text-accent">Ethical Design</h4>
                <p className="text-sm text-foreground/70">
                  Growing focus on responsible AI, privacy, and human-centered ethics
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}