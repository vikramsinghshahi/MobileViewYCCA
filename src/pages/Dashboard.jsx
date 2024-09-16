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

function Dashboard() {
  const options = [
    { value: 'site-one', label: 'Site One' },
    { value: 'site-two', label: 'Site Two' },
    { value: 'all', label: 'All' },
  ];

  // Function to handle option change
  const handleSelectChange = (selectedOption) => {
    console.log('Selected option:', selectedOption);
  };
  const profileSection = () => {
    return (
      <div className="card profile-section">
        <div className="dropDown">
          <h2>Hii Arjun,</h2>
          <DataField
            optionsData={options}
            defaultValue={options[0]}
            label=""
            onChange={handleSelectChange}
            className="custom-select"
          />
          <DataField
            optionsData={options}
            defaultValue={options[0]}
            label=""
            onChange={handleSelectChange}
            className="custom-select"
          />
        </div>
        <div className="avatar">
          <img src="/avatar.png" alt="User Avatar" />
        </div>
      </div>
    );
  };

  const formatDate = () => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = date.toLocaleString('en-US', { month: 'short' });
    const weekday = date.toLocaleString('en-US', { weekday: 'short' });
    return `${day} ${month}, ${weekday}`;
  };

  const header = () => {
    return (
      <div className="header">
        <div className="logo">
          <img src="/logo.png" alt="YCCA Logo" />
        </div>
        <div className="flex">
          <div className="microFont bold">Dashboard</div>
          <div className="date">
            {formatDate()}
            <img src="/hamburger.png" alt="YCCA Logo" className="hamburger" />
          </div>
        </div>
      </div>
    );
  };

  const announcementCard = () => {
    return (
      <div className="announcement-card">
        <div className="header">
          <h2>Announcement</h2>
          <a href="#">View all</a>
        </div>
        <p>Thank you for a great summer! We wish you the best of luck...</p>
      </div>
    );
  };

  const dailyReportCard = () => (
    <div className="daily-report-card">
      <h3>Daily Report</h3>
      <p>Drop-Off: 20</p>
      <p>Absents: 20</p>
    </div>
  );

  // const bottomNav = () => (
  //   <div className="bottom-nav">
  //     {/* Floating Red Button */}
  //     {/*
  //     <div className="floating-button">
  //       <img src="/dashboard.png" alt="Menu" />
  //     </div> */}

  //     {/* Navigation Icons */}
  //     <div className="nav-items">
  //       <div className="nav-item">
  //         <img src="/dashboard.png" alt="Menu" style={{ background: '#777' }} />
  //         <p>Dashboard</p>
  //       </div>
  //       <div className="nav-item">
  //         <img src="/timeline.png" alt="Timeline" />
  //         <p>Timeline</p>
  //       </div>
  // <div className="nav-item">
  //   <img src="/notifications.png" alt="Notifications" />
  //   <p>Notifications</p>
  // </div>
  // <div className="nav-item">
  //   <img src="/search.png" alt="Search" />
  //   <p>Search</p>
  // </div>
  //       <div className="nav-item">
  //         <img src="/more.png" alt="More" />
  //         <p>More</p>
  //       </div>
  //     </div>
  //   </div>
  // );

  const bottomNav = () => (
    <div className="bottom-nav">
      {/* Navigation Icons */}
      <div className="nav-items">
        {/* Dashboard link */}
        <NavLink to="/dashboard/home" className="nav-item">
          <img src="/dashboard.png" alt="Menu" style={{ background: '#777' }} />
          <p>Dashboard</p>
        </NavLink>

        {/* Timeline link */}
        <NavLink to="/dashboard/timeline" className="nav-item">
          <img src="/timeline.png" alt="Timeline" />
          <p>Timeline</p>
        </NavLink>

        {/* Notifications link */}
        {/* <NavLink to="/dashboard/notifications" className="nav-item">
          <img src="/notifications.png" alt="Notifications" />
          <p>Notifications</p>
        </NavLink> */}
        <div className="nav-item">
          <img src="/notifications.png" alt="Notifications" />
          <p>Notifications</p>
        </div>
        <div className="nav-item">
          <img src="/search.png" alt="Search" />
          <p>Search</p>
        </div>

        {/* Search link */}
        {/* <NavLink to="/dashboard/search" className="nav-item">
          <img src="/search.png" alt="Search" />
          <p>Search</p>
        </NavLink> */}

        {/* More link */}
        <NavLink to="/dashboard/more" className="nav-item">
          <img src="/more.png" alt="More" />
          <p>More</p>
        </NavLink>
      </div>
    </div>
  );

  const renderCards = () => {
    return (
      <>
        {profileSection()}
        <div className="card birthday-card">
          <img src="/birthday.png" alt="Search" />
        </div>
        <div className="card birthday-card card-3">
          <img src="/card3.png" alt="Search" />
        </div>
        <div className="card birthday-card card-4">
          <img src="/card4.png" alt="Search" />
        </div>
        <div className="card birthday-card card-5">
          <img src="/card5.png" alt="Search" />
        </div>
        <div className="card birthday-card card-6">
          <img src="/card6.png" alt="Search" />
        </div>
        <div className="card birthday-card card-7">
          <img src="/card7.png" alt="Search" />
        </div>
        <div className="card birthday-card card-8">
          <img src="/card8.png" alt="Search" />
        </div>
        {/* <div className="card ">2</div>
        <div className="card">2</div>
        <div className="card">2</div>
        <div className="card">2</div>
        <div className="card">2</div>
        <div className="card">2</div> */}
      </>
    );
  };

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
      {/* {header()} */}
      {/* <div className="bgImage">1212</div> */}
      {/* {profileSection()}
      {profileSection()}
      {profileSection()}
      {profileSection()} */}
      {/* <div className="profile-section">
        <div className="dropdowns">
          <select>
            <option value="YCCA">YCCA</option>
          </select>
          <select>
            <option value="All">All</option>
          </select>
        </div>
        <div className="avatar">
          <img src="/avatar.png" alt="User Avatar" />
        </div>
      </div> */}
      {/* <div className="main-content">
        {renderCards()}
        {announcementCard()}
        {dailyReportCard()}
        <DailyReportCard />
      </div> */}
      {bottomNav()}
      {/* <BottomNav /> */}
    </div>
  );
}

export default Dashboard;
