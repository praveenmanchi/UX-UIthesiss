export default function IntroductionSection() {
  return (
    <section id="origins" className="py-16 px-4 sm:px-6 lg:px-8" data-testid="section-introduction">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-8">
          <div>
            <span className="text-muted uppercase tracking-wider text-sm font-mono">Introduction</span>
          </div>
          
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight" data-testid="text-intro-heading">
            As professionals, we are in an undeclared state of confusion.
          </h2>

          <div className="prose prose-lg space-y-6 text-foreground/90 leading-relaxed">
            <p>
              Around 2025, hiring managers in India claim 24 years of UX/UI experience, recruiters validate 20-year professional histories, and senior designers inflate their backgrounds by a decade. A decade later, we have interns with more authentic experience than self-proclaimed "experts," 1,000+ false LinkedIn profiles claiming impossible timelines, and an unprecedented proliferation of fabricated UX credentials.
            </p>

            <p>
              This is a hot war against professional integrity. The industry has empirically lost credibility. We must respond to this misinformation with facts.
            </p>

            <p>
              We have a peer problem: <strong>Mathematical impossibility</strong>. "Senior UX/UI Designer" is a euphemism to avoid the embarrassment of acknowledging that the profession is younger than claimed. In 1993, Don Norman was the only person with "User Experience" in his job title. Today, thousands claim experience predating the field's existence. The UX/UI industry requires historical accuracy, or it will lose credibility and plunge hiring into darkness under fraudulent resumes.
            </p>

            <p className="text-xl font-medium text-foreground">
              Given the vast claims we have seen about experience in these decades of digital transformation, it would be reasonable to wonder: what went wrong?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
