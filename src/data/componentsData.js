export const COMPUTE_OPTIONS = [
  {
    id: 'small',
    name: 'Small Server',
    badge: 'Entry Level',
    icon: 'Server',
    cost: 1500,
    performance: 'Low',
    performanceScore: 35,
    reliability: 'Low',
    reliabilityScore: 40,
    specs: '1 vCPU • 2 GB RAM • Shared Host',
    description: 'Affordable virtual machine suited for basic testing or personal blogs.',
    trafficCapacity: 12000,
    pros: 'Lowest initial cost',
    cons: 'Overwhelmed easily under flash sales',
  },
  {
    id: 'medium',
    name: 'Medium Server',
    badge: 'Popular Choice',
    icon: 'Server',
    cost: 3000,
    performance: 'Medium',
    performanceScore: 70,
    reliability: 'Medium',
    reliabilityScore: 68,
    specs: '2 vCPU • 8 GB RAM • Dedicated Host Slice',
    description: 'Balanced compute capacity designed for steady web traffic and mid-tier workloads.',
    trafficCapacity: 35000,
    pros: 'Solid balance of price and throughput',
    cons: 'Requires load balancing for traffic surges',
  },
  {
    id: 'large',
    name: 'Large Server',
    badge: 'High Throughput',
    icon: 'Cpu',
    cost: 6000,
    performance: 'High',
    performanceScore: 92,
    reliability: 'Medium',
    reliabilityScore: 82,
    specs: '4 vCPU • 16 GB RAM • High I/O Compute',
    description: 'Heavyweight computing instance capable of parallel processing and high concurrency.',
    trafficCapacity: 65000,
    pros: 'Handles high concurrency without throttling',
    cons: 'Higher monthly operational expense',
  },
];

export const STORAGE_OPTIONS = [
  {
    id: 'local_disk',
    name: 'Local Disk',
    badge: 'Direct Attached',
    icon: 'HardDrive',
    cost: 500,
    performance: 'Medium',
    performanceScore: 50,
    reliability: 'Low',
    reliabilityScore: 45,
    specs: 'Direct NVMe SSD storage tied to instance',
    description: 'Fast local storage, but if the server crashes or terminates, data cannot be easily recovered.',
    scalability: 'Low scalability',
    pros: 'Low cost, minimal latency for scratch files',
    cons: 'Single point of failure; data loss risk',
  },
  {
    id: 'object_storage',
    name: 'Object Storage',
    badge: 'Unlimited Scale',
    icon: 'Layers',
    cost: 1200,
    performance: 'High',
    performanceScore: 85,
    reliability: 'High',
    reliabilityScore: 90,
    specs: 'Distributed bucket storage (S3 / Blob format)',
    description: 'Scales infinitely for user uploads, product catalog images, media assets, and backups.',
    scalability: 'High scalability',
    pros: '11 9s durability, global access via URL',
    cons: 'Not optimized for relational SQL transactions',
  },
  {
    id: 'managed_db',
    name: 'Managed Database',
    badge: 'Production Grade',
    icon: 'Database',
    cost: 2500,
    performance: 'High',
    performanceScore: 88,
    reliability: 'High',
    reliabilityScore: 95,
    specs: 'Multi-AZ PostgreSQL/MySQL with automated backups',
    description: 'ACID-compliant relational database engineered for customer carts, orders, and payment records.',
    scalability: 'High reliability & scalability',
    pros: 'Automated backups, replication, high uptime',
    cons: 'Higher cost investment',
  },
];

