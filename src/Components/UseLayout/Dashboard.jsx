// Dashboard.js
import { useRef, useLayoutEffect, useState } from 'react';
import MainContent from './MainContent';
import Sidebar from './SideBar';


const Dashboard = () => {
  const [content, setContent] = useState("This is some initial content.");
  const contentRef = useRef(null);
  const [sidebarHeight, setSidebarHeight] = useState(0);

  // Use useLayoutEffect to measure the content height and adjust sidebar height
  useLayoutEffect(() => {
    if (contentRef.current) {
      const height = contentRef.current.getBoundingClientRect().height;
      setSidebarHeight(height);
    }
  }, [content]); // Re-run the effect whenever content changes

  return (
    <div style={{ position: 'relative', display: 'flex' }}>
      <div ref={contentRef} style={{ flex: 1 }}>
        <MainContent content={content} />
        <button onClick={() => setContent("Updated content that might change the height!")}>
          Update Content
        </button>
      </div>
      <Sidebar height={sidebarHeight} />
    </div>
  );
};

export default Dashboard;
