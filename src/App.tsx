import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "devign";
import { ThemeProvider } from "./components/ThemeProvider";
import { AuthProvider } from "./lib/auth";
import { ThemeToggle } from "./components/ui/ThemeToggle";
import AdminLayout from "./layouts/AdminLayout";
import MemberLayout from "./layouts/MemberLayout";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import MemberDashboard from "./pages/member/Dashboard";
import { EmptyState } from "devign";
import { Wrench } from "lucide-react";

// Unbuilt pages — devign EmptyState instead of a raw div
const Soon = ({ title }: { title: string }) => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <EmptyState
      icon={<Wrench className="h-8 w-8" />}
      title={title}
      description="This section is coming soon. Check back shortly."
    />
  </div>
);

export default function App() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/login" element={<Login />} />

            <Route path="/dashboard" element={<MemberLayout />}>
              <Route index element={<MemberDashboard />} />
              <Route path="profile" element={<Soon title="My Profile" />} />
              <Route path="events" element={<Soon title="Church Events" />} />
              <Route path="giving" element={<Soon title="My Giving" />} />
              <Route path="settings" element={<Soon title="Settings" />} />
            </Route>

            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route
                path="members"
                element={<Soon title="Member Management" />}
              />
              <Route path="attendance" element={<Soon title="Attendance" />} />
              <Route path="programs" element={<Soon title="Programs" />} />
              <Route
                path="communications"
                element={<Soon title="Communications" />}
              />
              <Route path="media" element={<Soon title="Media" />} />
              <Route path="community" element={<Soon title="Community" />} />
              <Route
                path="discipleship"
                element={<Soon title="Discipleship" />}
              />
              <Route
                path="pastoral-care"
                element={<Soon title="Pastoral Care" />}
              />
              <Route path="finance" element={<Soon title="Finance" />} />
              <Route path="analytics" element={<Soon title="Analytics" />} />
              <Route
                path="settings"
                element={<Soon title="Church Settings" />}
              />
            </Route>

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
          <ThemeToggle />
          <Toaster />
        </BrowserRouter>
      </AuthProvider>
    </ThemeProvider>
  );
}
