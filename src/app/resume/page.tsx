import { Metadata } from 'next';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import FacebookButton from '@/components/ui/FacebookButton';

export const metadata: Metadata = {
  title: 'Resume | Nishant Hegde',
  description: 'Resume of Nishant Hegde - Data Scientist and Machine Learning Engineer',
};

export default function ResumePage() {
  return (
    <>
      <Section>
        <SectionTitle showEdit={false} bgColor="bg-facebook-blue-medium">Resume</SectionTitle>

        {/* Download Button */}
        <div className="p-4 border-b border-border-light">
          <FacebookButton
            href="/resume.pdf"
            download="NishantHegde_Resume.pdf"
            variant="primary"
          >
            Download PDF →
          </FacebookButton>
        </div>

        {/* PDF Viewer */}
        <div className="w-full border-t border-border-light">
          <iframe
            src="/resume.pdf"
            className="w-full h-[1000px] md:h-[1200px]"
            title="Resume PDF"
          />
        </div>
      </Section>
    </>
  );
}
