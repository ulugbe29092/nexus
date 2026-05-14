create table tenants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  plan text not null default 'enterprise',
  created_at timestamptz not null default now()
);

create table users (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  fullname text not null,
  email text not null unique,
  role text not null,
  created_at timestamptz not null default now()
);

create table employees (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  user_id uuid references users(id),
  department text not null,
  salary numeric(14, 2) not null default 0,
  kpi numeric(5, 2) not null default 0,
  created_at timestamptz not null default now()
);

create table attendance (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  employee_id uuid not null references employees(id),
  checkin timestamptz,
  checkout timestamptz,
  source text not null default 'manual',
  created_at timestamptz not null default now()
);

create table clients (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  company text not null,
  contact text not null,
  pipeline_status text not null default 'lead',
  created_at timestamptz not null default now()
);

create table sales (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  client_id uuid not null references clients(id),
  amount numeric(14, 2) not null,
  pipeline_status text not null,
  created_at timestamptz not null default now()
);

create table audit_logs (
  id uuid primary key default gen_random_uuid(),
  tenant_id uuid not null references tenants(id),
  actor_id uuid references users(id),
  action text not null,
  resource text not null,
  metadata jsonb not null default '{}',
  created_at timestamptz not null default now()
);

create index idx_users_tenant on users(tenant_id);
create index idx_employees_tenant on employees(tenant_id);
create index idx_clients_tenant on clients(tenant_id);
create index idx_sales_tenant_status on sales(tenant_id, pipeline_status);
create index idx_audit_logs_tenant_created on audit_logs(tenant_id, created_at desc);

