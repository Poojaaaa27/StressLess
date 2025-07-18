"use client";

import { useEffect, useState } from "react";
import AnalyticsDashboard from "@/components/admin/AnalyticsDashboard";
import { users as placeholderUsers } from "@/lib/placeholder-data";
import { User } from "@/lib/types";
import { Loader2 } from "lucide-react";

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading users from a data source
    try {
      const storedUsers = localStorage.getItem("stressUsers");
      if (storedUsers) {
        setUsers(JSON.parse(storedUsers));
      } else {
        // If no users are in localStorage, initialize with placeholder data
        setUsers(placeholderUsers);
        localStorage.setItem("stressUsers", JSON.stringify(placeholderUsers));
      }
    } catch (error) {
      console.error("Failed to load users from localStorage", error);
      setUsers(placeholderUsers); // Fallback to placeholder data on error
    } finally {
      setIsLoading(false);
    }
  }, []);

  const handleUserDeleted = (userId: string) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    localStorage.setItem("stressUsers", JSON.stringify(updatedUsers));
  };

  if (isLoading) {
    return (
      <div className="flex h-full w-full items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  return <AnalyticsDashboard users={users} onUserDeleted={handleUserDeleted} />;
}
