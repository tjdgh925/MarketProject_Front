import market from './market';

export async function register({
  memberName,
  email,
  address,
  password,
  passwordConfirm,
}) {
  await market.post('/form/register', {
    memberName,
    email,
    address,
    password,
    passwordConfirm,
  });
}
