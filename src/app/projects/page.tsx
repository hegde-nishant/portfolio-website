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
    <>
      <Section>
        <SectionTitle showEdit={false} bgColor="bg-facebook-blue-medium">Projects</SectionTitle>
        <div className="p-4">
          <ProjectGrid projects={projects} />
        </div>
      </Section>

      {/* Image Credits */}
      {projectsWithCredits.length > 0 && (
        <Section>
          <SectionTitle showEdit={false}>Image Credits</SectionTitle>
          <div className="p-4 space-y-3">
            {projectsWithCredits.map((project) => (
              <p key={project.slug} className="text-xs text-text-secondary">
                <strong className="text-text-primary">{project.title}:</strong>{' '}
                Image by{' '}
                <ExternalLink href={project.imageCredit!.sourceUrl}>
                  {project.imageCredit!.author}
                </ExternalLink>
                {' '}from {project.imageCredit!.source}, licensed under{' '}
                <ExternalLink href={project.imageCredit!.licenseUrl}>
                  {project.imageCredit!.license}
                </ExternalLink>
              </p>
            ))}
          </div>
        </Section>
      )}
    </>
  );
}
