import React, { useEffect } from 'react';
import { useParams } from 'react-router';

function OAuthLoginRedirect() {
  const params = useParams();

  useEffect(() => {
    localStorage.clear();
    var tokens = params.token.split('+');
    localStorage.setItem('accessToken', tokens[0]);
    localStorage.setItem('refreshToken', tokens[1]);

    window.location.replace('/');
  }, []);

  return <></>;
}

export default OAuthLoginRedirect;
