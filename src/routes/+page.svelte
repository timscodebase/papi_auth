<script lang="ts">
	import { enhance } from "$app/forms";

</script>

<form action="?/signup" method="post" use:enhance>
  <div>
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
  </div>
  <button type="submit">Sign Up</button>
</form>
