import { workExperience } from '@/data/work-experience';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

export default function WorkExperience() {
  return (
    <Section>
      <SectionTitle>Work Experience</SectionTitle>
      <div className="space-y-6">
        {workExperience.map((experience) => (
          <div key={experience.id} className="bg-platinum-bg-light border-2 border-platinum-border-dark p-6 shadow-macos">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-lg md:text-xl font-display text-platinum-text">
                {experience.role}
              </h3>
              <span className="text-xs text-platinum-text-muted md:ml-4 font-medium">
                {experience.startDate} - {experience.endDate}
              </span>
            </div>
            <p className="text-base text-platinum-text font-semibold mb-3">
              {experience.company}
            </p>
            <p className="text-sm text-platinum-text-muted leading-relaxed">
              {experience.summary}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
