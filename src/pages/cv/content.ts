export const cvContent = {
  title: "Experience",
  pdfUrl: "",
  experience: [
    {
      id: 1,
      company: "Marktplaats",
      role: "Tech Lead - Data Platform",
      period: "2023 - Present",
      location: "Amsterdam, Netherlands",
      highlights: [
        "Leading data infrastructure transformation for 10M+ monthly active users",
        "Built real-time notification system processing 10M events/hour",
        "Orchestrated Kleinanzeigen rebrand email delivery to 67M users",
        "Reduced infrastructure costs by €2M annually"
      ],
      tech: ["Kafka", "Airflow", "AWS", "Python", "Terraform", "PostgreSQL"]
    },
    {
      id: 2,
      company: "REEF Technology",
      role: "Senior Analytics Engineer",
      period: "2022 - 2023",
      location: "Amsterdam, Netherlands",
      highlights: [
        "Built data warehouse from scratch using dbt and Snowflake",
        "Implemented automated GDPR compliance workflows",
        "Achieved 115% MAU growth through data-driven insights",
        "Mentored junior engineers on best practices"
      ],
      tech: ["dbt", "Snowflake", "Airflow", "Python", "SQL"]
    },
    {
      id: 3,
      company: "ASA Analytics",
      role: "Machine Learning Engineer",
      period: "2021 - 2022",
      location: "Remote",
      highlights: [
        "Developed predictive models for customer churn (92% accuracy)",
        "Built ML feature store with <10ms p99 latency",
        "Automated model training and deployment pipelines",
        "Reduced prediction costs by 40%"
      ],
      tech: ["Python", "TensorFlow", "Scikit-learn", "Redis", "FastAPI"]
    }
  ],
  certifications: [
    {
      name: "AWS Certified Solutions Architect - Professional",
      issuer: "Amazon Web Services",
      year: "2024"
    },
    {
      name: "Google Cloud Professional Data Engineer",
      issuer: "Google Cloud",
      year: "2023"
    },
    {
      name: "dbt Analytics Engineering",
      issuer: "dbt Labs",
      year: "2023"
    },
    {
      name: "Apache Kafka Developer",
      issuer: "Confluent",
      year: "2024"
    }
  ]
};
