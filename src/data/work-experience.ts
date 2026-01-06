import { WorkExperience } from "@/types";

export const workExperience: WorkExperience[] = [
  {
    id: "1",
    company: "EagleHawk One, Inc",
    role: "Data Science Intern",
    startDate: "June 2025",
    endDate: "Present",
    summary:
      "As a Data Science Intern, I engineered the following 3 AI MVPs across object detection, instance segmentation, and retrieval-augmented generation. A modular computer vision pipeline for detecting streetlights in low-light nighttime drone imagery, a thermal imaging based rooftop leak detection pipeline on aerial FLIR imagery, leveraging AWS ML infrastructure, and an offline RAG system with hybrid retrieval (Docling multimodal parsing, Ollama LLM) for gas facility safety training.",
  },
  {
    id: "2",
    company: "Laboratory for Laser Energetics | University of Rochester",
    role: "Machine Learning Intern",
    startDate: "August 2025",
    endDate: "December 2025",
    summary:
      "As a Machine Learning Intern, I developed neural operator and attention-based spatiotemporal models for high-energy laser physics, achieving ~1% prediction error and 1.57% energy error, while engineering distributed HPC training pipelines that reduced training time by 40% and GPU memory usage by 30% on A100/H100 clusters.",
  },
  {
    id: "3",
    company: "Software Engineer | Toshiba (KIOXIA America, Inc)",
    role: "Software Engineer",
    startDate: "August 2020",
    endDate: "May 2024",
    summary:
      "As a Software Engineer, I designed and validated enterprise NVMe SSD firmware, built automated regression and CI pipelines that improved firmware stability by 15%, reduced manual QA effort by 20%, increased documentation efficiency by 33%, and enhanced long-running test reliability through fault-tolerant debugging and telemetry tools.",
  },
];
