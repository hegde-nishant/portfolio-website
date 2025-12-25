"use client";

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/types";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const handleClick = () => {
    // Play volume mount sound
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
      <article className="h-full bg-platinum-bg-light border-2 border-platinum-border-dark overflow-hidden shadow-macos hover:shadow-macos-lg transition-shadow">
        <div className="relative aspect-[4/3] overflow-hidden bg-platinum-bg-dark border-b-2 border-platinum-border">
          <Image
            src={project.thumbnail}
            alt={project.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="p-5">
          <h3 className="text-base md:text-lg font-display text-platinum-text group-hover:text-blue transition-colors">
            {project.title}
          </h3>
        </div>
      </article>
    </Link>
  );
}
