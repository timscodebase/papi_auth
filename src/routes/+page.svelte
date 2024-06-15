<script lang="ts">
	import { enhance } from "$app/forms";
  import { pb } from "$lib/pb";

  async function onSubmit() {
    const authData = await pb.collection('users').authWithOAuth2({ provider: 'google' })

    console.log(pb.authStore.isValid);
    console.log(pb.authStore.token);
    console.log(pb.authStore.model.id);
  }

</script>

<form on:submit={onSubmit}>
  <!-- <div>
    <label for="username">Username</label>
    <input type="text" name="username" placeholder="Username" />
  </div>
  <div>
    <label for="email">Email</label>
    <input type="email" name="email" placeholder="Email" />
  </div>
  <div>
    <label for="password">Password</label>
    <input type="password" name="password" placeholder="Password" />
  </div> -->
  <button type="submit">Sign In</button>
</form>
