# Cerebro NeuroTech — Demo Landing Page v0

A standalone front-end prototype for the Cerebro TBI demo entry point. Select a clinical scenario, view mock session details, and reset to baseline.

**Stack:** React · TypeScript · Vite  
**Data:** Local mock only — no backend, no real patient data

---

## Run Locally

**Prerequisites:** [Node.js](https://nodejs.org) (LTS version)
```bash
# 1. Clone the repo
git clone https://github.com/zuyurk/CeroboNeroTechPrototype.git

# 2. Go into it
cd CeroboNeroTechPrototype

# 3. Install dependencies
npm install

# 4. Start the dev server
npm run dev
```

Open **http://localhost:5173** in your browser.

> **No install?** Just open `demo-preview.html` directly in any browser — works with no setup.

---

## Project Structure
```
src/
  components/   Header, ScenarioCard, ScenarioDetail
  data/         scenarios.ts — all mock data lives here
  App.tsx       state machine: landing → detail → reset
  App.css       design system (CSS variables)
```

---

## Scenarios

| Scenario | Type | Priority |
|----------|------|----------|
| Pediatric Athlete | Youth Football, Age 14 | HIGH |
| Adult Concussion Follow-Up | Recreational Soccer, Age 31 | MEDIUM |
| Sideline Evaluation | Professional Football, Age 26 | CRITICAL |

---

> Mock data only. No real patient information. Demo environment.
