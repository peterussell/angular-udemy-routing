export class AuthService {
  // Dummy auth service
  loggedIn = false;

  isAuthenticated() {
    // Simulate checking the server and it taking some time
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.loggedIn);
      }, 800);
    });
    return promise;
  }

  login() {
    this.loggedIn = true;
  }

  logout() {
    this.loggedIn = false;
  }
}
