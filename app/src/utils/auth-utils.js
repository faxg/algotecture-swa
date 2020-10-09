export default async function getUserInfo() {
    
    // FIXME: test authentication locally. 
    // We may want to simulate login/logout (cookies?) and different roles
    if (!process.env.isProd) {
        return await getUserInfo_local_test()
    }

    try {
        const response = await fetch('/.auth/me');
        const payload = await response.json();
        const { clientPrincipal } = payload;
        return clientPrincipal;
    } catch (error) {
        console.error('No profile could be found at /.auth/me -> not logged in');
        return undefined;
    }
}

async function getUserInfo_local_test() {
    return {
    "identityProvider": "github",
    "userId": "xxxxxxxxxx",
    "userDetails": "TestUser",
    "userRoles": [
      "anonymous",
      "authenticated"
    ]
  }
}

export { getUserInfo };