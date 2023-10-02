import React from 'react';
import { useDaumPostcodePopup } from 'react-daum-postcode';
import Button from '../../../../../Component/Button/Button';

export const Postcode = () => {
  const open = useDaumPostcodePopup(
    '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js',
  );

  const handleComplete = data => {
    console.log(data);

    let fullAddress = data.address;
    let extraAddress = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extraAddress += data.bname;
      }
      if (data.buildingName !== '') {
        extraAddress +=
          extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    console.log(fullAddress); // e.g. '서울 성동구 왕십리로2길 20 (성수동1가)'
  };

  const handleClick = () => {
    open({ onComplete: handleComplete });
  };

  return (
    <Button
      className="addressSearch"
      scale="xSmall"
      shape="fill"
      color="tertiary"
      onClick={handleClick}
    >
      우편번호 찾기
    </Button>
  );
};
