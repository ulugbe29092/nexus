import { Injectable } from "@nestjs/common";

@Injectable()
export class NotificationsService {
  list() {
    return [
      { channel: "telegram", title: "Finance approval needed", priority: "high" },
      { channel: "email", title: "Candidate interview scheduled", priority: "medium" },
      { channel: "push", title: "Sales forecast updated by AI", priority: "medium" }
    ];
  }
}
