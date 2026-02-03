'use client';

import { useState } from 'react';
import { education } from '@/data/education';

export default function Education() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div id="education" className="mb-3 max-w-content mx-auto bg-white border border-border-medium">
      <div
        className="flex items-center gap-2 bg-[#D8DFEA] px-3 py-1.5 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="text-facebook-blue text-xs">{expanded ? '▼' : '►'}</span>
        <h2 className="text-sm font-bold text-facebook-blue">Education</h2>
      </div>

      {expanded && (
        <div className="p-3 space-y-4">
          {education.map((edu) => (
            <div key={edu.id} className="text-xs space-y-1">
              <h3 className="font-bold text-text-primary">
                {edu.degree} in {edu.branch}
              </h3>
              <div>
                <span className="text-text-secondary">Institution:</span>{' '}
                <span className="text-text-primary">{edu.institution}</span>
              </div>
              <div>
                <span className="text-text-secondary">Location:</span>{' '}
                <span className="text-text-primary">{edu.location}</span>
              </div>
              <div>
                <span className="text-text-secondary">Dates:</span>{' '}
                <span className="text-text-primary">{edu.startDate} - {edu.endDate}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
