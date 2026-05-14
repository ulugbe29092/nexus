# SKILL.md

## Nexus Platform Skill

Use this project skill when building features for the NEXUS ERP CRM HR AI platform.

### Principles

- Build API-first Node.js modules.
- Keep module names enterprise-clear: `auth`, `employees`, `crm`, `sales`, `finance`, `inventory`, `recruitment`, `ai`, `analytics`.
- Add shared types in `packages/shared` before duplicating contracts.
- UI pages must prioritize dashboards, tables, workflows and realtime states.
- Every critical workflow should be prepared for RBAC and audit logging.

