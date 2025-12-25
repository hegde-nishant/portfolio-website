import Image from 'next/image';
import { personalInfo } from '@/data/personal';
import Section from '@/components/ui/Section';

export default function Hero() {
  return (
    <Section className="pt-16 pb-12">
      <div className="flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <Image
            src={personalInfo.profilePhoto}
            alt={personalInfo.name}
            width={160}
            height={160}
            className="object-cover shadow-macos-lg border-4 border-platinum-border-dark"
            priority
          />
        </div>
        <div className="flex-1">
          <h1 className="text-4xl md:text-5xl font-display text-platinum-text mb-2">
            {personalInfo.name}
          </h1>
          <p className="text-base md:text-lg text-platinum-text-muted mb-6 font-bold">
            {personalInfo.tagline}
          </p>
          <p className="text-body text-platinum-text">
            {personalInfo.bio}
          </p>
          {personalInfo.funFact && (
            <p className="text-body text-platinum-text italic mt-4">
              {personalInfo.funFact}
            </p>
          )}
        </div>
      </div>
    </Section>
  );
}
