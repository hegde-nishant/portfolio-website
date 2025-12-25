import { Metadata } from 'next';
import { contactInfo } from '@/data/contact';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import ExternalLink from '@/components/ui/ExternalLink';

export const metadata: Metadata = {
  title: 'Contact | Nishant Hegde',
  description: 'Get in touch with Nishant Hegde - Available for data science and machine learning opportunities.',
};

export default function ContactPage() {
  return (
    <Section className="py-16">
      <SectionTitle>Get In Touch</SectionTitle>

        <p className="text-base text-platinum-text mb-10">
          I'm always interested in new opportunities, collaborations, and conversations about data science and machine learning. Feel free to reach out!
        </p>

        {/* Email */}
        <div className="mb-10">
          <h3 className="text-lg font-display text-platinum-text mb-3">
            Email
          </h3>
          <ExternalLink href={`mailto:${contactInfo.email}`} className="text-base text-blue hover:text-blue-dark">
            {contactInfo.email}
          </ExternalLink>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-display text-platinum-text mb-4">
            Connect
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 bg-platinum-bg-light border-2 border-platinum-border-dark hover:shadow-macos transition-shadow">
              <h4 className="text-base font-semibold text-platinum-text mb-1">
                LinkedIn
              </h4>
              <ExternalLink href={contactInfo.linkedin} className="text-sm text-blue hover:text-blue-dark">
                View Profile →
              </ExternalLink>
            </div>

            <div className="p-5 bg-platinum-bg-light border-2 border-platinum-border-dark hover:shadow-macos transition-shadow">
              <h4 className="text-base font-semibold text-platinum-text mb-1">
                GitHub
              </h4>
              <ExternalLink href={contactInfo.github} className="text-sm text-blue hover:text-blue-dark">
                View Projects →
              </ExternalLink>
            </div>
          </div>
        </div>
    </Section>
  );
}
