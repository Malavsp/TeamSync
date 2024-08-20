"use client";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/app/ui/components/employee/chart";
import { chartConfig } from "@/lib/definitions";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { chartData } from "@/lib/placeholder-data";

export function Stats() {
  return (
    <ChartContainer
      config={chartConfig}
      className="min-h-[50-px] w-3/5 h-96 m-28 p-2 shadow-md border rounded-md"
    >
      <BarChart accessibilityLayer data={chartData}>
        <CartesianGrid vertical={false} />
        <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
        />
        <ChartTooltip content={<ChartTooltipContent />} />
        {/* <ChartLegend content={<ChartLegendContent />} /> */}
        <Bar dataKey="Present" fill="var(--present)" radius={4} />
        <Bar dataKey="Absence" fill="var(--absence)" radius={4} />
      </BarChart>
    </ChartContainer>
  );
}
