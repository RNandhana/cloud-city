# Cloud City — Build Your Own Cloud
### Cloud & DevOps Essentials Project

**Developed by:**
- R Nandhana (689)
- Avinash J (695)

---

## Project Overview

Cloud City is an interactive cloud architecture simulator designed for our Cloud & DevOps Essentials coursework. 

Instead of traditional multiple-choice questions or quizzes, this project lets students learn cloud concepts through hands-on decision making. The student acts as a cloud engineer tasked with designing the infrastructure for **QuickCart**, a growing shopping app preparing for a 50,000-user flash sale.

Every choice directly affects three core metrics:
- **Cost (₹/month)**
- **Performance (%)**
- **Reliability (%)**

---

## The Scenario: QuickCart Flash Sale

- **Current Load:** 10,000 active shoppers
- **Peak Load:** 50,000 shoppers (5x sudden traffic surge)
- **Objective:** Select the right combination of compute, storage, networking, and monitoring to survive the surge without crashing or exceeding budget.

---

## Simulation Workflow

1. **Enter Student Name** — Stored locally in the browser to personalize scores and final reports.
2. **Compute Selection** — Choose between Small (1 vCPU), Medium (2 vCPU), or Large (4 vCPU) instances based on traffic capacity.
3. **Storage Tiering** — Select storage options: Local Disk (low cost, single point of failure), Object Storage (scalable image/file storage), or Managed Database (ACID compliance & backups).
4. **Networking** — Choose Direct Server Access, Application Load Balancer, or add a Content Delivery Network (CDN) for caching.
5. **Monitoring & Observability** — Configure No Monitoring, Basic Vitals, or Real-time Telemetry with automated alerts.
6. **Dynamic Architecture Diagram** — An interactive SVG/HTML diagram updates in real-time to visualize the selected topology.
7. **Traffic Spike Test** — A stress test simulates the 50,000-user flash sale with live progress checks.
8. **Results & Feedback** — 
   - If the architecture passes: Displays the final performance rating and architectural profile (e.g. Balanced Architect, Cost Conscious, High Reliability).
   - If the architecture fails: Clearly explains the root cause (e.g., lack of a load balancer, undersized CPU, or disk bottleneck) so the student can redesign and try again.

---

## DevOps Pipeline Connection

The project demonstrates where cloud infrastructure connects with the DevOps lifecycle:

```
DEVELOP ──> BUILD ──> DEPLOY ──> MONITOR ──> IMPROVE
```

- **Develop & Build:** Creating app logic and container packages.
- **Deploy:** Provisioning cloud compute and storage resources.
- **Monitor:** Catching latency spikes and system errors using monitoring tools.
- **Improve:** Analyzing traffic data to optimize performance and monthly spending.

---

## Technologies Used

- **Frontend:** React, JavaScript, HTML5, CSS3
- **Build Tool:** Vite
- **Styling:** Tailwind CSS (custom dark navy theme)
- **Icons:** Lucide React
- **State Management:** React Hooks (`useState`, `useEffect`) and browser `localStorage`
- **Hosting:** Vercel

---

## Running Locally

To run this project on your machine:

1. Clone the repository:
   ```bash
   git clone https://github.com/RNandhana/cloud-city.git
   cd cloud-city
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`

To create a production build:
```bash
npm run build
```

---

## Team

- **R Nandhana** (689)
- **Avinash J** (695)
