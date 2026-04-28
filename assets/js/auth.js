(function () {
  const ADMIN_PASSWORD = "1234"; 
  const SESSION_KEY = "schoolSelfEvalV2:adminLoggedIn";

  window.AdminAuth = {
    isLoggedIn() {
      return sessionStorage.getItem(SESSION_KEY) === "yes";
    },

    login(password) {
      if (password === ADMIN_PASSWORD) {
        sessionStorage.setItem(SESSION_KEY, "yes");
        return true;
      }
      return false;
    },

    logout() {
      sessionStorage.removeItem(SESSION_KEY);
      location.href = "login.html";
    },

    protect() {
      if (!this.isLoggedIn()) {
        location.href = "login.html";
      }
    }
  };

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("loginForm");
    const msg = document.getElementById("loginMsg");

    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const password = form.password.value.trim();

      if (window.AdminAuth.login(password)) {
        location.href = "admin.html";
      } else {
        msg.textContent = "كلمة المرور غير صحيحة.";
        msg.style.color = "#b42318";
      }
    });
  });
})();