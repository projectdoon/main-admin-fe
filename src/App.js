import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "./routes/Login/login.component";
import Navigation from "./routes/Navigation/Navigation.component";
import Dashboard from "./routes/DashBoard/dashboard.component";
import SocialAudit from "./routes/SocialAudit/socialAudit.components";
import Reports from "./routes/Report/report.component";
import Alerts from "./routes/Alerts/Alerts.components";
import Livetracking from "./routes/Garbage/LiveTracking";
import LiveReports from "./routes/LiveReports/LiveReports";
import Schemes from "./routes/governmentschemes/schemes";
import Services from "./routes/governmentservices/services";
import WaterLeakage from "./routes/WaterLeakage/WaterLeakage";
import Animal from "./routes/deadanimal/Animal";
import { AuthProvider, AuthContext } from "./contexts/AuthContext";
import { LoadScript } from "@react-google-maps/api";
import RoleGuard from "./routes/Login/RoleGuard";
import UnAuth from "./routes/unAuthorised/UnAuth";
import Addschemes from "./routes/AddSchemes/Addschemes";
import Attendance from "./routes/Staff/Attendance";
import AllVehicle from "./routes/Staff/AllVehicle";
import Maintenance from "./routes/Staff/Maintenance";
import StaffReport from "./routes/Staff/StaffReport";
import TotalGarbage from "./routes/Staff/TotalGarbage";
import Manholes from "./routes/manholes/manholes";
import PublicToilet from "./routes/publicToilet/publicToilet";
import StagnentWater from "./routes/StagnentWater/StagnentWater";
import PublicTransport from "./routes/publicTransport/publicTransport";
import RoadRepairs from "./routes/roadRepair/roadRepairs";
import Complaints from "./routes/Complaints/complaints.component";
import StreetLights from "./routes/StreetLights/StreetLights";
import Banners from "./routes/Banners/Banners";
import Helpline from "./routes/HelplineNumbers/Helpline";
import UpdateInfo from "./routes/UpdateInfo/UpdateInfo";

const GOOGLE_MAPS_API_KEY = "AIzaSyAU4SEzLK-hc2pBfE_xggoyAigxopPQ7mw";

function App() {
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleLogin = (status) => {
    setIsAuthenticated(status); // Update authentication status
  };

  return (
    <AuthProvider>
      <LoadScript googleMapsApiKey={GOOGLE_MAPS_API_KEY}>
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/admin/*"
            element={
              <AuthGuard>
                <Navigation />
              </AuthGuard>
            }
          >
            <Route path="dashboard/home" element={<Dashboard />} />    
            <Route path="dashboard/banners" element={<Banners />} />    
            <Route path="dashboard/helpline" element={<Helpline />} />    
            <Route path="dashboard/updateInfo" element={<UpdateInfo />} />    

            <Route path="reports" element={<Reports />} />
            <Route path="alerts" element={<Alerts />} />
            <Route path="complaints" element={<Complaints />} />
            <Route path="socialaudit" element={<SocialAudit />} />

            <Route
              path="garbage"
              element={
                <RoleGuard allowedRoles={["garbage", "admin"]}>
                  <Livetracking />
                </RoleGuard>
              }
            />

            <Route
              path="garbage/household"
              element={
                <RoleGuard allowedRoles={["garbage", "admin"]}>
                  <Livetracking />
                </RoleGuard>
              }
            />

            <Route
              path="garbage/allReports"
              element={
                <RoleGuard allowedRoles={["garbage", "admin"]}>
                  <LiveReports />
                </RoleGuard>
              }
            />

            <Route
              path="complaints/water"
              element={
                <RoleGuard allowedRoles={["admin", "waterUser"]}>
                  <WaterLeakage />
                </RoleGuard>
              }
            />

            <Route
              path="complaints/deadanimal"
              element={
                <RoleGuard allowedRoles={["admin", "deadUser"]}>
                  <Animal />
                </RoleGuard>
              }
            />

            <Route
              path="complaints/manholes"
              element={
                <RoleGuard allowedRoles={["admin", "manhole"]}>
                  <Manholes />
                </RoleGuard>
              }
            />

            <Route
              path="complaints/toilets"
              element={
                <RoleGuard allowedRoles={["admin", "toilet"]}>
                  <PublicToilet />
                </RoleGuard>
              }
            />

            <Route
              path="complaints/stagnant"
              element={
                <RoleGuard allowedRoles={["admin", "stagnant"]}>
                  <StagnentWater />
                </RoleGuard>
              }
            />

            <Route
              path="complaints/transport"
              element={
                <RoleGuard allowedRoles={["admin", "transport"]}>
                  <PublicTransport />
                </RoleGuard>
              }
            />

            <Route
              path="complaints/lights"
              element={
                <RoleGuard allowedRoles={["admin", "transport"]}>
                  <StreetLights/>
                </RoleGuard>
              }
            />

            <Route
              path="complaints/road"
              element={
                <RoleGuard allowedRoles={["admin", "road"]}>
                  <RoadRepairs />
                </RoleGuard>
              }
            />
            
            <Route path="gov/scheme" element={<Schemes />} />
            <Route path="gov/service" element={<Services />} />
            
            <Route
              path="dashboard/gov/scheme/addscheme"
              element={<Addschemes />}
            />

            <Route path="staffreport" element={<StaffReport />} />
            <Route path="attendance" element={<Attendance />} />
            <Route path="allvehicle" element={<AllVehicle />} />
            <Route path="maintenance" element={<Maintenance />} />
            <Route path="totalgarbage" element={<TotalGarbage />} />
          </Route>

          <Route path="/unauthorized" element={<UnAuth />} />
        </Routes>
      </LoadScript>
    </AuthProvider>
  );
}

function AuthGuard({ children }) {
  const { isAuthenticated } = useContext(AuthContext);

  return isAuthenticated ? children : <Navigate to="/" />;
}

export default App;
