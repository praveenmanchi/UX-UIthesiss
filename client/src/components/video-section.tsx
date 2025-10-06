export default function VideoSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8" data-testid="section-video">
      <div className="max-w-5xl mx-auto">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <p className="text-muted uppercase tracking-wider text-sm font-mono">Section 2</p>
            <h3 className="font-display text-4xl sm:text-5xl font-bold leading-tight" data-testid="text-video-heading">The Profession's Genesis</h3>
          </div>

          <div className="max-w-3xl mx-auto prose prose-lg space-y-6 text-foreground/90 leading-relaxed">
            <p>
              Everyone, including the marketing departments and business analysts, wanted to design interfaces except there was no profession called UX/UI. The only problem is that <strong>we are bad historians</strong>.
            </p>

            <p>
              We run a <strong>chronologically impossible claim process</strong> that neither acknowledges the actual timeline of professional development nor the documented history of the field. <strong>Historical evidence explains the impossibility of extended experience claims:</strong>
            </p>

            <blockquote className="border-l-4 border-accent pl-6 italic text-lg">
              "The field of UX/UI design as a distinct profession is based on the concepts of human-centered design that were revolutionary in the 1990s and at the forefront of the technology industry before it was systematized by pioneers like Don Norman and Alan Cooper. Centralized, predictive interface design and user research were then thought to be superior to the trial and error engineering approaches that dominated early computing."
            </blockquote>

            <div className="not-prose">
              <p className="text-muted uppercase tracking-wider text-sm font-mono mb-4">Historical Evidence</p>
            </div>

            <p>
              There is no resume that can claim 25+ years of UX/UI experience without being anachronistic. <strong>The mathematics are unforgiving</strong>. We must be very careful not to conflate <strong>graphic design experience with UX/UI professional practice</strong>. As Don Norman said, <strong>"UX encompasses all aspects of the person's experience with a system."</strong> This holistic approach didn't exist before the 1990s.
            </p>

            <p>
              Our <strong>human-centered design methodology</strong> values <strong>user research, not just visual design</strong>. It values <strong>usability testing and iterative improvement</strong>, not just aesthetic appeal.
            </p>

            <p>
              The GUI revolution created a new discipline that was <strong>unaware of or separate from traditional graphic design</strong>. In Silicon Valley, we call them <strong>interaction designers and user researchers</strong>—distinct from visual designers. We once had generalist "computer programmers," but UX/UI required <strong>specialized knowledge of human psychology, information architecture, and usability principles</strong>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
