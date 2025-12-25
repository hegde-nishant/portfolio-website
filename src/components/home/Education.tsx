import { education } from '@/data/education';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Education() {
  return (
    <Section>
      <SectionTitle>Education</SectionTitle>
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.id} className="bg-platinum-bg-light border-2 border-platinum-border-dark p-6 shadow-macos">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between mb-2">
              <h3 className="text-lg md:text-xl font-display text-platinum-text">
                {edu.degree} in {edu.branch}
              </h3>
              <span className="text-xs text-platinum-text-muted md:ml-4 font-medium">
                {edu.startDate} - {edu.endDate}
              </span>
            </div>
            <p className="text-base text-platinum-text font-semibold">
              {edu.institution}
            </p>
            <p className="text-sm text-platinum-text-muted">
              {edu.location}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}
