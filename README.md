# ☁️ CLOUD CITY — Build Your Own Cloud
### Interactive Cloud & DevOps Essentials Classroom Simulation

> An engaging, visual, and practical cloud-building simulation designed for classroom activities, faculty demonstrations, and lab assessments.

---

## 👥 Developed By
- **R NANDHANA (689)**
- **AVINASH J (695)**

*Designed for Cloud & DevOps Essentials Coursework.*

---

## 🎯 About Cloud City

Unlike traditional multiple-choice quizzes, flashcard tools (Kahoot/Quizizz), or complex coding simulators, **Cloud City** is an authentic architectural simulation:

> **"The student is given a fictional company (QuickCart) and must build its cloud infrastructure by choosing appropriate cloud components. Their choices affect COST, PERFORMANCE and RELIABILITY."**

The simulation can be understood within 30 seconds and easily presented to faculty, recruiters, or peers.

---

## 🛒 The Scenario: QuickCart
- **Company**: QuickCart (Fast-growing e-commerce retail platform)
- **Baseline Load**: 10,000 normal shoppers
- **Expected Growth / Flash Sale**: 50,000 concurrent shoppers (5× spike)
- **Architectural Challenge**: Design a resilient infrastructure that sustains the flash sale without budget overrun or downtime!

---

## 🏗️ 4-Stage Architectural Decision Matrix

1. **💻 Step 1: Compute**
   - **Small Server**: ₹1,500/mo (1 vCPU, 2GB RAM) • Low Perf, Low Reliability
   - **Medium Server**: ₹3,000/mo (2 vCPU, 8GB RAM) • Medium Perf, Medium Reliability
   - **Large Server**: ₹6,000/mo (4 vCPU, 16GB RAM) • High Perf, Medium Reliability

2. **💾 Step 2: Storage**
   - **Local Disk**: ₹500/mo • NVMe instance storage, low cost, low scalability
   - **Object Storage**: ₹1,200/mo • S3-compatible bucket, high scalability
   - **Managed Database**: ₹2,500/mo • ACID transactions, multi-AZ high reliability

3. **🌐 Step 3: Networking**
   - **Direct Server Access**: ₹0/mo • Public IP direct to VM, single point of failure
   - **Load Balancer**: ₹1,500/mo • Layer 7 traffic distributor, high availability
   - **CDN**: ₹1,000/mo • Global edge caching, low-latency static asset delivery

4. **📊 Step 4: Observability & Monitoring**
   - **No Monitoring**: ₹0/mo • Zero incident awareness
   - **Basic Monitoring**: ₹500/mo • Periodic CPU/RAM vitals
   - **Monitoring + Alerts**: ₹1,000/mo • Real-time telemetry & proactive on-call alerts

---

## 🚨 Flash Sale Traffic Spike & Evaluation

When the student completes the architecture, a **Traffic Surge (10k → 50k users)** triggers:
- **Animated Stress Test**:
  1. *Receiving traffic...*
  2. *Scaling resources...*
  3. *Checking response time...*
- **Success Criteria**: Sustained without single points of failure (requires sufficient compute, load balancing, and reliable data storage).
- **Failure Analysis**: Pinpoints exact root-cause bottlenecks (e.g. lack of load balancing or undersized server).
- **Architect Profile Badge**:
  - `💰 COST CONSCIOUS`
  - `⚡ PERFORMANCE FOCUSED`
  - `🛡️ RELIABILITY FOCUSED`
  - `☁️ BALANCED CLOUD ARCHITECT`

---

## 📂 Project Structure

```text
cloud-city/
├── index.html                   # HTML entry point with fonts & metadata
├── package.json                 # Project dependencies & npm scripts
├── postcss.config.js            # PostCSS configuration for Tailwind
├── tailwind.config.js           # Tailwind CSS color palettes & animations
├── vite.config.js               # Vite bundler configuration
├── README.md                    # Project documentation & run guide
└── src/
    ├── main.jsx                 # React root DOM mount
    ├── App.jsx                  # Main application state & view controller
    ├── index.css                # Global Tailwind directives & glassmorphism
    ├── data/
    │   ├── componentsData.js    # Specs, costs, scoring formula, spike tests
    │   └── docData.js           # Comprehensive academic lab documentation
    └── components/
        ├── Navbar.jsx           # Top header navigation & student identity
        ├── LandingPage.jsx      # Hero banner, 4 pillars, how it works
        ├── ScenarioCard.jsx     # QuickCart problem statement briefing
        ├── BuilderWizard.jsx    # 4-step interactive selection flow
        ├── OptionCard.jsx       # Individual hardware & tier selector
        ├── ArchitectureView.jsx # Dynamic animated SVG/HTML topology
        ├── LiveMetricsBar.jsx   # Real-time Cost, Perf, Rel score gauges
        ├── TrafficSimulationModal.jsx # 3-stage traffic spike stress simulation
        ├── ResultsView.jsx      # Success/Failure dashboard & DevOps lifecycle
        ├── DocumentationModal.jsx # Full 8-point academic documentation
        ├── NameModal.jsx        # Student name modal (localStorage backed)
        └── Footer.jsx           # Developed by credits & legal statement
```

---

## 🚀 How to Run Locally

### 1. Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### 2. Installation
Open your terminal in the `cloud-city` folder:
```bash
npm install
```

### 3. Launch Development Server
```bash
npm run dev
```
Open your browser and navigate to:
`http://localhost:5173`

### 4. Build for Production
```bash
npm run build
```
This generates the optimized production bundle in the `dist/` directory.

---

## 🌐 Deploy to GitHub & Vercel

### Step A: Push to GitHub
1. Initialize git and commit:
```bash
git init
git add .
git commit -m "feat: complete Cloud City simulation by R NANDHANA & AVINASH J"
```
2. Create a new repository on [GitHub](https://github.com/new).
3. Link and push:
```bash
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/cloud-city.git
git push -u origin main
```

### Step B: Deploy to Vercel (Zero Configuration)
1. Go to [Vercel Dashboard](https://vercel.com/new).
2. Click **"Import Project"** and select your GitHub repository `cloud-city`.
3. Vercel automatically detects **Vite**:
   - **Framework Preset**: Vite
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.
5. Your live URL will be ready in under 60 seconds (e.g. `https://cloud-city.vercel.app`).

---

## 🔄 Where Does DevOps Fit?
```text
DEVELOP ──▶ BUILD ──▶ DEPLOY ──▶ MONITOR ──▶ IMPROVE
```
DevOps connects development and operations through automation, continuous delivery, monitoring, and continuous improvement. Cloud infrastructure provides the programmable foundation for this lifecycle.

---

## 📜 License & Classroom Attribution
Created for educational demonstration and lab presentation in **Cloud & DevOps Essentials**.
- **Developers**: R NANDHANA (689), AVINASH J (695)
