'use client';

import Image from 'next/image';
import { useState } from 'react';
import { personalInfo } from '@/data/personal';
import { contactInfo } from '@/data/contact';
import Section from '@/components/ui/Section';
import SectionTitle from '@/components/ui/SectionTitle';

export default function Hero() {
  const [personalInfoExpanded, setPersonalInfoExpanded] = useState(true);

  return (
    <Section>
      <SectionTitle showEdit={false} bgColor="bg-facebook-blue-medium">Profile</SectionTitle>
      <div className="p-3">
        <div className="grid md:grid-cols-[250px_1fr] gap-6">
          {/* LEFT COLUMN: Large Photo */}
          <div>
            <Image
              src={personalInfo.profilePhoto}
              alt={personalInfo.name}
              width={250}
              height={300}
              className="w-full border border-gray-400"
              priority
            />
          </div>

          {/* RIGHT COLUMN: Info sections */}
          <div className="space-y-3">
            {/* Basic Info - plain text */}
            <div className="space-y-1">
              <h3 className="text-lg font-bold text-facebook-blue">{personalInfo.name}</h3>
              <p className="text-sm text-text-primary">{personalInfo.tagline}</p>
              <p className="text-sm text-text-primary">{personalInfo.location}</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-0.5 text-xs">
              <div className="flex gap-2">
                <span className="text-text-secondary">Email:</span>
                <a href={`mailto:${contactInfo.email}`} className="text-facebook-blue hover:underline">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-text-secondary">LinkedIn:</span>
                <a href={contactInfo.linkedin} target="_blank" rel="noopener noreferrer" className="text-facebook-blue hover:underline">
                  {contactInfo.linkedin.replace('https://linkedin.com/in/', '')}
                </a>
              </div>
              <div className="flex gap-2">
                <span className="text-text-secondary">GitHub:</span>
                <a href={contactInfo.github} target="_blank" rel="noopener noreferrer" className="text-facebook-blue hover:underline">
                  {contactInfo.github.replace('https://github.com/', '')}
                </a>
              </div>
            </div>

            {/* Collapsible Personal Info Section */}
            <div className="border-t border-border-light pt-3">
              <div
                className="flex items-center gap-2 bg-[#D8DFEA] px-2 py-1 cursor-pointer"
                onClick={() => setPersonalInfoExpanded(!personalInfoExpanded)}
              >
                <span className="text-facebook-blue text-xs">{personalInfoExpanded ? '▼' : '►'}</span>
                <h4 className="text-sm font-bold text-facebook-blue">Personal Info</h4>
              </div>

              {personalInfoExpanded && (
                <div className="mt-2 space-y-2 text-xs">
                  <div>
                    <span className="text-text-secondary">About:</span>{' '}
                    <span className="text-text-primary">{personalInfo.bio}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">Interests:</span>{' '}
                    <span className="text-text-primary">{personalInfo.interests}</span>
                  </div>
                  <div>
                    <span className="text-text-secondary">Fun Fact:</span>{' '}
                    <span className="text-text-primary">{personalInfo.funFact}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
