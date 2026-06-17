import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SubscriptionProvider } from "./context/SubscriptionContext";
import { AdminUIProvider } from "./admin/context/AdminUIContext";
import { PrivateRoute, AdminPrivateRoute } from "./components/PrivateRoute";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Register from "./components/Register";
import Dashboard from "./components/Dashboard.jsx";
import Profile from "./components/Profile";
import IPActivity from "./components/IPActivity.js";
import FilingTrackerDashboard from "./components/FilingTrackerDashboard.js";
import FilingList from "./components/FilingList.js";
import FilingDetail from "./components/FilingDetail.js";
import MyFilings from "./components/MyFilings";
import MyFilingDetail from "./components/MyFilingDetail";
import ProtectedFilingTracker from "./components/ProtectedFilingTracker.js";
import PricingPage from "./components/PricingPage.js";
import CheckoutPage from "./components/CheckoutPage.js";
import SubscriptionStatus from "./components/SubscriptionStatus.js";
import HelpCenter from "./components/landingPageComponents/HelpCenter";
import PrivacyPolicy from "./components/landingPageComponents/PrivacyPolicy.js";
import TermsOfService from "./components/landingPageComponents/TermsOfService.js";
import Settings from "./components/dashboardComponents/Settings";
import Feedback from "./components/landingPageComponents/Feedback";
import IPSearch from "./components/IPSearch";
import SearchResults from "./components/dashboardComponents/ipSearchComponents/SearchResults.js";
import IPDetails from "./components/dashboardComponents/ipSearchComponents/IPDetails.jsx";
import LegalStatusDashboard from "./components/LegalStatusDashboard.jsx";
import PatentFiling from "./components/PatentFiling";
import PatentFilingWizard from "./components/PatentFilingWizard";
import AdminLogin from "./admin/pages/AdminLogin";
import AdminDashboard from "./admin/pages/AdminDashboard";
import AdminFilingDetail from "./admin/pages/AdminFilingDetail";
import AdminUserManagement from "./admin/pages/AdminUserManagement";
import AdminFilingsManagement from "./admin/pages/AdminFilingsManagement";
import AdminMonitoring from "./admin/pages/AdminMonitoring";
import AdminFinanceManagement from "./admin/pages/AdminFinanceManagement";
import AdminSettings from "./admin/pages/AdminSettings";

function App() {
  return (
    <SubscriptionProvider>
      <AdminUIProvider>
        <div className="App">
          <Routes>
            {/* Public routes */}
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/pricing" element={<PricingPage />} />
            <Route path="/help" element={<HelpCenter />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/feedback" element={<Feedback />} />

            {/* Admin protected routes */}
            <Route path="/admin/dashboard" element={<AdminPrivateRoute><AdminDashboard /></AdminPrivateRoute>} />
            <Route path="/admin/users" element={<AdminPrivateRoute><AdminUserManagement /></AdminPrivateRoute>} />
            <Route path="/admin/filings" element={<AdminPrivateRoute><AdminFilingsManagement /></AdminPrivateRoute>} />
            <Route path="/admin/filings/:id" element={<AdminPrivateRoute><AdminFilingDetail /></AdminPrivateRoute>} />
            <Route path="/admin/monitoring" element={<AdminPrivateRoute><AdminMonitoring /></AdminPrivateRoute>} />
            <Route path="/admin/finance" element={<AdminPrivateRoute><AdminFinanceManagement /></AdminPrivateRoute>} />
            <Route path="/admin/settings" element={<AdminPrivateRoute><AdminSettings /></AdminPrivateRoute>} />

            {/* User protected routes */}
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
            <Route path="/ipActivity" element={<PrivateRoute><IPActivity /></PrivateRoute>} />
            <Route path="/ip-search" element={<PrivateRoute><IPSearch /></PrivateRoute>} />
            <Route path="/search-results" element={<PrivateRoute><SearchResults /></PrivateRoute>} />
            <Route path="/ip/:id" element={<PrivateRoute><IPDetails /></PrivateRoute>} />
            <Route path="/legal-status" element={<PrivateRoute><LegalStatusDashboard /></PrivateRoute>} />
            <Route path="/settings" element={<PrivateRoute><Settings /></PrivateRoute>} />
            <Route path="/patent-filing" element={<PrivateRoute><PatentFiling /></PrivateRoute>} />
            <Route path="/file-patent" element={<PrivateRoute><PatentFilingWizard /></PrivateRoute>} />
            <Route path="/my-filings" element={<PrivateRoute><MyFilings /></PrivateRoute>} />
            <Route path="/my-filings/:id" element={<PrivateRoute><MyFilingDetail /></PrivateRoute>} />
            <Route path="/checkout/:planKey" element={<PrivateRoute><CheckoutPage /></PrivateRoute>} />
            <Route path="/subscription-status" element={<PrivateRoute><SubscriptionStatus /></PrivateRoute>} />

            <Route path="/filing-tracker-dashboard" element={<PrivateRoute><ProtectedFilingTracker><FilingTrackerDashboard /></ProtectedFilingTracker></PrivateRoute>} />
            <Route path="/filing-list" element={<PrivateRoute><ProtectedFilingTracker><FilingList /></ProtectedFilingTracker></PrivateRoute>} />
            <Route path="/filing-detail/:id" element={<PrivateRoute><ProtectedFilingTracker><FilingDetail /></ProtectedFilingTracker></PrivateRoute>} />
          </Routes>
        </div>
      </AdminUIProvider>
    </SubscriptionProvider>
  );
}

export default App;
