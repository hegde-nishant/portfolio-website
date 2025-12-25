import { Metadata } from 'next';
import { projects } from '@/data/projects';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';
import ExternalLink from '@/components/ui/ExternalLink';

export const metadata: Metadata = {
  title: 'Image Credits | Nishant Hegde',
  description: 'Attribution and credits for images used on this website.',
};

export default function CreditsPage() {
  // Filter projects that have image credits
  const projectsWithCredits = projects.filter(p => p.imageCredit);

  return (
    <div className="py-12">
      <Section>
        <SectionTitle subtitle="Proper attribution for external images used on this website">
          Image Credits & Attributions
        </SectionTitle>

        <div className="space-y-8">
          {projectsWithCredits.map((project) => (
            <div
              key={project.slug}
              className="bg-platinum-bg-light border-2 border-platinum-border p-6"
            >
              <h3 className="text-xl font-display text-platinum-text mb-3">
                {project.title}
              </h3>

              {project.imageCredit && (
                <div className="space-y-2 text-body text-platinum-text">
                  <p>
                    <strong>Image:</strong> Thumbnail
                  </p>
                  <p>
                    <strong>Author:</strong>{' '}
                    <ExternalLink
                      href={project.imageCredit.sourceUrl}
                      className="text-blue hover:underline"
                    >
                      {project.imageCredit.author}
                    </ExternalLink>
                  </p>
                  <p>
                    <strong>Source:</strong> {project.imageCredit.source}
                  </p>
                  <p>
                    <strong>License:</strong>{' '}
                    <ExternalLink
                      href={project.imageCredit.licenseUrl}
                      className="text-blue hover:underline"
                    >
                      {project.imageCredit.license}
                    </ExternalLink>
                  </p>
                  <p className="text-sm text-platinum-text-muted mt-3">
                    This work is licensed under{' '}
                    <ExternalLink
                      href={project.imageCredit.licenseUrl}
                      className="text-blue hover:underline"
                    >
                      {project.imageCredit.license}
                    </ExternalLink>
                    . To view a copy of this license, visit{' '}
                    <ExternalLink
                      href={project.imageCredit.licenseUrl}
                      className="text-blue hover:underline break-all"
                    >
                      {project.imageCredit.licenseUrl}
                    </ExternalLink>
                  </p>
                </div>
              )}
            </div>
          ))}

          {projectsWithCredits.length === 0 && (
            <p className="text-platinum-text-muted text-center py-12">
              All images on this website are original or properly licensed.
            </p>
          )}
        </div>

        <div className="mt-12 pt-8 border-t-2 border-platinum-border-dark">
          <h3 className="text-lg font-display text-platinum-text mb-3">
            About These Licenses
          </h3>
          <div className="space-y-4 text-body text-platinum-text-muted">
            <p>
              <strong className="text-platinum-text">CC BY 2.0</strong> - This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator.
            </p>
            <p>
              <strong className="text-platinum-text">CC BY-SA 4.0</strong> - This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use. If you remix, adapt, or build upon the material, you must license the modified material under identical terms.
            </p>
          </div>
        </div>
      </Section>
    </div>
  );
}
