import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Tab } from '../../Component/Tab/Tab';
import { TABS } from '../../data/TABS';
import RecentOrderDetails from './Component/RecentOrderDetails/RecentOrderDetails';
import UserInfo from './Component/UserInfo/UserInfo';
import Delivery from './Component/Delivery/Delivery';
import './MyPage.scss';

const MyPage = () => {
  // State
  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const { tabId } = useParams();

  // useEffect

  useEffect(() => {
    fetch(`http://51.20.57.76:8000/user/userInfo`, {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(result => {
        setUserInfo(result.user);
      });
  }, []);

  console.log(userInfo);

  return (
    <main className="myPage">
      <div className="myPageHeader">
        <h2>마이페이지</h2>
      </div>
      <Tab TABS={TABS} />
      {tabId === 'userinfo' && (
        <UserInfo
          userInfo={userInfo?.userRegistrationData}
          address={userInfo?.userDatadeliveryAddressData}
        />
      )}
      {tabId === 'recentorder' && <RecentOrderDetails />}
      {tabId === 'delivery' && (
        <Delivery address={userInfo?.userDatadeliveryAddressData} />
      )}
    </main>
  );
};

export default MyPage;
