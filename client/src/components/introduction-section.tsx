export default function IntroductionSection() {
  return (
    <section 
      id="introduction" 
      className="py-12 px-6 sm:py-16 sm:px-8 lg:py-20 lg:px-12 bg-[#f5f2ed]" 
      data-testid="section-introduction"
    >
      <div className="max-w-5xl mx-auto">
        <div className="space-y-12">
          {/* Section Label */}
          <div>
            <span 
              className="text-[#6b6b6b] uppercase tracking-[0.2em] text-xs sm:text-sm font-sans font-medium" 
              data-testid="label-introduction"
            >
              Introduction
            </span>
          </div>
          
          {/* Headline */}
          <div className="space-y-6">
            <h2 
              className="font-display text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.1] text-black" 
              data-testid="text-intro-heading"
            >
              As professionals, we are in an undeclared state of confusion.
            </h2>
            
            {/* Horizontal separator line */}
            <div className="w-full h-[1px] bg-black/20" />
          </div>

          {/* Body Text */}
          <div className="space-y-6 text-black/90">
            <p className="text-sm sm:text-base leading-[1.8] text-justify">
              Around 2025, hiring managers in India claim 24 years of UX/UI experience, recruiters validate 20-year professional histories, and senior designers inflate their backgrounds by a decade. A decade later, we have interns with more authentic experience than self-proclaimed "experts," 1,000+ false LinkedIn profiles claiming impossible timelines, and an unprecedented proliferation of fabricated UX credentials.
            </p>

            <p className="text-sm sm:text-base leading-[1.8] text-justify">
              This is a hot war against professional integrity. The industry has empirically lost credibility. We must respond to this misinformation with facts.
            </p>

            <p className="text-sm sm:text-base leading-[1.8] text-justify">
              We have a peer problem: Mathematical impossibility. "Senior UX/UI Designer" is a euphemism to avoid the embarrassment of acknowledging that the profession is younger than claimed. In 1993, Don Norman was the only person with "User Experience" in his job title. Today, thousands claim experience predating the field's existence. The UX/UI industry requires historical accuracy, or it will lose credibility and plunge hiring into darkness under fraudulent resumes.
            </p>

            <p className="text-sm sm:text-base leading-[1.8] text-justify">
              Given the vast claims we have seen about experience in these decades of digital transformation, it would be reasonable to wonder: what went wrong?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
