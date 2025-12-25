import { Project } from '@/types';

export const projects: Project[] = [
  {
    slug: "wafer-defect-detection-vit",
    title: "Wafer Defect Detection using Vision Transformers",
    thumbnail: "/projects/wafer-defects/thumbnail.jpg",
    shortDescription: "Vision Transformer-based classification achieving 99.63% accuracy on 9 semiconductor defect patterns using the WM-811K dataset.",
    overview: "Developed a Vision Transformer (ViT-tiny) classification system for detecting and categorizing defect patterns on semiconductor wafers. Using the WM-811K dataset containing over 170,000 labeled wafer maps from real manufacturing processes, the model learns to identify 9 distinct defect patterns including Center, Donut, Edge-Ring, Scratch, and Random defects that occur during semiconductor fabrication.",
    problemStatement: "Semiconductor manufacturers face significant challenges in identifying defect patterns on wafers during fabrication. Manual inspection is slow, error-prone, and cannot handle the scale of modern production. Existing automated systems lack the accuracy needed for production deployment, and the severe class imbalance (85% normal wafers) makes it difficult to detect rare but critical defect patterns.",
    approach: "Implemented a Vision Transformer (ViT-tiny) architecture with pretrained ImageNet weights for transfer learning. Used mixed precision training (FP16) for faster convergence, class-weighted loss functions to handle severe imbalance, and comprehensive data augmentation (rotation, flips, color jitter). The model processes 224x224 wafer maps through 12 transformer layers with multi-head self-attention, enabling it to learn spatial defect patterns. Training utilized AdamW optimizer with cosine annealing and early stopping for optimal convergence.",
    results: "Achieved exceptional performance with 99.63% test accuracy on 118,595 wafer samples, surpassing the target range of 85-95%. The model demonstrated 99%+ weighted F1-score across all 9 defect classes, even on minority classes with limited samples. Converged in just 6 epochs (~3 hours on A100 GPU) with stable training and no overfitting. The lightweight model (21MB, 5.5M parameters) enables fast inference (<10ms per image), making it production-ready for real-time quality control in semiconductor fabs.",
    techStack: ["Python", "PyTorch", "timm", "Vision Transformers", "TensorBoard", "scikit-learn", "NumPy", "Pandas", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/hegde-nishant/wafermap-defects-detection",
    codeSnippets: [
      {
        language: "python",
        code: `class WaferViT(nn.Module):
    """Vision Transformer for wafer defect classification."""

    def __init__(
        self,
        model_name: str = 'vit_tiny_patch16_224',
        num_classes: int = 9,
        pretrained: bool = True,
        dropout: float = 0.1,
        drop_path_rate: float = 0.1
    ):
        super(WaferViT, self).__init__()

        # Create ViT backbone with timm
        self.backbone = timm.create_model(
            model_name,
            pretrained=pretrained,
            num_classes=num_classes,
            drop_rate=dropout,
            drop_path_rate=drop_path_rate
        )

        # Custom classification head
        if hasattr(self.backbone, 'head'):
            in_features = self.backbone.head.in_features
            self.backbone.head = nn.Sequential(
                nn.LayerNorm(in_features),
                nn.Dropout(dropout),
                nn.Linear(in_features, num_classes)
            )`,
        description: "Vision Transformer model architecture for 9-class wafer defect classification"
      }
    ],
    visualizations: ["/projects/wafer-defects/sample_wafer_maps.png", "/projects/wafer-defects/spatial_defect_distribution.png", "/projects/wafer-defects/training_history.png", "/projects/wafer-defects/pca_clustering.png"],
    imageCredit: {
      author: "rbulmahn",
      source: "Flickr",
      sourceUrl: "https://www.flickr.com/photos/rbulmahn/",
      license: "CC BY 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by/2.0/"
    }
  },
  {
    slug: "f1-lap-optimizer-soms",
    title: "F1 Optimal Lap Sequence Identification Using SOMs and Apriori",
    thumbnail: "/projects/f1-lap-optimizer/thumbnail.jpg",
    shortDescription: "ML system identifying optimal F1 lap sequences using Self-Organizing Maps and Apriori algorithm with FastF1 telemetry data.",
    overview: "Built an innovative framework combining Self-Organizing Maps (SOMs) and the Apriori algorithm to identify optimal lap sequences in Formula One racing. Analyzed telemetry data including lap times, tire wear, fuel load, and sector breakdowns from Mercedes, Red Bull, and Ferrari across 2018-2023 seasons using the FastF1 API. The system provides actionable insights into lap pacing, tire management, and pit stop timing strategies.",
    problemStatement: "Formula One teams struggle to identify optimal lap sequences where drivers achieve peak performance under varying race conditions. The complexity of analyzing multiple interacting factors - tire degradation, fuel levels, track conditions, and driver performance - makes it difficult to extract actionable insights for race strategy. Traditional analysis methods fail to uncover hidden patterns in high-dimensional telemetry data.",
    approach: "Leveraged Self-Organizing Maps for unsupervised clustering of high-dimensional telemetry data, reducing complexity while preserving topological relationships. Configured SOM with 400 iterations, learning rate of 0.5, and Gaussian neighborhood function. Applied the Apriori algorithm with 0.2 minimum support threshold to discover association rules within optimal lap clusters. Performed extensive feature engineering including fuel load simulation, average sector times, and tire life tracking. Evaluated clustering quality using Silhouette Score, Calinski-Harabasz Index, and Davies-Bouldin Index.",
    results: "Successfully identified optimal lap clusters with Silhouette Scores ranging from 0.404 to 0.554 across teams and seasons. Discovered key association rules with 100% confidence and 2.0 lift factor, revealing that optimal lap times can be achieved even with high Sector 1 times if Sectors 2 and 3 are fast. Found that soft tires significantly boost Sector 3 performance, and high fuel load negatively impacts Sector 2 times. The analysis showed Sector 3 performance is crucial for overall lap time optimization, providing teams with data-driven insights for tire strategy and fuel management.",
    techStack: ["Python", "MiniSom", "mlxtend", "FastF1 API", "pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn"],
    githubUrl: "https://github.com/hegde-nishant/f1-lap-optimizer",
    codeSnippets: [
      {
        language: "python",
        code: `def evaluate_and_visualize_som_clusters(som, data, features_scaled, team, year):
    """Evaluate SOM clusters and identify optimal laps."""

    # Get Best Matching Units (BMUs) and assign cluster labels
    bmus = np.array([som.winner(x) for x in features_scaled])
    unique_bmus = {bmu: i for i, bmu in enumerate(set(tuple(bmu) for bmu in bmus))}
    cluster_labels = np.array([unique_bmus[tuple(bmu)] for bmu in bmus])

    # Calculate clustering quality metrics
    metrics = {
        'Silhouette Score': silhouette_score(features_scaled, cluster_labels),
        'Calinski-Harabasz Index': calinski_harabasz_score(features_scaled, cluster_labels),
        'Davies-Bouldin Index': davies_bouldin_score(features_scaled, cluster_labels)
    }

    # Identify optimal cluster (lowest average lap time)
    cluster_avg_lap_time = {}
    for cluster in set(cluster_labels):
        avg_lap_time = data[cluster_labels == cluster]['LapTime'].mean()
        cluster_avg_lap_time[cluster] = avg_lap_time

    optimal_cluster = min(cluster_avg_lap_time, key=cluster_avg_lap_time.get)
    winner_laps = data[cluster_labels == optimal_cluster]

    return winner_laps, metrics`,
        description: "SOM clustering and optimal lap identification using telemetry data"
      }
    ],
    visualizations: ["/projects/f1-lap-optimizer/som-heatmap.png", "/projects/f1-lap-optimizer/position-analysis.jpg", "/projects/f1-lap-optimizer/grid-vs-finish.jpg"],
    imageCredit: {
      author: "Lukas Raich",
      source: "Wikimedia Commons",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:FIA_F1_Austria_2018_race_scene_2.jpg",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0"
    }
  },
  {
    slug: "nvme-rag-system",
    title: "NVMe RAG System - Intelligent Document Q&A",
    thumbnail: "/projects/nvme-rag/thumbnail.jpg",
    shortDescription: "Retrieval-Augmented Generation system for NVMe specifications using ChromaDB, Ollama, and advanced query translation.",
    overview: "Developed a professional Retrieval-Augmented Generation (RAG) system specifically designed for the NVMe Base Specification documentation. The system enables intelligent question-answering and context retrieval for technical NVMe specifications, combining vector-based semantic search with large language model generation for accurate, context-aware responses with source citations.",
    problemStatement: "Technical documentation like NVMe specifications is dense, complex, and difficult to navigate. Engineers and developers need quick, accurate answers to specific questions but face challenges in finding relevant information across hundreds of pages. Traditional keyword search fails to understand semantic meaning and context, while reading entire specifications is time-consuming and inefficient.",
    approach: "Implemented a multi-stage RAG pipeline with semantic document chunking for context preservation. Used ChromaDB for vector storage with sentence-transformers (multi-qa-MiniLM-L6) for dense embeddings. Integrated Ollama with Gemma 3 (12B quantized) for local LLM inference. Built sophisticated query translation and analysis to improve retrieval accuracy. Implemented reranking pipeline for context relevance scoring and session management for conversation history. The system supports multiple retrieval strategies (basic, hybrid, reranked) and answer styles (concise, detailed, technical).",
    results: "Successfully processes NVMe specification documents with semantic chunking and generates context-aware answers with source citations. The reranked retrieval strategy achieved improved relevance scores compared to basic similarity search. Query translation enhanced retrieval accuracy for complex technical questions. The system provides follow-up question suggestions and maintains conversation context across sessions. Supports real-time question-answering with sub-second response times for most queries.",
    techStack: ["Python", "ChromaDB", "Ollama", "Sentence Transformers", "PyTorch", "LangChain", "FastAPI", "Gemma 3"],
    githubUrl: "https://github.com/hegde-nishant/nvme-rag",
    codeSnippets: [
      {
        language: "python",
        code: `class NVMeQADemo:
    """Complete NVMe Question-Answering System"""

    def __init__(self):
        # Configure embedding model
        self.embedding_config = EmbeddingConfig(
            model_name="sentence-transformers/multi-qa-MiniLM-L6-cos-v1",
            device="cpu"
        )

        # Configure Ollama LLM
        self.ollama_config = OllamaConfig(
            base_url="http://localhost:11434",
            model="gemma3:12b-it-qat",
            temperature=0.1,
            max_tokens=2048
        )

        # Configure retrieval pipeline
        self.retrieval_config = RetrievalConfig(
            strategy=RetrievalStrategy.RERANKED,
            top_k=5,
            enable_query_enhancement=True,
            enable_context_filtering=True,
            max_context_length=3000
        )

        # Initialize RAG pipeline
        self.rag_pipeline = RAGPipelineIntegration(
            vector_store_path=self.vector_store_path,
            embedding_config=self.embedding_config,
            ollama_config=self.ollama_config,
            retrieval_config=self.retrieval_config,
            answer_config=self.answer_config
        )`,
        description: "RAG pipeline initialization with ChromaDB, Ollama, and advanced retrieval"
      }
    ],
    visualizations: ["/projects/nvme-rag/Q1_P1.png", "/projects/nvme-rag/Q1_P2.png", "/projects/nvme-rag/Q2.png"]
  },
  {
    slug: "tweet-sentiment-streaming",
    title: "Real-Time Tweet Sentiment Analysis Pipeline",
    thumbnail: "/projects/social-media-intelligence/thumbnail.jpg",
    shortDescription: "Scalable Apache Spark streaming pipeline achieving 82% precision in real-time tweet sentiment analysis with Delta Lake and MLflow.",
    overview: "Implemented an end-to-end streaming analytics pipeline for analyzing tweet sentiment in real-time using Apache Spark Structured Streaming and Delta Lake. The system processes Twitter data through a medallion architecture (Bronze→Silver→Gold) and performs sentiment classification using a pre-trained BERT-based transformer model. Designed for large-scale streaming data with fault tolerance, exactly-once processing, and comprehensive real-time monitoring.",
    problemStatement: "Social media platforms generate massive volumes of unstructured text data that require real-time sentiment analysis for brand monitoring, trend detection, and public opinion tracking. Traditional batch processing cannot handle streaming data at scale, and existing solutions lack fault tolerance and exactly-once processing guarantees. Processing 41,000+ tweet files while maintaining data quality and performance presents significant engineering challenges.",
    approach: "Built a multi-layer medallion architecture using Spark Structured Streaming. Bronze layer ingests raw JSON tweets with schema validation, Silver layer extracts mentions and cleans text with timestamp conversion, and Gold layer applies ML inference using a fine-tuned BERT model (finiteautomata/bertweet-base-sentiment-analysis) via MLflow. Implemented Delta Lake for ACID transactions and time-travel capabilities. Configured dynamic partitioning scaled to cluster size, checkpoint-based fault recovery, and stream health monitoring. Optimized performance with memory management and automatic small file compaction.",
    results: "Successfully processed 41,000+ tweet files achieving 82.1% weighted precision, 55.7% recall, and 66.3% F1-score in sentiment classification across positive, negative, and neutral classes. The pipeline maintained stable throughput with real-time metrics tracking for input rate, processing latency, and resource utilization. Demonstrated exactly-once processing guarantees with automatic checkpoint recovery. Complete processing time of ~70 minutes for full dataset with fault-tolerant execution. Generated sentiment distribution analytics and temporal trend analysis for user mentions.",
    techStack: ["Apache Spark", "Delta Lake", "MLflow", "Hugging Face Transformers", "Databricks", "Python", "PySpark", "BERT"],
    githubUrl: "https://github.com/hegde-nishant/social-media-intelligence-engine",
    codeSnippets: [
      {
        language: "python",
        code: `# Bronze Layer: Ingest raw tweets with schema validation
bronze_df = (spark.readStream
    .format("json")
    .schema(tweet_schema)
    .option("maxFilesPerTrigger", 100)
    .load(TWEET_SOURCE_PATH))

# Silver Layer: Extract mentions and clean text
silver_df = (bronze_df
    .withColumn("mentions", extract_mentions(col("text")))
    .withColumn("cleaned_text", clean_text(col("text")))
    .withColumn("timestamp", to_timestamp(col("date"))))

# Gold Layer: ML inference with BERT sentiment model
model = mlflow.pyfunc.load_model(f"models:/{MODEL_NAME}/production")
gold_df = silver_df.withColumn(
    "sentiment_prediction",
    predict_sentiment_udf(col("cleaned_text"))
)

# Write to Delta with checkpoint
(gold_df.writeStream
    .format("delta")
    .option("checkpointLocation", checkpoint_path)
    .trigger(processingTime="10 seconds")
    .start(gold_table_path))`,
        description: "Spark Structured Streaming with Delta Lake medallion architecture and ML inference"
      }
    ],
    visualizations: []
  }
];
