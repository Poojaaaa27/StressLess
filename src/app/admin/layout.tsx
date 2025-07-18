import { Header } from "@/components/Header";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-slate-100 dark:bg-slate-950">
      <Header />
      <main className="flex-1 p-4 sm:p-6">{children}</main>
    </div>
  );
}
