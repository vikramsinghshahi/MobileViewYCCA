import React, { useState } from 'react';
import {
  Routes,
  Route,
  Navigate,
  NavLink,
  useLocation,
} from 'react-router-dom';
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
import DashboardPng from '../assets/dashboard.png';
import TimelinePng from '../assets/timeline.png';
import NotificationsPng from '../assets/notifications.png';
import SearchPng from '../assets/search.png';
import MorePng from '../assets/more.png';
import DashboardIcon from '../Common/Icons/Dashboard';
import MoreIcon from '../Common/Icons/More';
import TimelineIcon from '../Common/Icons/Timeline';
import FeeBreakUp from './DashboardPages/FeeBreakUp';
import SendChat from '../Common/Icons/SendChat';
import AddAnnouncement from './DashboardPages/AddAnnouncement';
import AddChats from './DashboardPages/AddChats';
import Classes from './DashboardPages/Classes';
import StudentList from './DashboardPages/Studentlist';
import Parent from './DashboardPages/Parent';
import ParentChat from './DashboardPages/ParentChat';
import AddActivity from './DashboardPages/AddActivity';
import AddReport from './DashboardPages/AddReport';

function Dashboard() {
  const location = useLocation();
  const isChatRoute =
    location.pathname.includes('/dashboard/chats/') ||
    location.pathname.includes(
      '/dashboard/chat/classes/studentList/parentList/parentchat'
    );
  const bottomNav = () => (
    <div className="bottom-nav">
      <div className="nav-items">
        <NavLink to="/dashboard/home" className="nav-item">
          <DashboardIcon width="24" height="24" />
          {/* <img src={DashboardPng} alt="Menu" /> */}
          <p>Dashboard</p>
        </NavLink>
        <NavLink to="/dashboard/timeline" className="nav-item">
          {/* <img src={TimelinePng} alt="Timeline" /> */}
          <TimelineIcon />
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
          {/* <img src={MorePng} alt="More" /> */}
          <MoreIcon />
          <p>More</p>
        </NavLink>
      </div>
    </div>
  );

  const chatBar = () => (
    <div className="bottom-nav chat-nav">
      <input type="text" placeholder="Write Something here" />
      <SendChat />
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
        <Route path="announcement/add" element={<AddAnnouncement />} />
        <Route path="activity" element={<Activity />} />
        <Route path="activity/:id" element={<SingleActivity />} />
        <Route path="activity/add" element={<AddActivity />} />
        <Route path="report" element={<Report />} />
        <Route path="report/:id" element={<SingleReport />} />
        <Route path="report/add" element={<AddReport />} />
        <Route path="chats" element={<Chats />} />
        <Route path="chats/:id" element={<SingleChat />} />
        <Route path="chat/add" element={<AddChats />} />
        <Route path="chat/classes" element={<Classes />} />
        <Route path="chat/classes/studentList" element={<StudentList />} />
        <Route
          path="chat/classes/studentList/parentList"
          element={<Parent />}
        />
        <Route
          path="chat/classes/studentList/parentList/parentchat"
          element={<ParentChat />}
        />
        <Route path="fees" element={<Fees />} />
        <Route path="fees/:id" element={<SingleFee />} />
        <Route path="fees/:id/fee-breakup" element={<FeeBreakUp />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };
  console.log({ location });
  return (
    <div className="page dashboard">
      {renderContentPages()}
      {isChatRoute ? chatBar() : bottomNav()}
    </div>
  );
}

export default Dashboard;
