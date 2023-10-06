import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Tab.scss';

export const Tab = props => {
  const { TABS } = props;
  const [currentTab, setCurrentTab] = useState(0);

  const selectTabHandler = index => {
    setCurrentTab(index);
  };
  return (
    <div className="myPageNav">
      <ul className="myPageNavList">
        {TABS.map((tab, index) => (
          <li
            key={tab.id}
            className={`myPageNavListItem 
            ${currentTab === index && 'selected'}`}
          >
            <Link
              to={tab.url}
              onClick={() => {
                selectTabHandler(index);
              }}
            >
              {tab.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
