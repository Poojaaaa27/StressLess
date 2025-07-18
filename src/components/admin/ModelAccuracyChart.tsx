"use client"

import * as React from "react"
import { Bar, BarChart, XAxis, YAxis, Tooltip, Cell, LabelList } from "recharts"

import {
  ChartContainer,
  ChartTooltipContent,
} from "@/components/ui/chart"

interface ModelAccuracyChartProps {
  data: {
    name: string;
    value: number;
    fill: string;
  }[];
}

export function ModelAccuracyChart({ data }: ModelAccuracyChartProps) {
  return (
    <ChartContainer config={{}} className="h-[300px] w-full">
      <BarChart
        data={data}
        layout="vertical"
        margin={{ left: 10, top: 30, right: 40 }}
      >
        <XAxis type="number" domain={[0, 100]} hide />
        <YAxis
          type="category"
          dataKey="name"
          stroke="hsl(var(--muted-foreground))"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          width={80}
        />
        <Tooltip
          cursor={{ fill: "hsl(var(--accent))" }}
          content={<ChartTooltipContent hideLabel />}
        />
        <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={35}>
            <LabelList 
                dataKey="value" 
                position="right" 
                offset={10}
                className="fill-foreground"
                formatter={(value: number) => `${value}%`}
            />
          {data.map((entry) => (
            <Cell key={`cell-${entry.name}`} fill={entry.fill} />
          ))}
        </Bar>
      </BarChart>
    </ChartContainer>
  )
}
