import { Metadata } from 'next';
import { projects } from '@/data/projects';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import ProjectGrid from '@/components/projects/ProjectGrid';
import ExternalLink from '@/components/ui/ExternalLink';

export const metadata: Metadata = {
  title: 'Projects | Nishant Hegde',
  description: 'Explore my data science and machine learning projects showcasing work in NLP, computer vision, predictive analytics, and more.',
};

export default function ProjectsPage() {
  const projectsWithCredits = projects.filter(p => p.imageCredit);

  return (
    <Section className="pt-12">
      <SectionTitle>Projects</SectionTitle>
      <ProjectGrid projects={projects} />

      {/* Image Credits */}
      {projectsWithCredits.length > 0 && (
        <div className="mt-16 pt-8 border-t-2 border-platinum-border-dark">
          <h3 className="text-lg font-display text-platinum-text mb-4">
            Image Credits
          </h3>
          <div className="space-y-3 text-sm text-platinum-text-muted">
            {projectsWithCredits.map((project) => (
              <p key={project.slug}>
                <strong className="text-platinum-text">{project.title}:</strong>{' '}
                Image by{' '}
                <ExternalLink
                  href={project.imageCredit!.sourceUrl}
                  className="text-blue hover:underline"
                >
                  {project.imageCredit!.author}
                </ExternalLink>
                {' '}from {project.imageCredit!.source}, licensed under{' '}
                <ExternalLink
                  href={project.imageCredit!.licenseUrl}
                  className="text-blue hover:underline"
                >
                  {project.imageCredit!.license}
                </ExternalLink>
              </p>
            ))}
          </div>
        </div>
      )}
    </Section>
  );
}
