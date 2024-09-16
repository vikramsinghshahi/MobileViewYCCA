import React from 'react';
import { Routes, Route, Navigate, NavLink } from 'react-router-dom';
import DataField from '../Common/DataField/DataField';
import NotFound from './NotFound';
import Home from './DashboardPages/Home';
import More from './DashboardPages/More';
import Timeline from './DashboardPages/Timeline';
import './Pages.scss';
import Announcement from './DashboardPages/Announcement';
import Activity from './DashboardPages/Activity';
import Report from './DashboardPages/Report';
import Chats from './DashboardPages/Chats';
import SingleReport from './DashboardPages/SingleReport';
import SingleActivity from './DashboardPages/SingleAcitivity';
import SingleAnnouncement from './DashboardPages/SingleAnnounce';
import SingleChat from './DashboardPages/SingleChat';
import Fees from './DashboardPages/Fees';
import SingleFee from './DashboardPages/SingleFee';
import Profile from './DashboardPages/Profile';
// import Avatar from '../assets/avatar.png';
// import logo from '../assets/logo.png';
// import Hamburger from '../assets/hamburger.png';
import DashboardPng from '../assets/dashboard.png';
import TimelinePng from '../assets/timeline.png';
import NotificationsPng from '../assets/notifications.png';
import SearchPng from '../assets/search.png';
import MorePng from '../assets/more.png';

function Dashboard() {
  const bottomNav = () => (
    <div className="bottom-nav">
      <div className="nav-items">
        <NavLink to="/dashboard/home" className="nav-item">
          <img src={DashboardPng} alt="Menu" style={{ background: '#777' }} />
          <p>Dashboard</p>
        </NavLink>
        <NavLink to="/dashboard/timeline" className="nav-item">
          <img src={TimelinePng} alt="Timeline" />
          <p>Timeline</p>
        </NavLink>

        <div className="nav-item">
          <img src={NotificationsPng} alt="Notifications" />
          <p>Notifications</p>
        </div>
        <div className="nav-item">
          <img src={SearchPng} alt="Search" />
          <p>Search</p>
        </div>
        <NavLink to="/dashboard/more" className="nav-item">
          <img src={MorePng} alt="More" />
          <p>More</p>
        </NavLink>
      </div>
    </div>
  );

  const renderContentPages = () => {
    return (
      <Routes>
        <Route index element={<Navigate to="/dashboard/home" replace />} />
        <Route path="home" element={<Home />} />
        <Route path="more" element={<More />} />
        <Route path="timeline" element={<Timeline />} />
        <Route path="announcement" element={<Announcement />} />
        <Route path="announcement/:id" element={<SingleAnnouncement />} />
        <Route path="activity" element={<Activity />} />
        <Route path="activity/:id" element={<SingleActivity />} />
        <Route path="report" element={<Report />} />
        <Route path="report/:id" element={<SingleReport />} />
        <Route path="chats" element={<Chats />} />
        <Route path="chats/:id" element={<SingleChat />} />
        <Route path="fees" element={<Fees />} />
        <Route path="fees/:id" element={<SingleFee />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
  return (
    <div className="page dashboard">
      {renderContentPages()}
      {bottomNav()}
    </div>
  );
}

export default Dashboard;
