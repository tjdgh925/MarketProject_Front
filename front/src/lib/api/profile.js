import market from './market';

export async function getProfile() {
  const response = await market.get('/profile').then((response) => {
    return response.data;
  });

  return response;
}

export async function updateProfile({ email, memberName, address }) {
  await market.patch('/profile', {
    memberName,
    address,
  });
}
