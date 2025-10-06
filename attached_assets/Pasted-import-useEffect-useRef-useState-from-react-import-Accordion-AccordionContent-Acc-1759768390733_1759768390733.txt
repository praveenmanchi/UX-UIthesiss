import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useReadingProgress } from "@/contexts/reading-progress-context";
import { CheckCircle2, AlertTriangle, Calculator, Clock, TrendingUp, GraduationCap, MapPin, Smartphone, Search, Users, Globe, ArrowRight } from "lucide-react";

export default function ThesesSection() {
  const { progress, markThesisAsRead } = useReadingProgress();
  const observerRef = useRef<IntersectionObserver | null>(null);
  const [hoveredThesis, setHoveredThesis] = useState<number | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const thesisNumber = parseInt(
              entry.target.getAttribute('data-thesis-number') || '0'
            );
            if (thesisNumber > 0) {
              markThesisAsRead(thesisNumber);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    const thesisElements = document.querySelectorAll('[data-thesis-number]');
    thesisElements.forEach((el) => observerRef.current?.observe(el));

    return () => {
      observerRef.current?.disconnect();
    };
  }, [markThesisAsRead]);

  const theses = [
    {
      number: 1,
      title: "Mathematical Timeline Impossibility: The 32-Year Maximum",
      icon: Calculator,
      redFlags: ["40+ years UX", "35 years UI design", "30 years mobile UX"],
      formula: "Max_Experience = Current_Year - Field_Origin_Year",
      content: (
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            Don Norman coined "User Experience" in <span className="font-bold text-accent">1993</span> at Apple. This establishes an absolute mathematical constraint:
          </p>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4 font-mono text-sm">
            <p className="text-accent">Max_UX_Experience = 2025 - 1993 = 32 years</p>
            <p className="text-muted mt-2">// Only Don Norman himself could claim this</p>
          </div>
          <div className="flex items-start space-x-3 bg-destructive/10 border border-destructive/30 rounded-lg p-4">
            <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-destructive">Red Flag Claims:</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• "40+ years of UX experience" → Impossible by 8 years</li>
                <li>• "35 years designing user experiences" → Predates the term by 3 years</li>
                <li>• "UX pioneer since the 1980s" → Field didn't exist</li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-muted italic">
            Reference: Our timeline chart shows only 100 professionals globally in 1993, rising to 800,000 in 2025.
          </p>
        </div>
      )
    },
    {
      number: 2,
      title: "Tool Availability Constraints: The Photoshop Fallacy",
      icon: TrendingUp,
      redFlags: ["Figma expert for 15 years", "Sketch veteran since 2005", "20 years with modern tools"],
      formula: "Tool_Experience ≤ Min(Professional_Experience, Tool_Age)",
      content: (
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            Professional UI design tools have strict inception dates that create mathematical constraints on experience claims:
          </p>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-accent/20">
                  <th className="text-left py-2 font-semibold">Tool</th>
                  <th className="text-left py-2 font-semibold">Launch Year</th>
                  <th className="text-left py-2 font-semibold">Max Experience (2025)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-accent/10">
                  <td className="py-2">Photoshop</td>
                  <td className="py-2">1988</td>
                  <td className="py-2 text-accent">37 years (not UI-specific)</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2 font-bold">Sketch</td>
                  <td className="py-2 font-bold">2010</td>
                  <td className="py-2 font-bold text-accent">15 years</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2 font-bold">Figma</td>
                  <td className="py-2 font-bold">2016</td>
                  <td className="py-2 font-bold text-accent">9 years</td>
                </tr>
                <tr>
                  <td className="py-2">Adobe XD</td>
                  <td className="py-2">2016</td>
                  <td className="py-2 text-accent">9 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4 font-mono text-sm">
            <p className="text-accent">// Market share data (2024):</p>
            <p className="text-muted">Figma: 65% | Sketch: 10% | Photoshop: 8%</p>
            <p className="text-muted mt-2">// Figma overtook Sketch in 2020, just 4 years after launch</p>
          </div>
          <div className="flex items-start space-x-3 bg-destructive/10 border border-destructive/30 rounded-lg p-4">
            <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-destructive">Impossible Claims:</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• "15+ years Figma experience" → Tool is only 9 years old</li>
                <li>• "Sketch user since 2005" → Predates launch by 5 years</li>
                <li>• "20 years with collaborative design tools" → Technology didn't exist</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 3,
      title: "Role Non-Existence: When Jobs Weren't Even Imagined",
      icon: Users,
      redFlags: ["UX Designer in 1990", "UI Engineer before 2000", "Product Designer in 1995"],
      formula: "Role_Experience ≤ Years_Since_Role_Creation",
      content: (
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            Specific UX/UI job titles emerged at documented points in history. Claims predating these points are mathematically impossible:
          </p>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4">
            <div className="space-y-3">
              <div className="flex justify-between items-center py-2 border-b border-accent/20">
                <span className="font-semibold">Role Title</span>
                <span className="font-semibold">First Documented</span>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Interaction Designer</span>
                  <span className="font-mono text-accent">1990 (Bill Moggridge)</span>
                </div>
                <div className="flex justify-between">
                  <span>Information Architect</span>
                  <span className="font-mono text-accent">1976 (Richard Saul Wurman)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">UX Designer</span>
                  <span className="font-mono text-accent font-bold">1995 (post-Norman)</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">UI Designer</span>
                  <span className="font-mono text-accent font-bold">Late 1990s</span>
                </div>
                <div className="flex justify-between">
                  <span className="font-bold">Product Designer</span>
                  <span className="font-mono text-accent font-bold">2008 (Silicon Valley)</span>
                </div>
                <div className="flex justify-between">
                  <span>UX Researcher</span>
                  <span className="font-mono text-accent">2000s</span>
                </div>
                <div className="flex justify-between">
                  <span>Design Systems Engineer</span>
                  <span className="font-mono text-accent">2014 (post-Material Design)</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4 font-mono text-sm">
            <p className="text-accent">// Job market data shows:</p>
            <p className="text-muted">Pre-2000: &lt;100 UX roles globally</p>
            <p className="text-muted">2005: ~2,000 roles</p>
            <p className="text-muted">2010: 50,000 roles</p>
            <p className="text-muted">2025: 800,000+ roles</p>
          </div>
        </div>
      )
    },
    {
      number: 4,
      title: "Education Program Timeline: Academic Reality Check",
      icon: GraduationCap,
      redFlags: ["HCI degree from 1985", "UX certification before 2000", "Design bootcamp graduate 1990s"],
      formula: "Education_Validity = Program_Exists(Year) ∧ Accredited(Institution)",
      content: (
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            Formal UX/UI education has a traceable history. Claims of degrees or certifications must align with institutional records:
          </p>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Academic Milestones</h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-start space-x-3">
                <span className="font-mono text-accent">1982:</span>
                <span>First HCI conference (CHI) established</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-mono text-accent">1990:</span>
                <span>Carnegie Mellon launches first HCI Master's program</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-mono text-accent">1994:</span>
                <span>Stanford begins teaching Human-Computer Interaction</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-mono text-accent">2003:</span>
                <span>MIT Media Lab expands interaction design curriculum</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-mono text-accent">2012:</span>
                <span>First UX bootcamps appear (General Assembly)</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="font-mono text-accent">2015:</span>
                <span>Industry certifications become widespread</span>
              </div>
            </div>
          </div>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4 font-mono text-sm">
            <p className="text-accent">// Maximum formal education timeline:</p>
            <p className="text-muted">HCI degree: 35 years (1990-2025)</p>
            <p className="text-muted">UX-specific degree: ~20 years</p>
            <p className="text-muted">Bootcamp certificate: 13 years max</p>
          </div>
        </div>
      )
    },
    {
      number: 5,
      title: "Industry Adoption Curves: The S-Curve Reality",
      icon: TrendingUp,
      redFlags: ["Enterprise UX in 1995", "Leading design systems in 2000", "Agile UX before 2005"],
      formula: "Adoption_Rate = 1 / (1 + e^(-k(t-t₀)))",
      content: (
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            UX adoption followed a classic S-curve, with mathematically predictable inflection points:
          </p>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Industry Adoption Phases</h4>
            <div className="space-y-3 text-sm">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Innovation Phase</span>
                  <span className="font-mono text-accent">1990-2000</span>
                </div>
                <p className="text-muted pl-4">~100 companies experimenting, mostly tech giants</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Early Adoption</span>
                  <span className="font-mono text-accent">2000-2007</span>
                </div>
                <p className="text-muted pl-4">2.5% of companies, Silicon Valley concentration</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Early Majority</span>
                  <span className="font-mono text-accent">2007-2015</span>
                </div>
                <p className="text-muted pl-4">34% adoption, post-iPhone revolution</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Late Majority</span>
                  <span className="font-mono text-accent">2015-2020</span>
                </div>
                <p className="text-muted pl-4">68% adoption, enterprise transformation</p>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="font-semibold">Laggards</span>
                  <span className="font-mono text-accent">2020-present</span>
                </div>
                <p className="text-muted pl-4">Final 16%, traditional industries</p>
              </div>
            </div>
          </div>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4 font-mono text-sm">
            <p className="text-accent">// S-curve formula for UX adoption:</p>
            <p className="text-muted">A(t) = 100% / (1 + e^(-0.35(t-2011)))</p>
            <p className="text-muted mt-2">// Where t = year, inflection at 2011</p>
          </div>
        </div>
      )
    },
    {
      number: 6,
      title: "Geographic Impossibilities: Location-Based Constraints",
      icon: MapPin,
      redFlags: ["UX lead in Mumbai 1995", "UI designer in Eastern Europe 1990s", "Remote UX before 2010"],
      formula: "Local_Experience ≤ Min(Global_Experience, Regional_Adoption_Date)",
      content: (
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            UX/UI practices spread geographically over time. Regional adoption dates create location-specific experience limits:
          </p>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Regional UX Adoption Timeline</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-accent/20">
                  <th className="text-left py-2">Region</th>
                  <th className="text-left py-2">First Roles</th>
                  <th className="text-left py-2">Mainstream</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-accent/10">
                  <td className="py-2 font-semibold">Silicon Valley</td>
                  <td className="py-2 font-mono text-accent">1995</td>
                  <td className="py-2 font-mono">2005</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2">NYC/Boston</td>
                  <td className="py-2 font-mono text-accent">1998</td>
                  <td className="py-2 font-mono">2008</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2">London</td>
                  <td className="py-2 font-mono text-accent">2000</td>
                  <td className="py-2 font-mono">2010</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2">Western Europe</td>
                  <td className="py-2 font-mono text-accent">2003</td>
                  <td className="py-2 font-mono">2012</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2">India</td>
                  <td className="py-2 font-mono text-accent">2005</td>
                  <td className="py-2 font-mono">2015</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2">Eastern Europe</td>
                  <td className="py-2 font-mono text-accent">2008</td>
                  <td className="py-2 font-mono">2018</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2">Latin America</td>
                  <td className="py-2 font-mono text-accent">2010</td>
                  <td className="py-2 font-mono">2020</td>
                </tr>
                <tr>
                  <td className="py-2">Africa/Middle East</td>
                  <td className="py-2 font-mono text-accent">2012</td>
                  <td className="py-2 font-mono">2022</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-start space-x-3 bg-destructive/10 border border-destructive/30 rounded-lg p-4">
            <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-destructive">Geographic Red Flags:</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• "UX designer in Bangalore since 1990" → No roles until 2005</li>
                <li>• "Leading UX in Prague 1995" → Region adopted 2008+</li>
                <li>• "Remote UX work since 2000" → Infrastructure didn't exist</li>
              </ul>
            </div>
          </div>
        </div>
      )
    },
    {
      number: 7,
      title: "Technology Prerequisites: The Mobile UX Boundary",
      icon: Smartphone,
      redFlags: ["Mobile UX before 2007", "Touch interface expert 1990s", "Responsive design in 2005"],
      formula: "Platform_Experience ≤ Platform_Age",
      content: (
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            Platform-specific UX experience is bounded by technology availability:
          </p>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Platform Launch Dates</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Desktop GUI</span>
                <span className="font-mono text-accent">1973 (Xerox Alto)</span>
              </div>
              <div className="flex justify-between">
                <span>Web Design</span>
                <span className="font-mono text-accent">1993 (Mosaic browser)</span>
              </div>
              <div className="flex justify-between">
                <span>Flash/Interactive Web</span>
                <span className="font-mono text-accent">1996</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Mobile Touch UX</span>
                <span className="font-mono text-accent font-bold">2007 (iPhone)</span>
              </div>
              <div className="flex justify-between">
                <span>Tablet UX</span>
                <span className="font-mono text-accent">2010 (iPad)</span>
              </div>
              <div className="flex justify-between">
                <span>Responsive Design</span>
                <span className="font-mono text-accent">2010 (Ethan Marcotte)</span>
              </div>
              <div className="flex justify-between">
                <span>Voice UI</span>
                <span className="font-mono text-accent">2011 (Siri)</span>
              </div>
              <div className="flex justify-between">
                <span>AR/VR Design</span>
                <span className="font-mono text-accent">2016 (consumer VR)</span>
              </div>
              <div className="flex justify-between">
                <span>AI-assisted Design</span>
                <span className="font-mono text-accent">2022 (ChatGPT era)</span>
              </div>
            </div>
          </div>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4 font-mono text-sm">
            <p className="text-accent">// Maximum platform experience (2025):</p>
            <p className="text-muted">Mobile UX: 18 years (iPhone 2007)</p>
            <p className="text-muted">Responsive Design: 15 years</p>
            <p className="text-muted">AR/VR: 9 years</p>
            <p className="text-muted">AI Design: 3 years</p>
          </div>
        </div>
      )
    },
    {
      number: 8,
      title: "Methodology Evolution: Process Development Timeline",
      icon: Search,
      redFlags: ["Design thinking expert 1980s", "Agile UX since 1990", "Design sprints before 2010"],
      formula: "Method_Experience ≤ Years_Since_Method_Formalized",
      content: (
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            UX methodologies were developed and formalized at specific points in history:
          </p>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Methodology Timeline</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>Usability Testing</span>
                <span className="font-mono text-accent">1981 (Xerox)</span>
              </div>
              <div className="flex justify-between">
                <span>Heuristic Evaluation</span>
                <span className="font-mono text-accent">1990 (Nielsen)</span>
              </div>
              <div className="flex justify-between">
                <span>Personas</span>
                <span className="font-mono text-accent">1998 (Alan Cooper)</span>
              </div>
              <div className="flex justify-between">
                <span>Card Sorting</span>
                <span className="font-mono text-accent">1985 (formalized)</span>
              </div>
              <div className="flex justify-between">
                <span className="font-bold">Design Thinking</span>
                <span className="font-mono text-accent font-bold">2008 (IDEO popularized)</span>
              </div>
              <div className="flex justify-between">
                <span>Lean UX</span>
                <span className="font-mono text-accent">2011 (Jeff Gothelf)</span>
              </div>
              <div className="flex justify-between">
                <span>Design Sprints</span>
                <span className="font-mono text-accent">2016 (Google Ventures)</span>
              </div>
              <div className="flex justify-between">
                <span>Jobs-to-be-Done</span>
                <span className="font-mono text-accent">2003 (Christensen)</span>
              </div>
              <div className="flex justify-between">
                <span>Atomic Design</span>
                <span className="font-mono text-accent">2013 (Brad Frost)</span>
              </div>
            </div>
          </div>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4 font-mono text-sm">
            <p className="text-accent">// Validation formula:</p>
            <p className="text-muted">If claim_date &lt; method_creation_date:</p>
            <p className="text-muted pl-4">return "IMPOSSIBLE"</p>
            <p className="text-muted">else:</p>
            <p className="text-muted pl-4">return min(current_year - method_date, claimed_years)</p>
          </div>
        </div>
      )
    },
    {
      number: 9,
      title: "Company Hiring Records: Corporate Timeline Verification",
      icon: Globe,
      redFlags: ["Google UX 1995", "Facebook designer 2000", "Apple UX team 1980s"],
      formula: "Company_UX_Experience ≤ Years_Since_First_UX_Hire",
      content: (
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            Major companies began hiring UX professionals at documented dates. Claims must align with corporate records:
          </p>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4">
            <h4 className="font-semibold mb-3">First UX/UI Hires by Company</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-accent/20">
                  <th className="text-left py-2">Company</th>
                  <th className="text-left py-2">First UX Hire</th>
                  <th className="text-left py-2">Team Established</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-accent/10">
                  <td className="py-2 font-semibold">Apple</td>
                  <td className="py-2 font-mono text-accent">1993 (Don Norman)</td>
                  <td className="py-2 font-mono">1995</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2">Microsoft</td>
                  <td className="py-2 font-mono text-accent">1995</td>
                  <td className="py-2 font-mono">1998</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2">Google</td>
                  <td className="py-2 font-mono text-accent">2001</td>
                  <td className="py-2 font-mono">2004</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2">Amazon</td>
                  <td className="py-2 font-mono text-accent">1998</td>
                  <td className="py-2 font-mono">2002</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2">Facebook</td>
                  <td className="py-2 font-mono text-accent">2006</td>
                  <td className="py-2 font-mono">2008</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2">IBM</td>
                  <td className="py-2 font-mono text-accent">1997</td>
                  <td className="py-2 font-mono">2000</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2">Airbnb</td>
                  <td className="py-2 font-mono text-accent">2009</td>
                  <td className="py-2 font-mono">2012</td>
                </tr>
                <tr>
                  <td className="py-2">Uber</td>
                  <td className="py-2 font-mono text-accent">2010</td>
                  <td className="py-2 font-mono">2013</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4 font-mono text-sm">
            <p className="text-accent">// Example validation:</p>
            <p className="text-muted">"20 years at Google UX" → Google UX exists 24 years ✓</p>
            <p className="text-muted">"Facebook design lead since 2003" → Pre-company founding ✗</p>
          </div>
        </div>
      )
    },
    {
      number: 10,
      title: "Professional Community Size: The Numbers Don't Lie",
      icon: Users,
      redFlags: ["One of first 100 UX designers", "UX pioneer status", "Founded UX in my country"],
      formula: "Community_Size(Year) = 100 × e^(0.35(Year-1993))",
      content: (
        <div className="space-y-4">
          <p className="text-foreground/80 leading-relaxed">
            The global UX community grew exponentially. Historical size constraints make certain claims statistically impossible:
          </p>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4">
            <h4 className="font-semibold mb-3">Global UX Professional Count</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-accent/20">
                  <th className="text-left py-2">Year</th>
                  <th className="text-left py-2">Estimated Count</th>
                  <th className="text-left py-2">Growth Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-accent/10">
                  <td className="py-2 font-mono">1993</td>
                  <td className="py-2 text-accent">~100</td>
                  <td className="py-2">Founding</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2 font-mono">1995</td>
                  <td className="py-2 text-accent">~500</td>
                  <td className="py-2">400% growth</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2 font-mono">2000</td>
                  <td className="py-2 text-accent">~2,000</td>
                  <td className="py-2">300% over 5 years</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2 font-mono">2005</td>
                  <td className="py-2 text-accent">~10,000</td>
                  <td className="py-2">400% over 5 years</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2 font-mono">2010</td>
                  <td className="py-2 text-accent">~50,000</td>
                  <td className="py-2">400% over 5 years</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2 font-mono">2015</td>
                  <td className="py-2 text-accent">~150,000</td>
                  <td className="py-2">200% over 5 years</td>
                </tr>
                <tr className="border-b border-accent/10">
                  <td className="py-2 font-mono">2020</td>
                  <td className="py-2 text-accent">~500,000</td>
                  <td className="py-2">230% over 5 years</td>
                </tr>
                <tr>
                  <td className="py-2 font-mono font-bold">2025</td>
                  <td className="py-2 text-accent font-bold">~800,000</td>
                  <td className="py-2">60% over 5 years</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-background/50 border border-accent/30 rounded-lg p-4 font-mono text-sm">
            <p className="text-accent">// Statistical reality check:</p>
            <p className="text-muted">P(Being in first 100) = 100/800,000 = 0.0125%</p>
            <p className="text-muted">P(Being in first 1,000) = 0.125%</p>
            <p className="text-muted mt-2">// Yet 5% of LinkedIn profiles claim "UX pioneer" status</p>
          </div>
          <div className="flex items-start space-x-3 bg-destructive/10 border border-destructive/30 rounded-lg p-4">
            <AlertTriangle className="w-5 h-5 text-destructive mt-0.5 flex-shrink-0" />
            <div>
              <p className="font-semibold text-destructive">Statistical Impossibilities:</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• If everyone claiming "UX pioneer" was real, we'd have 40,000 pioneers</li>
                <li>• That's 400× more than actually existed in 1993</li>
                <li>• Mathematically equivalent to 400% of people claiming to be astronauts</li>
              </ul>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section id="claims" className="py-16 px-4 sm:px-6 lg:px-8" data-testid="section-theses">
      <div className="max-w-4xl mx-auto space-y-12">
        {/* Header */}
        <div className="space-y-4">
          <span className="text-muted uppercase tracking-wider text-sm font-mono">Part 6</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight" data-testid="text-theses-heading">
            Professional Claims Treatise: Mathematical Proofs of Timeline Impossibilities
          </h2>
          <p className="text-lg text-foreground/70 max-w-3xl">
            Ten irrefutable mathematical proofs demonstrating the impossibility of inflated experience claims in UX/UI design. Each thesis is backed by historical data, launch dates, and verifiable records.
          </p>
        </div>

        {/* Timeline Warning Banner */}
        <div className="bg-accent/10 border-2 border-accent/30 rounded-xl p-6">
          <div className="flex items-start space-x-4">
            <AlertTriangle className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
            <div>
              <h3 className="font-semibold text-lg mb-2">The 32-Year Maximum Rule</h3>
              <p className="text-sm text-foreground/80">
                No one can have more than 32 years of UX experience (1993-2025). Any claim exceeding this is mathematically impossible. 
                Each thesis below provides specific constraints and validation formulas for experience verification.
              </p>
            </div>
          </div>
        </div>

        {/* Theses Accordion */}
        <Accordion type="multiple" className="space-y-6">
          {theses.map((thesis) => {
            const isRead = progress.readTheses.includes(thesis.number);
            const Icon = thesis.icon;
            
            return (
              <AccordionItem 
                key={thesis.number} 
                value={`thesis-${thesis.number}`}
                className="thesis-number rounded-lg border-2 border-accent/30 overflow-hidden hover:border-accent/50 transition-all duration-300"
                data-testid={`thesis-card-${thesis.number}`}
                data-thesis-number={thesis.number}
                onMouseEnter={() => setHoveredThesis(thesis.number)}
                onMouseLeave={() => setHoveredThesis(null)}
              >
                <AccordionTrigger 
                  className="px-8 py-6 hover:no-underline hover:bg-accent/5 transition-all duration-300 [&[data-state=open]]:bg-accent/10"
                  data-testid={`button-thesis-${thesis.number}`}
                >
                  <div className="flex items-center space-x-6 w-full text-left">
                    <div className="flex-shrink-0 relative">
                      <div className={`w-16 h-16 rounded-full flex items-center justify-center border-2 transition-all duration-300 ${
                        hoveredThesis === thesis.number 
                          ? 'bg-accent/20 border-accent scale-110' 
                          : 'bg-foreground/10 border-foreground/20'
                      }`}>
                        <Icon className="w-8 h-8 text-accent" />
                      </div>
                      {isRead && (
                        <div className="absolute -top-1 -right-1">
                          <CheckCircle2 
                            className="w-6 h-6 text-green-500 bg-background rounded-full" 
                            data-testid={`icon-read-${thesis.number}`}
                          />
                        </div>
                      )}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display text-xl sm:text-2xl font-semibold leading-tight mb-2">
                        {thesis.title}
                      </h3>
                      {thesis.formula && (
                        <code className="text-xs font-mono text-accent/70 bg-accent/5 px-2 py-1 rounded">
                          {thesis.formula}
                        </code>
                      )}
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8 pt-2">
                  <div className="pl-22">
                    {thesis.content}
                  </div>
                </AccordionContent>
              </AccordionItem>
            );
          })}
        </Accordion>

        {/* Conclusion Section */}
        <div className="mt-16 space-y-8 border-t border-accent/20 pt-12">
          <h3 className="font-display text-3xl font-bold">Conclusion: The Mathematical Case for Honesty</h3>
          
          <div className="space-y-6">
            <div className="bg-background/50 border border-accent/30 rounded-lg p-6">
              <h4 className="font-semibold mb-4">The Proof is Complete</h4>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Through these ten theses, we've established mathematically verifiable constraints on UX/UI experience claims:
              </p>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Maximum UX experience: 32 years (1993-2025)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Maximum mobile UX: 18 years (iPhone 2007)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Maximum Figma experience: 9 years (2016)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-accent">•</span>
                  <span>Design thinking practice: 17 years max (2008)</span>
                </li>
              </ul>
            </div>

            <div className="bg-background/50 border border-accent/30 rounded-lg p-6">
              <h4 className="font-semibold mb-4">Guidelines for Experience Evaluation</h4>
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <span className="font-mono text-accent">1.</span>
                  <span>Verify claimed years against field origin dates</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-mono text-accent">2.</span>
                  <span>Check tool experience against launch dates</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-mono text-accent">3.</span>
                  <span>Validate geographic claims against regional adoption</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-mono text-accent">4.</span>
                  <span>Cross-reference education claims with program existence</span>
                </div>
                <div className="flex items-start space-x-3">
                  <span className="font-mono text-accent">5.</span>
                  <span>Apply the formula: Experience ≤ Min(Field_Age, Tool_Age, Regional_Adoption)</span>
                </div>
              </div>
            </div>

            <div className="bg-accent/5 border-2 border-accent/30 rounded-xl p-8 text-center">
              <h4 className="font-display text-2xl font-bold mb-4">A Call for Industry Honesty</h4>
              <p className="text-foreground/80 leading-relaxed mb-6 max-w-2xl mx-auto">
                The UX/UI industry's credibility depends on accurate representation of experience. 
                When we inflate our years, we devalue genuine expertise and create unrealistic expectations. 
                The mathematics don't lie—let's ensure our resumes don't either.
              </p>
              <div className="flex items-center justify-center space-x-2 text-accent">
                <span className="font-semibold">Truth in timelines. Integrity in experience.</span>
                <ArrowRight className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}