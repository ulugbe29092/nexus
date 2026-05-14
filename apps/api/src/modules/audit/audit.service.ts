import { Injectable } from "@nestjs/common";

type AuditEvent = {
  actorId: string;
  tenantId: string;
  action: string;
  resource: string;
  metadata?: Record<string, unknown>;
};

@Injectable()
export class AuditService {
  private readonly events: AuditEvent[] = [];

  record(event: AuditEvent) {
    this.events.unshift(event);
    return event;
  }

  list() {
    return this.events;
  }
}