export const NETWORKING_OPTIONS = [
  {
    id: 'direct',
    name: 'Direct Server Access',
    badge: 'Basic Setup',
    icon: 'Radio',
    cost: 0,
    performance: 'Low',
    performanceScore: 40,
    reliability: 'Low',
    reliabilityScore: 35,
    specs: 'Public Elastic IP direct to compute node',
    description: 'Users directly contact the server IP. Inexpensive, but leaves the single server exposed and vulnerable.',
    pros: 'Zero additional networking charges',
    cons: 'Single point of failure; no traffic distribution',
  },
  {
    id: 'load_balancer',
    name: 'Load Balancer',
    badge: 'Essential HA',
    icon: 'Split',
    cost: 1500,
    performance: 'High',
    performanceScore: 85,
    reliability: 'High',
    reliabilityScore: 92,
    specs: 'Layer 7 Application Load Balancer with health checks',
    description: 'Distributes incoming traffic evenly across healthy compute instances to prevent individual server crashes.',
    pros: 'Prevents server overload; seamless redundancy',
    cons: 'Requires minor DNS routing configuration',
  },
  {
    id: 'cdn',
    name: 'CDN (Content Delivery Network)',
    badge: 'Global Edge',
    icon: 'Globe',
    cost: 1000,
    performance: 'High',
    performanceScore: 90,
    reliability: 'High',
    reliabilityScore: 85,
    specs: '300+ Edge points of presence worldwide',
    description: 'Caches static product photos and web assets close to users, cutting load times by up to 70%.',
    pros: 'Blazing fast load times; shields backend servers',
    cons: 'Additional monthly bandwidth cost',
  },
];

export const MONITORING_OPTIONS = [
  {
    id: 'none',
    name: 'No Monitoring',
    badge: 'Unmonitored',
    icon: 'EyeOff',
    cost: 0,
    performance: 'None',
    performanceScore: 30,
    reliability: 'Low',
    reliabilityScore: 30,
    specs: 'No logs, metrics, or health telemetry',
    description: 'You only discover outages when angry customers tweet about your broken shopping cart.',
    pros: '₹0 cost',
    cons: 'Flying blind during production outages',
  },
  {
    id: 'basic',
    name: 'Basic Monitoring',
    badge: 'Standard',
    icon: 'Activity',
    cost: 500,
    performance: 'Medium',
    performanceScore: 70,
    reliability: 'Medium',
    reliabilityScore: 72,
    specs: '5-minute interval metrics: CPU, RAM, Disk',
    description: 'Periodic dashboards track basic server vitals so you can check system health manually.',
    pros: 'Inexpensive basic visibility',
    cons: 'No automated SMS or pager alert escalation',
  },
  {
    id: 'alerts',
    name: 'Monitoring + Alerts',
    badge: 'Proactive Ops',
    icon: 'BellRing',
    cost: 1000,
    performance: 'High',
    performanceScore: 92,
    reliability: 'High',
    reliabilityScore: 96,
    specs: '1-second telemetry, APM traces, automated SMS/Slack alerts',
    description: 'Proactively alerts on-call DevOps engineers before CPU spikes cascade into full customer downtime.',
    pros: 'Detects and resolves anomalies before outages occur',
    cons: 'Slightly higher monthly monitoring fee',
  },
];

/**
 * Calculates score metrics based on user selections
 */
