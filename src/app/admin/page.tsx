import AnalyticsDashboard from "@/components/admin/AnalyticsDashboard";
import { users } from "@/lib/placeholder-data";

export default function AdminPage() {
  return <AnalyticsDashboard users={users} />;
}
