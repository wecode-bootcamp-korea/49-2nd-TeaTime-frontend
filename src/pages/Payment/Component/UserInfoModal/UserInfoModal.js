import React from 'react';
import Input from '../../../../Component/Input/Input';
import './UserInfoModal.scss';

const UserInfoModal = props => {
  const { onChange, userInfoData } = props;

  const parts = userInfoData.email.split('@');
  const email = parts[0];
  const domain = parts[1];

  const phoneParts = userInfoData.phoneNumber.split('-');
  const phone = phoneParts[0];
  const phone2 = phoneParts[1];
  const phone3 = phoneParts[2];

  return (
    <section>
      <div className="paymentUserInfoInputWrap">
        <table className="paymentUserInfoTable">
          <caption>주문 고객 정보</caption>
          <colgroup>
            <col style={{ width: '150px' }} />
          </colgroup>
          <tbody>
            <tr>
              <th className="userName" scope="row">
                <p className="infoText">이름</p>
              </th>
              <td>
                <Input
                  className="paymentUserInfoNameInput"
                  scale="middle"
                  type="text"
                  name="name"
                  onChange={onChange}
                  defaultValue={userInfoData.name}
                />
              </td>
            </tr>
            <tr>
              <th className="userEmail" scope="row">
                <p className="infoText">이메일</p>
              </th>
              <td>
                <div className="userEmailWrap">
                  <Input
                    className="paymentUserInfoEmailInput"
                    scale="middle"
                    type="text"
                    name="email"
                    onChange={onChange}
                    defaultValue={email}
                  />
                  <span className="text"> @ </span>
                  <select
                    className="emailSelect"
                    name="domain"
                    onChange={onChange}
                  >
                    <option value={domain}>{domain}</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="hanmail.net">hanmail.net</option>
                    <option value="nate.com">nete.com</option>
                    <option value="직접 입력">직접 입력</option>
                  </select>
                </div>
              </td>
            </tr>
            <tr>
              <th className="userPhone" scope="row">
                <p className="infoText">휴대전화</p>
              </th>
              <td>
                <div className="userPhoneWrap">
                  <select
                    className="phoneSelect"
                    name="phoneFix"
                    onChange={onChange}
                  >
                    <option value={phone}>{phone}</option>
                    <option value="010">010</option>
                    <option value="011">011</option>
                    <option value="016">016</option>
                    <option value="017">017</option>
                    <option value="018">018</option>
                    <option value="019">019</option>
                  </select>
                  <span className="text">-</span>
                  <Input
                    className="paymentUserInfoInput"
                    scale="middle"
                    type="text"
                    name="phoneNumber"
                    placeholder="휴대폰"
                    onChange={onChange}
                    defaultValue={phone2 + phone3}
                  />
                </div>
              </td>
            </tr>
            <tr>
              <th className="senderName" scope="row">
                <p className="infoText">받는분 이름</p>
              </th>
              <td>
                <Input
                  className="paymentUserInfoInput"
                  scale="middle"
                  type="text"
                  name="senderName"
                  placeholder="받는분 이름"
                  onChange={onChange}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default UserInfoModal;
