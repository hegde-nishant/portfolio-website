import { WorkExperience } from '@/types';
import InfoTable from '@/components/ui/InfoTable';

interface WorkExperienceBoxProps {
  experience: WorkExperience;
}

export default function WorkExperienceBox({ experience }: WorkExperienceBoxProps) {
  return (
    <div className="border border-border-medium overflow-hidden mb-2 last:mb-0 bg-white">
      {/* Blue header bar with job title */}
      <div className="bg-facebook-blue px-2 py-1">
        <h3 className="text-xs font-bold text-white">
          {experience.role}
        </h3>
      </div>

      {/* Job details in table format */}
      <div className="p-0">
        <InfoTable
          rows={[
            { label: 'Company', value: experience.company },
            {
              label: 'Dates',
              value: `${experience.startDate} - ${experience.endDate}`
            },
            { label: 'Description', value: experience.summary }
          ]}
        />
      </div>
    </div>
  );
}
