<script>
  import { onMount } from 'svelte';
  import { Router, Link, Route } from "svelte-routing";

  import { Home, Redirect, PageNotFound, Login, Profile } from "./pages";
  import { TopBar, Footer } from "./components";

  import { getUserInfo } from "./utils/auth-utils.js"

  export let url = "";

  // when ready, load user profile info
  let userInfo = undefined; // {userDetails: "Foo"}
  onMount(async () => (userInfo = await getUserInfo()));
</script>

<Router {url}>
  <!-- The main content area -->
  <div class="d-flex flex-column" id="content-wrapper">
    <div id="content">
      <!-- The top navbar -->
      <TopBar {userInfo} />

      <!-- Content area -->
      <div class="container-fluid">
        <Route path="/">
          <Redirect path="/home" />
        </Route>

        <Route path="/home" component={Home} />

        <Route path="/login" component={Login} />
        <Route path="/profile" component={Profile} {userInfo} />

        <Route path="/404-not-found" component={PageNotFound} />
        <Route path="**" component={PageNotFound} />
      </div>

      <!-- Footer -->
      <Footer />
    </div>
  </div>
</Router>
