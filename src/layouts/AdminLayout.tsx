import { useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "motion/react";
import { MeshBackground } from "@/components/ui/MeshBackground";
import { AdminSidebar } from "@/components/ui/AdminSidebar";
import { AdminHeader } from "@/components/ui/AdminHeader";

const USER = { name: "Josephine Akigbe", role: "Pastor" };

export default function AdminLayout() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen relative font-outfit overflow-hidden">
      <MeshBackground />
      <AdminSidebar
        collapsed={collapsed}
        onCollapsedChange={setCollapsed}
        userName={USER.name}
        userRole={USER.role}
      />
      <motion.div
        animate={{ marginLeft: collapsed ? 72 + 32 : 272 + 32 }}
        transition={{ duration: 0.28, ease: [0.4, 0, 0.2, 1] }}
        className="p-4 lg:p-6 min-h-screen relative z-10"
      >
        <AdminHeader
          variant="default"
          userName={USER.name}
          userRole={USER.role}
          notificationCount={3}
        />
        <Outlet />
      </motion.div>
    </div>
  );
}
