// app/api/data/route.ts
import { NextResponse } from "next/server";

// Mock data - in real app, this could come from a JSON file
const data = {
  projectName: "CrossAnalytica",
  projectType: "Data Infrastructure",
  projectVersions: [
    {
      name: "Core Analytics",
      type: "Data Infrastructure",
      focus: "Basic monitoring and analytics",
    },
    {
      name: "DeFi Analytics",
      type: "DeFi Infrastructure",
      focus: "Financial metrics and token flows",
    },
    {
      name: "Security Analytics",
      type: "Security Infrastructure",
      focus: "Network security and threat detection",
    },
  ],
  description: {
    short:
      "Real-time cross-chain analytics platform utilizing native IBC features",
    detailed:
      "CrossAnalytica is a comprehensive analytics platform leveraging IBC's native features to provide real-time insights across all IBC-enabled chains",
    versions: {
      core: "Basic cross-chain analytics and monitoring",
      defi: "Specialized DeFi metrics and token flow analysis",
      security: "Security-focused monitoring and threat detection",
    },
  },
  ibcComponents: {
    connections: [
      {
        type: "analyticsConnection",
        sourceChain: "provider-chain",
        destinationChain: "analytics-hub",
        features: ["metrics", "alerts", "status"],
        configuration: {
          clientType: "tendermint",
          updateInterval: "1m",
          trustingPeriod: "24h",
          maxClockDrift: "10s",
        },
      },
    ],
    channels: [
      {
        id: "analytics-0",
        port: "analytics",
        version: "analytics-1.0",
        ordering: "ordered",
        direction: "bidirectional",
        configuration: {
          bufferSize: "1000",
          maxPacketSize: "65536",
          timeoutHeight: 100,
          timeoutTimestamp: "30s",
        },
      },
    ],
    packets: {
      basic: [
        {
          name: "MetricsPacket",
          fields: [
            {
              name: "chainId",
              type: "string",
              required: true,
            },
            {
              name: "timestamp",
              type: "uint64",
              required: true,
            },
            {
              name: "metrics",
              type: "repeated Metric",
              required: true,
            },
            {
              name: "signature",
              type: "bytes",
              required: true,
            },
          ],
          validation: {
            maxMetrics: 100,
            maxSize: "32kb",
          },
        },
      ],
      defi: [
        {
          name: "DeFiMetricsPacket",
          fields: [
            {
              name: "tokenFlows",
              type: "repeated TokenFlow",
              required: true,
            },
            {
              name: "liquidityMetrics",
              type: "LiquidityData",
              required: true,
            },
          ],
        },
      ],
      security: [
        {
          name: "SecurityMetricsPacket",
          fields: [
            {
              name: "anomalyScores",
              type: "repeated AnomalyScore",
              required: true,
            },
            {
              name: "threatIndicators",
              type: "repeated Indicator",
              required: true,
            },
          ],
        },
      ],
    },
  },
  architecture: {
    components: [
      {
        name: "Data Collection Layer",
        type: "IBC Module",
        function: "Collect metrics from source chains",
        specifications: {
          throughput: "1000 packets/second",
          latency: "<100ms",
          reliability: "99.99%",
        },
      },
      {
        name: "Analytics Processing Chain",
        type: "Core Chain",
        function: "Process and analyze collected data",
        components: [
          {
            name: "StreamProcessor",
            type: "Real-time",
            capacity: "10000 events/second",
          },
          {
            name: "BatchProcessor",
            type: "Historical",
            window: "24h",
          },
        ],
      },
    ],
    storage: {
      type: "Hybrid",
      components: [
        {
          name: "Hot Storage",
          technology: "TimescaleDB",
          retention: "7d",
        },
        {
          name: "Cold Storage",
          technology: "ParquetFiles",
          retention: "365d",
        },
      ],
    },
  },
  features: {
    core: [
      {
        name: "Real-time Monitoring",
        metrics: [
          "transaction_count",
          "block_time",
          "gas_usage",
          "success_rate",
        ],
      },
    ],
    defi: [
      {
        name: "Token Flow Analysis",
        metrics: ["volume", "liquidity", "token_velocity", "swap_rates"],
      },
    ],
    security: [
      {
        name: "Threat Detection",
        metrics: ["unusual_patterns", "attack_vectors", "vulnerability_scores"],
      },
    ],
  },
  implementation: {
    phases: [
      {
        name: "Foundation",
        duration: "2 months",
        tasks: [
          {
            name: "IBC Module Setup",
            subtasks: [
              "Implement packet definitions",
              "Set up channel handlers",
              "Configure connection management",
              "Implement acknowledgment handling",
            ],
            dependencies: [],
            estimatedEffort: "3 weeks",
            deliverables: [
              "IBC module codebase",
              "Integration tests",
              "Documentation",
            ],
          },
          {
            name: "Metrics Collection",
            subtasks: [
              "Implement collectors",
              "Set up data validation",
              "Configure storage layer",
              "Build aggregation pipeline",
            ],
            dependencies: ["IBC Module Setup"],
            estimatedEffort: "4 weeks",
          },
        ],
      },
      {
        name: "Analytics Engine",
        duration: "2 months",
        tasks: [
          {
            name: "Real-time Processing",
            subtasks: [
              "Stream processing setup",
              "Alert system implementation",
              "Real-time aggregations",
            ],
            dependencies: ["Metrics Collection"],
          },
          {
            name: "Historical Analysis",
            subtasks: [
              "Batch processing pipeline",
              "Data warehousing setup",
              "Analytics computation",
            ],
          },
        ],
      },
      {
        name: "Interface Development",
        duration: "2 months",
        tasks: [
          {
            name: "API Layer",
            subtasks: [
              "GraphQL implementation",
              "REST endpoints",
              "WebSocket support",
            ],
          },
          {
            name: "Dashboard",
            subtasks: [
              "UI components",
              "Visualization library",
              "Interactive features",
            ],
          },
        ],
      },
    ],
  },
  useCases: {
    core: {
      networkMonitoring: {
        description: "Real-time monitoring of IBC network health",
        features: [
          "Transaction volume tracking",
          "Success rate monitoring",
          "Latency analysis",
          "Channel status tracking",
        ],
        metrics: [
          {
            name: "transaction_count",
            type: "counter",
            interval: "1m",
          },
          {
            name: "success_rate",
            type: "gauge",
            interval: "1m",
          },
        ],
      },
    },
    defi: {
      tokenFlowAnalysis: {
        description: "Analysis of token movements across chains",
        features: ["Volume tracking", "Flow visualization", "Token metrics"],
        metrics: [
          {
            name: "token_volume",
            aggregations: ["sum", "average"],
            dimensions: ["token", "chain", "direction"],
          },
        ],
      },
    },
    security: {
      anomalyDetection: {
        description: "Detection of unusual patterns in IBC traffic",
        features: [
          "Pattern recognition",
          "Threat detection",
          "Alert generation",
        ],
        algorithms: [
          {
            name: "IsolationForest",
            parameters: {
              contamination: 0.1,
              maxSamples: 1000,
            },
          },
        ],
      },
    },
  },
  impact: {
    stakeholders: [
      {
        type: "Network Operators",
        benefits: [
          "Improved monitoring",
          "Better resource allocation",
          "Issue prevention",
        ],
        metrics: [
          "Mean time to detection",
          "Resolution time",
          "Uptime improvement",
        ],
      },
      {
        type: "Developers",
        benefits: [
          "Enhanced debugging",
          "Performance optimization",
          "Usage analytics",
        ],
      },
      {
        type: "Validators",
        benefits: [
          "Performance tracking",
          "Competitive analysis",
          "Optimization insights",
        ],
      },
    ],
    ecosystem: {
      immediate: [
        "Enhanced network reliability",
        "Improved developer experience",
      ],
      longTerm: ["Ecosystem growth", "Increased adoption"],
    },
  },
  uniqueValue: {
    technical: [
      "Native IBC integration",
      "Real-time cross-chain analytics",
      "Distributed processing architecture",
    ],
    market: [
      "First comprehensive IBC analytics platform",
      "Multi-stakeholder value proposition",
      "Ecosystem growth enabler",
    ],
  },
};

// GET handler
export async function GET() {
  try {
    // If you want to read from a JSON file instead of mock data:
    // import { promises as fs } from 'fs'
    // import path from 'path'
    // const jsonDirectory = path.join(process.cwd(), 'json')
    // const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8')
    // const data = JSON.parse(fileContents)

    return NextResponse.json(
      { data },
      {
        status: 200,
        headers: {
          "Cache-Control": "public, s-maxage=10, stale-while-revalidate=59",
        },
      }
    );
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
