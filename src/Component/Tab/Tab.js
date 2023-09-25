import React from 'react';
import { Link } from 'react-router-dom';
import './Tab.scss';

export const Tab = props => {
  const { TABS, className } = props;

  return (
    <div className="myPageNav">
      <ul className="myPageNavList">
        {TABS.map(tab => (
          <li key={tab.id} className={`myPageNavListItem ${className}`}>
            <Link to={tab.url}>{tab.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
