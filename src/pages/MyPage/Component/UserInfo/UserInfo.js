import React from 'react';
import './UserInfo.scss';

const UserInfo = props => {
  const { userInfo } = props;
  return (
    <div className="memberData">
      <div className="memberDataHeader">
        <h3>회원 정보</h3>
      </div>
      <div className="memberDataContainer">
        <table className="memberDataTable">
          <tbody>
            <tr>
              <th scope="row" className="trTitle">
                이름
              </th>
              <td>{userInfo?.name}</td>
            </tr>
            <tr>
              <th scope="row" className="trTitle">
                휴대폰 번호
              </th>
              <td>{userInfo?.phoneNumber}</td>
            </tr>
            <tr>
              <th scope="row" className="trTitle">
                이메일
              </th>
              <td>{userInfo?.email}</td>
            </tr>
            <tr>
              <th scope="row" className="trTitle">
                주소
              </th>
              <td>서울특별시 강남구 테헤란로 427 위워크타워</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserInfo;
