import React from 'react';
import Input from '../../../../Component/Input/Input';
import InputWrap from '../../../../Component/InputWrap/InputWrap';
import Privacy from '../Privacy/Privacy';

const JoinCheckBox = props => {
  const { isScroll, onScroll, onChange } = props;

  return (
    <>
      <div className="signUpPrivacy" onScroll={onScroll}>
        <Privacy />
      </div>

      <Input
        className="checkbox signUpCheckBox"
        type="checkbox"
        text="개인정보 수집 동의"
        disabled={!isScroll ? true : false}
        onChange={onChange}
      />
    </>
  );
};
export default JoinCheckBox;
