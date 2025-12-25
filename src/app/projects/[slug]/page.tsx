import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import ExternalLink from '@/components/ui/ExternalLink';
import MacButton from '@/components/ui/MacButton';

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
    <div className="py-12">
      <Section>
        <h1 className="text-4xl md:text-5xl font-display text-platinum-text mb-8">
          {project.title}
        </h1>

        {/* Overview */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-display text-platinum-text mb-3">
            Overview
          </h2>
          <p className="text-lg-body text-platinum-text leading-relaxed">
            {project.overview}
          </p>
        </div>

        {/* Problem Statement */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-display text-platinum-text mb-3">
            Problem Statement
          </h2>
          <p className="text-lg-body text-platinum-text leading-relaxed">
            {project.problemStatement}
          </p>
        </div>

        {/* Approach */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-display text-platinum-text mb-3">
            Approach
          </h2>
          <p className="text-lg-body text-platinum-text leading-relaxed">
            {project.approach}
          </p>
        </div>

        {/* Visualizations */}
        {project.visualizations && project.visualizations.length > 0 && (
          <div className="mb-8">
            <h2 className="text-2xl md:text-3xl font-display text-platinum-text mb-3">
              Visualizations
            </h2>
            <div className="flex flex-col gap-6 max-w-4xl mx-auto">
              {project.visualizations.map((viz, index) => (
                <div key={index} className="bg-platinum-bg-dark border-2 border-platinum-border overflow-hidden">
                  <img
                    src={viz}
                    alt={`Visualization ${index + 1}`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Results */}
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-display text-platinum-text mb-3">
            Results
          </h2>
          <p className="text-lg-body text-platinum-text leading-relaxed">
            {project.results}
          </p>
        </div>

        {/* Links */}
        <div className="pt-6 border-t-2 border-platinum-border-dark">
          <div className="flex flex-wrap gap-4">
            <MacButton href={project.githubUrl} variant="primary">
              View on GitHub →
            </MacButton>
            {project.demoUrl && (
              <MacButton href={project.demoUrl} variant="secondary">
                Live Demo →
              </MacButton>
            )}
          </div>
        </div>
      </Section>
    </div>
  );
}
