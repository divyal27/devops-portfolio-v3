"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface PipelineStage {
  id: string;
  label: string;
  icon: string;
  tools: string[];
  description: string;
}

interface Project {
  id: string;
  title: string;
  tagline: string;
  repo: string;
  tags: string[];
  pipeline: PipelineStage[];
  highlight: string;
}

interface Category {
  id: string;
  label: string;
  accent: string;
  border: string;
  glow: string;
  badge: string;
  projects: Project[];
}

const CATEGORIES: Category[] = [
  {
    id: "devops",
    label: "DevOps",
    accent: "text-cyan-400",
    border: "border-cyan-500/40",
    glow: "#22d3ee",
    badge: "bg-cyan-500/10 text-cyan-300 border border-cyan-500/30",
    projects: [
      {
        id: "gitops-eks",
        title: "GitOps-Driven Kubernetes Platform",
        tagline: "Production-grade AWS EKS platform with full GitOps automation via ArgoCD",
        repo: "https://github.com/divyal27/GitOps-driven-Kubernetes-Platform-on-AWS-EKS",
        tags: ["AWS EKS", "ArgoCD", "Terraform", "GitOps", "Kubernetes"],
        highlight: "#22d3ee",
        pipeline: [
          { id: "s1", label: "Code Commit", icon: "⌨️", tools: ["Git", "GitHub"], description: "Developer pushes to feature branch; PR triggers review gates" },
          { id: "s2", label: "CI Build", icon: "🔨", tools: ["GitHub Actions", "Docker"], description: "Builds & tags Docker image, runs unit tests and linting" },
          { id: "s3", label: "Registry Push", icon: "📦", tools: ["ECR", "Trivy"], description: "Image pushed to AWS ECR after Trivy vulnerability scan passes" },
          { id: "s4", label: "GitOps Sync", icon: "🔄", tools: ["ArgoCD", "Helm"], description: "ArgoCD detects manifest change in git and syncs to cluster" },
          { id: "s5", label: "EKS Deploy", icon: "☸️", tools: ["AWS EKS", "HPA"], description: "Rolling deploy to EKS with auto-scaling and health checks" },
          { id: "s6", label: "Observe", icon: "📊", tools: ["Prometheus", "Grafana"], description: "Metrics scraped; Grafana dashboards show cluster health in real-time" },
        ],
      },
      {
        id: "multi-env-cicd",
        title: "Multi-Environment CI/CD Pipeline",
        tagline: "Feature environments spun up per PR with full teardown on merge",
        repo: "https://github.com/divyal27/Multi-environment-ci-cd-Pipeline-with-Feature-Environments",
        tags: ["Jenkins", "Docker Compose", "Nginx", "Feature Flags"],
        highlight: "#22d3ee",
        pipeline: [
          { id: "s1", label: "PR Opened", icon: "🔀", tools: ["GitHub", "Webhooks"], description: "PR webhook fires pipeline; environment name derived from branch" },
          { id: "s2", label: "Build & Test", icon: "🧪", tools: ["Jenkins", "Jest"], description: "Parallel stages: unit tests, lint, build artifact" },
          { id: "s3", label: "Env Provision", icon: "🏗️", tools: ["Docker Compose", "Traefik"], description: "Ephemeral environment spun up with unique subdomain routing" },
          { id: "s4", label: "Integration Test", icon: "🔗", tools: ["Cypress", "Postman"], description: "E2E and API tests run against the live feature environment" },
          { id: "s5", label: "Staging Merge", icon: "🚀", tools: ["Nginx", "Blue/Green"], description: "Blue/green swap to staging; old environment retained for rollback" },
          { id: "s6", label: "Teardown", icon: "🗑️", tools: ["Jenkins", "Docker"], description: "Feature environment destroyed on merge or after 24hr TTL" },
        ],
      },
      {
        id: "observability",
        title: "Centralized Observability Platform",
        tagline: "Unified metrics, logs, and traces across microservices with alerting",
        repo: "https://github.com/divyal27/centralized-observability-platform",
        tags: ["Prometheus", "Grafana", "Loki", "Tempo", "Alertmanager"],
        highlight: "#22d3ee",
        pipeline: [
          { id: "s1", label: "Instrumentation", icon: "📡", tools: ["OpenTelemetry", "Micrometer"], description: "Services emit traces, metrics, and structured logs via OTel SDK" },
          { id: "s2", label: "Metrics Ingest", icon: "📈", tools: ["Prometheus", "Node Exporter"], description: "Prometheus scrapes targets; recording rules pre-aggregate heavy queries" },
          { id: "s3", label: "Log Pipeline", icon: "📜", tools: ["Promtail", "Loki"], description: "Promtail ships logs to Loki with pod labels as index keys" },
          { id: "s4", label: "Trace Collection", icon: "🔍", tools: ["Tempo", "Jaeger"], description: "Distributed traces collected; correlated with logs via trace IDs" },
          { id: "s5", label: "Dashboards", icon: "📊", tools: ["Grafana", "Alertmanager"], description: "Unified Grafana dashboards linking metrics → logs → traces" },
          { id: "s6", label: "Alert & Route", icon: "🔔", tools: ["Alertmanager", "PagerDuty"], description: "Alerts fired with runbook links; routed to team channels" },
        ],
      },
    ],
  },
  {
    id: "sre",
    label: "SRE",
    accent: "text-violet-400",
    border: "border-violet-500/40",
    glow: "#8b5cf6",
    badge: "bg-violet-500/10 text-violet-300 border border-violet-500/30",
    projects: [
      {
        id: "slops-platform",
        title: "SLOps SRE Platform",
        tagline: "Automated SLO management with error budget burn-rate alerting",
        repo: "https://github.com/divyal27/slops-sre-platform",
        tags: ["SLO", "Error Budget", "Prometheus", "Grafana SLO"],
        highlight: "#8b5cf6",
        pipeline: [
          { id: "s1", label: "Define SLIs", icon: "🎯", tools: ["YAML DSL", "OpenSLO"], description: "SLIs defined as code in YAML; specifying latency, availability, error rate targets" },
          { id: "s2", label: "SLO Compute", icon: "🧮", tools: ["Prometheus Rules", "Sloth"], description: "Sloth generates multi-window burn-rate alerting rules automatically" },
          { id: "s3", label: "Error Budget", icon: "💰", tools: ["Grafana", "PromQL"], description: "Real-time error budget consumption dashboards per service" },
          { id: "s4", label: "Burn Alert", icon: "🚨", tools: ["Alertmanager", "Slack"], description: "Fast/slow burn-rate alerts fire at 2% and 5% budget consumption rates" },
          { id: "s5", label: "Review Gate", icon: "🚦", tools: ["GitHub Actions", "Policy"], description: "Deploys blocked when error budget < 10%; release policy enforced as code" },
          { id: "s6", label: "Postmortem", icon: "📋", tools: ["Notion", "Blameless"], description: "Incidents auto-linked to SLO violations; postmortems generated with context" },
        ],
      },
      {
        id: "remediate-slops",
        title: "Remidate SLOps",
        tagline: "Automated incident remediation triggered by SLO breaches",
        repo: "https://github.com/divyal27/Remidate-SlOps",
        tags: ["Auto-Remediation", "Runbooks", "Kubernetes", "Operators"],
        highlight: "#8b5cf6",
        pipeline: [
          { id: "s1", label: "SLO Breach", icon: "⚡", tools: ["Alertmanager", "Webhook"], description: "Alertmanager fires webhook when SLO burn rate crosses threshold" },
          { id: "s2", label: "Classify", icon: "🔎", tools: ["ML Classifier", "Rules Engine"], description: "Breach classified by type: latency, error rate, throughput, saturation" },
          { id: "s3", label: "Select Runbook", icon: "📖", tools: ["Runbook Engine", "Decision Tree"], description: "Appropriate remediation runbook selected from versioned playbook library" },
          { id: "s4", label: "Safe Execute", icon: "🛡️", tools: ["Operator SDK", "Dry-Run"], description: "Remediation executed with dry-run check; rollback hook registered first" },
          { id: "s5", label: "Validate", icon: "✅", tools: ["Prometheus", "Smoke Tests"], description: "SLI metrics polled every 30s to confirm remediation effectiveness" },
          { id: "s6", label: "Escalate / Close", icon: "📢", tools: ["PagerDuty", "Slack"], description: "Auto-closed if SLO recovers; escalated to on-call if action fails" },
        ],
      },
      {
        id: "capacity",
        title: "SRE Capacity Management",
        tagline: "Predictive capacity planning with resource quota automation",
        repo: "https://github.com/divyal27/sre-capacity-manage",
        tags: ["VPA", "KEDA", "Forecasting", "Resource Quotas"],
        highlight: "#8b5cf6",
        pipeline: [
          { id: "s1", label: "Collect Signals", icon: "📡", tools: ["Prometheus", "kube-state-metrics"], description: "CPU, memory, request latency, and saturation signals collected per namespace" },
          { id: "s2", label: "Trend Analysis", icon: "📉", tools: ["Prophet", "pandas"], description: "Time-series forecasting predicts resource needs 7 and 30 days out" },
          { id: "s3", label: "Quota Planning", icon: "📐", tools: ["OPA", "Resource Quotas"], description: "Recommended quotas generated per namespace; reviewed in weekly capacity review" },
          { id: "s4", label: "HPA / VPA Tune", icon: "⚙️", tools: ["VPA", "KEDA"], description: "Autoscaler targets updated automatically within approved policy bounds" },
          { id: "s5", label: "Cost Tracking", icon: "💵", tools: ["Kubecost", "AWS Cost Explorer"], description: "Per-service cost attribution tracked; waste flagged for engineering review" },
          { id: "s6", label: "Report", icon: "📋", tools: ["Grafana", "Confluence"], description: "Weekly capacity report generated and published to SRE team wiki" },
        ],
      },
    ],
  },
  {
    id: "devsecops",
    label: "DevSecOps",
    accent: "text-emerald-400",
    border: "border-emerald-500/40",
    glow: "#10b981",
    badge: "bg-emerald-500/10 text-emerald-300 border border-emerald-500/30",
    projects: [
      {
        id: "shift-left",
        title: "Shift-Left Security Pipeline",
        tagline: "Security gates embedded at every stage of the CI/CD pipeline",
        repo: "https://github.com/divyal27/shift-left-security-pipeline",
        tags: ["SAST", "DAST", "Secrets Scan", "SBOMs", "OPA"],
        highlight: "#10b981",
        pipeline: [
          { id: "s1", label: "Pre-Commit", icon: "🔒", tools: ["pre-commit", "detect-secrets"], description: "Git hooks block commits with secrets, large files, or license violations" },
          { id: "s2", label: "SAST", icon: "🔬", tools: ["Semgrep", "CodeQL"], description: "Static analysis for injection, XSS, insecure crypto across entire codebase" },
          { id: "s3", label: "SCA + SBOM", icon: "🧾", tools: ["Syft", "Grype", "OWASP Dep-Check"], description: "SBOM generated; CVE scanning of all direct and transitive dependencies" },
          { id: "s4", label: "Container Scan", icon: "🐳", tools: ["Trivy", "Docker Bench"], description: "Image scanned for OS CVEs, misconfigs, secrets in layers" },
          { id: "s5", label: "DAST", icon: "🌐", tools: ["OWASP ZAP", "Nuclei"], description: "Running app scanned for OWASP Top 10 vulnerabilities in staging" },
          { id: "s6", label: "Policy Gate", icon: "🚦", tools: ["OPA", "Conftest"], description: "OPA policy enforced: deploy blocked if any Critical/High CVE unresolved" },
        ],
      },
      {
        id: "zero-trust",
        title: "Zero-Trust AWS Network Security",
        tagline: "End-to-end zero-trust architecture across VPC, IAM, and service mesh",
        repo: "https://github.com/divyal27/Zero-Trust-AWS-Network-Security-Architecture",
        tags: ["AWS IAM", "mTLS", "Istio", "VPC", "GuardDuty"],
        highlight: "#10b981",
        pipeline: [
          { id: "s1", label: "Identity Layer", icon: "🪪", tools: ["AWS IAM", "OIDC", "IRSA"], description: "Workload identity via IRSA; no static credentials; least-privilege roles" },
          { id: "s2", label: "Network Perimeter", icon: "🏰", tools: ["VPC", "Security Groups", "NACLs"], description: "Micro-segmented VPCs; deny-by-default NACLs; no public subnets for data tier" },
          { id: "s3", label: "mTLS Mesh", icon: "🔐", tools: ["Istio", "cert-manager"], description: "All service-to-service communication encrypted with mutual TLS via Istio" },
          { id: "s4", label: "Secrets Mgmt", icon: "🗝️", tools: ["HashiCorp Vault", "AWS Secrets Manager"], description: "Dynamic secrets with short TTLs; no hardcoded credentials anywhere" },
          { id: "s5", label: "Threat Detection", icon: "🛡️", tools: ["GuardDuty", "Security Hub"], description: "GuardDuty anomaly detection; findings aggregated in Security Hub" },
          { id: "s6", label: "Audit & Comply", icon: "📜", tools: ["CloudTrail", "Config Rules"], description: "All API calls logged; Config rules enforce CIS benchmark compliance" },
        ],
      },
      {
        id: "container-supply-chain",
        title: "Container Supply Chain Security",
        tagline: "Cryptographic signing and attestation for every container artifact",
        repo: "https://github.com/divyal27/Container-Supply-Chain-Security-Compliance",
        tags: ["Cosign", "SLSA", "Sigstore", "Notary", "Rekor"],
        highlight: "#10b981",
        pipeline: [
          { id: "s1", label: "Source Integrity", icon: "🔏", tools: ["Sigstore", "Gitsign"], description: "Every commit signed with developer keyless identity via Sigstore" },
          { id: "s2", label: "Build Provenance", icon: "🏗️", tools: ["SLSA Builder", "GitHub Actions"], description: "SLSA Level 3 provenance attestation generated at build time" },
          { id: "s3", label: "Image Sign", icon: "✍️", tools: ["Cosign", "Keyless"], description: "Container image signed with Cosign using keyless OIDC; recorded in Rekor" },
          { id: "s4", label: "SBOM Attest", icon: "🧾", tools: ["Syft", "SPDX"], description: "SPDX SBOM attached as signed attestation to the image manifest" },
          { id: "s5", label: "Admission Control", icon: "🚪", tools: ["Kyverno", "Connaisseur"], description: "Kyverno policy rejects any unsigned or unattested image at deploy time" },
          { id: "s6", label: "Audit Trail", icon: "🔍", tools: ["Rekor", "Transparency Log"], description: "Immutable audit log in Rekor; compliance reports generated from log data" },
        ],
      },
    ],
  },
];

