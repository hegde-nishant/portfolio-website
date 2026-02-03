"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const handleClick = () => {
    // Play click sound
    const audio = new Audio("/sounds/click.mp3");
    audio.volume = 0.3;
    audio.play().catch(() => {
      // Silently fail if audio can't play
    });
  };

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block"
      onClick={handleClick}
    >
      <article className="h-full bg-white border border-border-light overflow-hidden shadow-fb-card hover:shadow-fb-header transition-shadow">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 border-b border-border-light">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-3">
          <h3 className="text-sm font-bold text-facebook-blue group-hover:underline">
            {project.title}
          </h3>
        </div>
      </article>
    </Link>
  );
}
