export const DOCUMENTATION_CONTENT = {
  activityName: "Cloud City — Build Your Own Cloud",
  objective: "To provide undergraduate and engineering students with an intuitive, hands-on understanding of foundational Cloud Architecture and DevOps essentials without the cognitive overload of CLI syntax or abstract multiple-choice questions.",
  concept: "Real-world cloud computing requires constant trade-offs between Cost, Performance, Reliability, and Scalability. Instead of memorizing definitions, students act as Lead Cloud Architects for QuickCart—a fast-growing e-commerce platform—selecting infrastructure components and witnessing real-time financial and operational consequences under a 50,000-user traffic flash sale.",
  howItWorks: [
    {
      step: "1. Scenario Briefing",
      desc: "The student reviews QuickCart's operational dilemma: scaling from 10,000 baseline users to 50,000 concurrent peak shoppers while balancing an operating budget."
    },
    {
      step: "2. Component Provisioning",
      desc: "The student selects infrastructure across four core layers: Compute (Virtual Servers), Storage (Disks, S3 Buckets, Managed Databases), Networking (Direct IP, Load Balancer, CDN), and Monitoring (Telemetry & Alerting)."
    },
    {
      step: "3. Dynamic Topology Rendering",
      desc: "An interactive, animated SVG/HTML architecture diagram updates instantaneously to reflect network ingress, compute clusters, backend persistence, and health observers."
    },
    {
      step: "4. Flash Sale Stress Testing",
      desc: "A simulated 5x traffic surge is initiated. An animated load testing telemetry monitor evaluates TCP connections, CPU headroom, disk I/O, and uptime."
    },
    {
      step: "5. Feedback & Architectural Profile",
      desc: "If the cloud survives, the student earns an architectural profile (e.g., Balanced Architect, Cost Conscious, High Reliability). If it crashes, detailed diagnostic feedback highlights exact bottlenecks and invites iteration."
    }
  ],
  cloudConcepts: [
    {
      title: "Compute Sizing & Virtualization",
      detail: "Explains vCPU, memory allocations, and vertical vs. horizontal compute constraints under spikes."
    },
    {
      title: "Storage Tiering & Decoupling",
      detail: "Contrasts ephemeral local disks with durable managed relational DBs and globally distributed object storage."
    },
    {
      title: "High Availability & Traffic Routing",
      detail: "Demonstrates how Layer 7 Application Load Balancers eliminate single points of failure (SPOF) and how CDNs offload static origin requests."
    },
    {
      title: "Observability & Proactive SRE",
      detail: "Illustrates the critical necessity of automated alerting to shorten Mean Time to Detection (MTTD) and Mean Time to Resolution (MTTR)."
    }
  ],
  devopsConnection: {
    stages: [
      { name: "DEVELOP", desc: "Engineers write application code and define infrastructure-as-code templates." },
      { name: "BUILD", desc: "Automated CI pipelines bundle container images and run unit & security tests." },
      { name: "DEPLOY", desc: "CD workflows orchestrate blue-green or rolling updates across the compute fleet." },
      { name: "MONITOR", desc: "Continuous metric collection and telemetry watch latency, error rates, and load." },
      { name: "IMPROVE", desc: "Site Reliability Engineers analyze post-spike data to tune autoscaling policies and optimize costs." }
    ],
    summary: "DevOps connects development and operations through automation, continuous delivery, monitoring, and continuous improvement. Cloud infrastructure is the foundational canvas upon which DevOps automation operates."
  },
  technologiesUsed: [
    "React (UI component architecture & state lifecycle)",
    "Vite (Next-generation high-speed frontend bundler)",
    "Tailwind CSS (Utility-first responsive design & glassmorphism styling)",
    "Lucide React (Clean cloud and networking iconography)",
    "Web Browser LocalStorage API (Seamless persistence of student identity and configuration scores)",
    "SVG Dynamic Topologies (Animated real-time cloud data-flow representation)"
  ],
  learningOutcome: "Upon completing the Cloud City simulation, students can clearly explain to faculty and technical recruiters how cloud choices directly govern e-commerce viability, identify Single Points of Failure, balance monthly IT budgets, and articulate where DevOps automation fits into modern cloud operations."
};
