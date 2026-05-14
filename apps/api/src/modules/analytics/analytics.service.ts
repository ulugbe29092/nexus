import { Injectable } from "@nestjs/common";
import type { KpiMetric } from "../../common/domain.types";

@Injectable()
export class AnalyticsService {
  dashboard(): { metrics: KpiMetric[]; realtime: Array<{ label: string; value: number }> } {
    return {
      metrics: [
        { label: "Revenue", value: "$2.48M", delta: "+18.4%", tone: "green" },
        { label: "Active clients", value: "1,284", delta: "+9.2%", tone: "blue" },
        { label: "Attendance", value: "96.7%", delta: "+3.1%", tone: "green" },
        { label: "AI savings", value: "412h", delta: "+27%", tone: "rose" }
      ],
      realtime: [
        { label: "sales", value: 82 },
        { label: "finance", value: 76 },
        { label: "attendance", value: 96 },
        { label: "tasks", value: 71 }
      ]
    };
  }
}
