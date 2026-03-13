// src/data/scenarios.ts
// Synthetic mock data only — no real patient data

export interface Scenario {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  tag: string;
  tagColor: 'primary' | 'warning' | 'danger';
  detail: {
    sessionType: string;
    patientProfile: string;
    status: string;
    nextStep: string;
    protocol: string;
    estimatedDuration: string;
    priority: string;
    metadata: Record<string, string>;
  };
}

export const SCENARIOS: Scenario[] = [
  {
    id: 'pediatric-athlete',
    title: 'Pediatric Athlete',
    subtitle: 'Youth Football — Age 14',
    summary:
      'Sideline evaluation following a helmet-to-helmet collision during a Friday night game. Player reported momentary disorientation and was removed by the coach.',
    tag: 'YOUTH SPORT',
    tagColor: 'primary',
    detail: {
      sessionType: 'Sideline — Acute Evaluation',
      patientProfile: 'Male, Age 14 — Youth League (Mock)',
      status: 'Evaluation In Progress',
      nextStep: 'Initiate TriScan™ Protocol — Helmet Scan → Cognitive Test → Blood Panel',
      protocol: 'TriScan™ v2.1 — Pediatric',
      estimatedDuration: '3–4 minutes',
      priority: 'HIGH',
      metadata: {
        'Session ID': 'DEMO-PA-001',
        'Sport': 'Football',
        'Impact Type': 'Helmet-to-Helmet',
        'Reported Symptoms': 'Disorientation, Dizziness',
        'Prior Concussions (Mock)': '0',
        'Baseline On File': 'Yes',
      },
    },
  },
  {
    id: 'adult-followup',
    title: 'Adult Concussion Follow-Up',
    subtitle: 'Post-Event Monitoring — Day 5',
    summary:
      'Return-to-play assessment for an adult recreational athlete five days after a diagnosed Grade I concussion. Monitoring symptom resolution and cognitive baseline recovery.',
    tag: 'FOLLOW-UP',
    tagColor: 'warning',
    detail: {
      sessionType: 'Clinical — Return-to-Play',
      patientProfile: 'Female, Age 31 — Recreational Soccer (Mock)',
      status: 'Monitoring — Day 5 of 7',
      nextStep: 'Comparative Cognitive Retest — Compare Against Day 1 Baseline',
      protocol: 'TriScan™ v2.1 — Adult Follow-Up',
      estimatedDuration: '4–5 minutes',
      priority: 'MEDIUM',
      metadata: {
        'Session ID': 'DEMO-AF-002',
        'Sport': 'Soccer',
        'Initial Diagnosis': 'Grade I Concussion',
        'Days Post-Injury': '5',
        'Current Symptoms': 'Mild Headache (Reported)',
        'Clearance Status': 'Pending',
      },
    },
  },
  {
    id: 'sideline-evaluation',
    title: 'Sideline Evaluation',
    subtitle: 'Professional — In-Game Protocol',
    summary:
      'Real-time sideline TBI screening for a professional athlete following a high-impact tackle. Full TriScan™ protocol initiated by medical staff within 60 seconds of the event.',
    tag: 'PRO LEAGUE',
    tagColor: 'danger',
    detail: {
      sessionType: 'Sideline — Professional Protocol',
      patientProfile: 'Male, Age 26 — Professional Football (Mock)',
      status: 'Protocol Active — Awaiting Results',
      nextStep: 'Blood Biomarker Panel — Final Layer Before AI Synthesis',
      protocol: 'TriScan™ v2.1 — Pro Sideline',
      estimatedDuration: '< 4 minutes',
      priority: 'CRITICAL',
      metadata: {
        'Session ID': 'DEMO-SE-003',
        'Sport': 'Professional Football',
        'Impact G-Force (Mock)': '72g',
        'Helmet Scan': '✓ Complete — Anomaly Detected',
        'Cognitive Test': '✓ Complete — Deficit Flagged',
        'Blood Panel': '⏳ In Progress',
      },
    },
  },
];
