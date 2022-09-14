import React, { useEffect } from 'react';
import { useParams } from 'react-router';

function OAuthLoginRedirect() {
  const params = useParams();

  useEffect(() => {
    localStorage.clear();
    var tokens = params.token.split('+');
    var tokenObject = {
      accessToken: tokens[0],
      refreshToken: tokens[1],
    };

    localStorage.setItem('user', JSON.stringify(tokenObject));

    window.location.replace('/');
  }, []);

  return <></>;
}

export default OAuthLoginRedirect;
