import { Injectable } from "@nestjs/common";

@Injectable()
export class RecruitmentService {
  pipeline() {
    return [
      { vacancy: "Senior NestJS Engineer", candidates: 48, aiShortlisted: 9, interviews: 4 },
      { vacancy: "Enterprise Sales Lead", candidates: 33, aiShortlisted: 7, interviews: 3 },
      { vacancy: "HR Operations Manager", candidates: 21, aiShortlisted: 5, interviews: 2 }
    ];
  }
}

