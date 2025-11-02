export const blockchainContent = {
  title: "Web3 & Blockchain",
  projects: [
    {
      id: 1,
      title: "DeFi Analytics Dashboard",
      icon: "TrendingUp",
      description: "Real-time analytics platform tracking liquidity pools, yield farming opportunities, and protocol metrics across multiple chains.",
      tech: ["The Graph", "Web3.js", "React", "PostgreSQL"],
      chains: ["Ethereum", "Polygon", "Arbitrum"],
      metrics: {
        protocols: "50+",
        tvl: "$2.5B tracked"
      }
    },
    {
      id: 2,
      title: "On-Chain Data Pipelines",
      icon: "Database",
      description: "ETL infrastructure for indexing and analyzing blockchain data. Processing 100K+ transactions daily with sub-minute latency.",
      tech: ["Etherscan API", "Airflow", "BigQuery", "dbt"],
      chains: ["Ethereum", "BSC"],
      metrics: {
        txns: "100K/day",
        latency: "<1min"
      }
    },
    {
      id: 3,
      title: "Smart Contract Monitoring",
      icon: "Shield",
      description: "Automated monitoring system for smart contract events with real-time alerts and anomaly detection.",
      tech: ["Alchemy", "Kafka", "Python", "Redis"],
      chains: ["Ethereum", "Optimism"],
      metrics: {
        contracts: "200+",
        uptime: "99.9%"
      }
    }
  ],
  insights: [
    {
      title: "Cross-Chain Data Integration",
      description: "Unified data models for analyzing multi-chain DeFi protocols"
    },
    {
      title: "Gas Optimization",
      description: "Transaction batching strategies reducing gas costs by 60%"
    },
    {
      title: "MEV Detection",
      description: "Identifying and analyzing MEV opportunities in real-time"
    }
  ]
};