export function calculateCloudScore(computeId, storageIds, networkingIds, monitoringId) {
  const compute = COMPUTE_OPTIONS.find(c => c.id === computeId) || COMPUTE_OPTIONS[0];
  const selectedStorage = STORAGE_OPTIONS.filter(s => storageIds.includes(s.id));
  const selectedNet = NETWORKING_OPTIONS.filter(n => networkingIds.includes(n.id));
  const monitoring = MONITORING_OPTIONS.find(m => m.id === monitoringId) || MONITORING_OPTIONS[0];

  // Calculate Total Cost
  const computeCost = compute.cost;
  const storageCost = selectedStorage.reduce((acc, s) => acc + s.cost, 0);
  const netCost = selectedNet.reduce((acc, n) => acc + n.cost, 0);
  const monCost = monitoring.cost;
  const totalCost = computeCost + storageCost + netCost + monCost;

  // Calculate Performance Score (weighted average)
  let perfRaw = compute.performanceScore * 0.45;
  const storagePerfAvg = selectedStorage.length > 0 
    ? selectedStorage.reduce((acc, s) => acc + s.performanceScore, 0) / selectedStorage.length 
    : 40;
  perfRaw += storagePerfAvg * 0.25;

  const hasCDN = networkingIds.includes('cdn');
  const hasLB = networkingIds.includes('load_balancer');
  let netPerf = 40;
  if (hasLB && hasCDN) netPerf = 95;
  else if (hasLB) netPerf = 85;
  else if (hasCDN) netPerf = 80;
  perfRaw += netPerf * 0.20;

  perfRaw += (monitoring.performanceScore) * 0.10;
  const performance = Math.min(99, Math.max(30, Math.round(perfRaw)));

  // Calculate Reliability Score
  let relRaw = compute.reliabilityScore * 0.35;
  const hasManagedDb = storageIds.includes('managed_db');
  const hasObjectStorage = storageIds.includes('object_storage');
  const onlyLocalDisk = storageIds.length === 1 && storageIds[0] === 'local_disk';

  let storageRel = 45;
  if (hasManagedDb && hasObjectStorage) storageRel = 96;
  else if (hasManagedDb) storageRel = 90;
  else if (hasObjectStorage) storageRel = 80;
  else if (onlyLocalDisk) storageRel = 40;
  relRaw += storageRel * 0.30;

  let netRel = 35;
  if (hasLB) netRel = 92;
  else netRel = 35;
  relRaw += netRel * 0.20;

  relRaw += (monitoring.reliabilityScore) * 0.15;
  const reliability = Math.min(99, Math.max(25, Math.round(relRaw)));

  // Calculate Scalability Score
  let scalability = 40;
  if (computeId === 'large') scalability += 25;
  else if (computeId === 'medium') scalability += 15;

  if (hasLB) scalability += 20;
  if (hasCDN) scalability += 10;
  if (hasObjectStorage) scalability += 10;
  if (onlyLocalDisk) scalability -= 15;
  scalability = Math.min(100, Math.max(20, scalability));

  // Determine Cloud Profile
  let profile = {
    title: '☁️ BALANCED CLOUD ARCHITECT',
    desc: 'You constructed a well-rounded cloud platform that balances cost control with enterprise resilience and snappy user performance.',
    color: 'sky'
  };

  if (totalCost <= 4000) {
    profile = {
      title: '💰 COST CONSCIOUS',
      desc: 'You prioritized budget efficiency and lean resource utilization, maximizing value per rupee spent.',
      color: 'amber'
    };
  } else if (performance >= 88 && totalCost > 6500) {
    profile = {
      title: '⚡ PERFORMANCE FOCUSED',
      desc: 'You prioritized raw compute power and lightning-fast asset distribution to deliver ultra-low latency.',
      color: 'blue'
    };
  } else if (reliability >= 88 && (hasLB && hasManagedDb)) {
    profile = {
      title: '🛡️ RELIABILITY FOCUSED',
      desc: 'You prioritized high availability, multi-tier redundancy, and proactive monitoring to ensure zero downtime.',
      color: 'emerald'
    };
  }

  // Traffic Spike Evaluation (QuickCart: 10,000 -> 50,000 users)
  // Requirements to pass 50,000 users:
  // Must NOT be small server without load balancer
  // Must NOT rely strictly on local disk for full enterprise load
  // If Medium Server: needs Load Balancer or CDN to survive 50k
  // If Large Server: needs at least Load Balancer or Managed DB
  let passed = true;
  const failureReasons = [];

  const hasLoadBalancer = networkingIds.includes('load_balancer');

  if (computeId === 'small') {
    passed = false;
    failureReasons.push('Compute bottleneck: A Small Server (1 vCPU, 2GB RAM) hit 100% CPU utilization and ran out of memory when 50,000 users arrived simultaneously.');
  }

  if (!hasLoadBalancer) {
    passed = false;
    failureReasons.push('Networking bottleneck: Without a Load Balancer, all 50,000 requests converged on a single IP address, causing TCP connection drops and gateway timeout (HTTP 504) errors.');
  }

  if (onlyLocalDisk) {
    passed = false;
    failureReasons.push('Storage bottleneck: A solitary Local Disk could not handle the concurrent database write locks and concurrent shopping cart sessions, resulting in I/O queue stalls.');
  }

  if (monitoringId === 'none' && !passed) {
    failureReasons.push('Visibility blind spot: With No Monitoring configured, the operations team was unaware of the service degradation until customers flooded social media with complaints.');
  }

  return {
    totalCost,
    performance,
    reliability,
    scalability,
    profile,
    passed,
    failureReasons,
  };
}
