"use client";

import { User } from "@/lib/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface UserTableProps {
  users: User[];
}

const getBadgeVariant = (stressLevel: string | undefined) => {
    if (stressLevel === "Highly Stressed") return "destructive";
    if (stressLevel === "Stressed") return "secondary";
    return "default";
}

export function UserTable({ users }: UserTableProps) {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>User ID</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Age</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Predicted Stress Level</TableHead>
          <TableHead>Last Assessed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {users.map((user) => (
          <TableRow key={user.id}>
            <TableCell className="font-medium">{user.id}</TableCell>
            <TableCell>{user.name}</TableCell>
            <TableCell>{user.age}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>
              {user.prediction?.stressLevel ? (
                <Badge variant={getBadgeVariant(user.prediction.stressLevel)}>
                  {user.prediction.stressLevel}
                </Badge>
              ) : (
                <span className="text-muted-foreground">Not assessed</span>
              )}
            </TableCell>
            <TableCell>
                {user.prediction?.assessedDate ? new Date(user.prediction.assessedDate).toLocaleDateString() : 'N/A'}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
