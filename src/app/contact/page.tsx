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
    <div className="py-6">
      {/* Intro */}
      <Section>
        <SectionTitle showEdit={false}>Get In Touch</SectionTitle>
        <div className="p-4">
          <p className="text-sm text-text-primary leading-relaxed">
            I'm always interested in new opportunities, collaborations, and conversations about data science and machine learning. Feel free to reach out!
          </p>
        </div>
      </Section>

      {/* Email */}
      <Section>
        <SectionTitle showEdit={false}>Email</SectionTitle>
        <div className="p-4">
          <ExternalLink href={`mailto:${contactInfo.email}`}>
            {contactInfo.email}
          </ExternalLink>
        </div>
      </Section>

      {/* Social Links */}
      <Section>
        <SectionTitle showEdit={false}>Connect</SectionTitle>
        <div className="divide-y divide-border-light">
          <div className="p-4">
            <h4 className="text-sm font-bold text-text-primary mb-1">
              LinkedIn
            </h4>
            <ExternalLink href={contactInfo.linkedin}>
              View Profile →
            </ExternalLink>
          </div>

          <div className="p-4">
            <h4 className="text-sm font-bold text-text-primary mb-1">
              GitHub
            </h4>
            <ExternalLink href={contactInfo.github}>
              View Projects →
            </ExternalLink>
          </div>
        </div>
      </Section>
    </div>
  );
}
