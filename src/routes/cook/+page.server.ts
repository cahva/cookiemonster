
export async function load({ cookies }) {
  const random = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

  cookies.set('token', random, {
    httpOnly: true,
    path: '/'
  });

  return {
    token: random
  };
}