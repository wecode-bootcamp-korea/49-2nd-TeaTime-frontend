import React from 'react';
import Input from '../../../../Component/Input/Input';
import Privacy from '../Privacy/Privacy';

const JoinCheckBox = props => {
  const { className, isScroll, onScroll, onChange } = props;

  return (
    <>
      <div className="signUpPrivacy" onScroll={onScroll}>
        <Privacy />
      </div>

      <Input
        className={className ? `checkbox ${className}` : 'checkbox'}
        type="checkbox"
        text="개인정보 수집 동의"
        disabled={!isScroll ? true : false}
        onChange={onChange}
      />
    </>
  );
};
export default JoinCheckBox;
