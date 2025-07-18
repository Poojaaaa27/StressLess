"use client";

import { User } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ClassificationChart } from "./ClassificationChart";
import { UserTable } from "./UserTable";
import { ShieldAlert, Smile, HeartPulse } from "lucide-react";
import { ModelAccuracyChart } from "./ModelAccuracyChart";
import { modelAccuracyData } from "@/lib/placeholder-data";

interface AnalyticsDashboardProps {
  users: User[];
}

export default function AnalyticsDashboard({ users }: AnalyticsDashboardProps) {
  const totalUsers = users.length;
  const highlyStressedCount = users.filter(
    (u) => u.prediction?.stressLevel === "Highly Stressed"
  ).length;
  const stressedCount = users.filter(
    (u) => u.prediction?.stressLevel === "Stressed"
  ).length;
  const normalCount = users.filter(
    (u) => u.prediction?.stressLevel === "Normal"
  ).length;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Highly Stressed</CardTitle>
            <ShieldAlert className="h-5 w-5 text-destructive" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{highlyStressedCount}</div>
            <p className="text-xs text-muted-foreground">
              out of {totalUsers} users
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Stressed</CardTitle>
            <HeartPulse className="h-5 w-5 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stressedCount}</div>
            <p className="text-xs text-muted-foreground">
              out of {totalUsers} users
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Normal</CardTitle>
            <Smile className="h-5 w-5 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{normalCount}</div>
            <p className="text-xs text-muted-foreground">
              out of {totalUsers} users
            </p>
          </CardContent>
        </Card>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-5">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Classification Analysis</CardTitle>
          </CardHeader>
          <CardContent>
            <ClassificationChart
              data={[
                { name: "Highly Stressed", value: highlyStressedCount, fill: "hsl(var(--destructive))" },
                { name: "Stressed", value: stressedCount, fill: "hsl(var(--chart-4))" },
                { name: "Normal", value: normalCount, fill: "hsl(var(--chart-2))" },
              ]}
            />
          </CardContent>
        </Card>
        <Card className="lg:col-span-3">
           <CardHeader>
            <CardTitle>Model Performance</CardTitle>
            <CardDescription>Based on Kaggle "Student Stress Factors" dataset.</CardDescription>
          </CardHeader>
          <CardContent>
            <ModelAccuracyChart data={modelAccuracyData} />
          </CardContent>
        </Card>
      </div>
       <Card>
          <CardHeader>
            <CardTitle>User Management</CardTitle>
          </CardHeader>
          <CardContent>
            <UserTable users={users} />
          </CardContent>
        </Card>
    </div>
  );
}
