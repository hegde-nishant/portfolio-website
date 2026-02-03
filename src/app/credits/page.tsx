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
    <div className="py-6">
      <Section>
        <SectionTitle showEdit={false} subtitle="Proper attribution for external images used on this website">
          Image Credits & Attributions
        </SectionTitle>

        <div className="p-4">
          {projectsWithCredits.map((project, index) => (
            <div
              key={project.slug}
              className={`py-4 ${
                index !== projectsWithCredits.length - 1 ? 'border-b border-border-light' : ''
              }`}
            >
              <h3 className="text-sm font-bold text-text-primary mb-2">
                {project.title}
              </h3>

              {project.imageCredit && (
                <div className="space-y-1 text-xs text-text-secondary">
                  <p>
                    <strong className="text-text-primary">Image:</strong> Thumbnail
                  </p>
                  <p>
                    <strong className="text-text-primary">Author:</strong>{' '}
                    <ExternalLink href={project.imageCredit.sourceUrl}>
                      {project.imageCredit.author}
                    </ExternalLink>
                  </p>
                  <p>
                    <strong className="text-text-primary">Source:</strong> {project.imageCredit.source}
                  </p>
                  <p>
                    <strong className="text-text-primary">License:</strong>{' '}
                    <ExternalLink href={project.imageCredit.licenseUrl}>
                      {project.imageCredit.license}
                    </ExternalLink>
                  </p>
                  <p className="mt-2">
                    This work is licensed under{' '}
                    <ExternalLink href={project.imageCredit.licenseUrl}>
                      {project.imageCredit.license}
                    </ExternalLink>
                    . To view a copy of this license, visit{' '}
                    <ExternalLink href={project.imageCredit.licenseUrl}>
                      {project.imageCredit.licenseUrl}
                    </ExternalLink>
                  </p>
                </div>
              )}
            </div>
          ))}

          {projectsWithCredits.length === 0 && (
            <p className="text-text-secondary text-center py-8 text-sm">
              All images on this website are original or properly licensed.
            </p>
          )}
        </div>
      </Section>

      <Section>
        <SectionTitle showEdit={false}>About These Licenses</SectionTitle>
        <div className="p-4 space-y-3 text-xs text-text-secondary">
          <p>
            <strong className="text-text-primary">CC BY 2.0</strong> - This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator.
          </p>
          <p>
            <strong className="text-text-primary">CC BY-SA 4.0</strong> - This license allows reusers to distribute, remix, adapt, and build upon the material in any medium or format, so long as attribution is given to the creator. The license allows for commercial use. If you remix, adapt, or build upon the material, you must license the modified material under identical terms.
          </p>
        </div>
      </Section>
    </div>
  );
}
