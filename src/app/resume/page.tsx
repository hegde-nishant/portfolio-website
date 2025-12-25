import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import MacButton from '@/components/ui/MacButton';

export const metadata: Metadata = {
  title: 'Resume | Nishant Hegde',
  description: 'Resume of Nishant Hegde - Data Scientist and Machine Learning Engineer',
};

export default function ResumePage() {
  return (
    <div className="py-12">
      <Section>
        {/* Header */}
        <div className="mb-8 flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-display text-platinum-text">
            Resume
          </h1>

          {/* Download Button */}
          <MacButton
            href="/resume.pdf"
            download="NishantHegde_Resume.pdf"
            variant="primary"
          >
            Download PDF →
          </MacButton>
        </div>

        {/* PDF Viewer */}
        <div className="w-full bg-platinum-bg-light border-2 border-platinum-border-dark shadow-macos-lg">
          <iframe
            src="/resume.pdf"
            className="w-full h-[1000px] md:h-[1200px]"
            title="Resume PDF"
          />
        </div>
      </Section>
    </div>
  );
}
