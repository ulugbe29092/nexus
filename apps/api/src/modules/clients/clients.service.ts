import { Injectable } from "@nestjs/common";
import type { Client } from "@nexus/shared";

@Injectable()
export class ClientsService {
  private readonly clients: Client[] = [
    {
      id: "cli_001",
      company: "Tashkent Industrial Group",
      contact: "Oybek Usmonov",
      pipelineStatus: "negotiation",
      amount: 185000,
      health: 88
    },
    {
      id: "cli_002",
      company: "Samarkand Cloud Services",
      contact: "Zarina Ibragimova",
      pipelineStatus: "won",
      amount: 96000,
      health: 94
    }
  ];

  findAll() {
    return this.clients;
  }
}

