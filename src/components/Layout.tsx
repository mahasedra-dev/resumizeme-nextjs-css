import React from 'react';
import { useState } from 'react';
import Sidebar from './Sidebar';
const Layout: React.FC<any> = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  React.useEffect(() => {
    const checkWindowSize = () => {
      setIsDesktop(window.innerWidth > 768); // Vous pouvez ajuster cette valeur selon vos besoins
      setSidebarOpen(window.innerWidth > 768); // Vous pouvez ajuster cette valeur selon vos besoins
    };

    checkWindowSize();

    window.addEventListener('resize', checkWindowSize);

    return () => {
      window.removeEventListener('resize', checkWindowSize);
    };
  }, []);

  return (
    <div className="app">
      <nav className={sidebarOpen ? 'sidebar open' : 'sidebar'}>
        {!isDesktop && (
          <button className="menu-button" onClick={toggleSidebar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </button>
        )}
        <Sidebar />
      </nav>
      <div className="content">
        <header>
          {!isDesktop && (
            <div>
              <button className="menu-button" onClick={toggleSidebar}>
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
              </button>
            </div>
          )}
        </header>
        <main className='main'>
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
