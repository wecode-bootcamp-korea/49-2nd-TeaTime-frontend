import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../Component/Tab/Tab';
import { DILIVERY_DATA, TABS } from '../../data/TABS';
import RecentOrderDetails from './Component/RecentOrderDetails/RecentOrderDetails';
import UserInfo from './Component/UserInfo/UserInfo';
import Delivery from './Component/Delivery/Delivery';
import './MyPage.scss';

const MyPage = () => {
  const { tabId } = useParams();

  return (
    <div className="myPage">
      <div className="myPageHeader">
        <h2>마이페이지</h2>
      </div>
      <Tab TABS={TABS} />
      {tabId === 'userinfo' && <UserInfo />}
      {tabId === 'recentorder' && <RecentOrderDetails />}
      {tabId === 'delivery' && <Delivery DILIVERY_DATA={DILIVERY_DATA} />}
    </div>
  );
};

export default MyPage;
