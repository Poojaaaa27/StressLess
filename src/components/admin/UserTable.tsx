"use client";

import { useState } from "react";
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
import { Button } from "@/components/ui/button";
import { Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useToast } from "@/hooks/use-toast";

interface UserTableProps {
  users: User[];
  onUserDeleted: (userId: string) => void;
}

const getBadgeVariant = (stressLevel: string | undefined) => {
    if (stressLevel === "Highly Stressed") return "destructive";
    if (stressLevel === "Stressed") return "secondary";
    return "default";
}

export function UserTable({ users, onUserDeleted }: UserTableProps) {
  const { toast } = useToast();
  const [userToDelete, setUserToDelete] = useState<User | null>(null);

  const handleDelete = () => {
    if (userToDelete) {
      onUserDeleted(userToDelete.id);
      toast({
        title: "User Deleted",
        description: `User ${userToDelete.name} has been removed.`,
      });
      setUserToDelete(null); // Close dialog
    }
  };

  return (
    <AlertDialog open={!!userToDelete} onOpenChange={(isOpen) => !isOpen && setUserToDelete(null)}>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>User ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Age</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Predicted Stress Level</TableHead>
            <TableHead>Last Assessed</TableHead>
            <TableHead className="text-right">Actions</TableHead>
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
              <TableCell className="text-right">
                <AlertDialogTrigger asChild>
                  <Button variant="ghost" size="icon" onClick={() => setUserToDelete(user)}>
                    <Trash2 className="h-4 w-4 text-destructive" />
                  </Button>
                </AlertDialogTrigger>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete the user
            <span className="font-bold"> {userToDelete?.name}</span> and remove their data from view.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setUserToDelete(null)}>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
