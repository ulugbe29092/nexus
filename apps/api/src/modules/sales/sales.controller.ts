import { Body, Controller, Get, Post } from "@nestjs/common";
import { IsIn, IsNumber, IsString, Min } from "class-validator";
import { SalesService } from "./sales.service";

class CreateSaleDto {
  @IsString()
  clientId!: string;

  @IsNumber()
  @Min(1)
  amount!: number;

  @IsIn(["lead", "contact", "negotiation", "won", "lost"])
  pipelineStatus!: "lead" | "contact" | "negotiation" | "won" | "lost";
}

@Controller("sales")
export class SalesController {
  constructor(private readonly salesService: SalesService) {}

  @Get()
  list() {
    return this.salesService.list();
  }

  @Post("create")
  create(@Body() dto: CreateSaleDto) {
    return this.salesService.create(dto);
  }
}

