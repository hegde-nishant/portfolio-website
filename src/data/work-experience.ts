import { WorkExperience } from "@/types";

export const workExperience: WorkExperience[] = [
  {
    id: "1",
    company: "EagleHawk One, Inc",
    role: "Data Science Intern",
    startDate: "June 2025",
    endDate: "Present",
    summary:
      "Built production computer vision and NLP systems including a real-time YOLOv8-based streetlight tracking pipeline and a RAG-powered emergency response training assistant. Deployed a hybrid retrieval architecture combining BM25, dense embeddings, and Zerank re-ranking with local Ollama LLM for secure offline querying.",
  },
  {
    id: "2",
    company: "Laboratory for Laser Energetics | University of Rochester",
    role: "Machine Learning Intern",
    startDate: "August 2025",
    endDate: "December 2025",
    summary:
      "Developed novel deep learning architectures (U-Shaped Fourier Neural Operator and Attention Recurrent Residual U-Net) to model laser amplification processes through the OMEGA EP laser system. Optimized HPC training infrastructure across A100/H100 GPU clusters using advanced techniques like model parallelism and mixed-precision training, achieving 40% faster training and 30% reduced VRAM usage.",
  },
  {
    id: "3",
    company: "Software Engineer | Toshiba (KIOXIA America, Inc)",
    role: "Software Engineer",
    startDate: "August 2020",
    endDate: "May 2024",
    summary:
      "Engineered data-driven C++ validation modules for NVMe management interfaces (SMBus/I2C) that reduced SSD operational latency by 31% and improved firmware stability by 15%. Automated CI/CD pipelines with Jenkins and built Python-based debugging tools, reducing manual QA effort by 20% while leading deployment using Agile/Scrum methodologies.",
  },
];
