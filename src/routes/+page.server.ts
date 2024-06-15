import type { Actions, PageServerLoad } from './$types';
import { pb } from '$lib/pb'; // Replace 'your-request-library' with the actual library you are using for the request object

export const load = (async () => {
  return {};
}) satisfies PageServerLoad;

export const actions: Actions = {
  signup: async ({ request }) => { // Specify the type of the 'request' parameter
    const data = await request.formData();
    const email = data.get('email');
    const password = data.get('password');
    const username = data.get('username');

    const user = await pb.sql(`
      USE DATABASE auth-demo
      DECRYPT DATABASE auth-demo
      INSERT INTO users (username, password, email) VALUES (?, ?, ?)
      `, [username, password, email]);
    console.log(user);

    return { user };
  },
  login: async ({ }) => {},
  logout: async ({ }) => { pb.authStore.clear() },
  oauth: async ({ }) => {
    const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' })

    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model.id);
  },
};