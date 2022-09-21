import React, { useState, useEffect } from 'react';
import ProfileButton from '../../components/profile/ProfileButton';
import ProfileForm from '../../components/profile/ProfileForm';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback } from 'react';
import { getProfile, updateProfile } from '../../modules/profile';
import ErrorMessage from '../../components/common/ErrorMessage';

const ProfileBlock = styled.div`
  display: flex;
  flex-direction: column;
  height: 95%;
  align-items: center;
`;

const ProfileBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 60%;
  border: #e3e3e3 2px solid;
  border-radius: 10px;
  padding: 7rem;
`;
const ProfilePage = () => {
  const dispatch = useDispatch();
  const profileData = useSelector((state) => state.profile.data);
  const isLoading = useSelector((state) => state.profile.error.loading);
  const error = useSelector((state) => state.profile.error.error);

  const [profileInfo, setProfileInfo] = useState({
    email: '',
    memberName: '',
    address: '',
  });

  const onChange = useCallback(
    (e) => {
      const { value, name } = e.target;
      console.log(value, name);
      setProfileInfo({
        ...profileInfo,
        [name]: value,
      });
    },
    [profileInfo]
  );

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(updateProfile(profileInfo));
    },
    [dispatch, profileInfo]
  );

  useEffect(() => {
    dispatch(getProfile());
  }, []);

  useEffect(() => {
    if (!isLoading && profileData) {
      const { email, address, memberName } = profileData;
      setProfileInfo({
        email,
        memberName,
        address,
      });
    }
  }, [isLoading, profileData]);

  return (
    <ProfileBlock>
      {!isLoading && (
        <ProfileBox>
          <ProfileForm profileInfo={profileInfo} onChange={onChange} />
          {error ? <ErrorMessage>{error}</ErrorMessage> : <div />}
          <ProfileButton onSubmit={onSubmit} />
        </ProfileBox>
      )}
    </ProfileBlock>
  );
};

export default ProfilePage;
