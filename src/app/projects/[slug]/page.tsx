import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import ExternalLink from '@/components/ui/ExternalLink';
import FacebookButton from '@/components/ui/FacebookButton';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// Generate static paths for all projects
export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

// Generate metadata for each project
export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: `${project.title} | Nishant Hegde`,
    description: project.shortDescription,
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="py-6">
      {/* Project Title */}
      <Section>
        <div className="p-4">
          <h1 className="text-2xl font-bold text-text-primary mb-2">
            {project.title}
          </h1>
          {/* Tech Stack Tags */}
          {project.techStack && project.techStack.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-0.5 text-xs bg-gray-100 border border-border-light text-text-secondary rounded"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* Overview */}
      <Section>
        <SectionTitle>Overview</SectionTitle>
        <div className="p-4">
          <p className="text-sm text-text-primary leading-relaxed">
            {project.overview}
          </p>
        </div>
      </Section>

      {/* Problem Statement */}
      <Section>
        <SectionTitle>Problem Statement</SectionTitle>
        <div className="p-4">
          <p className="text-sm text-text-primary leading-relaxed">
            {project.problemStatement}
          </p>
        </div>
      </Section>

      {/* Approach */}
      <Section>
        <SectionTitle>Approach</SectionTitle>
        <div className="p-4">
          <p className="text-sm text-text-primary leading-relaxed">
            {project.approach}
          </p>
        </div>
      </Section>

      {/* Visualizations */}
      {project.visualizations && project.visualizations.length > 0 && (
        <Section>
          <SectionTitle>Visualizations</SectionTitle>
          <div className="p-4 space-y-4">
            {project.visualizations.map((viz, index) => (
              <div key={index} className="border border-border-light overflow-hidden">
                <img
                  src={viz}
                  alt={`Visualization ${index + 1}`}
                  className="w-full h-auto object-contain"
                />
              </div>
            ))}
          </div>
        </Section>
      )}

      {/* Results */}
      <Section>
        <SectionTitle>Results</SectionTitle>
        <div className="p-4">
          <p className="text-sm text-text-primary leading-relaxed">
            {project.results}
          </p>
        </div>
      </Section>

      {/* Links */}
      <Section>
        <div className="p-4">
          <div className="flex flex-wrap gap-3">
            <FacebookButton href={project.githubUrl} variant="primary">
              View on GitHub →
            </FacebookButton>
            {project.demoUrl && (
              <FacebookButton href={project.demoUrl} variant="secondary">
                Live Demo →
              </FacebookButton>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
