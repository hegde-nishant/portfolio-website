'use client';

import { useState } from 'react';
import { workExperience } from '@/data/work-experience';

export default function WorkExperience() {
  const [expanded, setExpanded] = useState(true);

  return (
    <div id="work-experience" className="mb-3 max-w-content mx-auto bg-white border border-border-medium">
      <div
        className="flex items-center gap-2 bg-[#D8DFEA] px-3 py-1.5 cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        <span className="text-facebook-blue text-xs">{expanded ? '▼' : '►'}</span>
        <h2 className="text-sm font-bold text-facebook-blue">Work Experience</h2>
      </div>

      {expanded && (
        <div className="p-3 space-y-4">
          {workExperience.map((exp) => (
            <div key={exp.id} className="text-xs space-y-1">
              <h3 className="font-bold text-text-primary">{exp.role}</h3>
              <div>
                <span className="text-text-secondary">Company:</span>{' '}
                <span className="text-text-primary">{exp.company}</span>
              </div>
              <div>
                <span className="text-text-secondary">Dates:</span>{' '}
                <span className="text-text-primary">{exp.startDate} - {exp.endDate}</span>
              </div>
              <div>
                <span className="text-text-secondary">Description:</span>{' '}
                <span className="text-text-primary">{exp.summary}</span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
