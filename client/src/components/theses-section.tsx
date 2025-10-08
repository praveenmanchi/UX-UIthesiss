import FadeInSection from "@/components/fade-in-section";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function ThesesSection() {
  const theses = [
    {
      number: 1,
      title: "Mathematical Timeline Impossibility: To have 25-20 years of UX & UI experience. ",
      content: (
        <>
          Don Norman coined "User Experience" in <span className="font-bold">1993</span> at Apple. This establishes an absolute mathematical constraint:{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold text-foreground cursor-help border-b border-dotted border-foreground/40">
                Max_UX_Experience = 2025 - 1993 = 32 years
              </span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Current Year (2025) minus Field Origin Year (1993) equals maximum possible experience. Anyone claiming more than 32 years is mathematically impossible.</p>
            </TooltipContent>
          </Tooltip>
          . Only Don Norman himself could claim this maximum. Claims like{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">"40+ years of UX experience"</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">40 - 32 = 8 years impossible. This claim exceeds the maximum by 8 years.</p>
            </TooltipContent>
          </Tooltip>{" "}
          are impossible by 8 years,{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">"35 years designing user experiences"</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">35 - 32 = 3 years before term existed. Would require starting in 1990, before "UX" was coined.</p>
            </TooltipContent>
          </Tooltip>{" "}
          predates the term by 3 years, and "UX pioneer since the 1980s" references a field that didn't exist. Our timeline chart shows only{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">100 professionals globally in 1993</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">First year of "UX" as a formal field. Only founding members at Apple and a handful of early adopters.</p>
            </TooltipContent>
          </Tooltip>
          , rising to{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">800,000 in 2025</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Growth rate: 100 → 800,000 = 8,000× increase over 32 years (exponential adoption curve).</p>
            </TooltipContent>
          </Tooltip>
          .
        </>
      )
    },
    {
      number: 2,
      title: "Tool Availability Constraints: The Photoshop Fallacy",
      content: (
        <>
          Professional UI design tools have strict inception dates that create mathematical constraints on experience claims. Photoshop launched in{" "}
          <span className="font-bold">1988</span> (37 years, not UI-specific), Sketch in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2010 (15 years max)</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">2025 - 2010 = 15 years maximum possible Sketch experience.</p>
            </TooltipContent>
          </Tooltip>
          , and Figma in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2016 (only 9 years)</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">2025 - 2016 = 9 years. Figma is less than a decade old, making "15+ years" claims impossible.</p>
            </TooltipContent>
          </Tooltip>
          . Market share data from 2024 shows{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">Figma at 65%, Sketch at 10%, and Photoshop at 8%</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Figma overtook Sketch in 2020, just 4 years after launch. Dominance achieved in record time.</p>
            </TooltipContent>
          </Tooltip>
          . Claims like "15+ years Figma experience" are impossible when the tool is only 9 years old, "Sketch user since 2005" predates launch by 5 years, and "20 years with collaborative design tools" references technology that didn't exist.
        </>
      )
    },
    {
      number: 3,
      title: "Role Non-Existence: When Jobs Weren't Even Imagined",
      content: (
        <>
          Specific UX/UI job titles emerged at documented points in history. Claims predating these points are mathematically impossible. Interaction Designer was first documented in{" "}
          <span className="font-bold">1990</span> by Bill Moggridge, Information Architect in <span className="font-bold">1976</span> by Richard Saul Wurman, UX Designer in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">1995 (post-Norman)</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">2 years after Don Norman coined "UX" in 1993. The term needed time to become a job title.</p>
            </TooltipContent>
          </Tooltip>
          , UI Designer in the <span className="font-bold">late 1990s</span>, Product Designer in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2008 in Silicon Valley</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">2025 - 2008 = 17 years maximum. Role emerged during iPhone app boom.</p>
            </TooltipContent>
          </Tooltip>
          , UX Researcher in the <span className="font-bold">2000s</span>, and Design Systems Engineer in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2014 (post-Material Design)</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">2025 - 2014 = 11 years maximum. Role created after Google's Material Design in 2014.</p>
            </TooltipContent>
          </Tooltip>
          . Job market data shows{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">fewer than 100 UX roles globally before 2000</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Pre-2000 UX was experimental. Probability of being one of first 100: 0.0125%.</p>
            </TooltipContent>
          </Tooltip>
          , approximately 2,000 roles in 2005, 50,000 in 2010, and over 800,000 in 2025.
        </>
      )
    },
    {
      number: 4,
      title: "Education Program Timeline: Academic Reality Check",
      content: (
        <>
          Formal UX/UI education has a traceable history. Claims of degrees or certifications must align with institutional records. The first HCI conference (CHI) was established in{" "}
          <span className="font-bold">1982</span>, Carnegie Mellon launched the first HCI Master's program in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">1990</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">2025 - 1990 = 35 years maximum formal HCI education possible.</p>
            </TooltipContent>
          </Tooltip>
          , Stanford began teaching Human-Computer Interaction in <span className="font-bold">1994</span>, MIT Media Lab expanded its interaction design curriculum in <span className="font-bold">2003</span>, the first UX bootcamps appeared in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2012 (General Assembly)</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">2025 - 2012 = 13 years maximum bootcamp certificate age.</p>
            </TooltipContent>
          </Tooltip>
          , and industry certifications became widespread in <span className="font-bold">2015</span>. Maximum formal education timelines: HCI degree{" "}
          <span className="font-bold">35 years (1990-2025)</span>, UX-specific degree approximately <span className="font-bold">20 years</span>, and bootcamp certificate{" "}
          <span className="font-bold">13 years maximum</span>.
        </>
      )
    },
    {
      number: 5,
      title: "Industry Adoption Curves: The S-Curve Reality",
      content: (
        <>
          UX adoption followed a classic S-curve with mathematically predictable inflection points. The Innovation Phase (1990-2000) saw approximately{" "}
          <span className="font-bold">100 companies experimenting</span>, mostly tech giants. Early Adoption (2000-2007) reached{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2.5% of companies</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Innovators phase complete. Early adopters concentrated in Silicon Valley.</p>
            </TooltipContent>
          </Tooltip>{" "}
          with Silicon Valley concentration. Early Majority (2007-2015) achieved{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">34% adoption post-iPhone revolution</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">iPhone launch in 2007 triggered mass UX adoption. Mobile apps required UX expertise.</p>
            </TooltipContent>
          </Tooltip>
          . Late Majority (2015-2020) brought{" "}
          <span className="font-bold">68% adoption</span> through enterprise transformation. Laggards (2020-present) represent the final{" "}
          <span className="font-bold">16%</span> in traditional industries. The S-curve formula for UX adoption:{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold font-mono cursor-help border-b border-dotted border-foreground/40">A(t) = 100% / (1 + e^(-0.35(t-2011)))</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Logistic growth function. Inflection point at 2011 (50% adoption). Growth rate k=0.35.</p>
            </TooltipContent>
          </Tooltip>
          , where t = year and inflection occurred at 2011.
        </>
      )
    },
    {
      number: 6,
      title: "Geographic Impossibilities: India-Specific Constraints for Managers",
      content: (
        <>
          UX/UI practices spread geographically over time. For Indian managers claiming 20-25 years while staying in India, the timeline proves impossibility. UX adoption in India began experimentally in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">late 1990s during Y2K boom</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">1997-1999: Experimental UX driven by IT outsourcing and global firms introducing processes. Pre-2000 UX was "non-existent" or experimental.</p>
            </TooltipContent>
          </Tooltip>
          , when global firms introduced UX processes to align with international standards. Formal/mainstream UX roles emerged around{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2000 with S-curve adoption</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Early adopters (2000-2007): ~2.5% of companies. Accelerated post-iPhone (2007) to 34% by 2015. Mainstream UX hit ~2010.</p>
            </TooltipContent>
          </Tooltip>
          . Maximum possible experience for someone starting in India:{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">25 years (2000-2025)</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Only for pioneers in experimental roles. Probability ~0.0125% globally for early involvement, even lower locally. Pre-2000 had crowded interfaces without user studies.</p>
            </TooltipContent>
          </Tooltip>
          , but only for pioneers—statistically rare. Claims of 20-25 years require starting between{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2000-2005</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">But mainstream UX (dedicated teams, design thinking) only hit ~2010, limiting realistic max to 15-20 years for most. Managerial positions postdate team formations.</p>
            </TooltipContent>
          </Tooltip>
          . For managers (senior roles implying leadership in established teams), this is even tighter, as managerial positions postdate team formations. Claims like "Indian manager with 25 years UX experience" would need to have started in 2000, but pre-2000 UX was experimental. Claims exceeding 25 years are impossible; 20-25 are dubious without evidence of pioneering work in India.
        </>
      )
    },
    {
      number: 7,
      title: "Technology Prerequisites: The Mobile UX Boundary",
      content: (
        <>
          Platform-specific UX experience is bounded by technology availability. Desktop GUI launched with the Xerox Alto in <span className="font-bold">1973</span>, Web Design with the Mosaic browser in <span className="font-bold">1993</span>, Flash/Interactive Web in <span className="font-bold">1996</span>, Mobile Touch UX with the{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">iPhone in 2007 (18 years maximum)</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">2025 - 2007 = 18 years. First capacitive touch interface. Pre-iPhone mobile UX was stylus-based.</p>
            </TooltipContent>
          </Tooltip>
          , Tablet UX with the iPad in <span className="font-bold">2010</span>, Responsive Design was formalized by Ethan Marcotte in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2010 (15 years maximum)</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">2025 - 2010 = 15 years. Term coined in A List Apart article May 2010.</p>
            </TooltipContent>
          </Tooltip>
          , Voice UI with Siri in <span className="font-bold">2011</span>, AR/VR Design with consumer VR in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2016 (9 years maximum)</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">2025 - 2016 = 9 years. Oculus Rift and HTC Vive consumer release.</p>
            </TooltipContent>
          </Tooltip>
          , and AI-assisted Design in the ChatGPT era of{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2022 (3 years maximum)</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">2025 - 2022 = 3 years. ChatGPT launched November 2022, enabling AI design tools.</p>
            </TooltipContent>
          </Tooltip>
          . Claims predating these technology availability dates are mathematically impossible.
        </>
      )
    },
    {
      number: 8,
      title: "Methodology Evolution: Process Development Timeline",
      content: (
        <>
          UX methodologies were developed and formalized at specific points in history. Usability Testing was established at Xerox in <span className="font-bold">1981</span>, Heuristic Evaluation by Nielsen in <span className="font-bold">1990</span>, Card Sorting was formalized in <span className="font-bold">1985</span>, Personas by Alan Cooper in <span className="font-bold">1998</span>, Design Thinking was popularized by IDEO in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2008 (17 years maximum)</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">2025 - 2008 = 17 years. IDEO's HCD toolkit widely adopted post-2008.</p>
            </TooltipContent>
          </Tooltip>
          , Lean UX by Jeff Gothelf in <span className="font-bold">2011</span>, Design Sprints by Google Ventures in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2016 (9 years maximum)</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">2025 - 2016 = 9 years. Jake Knapp's book "Sprint" published 2016.</p>
            </TooltipContent>
          </Tooltip>
          , Jobs-to-be-Done by Christensen in <span className="font-bold">2003</span>, and Atomic Design by Brad Frost in <span className="font-bold">2013</span>. Claims of "Design thinking expert in the 1980s" or "Agile UX since 1990" predate the formalization of these methodologies.
        </>
      )
    },
    {
      number: 9,
      title: "Company Hiring Records: Proving Impossibility for Indian Managers at Popular Companies",
      content: (
        <>
          For managers in specific companies who stayed in India, 20-25 years is impossible if their UX teams formed later. TCS began user-driven development by{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">late 1990s with formal practices developing in the early 2000s</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">~25-28 years max if experimental start in 1997. Possible for 20-25 if started early, but managers likely post-2000 (max ~25). Claims &gt;25 impossible. Rare for pure India-stay as early work tied to global Y2K projects.</p>
            </TooltipContent>
          </Tooltip>
          . Infosys launched design thinking initiative in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2014 under Vishal Sikka</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">11 years max (2014-2025). Impossible for 20-25 years. Pre-2014 claims reference non-UX roles (e.g., general IT). UX via acquisitions like Brilliant Basics (2017), WongDoody (2018).</p>
            </TooltipContent>
          </Tooltip>
          . Wipro Digital launched in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2014, Designit acquired 2015</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">11 years max. Impossible for 20-25 years. Pre-2014 UX was absent in India operations.</p>
            </TooltipContent>
          </Tooltip>
          . Tech Mahindra established UX research in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2007, formal practice ~2015</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">18 years max from 2007. Impossible for 25 years. 20 years only if started exactly in 2005 (rare for managers). Precursor Satyam in late 1990s. Claims &gt;18 impossible.</p>
            </TooltipContent>
          </Tooltip>
          . Google India started UX in{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">2008 for India-specific projects</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">17 years max. Impossible for 20-25 years. India ops from 2004, UX teams later. Maps adaptations drove UX focus.</p>
            </TooltipContent>
          </Tooltip>
          . Apple India UX began{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">~2020 with developer collaborations</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Maximum 7 years at Apple India. Claims before 2018 are impossible as Apple’s UX presence was limited.</p>
            </TooltipContent>
          </Tooltip>
              <p className="text-sm">5 years max. Impossible for 20-25 years. Any higher claims require non-India experience. Limited presence before 2020.</p>
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">~2010 in Hyderabad IDC</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">15 years max. Impossible for 20-25 years. India ops from 1990, UX minimal pre-2010. Design teams formed in 2010s.</p>
            </TooltipContent>
          </Tooltip>
          . This proves: For managers in Infosys, Wipro, Google, Apple, or Microsoft (majority cases), 20-25 years is mathematically impossible if stayed in India (5-17 years max). Even for TCS/Tech Mahindra, 25+ is impossible, and 20-25 requires verifiable pioneer status. Cross-reference with global constraints (UX coined 1993, tools like Figma 2016) amplifies impossibilities. Indian managers with legitimate 20-25 years likely had international experience or conflate non-UX IT roles with UX.
        </>
      )
    },
    {
      number: 10,
      title: "Professional Community Size: The Numbers Don't Lie",
      content: (
        <>
          The global UX community grew exponentially, creating statistical constraints on certain claims. In 1993, there were approximately{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">100 UX professionals globally</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">P(being in first 100) = 100/800,000 = 0.0125%. Claiming pioneer status is statistically rare.</p>
            </TooltipContent>
          </Tooltip>{" "}
          at the founding. By 1995, this grew to around 500 (400% growth). The year 2000 saw approximately 2,000 professionals (300% growth over 5 years). In 2005, there were around 10,000 (400% growth), in 2010 approximately 50,000 (400% growth), in 2015 around 150,000 (200% growth), in 2020 approximately 500,000 (230% growth), and in 2025 an estimated{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">800,000 professionals (60% growth over 5 years)</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">Growth formula: Community_Size(Year) = 100 × e^(0.35(Year-1993)). Exponential adoption.</p>
            </TooltipContent>
          </Tooltip>
          . The probability of being in the first 100 is 0.0125%, yet{" "}
          <Tooltip>
            <TooltipTrigger asChild>
              <span className="font-bold cursor-help border-b border-dotted border-foreground/40">5% of LinkedIn profiles claim "UX pioneer" status</span>
            </TooltipTrigger>
            <TooltipContent className="max-w-xs">
              <p className="text-sm">40,000 claimed pioneers vs. 100 actual = 400× inflation. Statistically equivalent to 400% of people being astronauts.</p>
            </TooltipContent>
          </Tooltip>
          —a mathematical impossibility representing 400 times more pioneers than actually existed.
        </>
      )
    }
  ];

  return (
    <TooltipProvider delayDuration={300}>
      <section className="py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-12 bg-background" data-testid="section-theses">
        <div className="max-w-4xl mx-auto space-y-12">
          {/* Section Label */}
          <div className="text-center mb-16">
            <h2 
              className="text-xs sm:text-sm uppercase tracking-[0.2em] text-[#6b6b6b] mb-4"
              data-testid="label-professional-claims"
            >
              Professional Claims
            </h2>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-display font-light leading-tight text-foreground">
              Mathematical Proofs of Timeline Impossibilities
            </h3>
          </div>

          {/* Thesis Cards */}
          <div className="space-y-8">
            {theses.map((thesis) => (
              <FadeInSection key={thesis.number}>
                <div 
                  className="flex gap-6 items-start"
                  data-testid={`card-thesis-${thesis.number}`}
                >
                  {/* Circled Number */}
                  <div 
                    className="flex-shrink-0 w-12 h-12 rounded-full border-2 border-foreground flex items-center justify-center"
                    data-testid={`number-thesis-${thesis.number}`}
                  >
                    <span className="text-foreground font-mono text-xs sm:text-sm font-bold">
                      {String(thesis.number).padStart(2, '0')}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="flex-1 space-y-4">
                    <h4 
                      className="text-xl sm:text-2xl md:text-3xl font-display font-bold leading-tight text-foreground"
                      data-testid={`title-thesis-${thesis.number}`}
                    >
                      {thesis.title}
                    </h4>
                    <div 
                      className="text-sm sm:text-base leading-[1.8] text-justify text-foreground/90"
                      data-testid={`description-thesis-${thesis.number}`}
                    >
                      {thesis.content}
                    </div>
                  </div>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
}