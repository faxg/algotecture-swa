<script>
  // we may pass userInfo into this component (undefined if not logged in)
  export let userInfo = undefined; //{clientPrincipal: {userDeatils: "Foo"}};
  export let brandName = "Algotecture";
</script>

<style>
  .logo-img {
    max-height: 32px;
  }
</style>

<nav class="navbar navbar-expand-lg navbar-light bg-light p-1">
  <div class="container">
    <a class="navbar-brand" href="/home">
      <img src="/img/logo.png" class="logo-img" alt="Logo" />
      {brandName}
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon" />
    </button>

    {#if userInfo}
      <!-- Top right menu when user is logged in-->
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="navbarDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            {userInfo.userDetails}
          </a>
          <div
            class="dropdown-menu dropdown-menu-right animate slideIn"
            aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="/profile">My Profile</a>
            <a class="dropdown-item" href="http://aka.ms/staticwebapps" target="_blank">Documentation</a>
            <div class="dropdown-divider" />
            <a class="dropdown-item" href="/logout">Logout</a>
          </div>
        </li>
      </ul>
    </div>
    {:else}
      <!-- Top right menu when user is NOT logged in-->

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <span class="align-text-bottom">Login with: </span>
                <a href="/.auth/login/github" class="btn btn-floating btn-sm btn-secondary" alt="Login with Github">
                  <i class="fab fa-github-square fa-2x" aria-hidden="true"></i>
              </a>

                <a href="/.auth/login/twitter" class="btn btn-floating btn-sm btn-secondary" alt="Login with Twitter">
                    <i class="fab fa-twitter-square fa-2x" aria-hidden="true"></i>
                </a>


                <a href="/.auth/login/google" class="btn btn-floating btn-sm btn-secondary" alt="Login with Google">
                    <i class="fab fa-google fa-2x" aria-hidden="true"></i>
                </a>
                <a href="/.auth/login/facebook" class="btn btn-floating btn-sm btn-secondary" alt="Login with Facebook">
                    <i class="fab fa-facebook fa-2x" aria-hidden="true"></i>
                </a>

            </li>
        </ul>
    </div>
    {/if}
  </div>
</nav>
