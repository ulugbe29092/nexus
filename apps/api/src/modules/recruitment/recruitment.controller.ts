import { Controller, Get } from "@nestjs/common";
import { RecruitmentService } from "./recruitment.service";

@Controller("recruitment")
export class RecruitmentController {
  constructor(private readonly recruitmentService: RecruitmentService) {}

  @Get("pipeline")
  pipeline() {
    return this.recruitmentService.pipeline();
  }
}