function PipelineDiagram({ project }: { project: Project }) {
  const [activeStage, setActiveStage] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className="mt-4 rounded-xl border border-white/10 bg-black/40 backdrop-blur-sm p-5 overflow-hidden"
    >
      <div className="flex items-start gap-0 overflow-x-auto pb-2 scrollbar-hide">
        {project.pipeline.map((stage, i) => (
          <div key={stage.id} className="flex items-center flex-shrink-0">
            <button
              onClick={() => setActiveStage(activeStage === stage.id ? null : stage.id)}
              className="flex flex-col items-center gap-1 group relative"
            >
              {activeStage === stage.id && (
                <motion.div
                  layoutId="activeRing"
                  className="absolute inset-0 rounded-full"
                  style={{ boxShadow: `0 0 18px 4px ${project.highlight}60` }}
                />
              )}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center text-xl transition-all duration-200 border-2 ${
                  activeStage === stage.id
                    ? "border-current scale-110"
                    : "border-white/15 group-hover:border-white/30 group-hover:scale-105"
                }`}
                style={{
                  background:
                    activeStage === stage.id
                      ? `radial-gradient(circle, ${project.highlight}30, transparent)`
                      : "rgba(255,255,255,0.04)",
                  borderColor: activeStage === stage.id ? project.highlight : undefined,
                }}
              >
                {stage.icon}
              </div>
              <span className="text-[10px] font-medium text-white/60 w-14 text-center leading-tight">
                {stage.label}
              </span>
            </button>

            {i < project.pipeline.length - 1 && (
              <motion.div
                className="flex items-center mx-1 mt-[-10px]"
                animate={{ opacity: [0.3, 0.8, 0.3] }}
                transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.3 }}
              >
                <div
                  className="h-px w-6"
                  style={{ background: `linear-gradient(90deg, ${project.highlight}40, ${project.highlight}90)` }}
                />
                <svg width="8" height="8" viewBox="0 0 8 8">
                  <path
                    d="M0 4 L8 4 M5 1 L8 4 L5 7"
                    stroke={project.highlight}
                    strokeWidth="1.5"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    opacity="0.85"
                  />
                </svg>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <AnimatePresence>
        {activeStage && (() => {
          const stage = project.pipeline.find((s) => s.id === activeStage)!;
          return (
            <motion.div
              key={activeStage}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden mt-4"
            >
              <div
                className="rounded-lg p-4 border"
                style={{
                  borderColor: `${project.highlight}30`,
                  background: `linear-gradient(135deg, ${project.highlight}08, transparent)`,
                }}
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{stage.icon}</span>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-white text-sm mb-1">{stage.label}</h4>
                    <p className="text-white/60 text-xs leading-relaxed mb-2">{stage.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {stage.tools.map((tool) => (
                        <span
                          key={tool}
                          className="text-[10px] px-2 py-0.5 rounded-full font-medium"
                          style={{
                            background: `${project.highlight}18`,
                            color: project.highlight,
                            border: `1px solid ${project.highlight}30`,
                          }}
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })()}
      </AnimatePresence>

      <div className="mt-3 text-[10px] text-white/25 text-center">
        Click any stage to explore tools & details
      </div>
    </motion.div>
  );
}

function ProjectCard({ project, category }: { project: Project; category: Category }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className={`rounded-2xl border ${category.border} bg-white/[0.02] transition-all duration-300 overflow-hidden`}
      style={{ boxShadow: open ? `0 0 30px 1px ${category.glow}18` : "none" }}
    >
      <button
        className="w-full text-left p-5 hover:bg-white/[0.03] transition-colors duration-200"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-white text-sm leading-snug mb-1">
              {project.title}
            </h3>
            <p className="text-white/50 text-xs leading-relaxed line-clamp-2">
              {project.tagline}
            </p>
          </div>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            className="text-white/30 flex-shrink-0 mt-0.5"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>
        </div>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {project.tags.map((tag) => (
            <span key={tag} className={`text-[10px] px-2 py-0.5 rounded-full font-medium ${category.badge}`}>
              {tag}
            </span>
          ))}
        </div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            key="pipeline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="px-5 pb-5"
          >
            <PipelineDiagram project={project} />

            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-white/40 hover:text-white/80 transition-colors duration-150"
              onClick={(e) => e.stopPropagation()}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("devops");
  const current = CATEGORIES.find((c) => c.id === activeCategory)!;

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-12"
      >
        <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/30 mb-3">
          Portfolio Projects
        </p>
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          What I&apos;ve Built
        </h2>
        <p className="text-white/50 text-sm max-w-xl leading-relaxed">
          9 production-grade projects across DevOps, SRE, and DevSecOps.
          Click any project to explore its full pipeline architecture.
        </p>
      </motion.div>

      <div className="flex gap-2 mb-8 flex-wrap">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
              activeCategory === cat.id
                ? `${cat.accent} border-current bg-white/5`
                : "text-white/40 border-white/10 hover:text-white/70 hover:border-white/20"
            }`}
          >
            {cat.label}
            <span className="ml-2 text-xs opacity-60">{cat.projects.length}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
        >
          {current.projects.map((project) => (
            <ProjectCard key={project.id} project={project} category={current} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
