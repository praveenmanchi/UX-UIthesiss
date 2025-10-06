import UXToolEvolutionChart from "./ux-tool-evolution-chart";
import MaxExperienceChart from "./max-experience-chart";

export default function Section1() {
  return (
    <section id="revolution" className="py-16 px-4 sm:px-6 lg:px-8" data-testid="section-1">
      <div className="max-w-3xl mx-auto space-y-12">
        <div>
          <span className="text-muted uppercase tracking-wider text-sm font-mono">Section 1</span>
        </div>

        <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight" data-testid="text-section1-heading">
          The Last Computer and Great Interface Revolution
        </h2>

        <div className="prose prose-lg space-y-6 text-foreground/90 leading-relaxed">
          <p>
            In 1973, after the mainframe era, Xerox wanted a <strong>Personal Computer Revolution</strong> and GUI development was pioneered by their PARC lab. The lab held demonstrations to show what computing could be—the so-called "Alto Demo"—to tell the industry that text-only interfaces would not survive. Today, we have modern UI.
          </p>
        </div>

        <div id="tools" className="space-y-6 py-8">
          <div className="space-y-2">
            <span className="text-muted uppercase tracking-wider text-xs font-mono">Fig 01</span>
            <h3 className="font-display text-2xl font-semibold">UX Tool Evolution & User Growth</h3>
          </div>

          <div className="bg-accent/10 rounded-lg p-8 border border-accent">
            <UXToolEvolutionChart />
          </div>
        </div>

        <div className="prose prose-lg space-y-6 text-foreground/90 leading-relaxed">
          <p>
            The most important consequence of the Alto wasn't just a better computer interface, but the <strong>coupling of human psychology to computing</strong> and the rise of <strong>Human-Computer Interaction</strong>. Innovation bred creativity and brought in the brilliant engineers and designers. This was the <strong>Great Interface Revolution</strong> of the computing industry.
          </p>

          <p>
            Before the GUI revolution, only <strong>3% of computer users</strong> were non-technical. The vast majority of computing required programming skills and text commands. <strong>Xerox made computers visual. Apple made them friendly. Microsoft made them ubiquitous.</strong>
          </p>
        </div>

        <div id="economics" className="space-y-6 py-8">
          <div className="space-y-2">
            <span className="text-muted uppercase tracking-wider text-xs font-mono">Fig 02</span>
            <h3 className="font-display text-2xl font-semibold">Max UX/UI Experience by Career Start</h3>
          </div>

          <div className="bg-accent/10 rounded-lg p-8 border border-accent">
            <MaxExperienceChart />
          </div>

          <div className="text-xs text-muted space-y-2">
            <p className="italic">FIELD CREATORS → PIONEERS → PROFESSIONAL PRACTICE → INDUSTRY STANDARDS</p>
            <p>Note: Only Field Creators (1993) and Early Pioneers (1995) can claim 24+ years of experience in 2025</p>
          </div>
        </div>

        <div className="prose prose-lg space-y-6 text-foreground/90 leading-relaxed">
          <p>
            But today that 3% has ballooned to <strong>97% of computing users</strong> being non-technical. The revolution's fixation on <strong>user-centered design, intuitive interfaces, and accessible technology</strong> has made computing universally appealing, suitable not just for engineers but for everyone—a transformation only possible at the dawn of the personal computer age.
          </p>

          <p>
            <strong>Working in UX/UI before 1990 meant you were essentially a computer scientist or industrial designer</strong>, not a dedicated user experience professional. That designation didn't exist.
          </p>
        </div>
      </div>
    </section>
  );
}
