import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import ComponentShowcase from "./pages/ComponentShowcase";
import Home from "./pages/Home";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import MemberLayout from "./layouts/MemberLayout";
import MemberDashboard from "./pages/member/Dashboard";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import { AuthProvider } from "./lib/auth";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/components" element={<ComponentShowcase />} />

          {/* Member routes */}
          <Route path="/dashboard" element={<MemberLayout />}>
            <Route index element={<MemberDashboard />} />
            <Route
              path="profile"
              element={
                <div className="p-8">
                  <h2 className="text-2xl font-bold">My Profile</h2>
                  <p className="text-gray-500 mt-2">
                    Profile management coming soon...
                  </p>
                </div>
              }
            />
            <Route
              path="events"
              element={
                <div className="p-8">
                  <h2 className="text-2xl font-bold">Church Events</h2>
                  <p className="text-gray-500 mt-2">
                    Event calendar coming soon...
                  </p>
                </div>
              }
            />
            <Route
              path="giving"
              element={
                <div className="p-8">
                  <h2 className="text-2xl font-bold">My Giving</h2>
                  <p className="text-gray-500 mt-2">
                    Donation history coming soon...
                  </p>
                </div>
              }
            />
            <Route
              path="settings"
              element={
                <div className="p-8">
                  <h2 className="text-2xl font-bold">Settings</h2>
                  <p className="text-gray-500 mt-2">
                    Preferences and dark mode toggle coming soon...
                  </p>
                </div>
              }
            />
          </Route>

          {/* Admin routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route
              path="members"
              element={
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Member Management
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Managing the local branch members...
                  </p>
                </div>
              }
            />
            <Route
              path="groups"
              element={
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Group Management
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Managing cell groups and ministries...
                  </p>
                </div>
              }
            />
            <Route
              path="events"
              element={
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Event Management
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Scheduling church services and events...
                  </p>
                </div>
              }
            />
            <Route
              path="offerings"
              element={
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Financial Records
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Tracking tithes and offerings...
                  </p>
                </div>
              }
            />
            <Route
              path="settings"
              element={
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-900">
                    Church Settings
                  </h2>
                  <p className="text-gray-500 mt-2">
                    Global configuration and theme settings...
                  </p>
                </div>
              }
            />
          </Route>

          {/* Catch all */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
