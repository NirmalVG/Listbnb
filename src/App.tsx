import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "@/components/Layout/Layout.tsx";
import LoginPage from "@/pages/LoginPage/LoginPage.tsx";
import Profile from "./screens/Profile/Profile";
import HomePage from "./pages/HomePage/HomePage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import DashboardLayout from "./components/DashboardLayout/DashboardLayout";
import EditProfile from "./screens/EditProfile/EditProfile";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";
import PostAdForm from "./components/PostAdForm/PostAdForm";
import AdDetail from "./pages/AdDetailPage/AdDetailPage";
import Advertisements from "./screens/Advertisements/Advertisements";
import AdDetailPage from "./pages/AdDetailPage/AdDetailPage";
import ProfileHeader from "./components/ProfileHeader/ProfileHeader";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <div className="flex-1 space-y-6">
                    <ProfileHeader />
                    <Advertisements />
                  </div>
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route
            path="/post-ad"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <PostAdForm />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route path="/ad-detail/:id" element={<AdDetailPage />} />
          <Route
            path="/ads"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <Advertisements />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/edit-profile"
            element={
              <ProtectedRoute>
                <DashboardLayout>
                  <EditProfile />
                </DashboardLayout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
