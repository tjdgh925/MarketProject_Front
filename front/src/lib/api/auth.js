import market from './market';

export async function register({
  memberName,
  email,
  address,
  password,
  passwordConfirm,
}) {
  await market.post('/register', {
    memberName,
    email,
    address,
    password,
    passwordConfirm,
  });
}

export async function login({ email, password }) {
  await market
    .post('/login', {
      email,
      password,
    })
    .then((response) => {
      const { accessToken, refreshToken } = response.data;
      const user = { accessToken, refreshToken, email };
      localStorage.setItem('user', JSON.stringify(user));
    });
}
