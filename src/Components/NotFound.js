import React from 'react';

function NotFound(props) {
  return (
    <>
      <img src={`${process.env.PUBLIC_URL}/images/notfound.png`} alt="나가" />
    </>
  );
}

export default NotFound;