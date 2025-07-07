const modalLogin = document.getElementById('modal-login-without-password');
    const modalForgot = document.getElementById('modal-forgot-password');

    const links = document.querySelectorAll('.options a');

    links[0].addEventListener('click', (e) => {
      e.preventDefault();
      modalLogin.style.display = 'flex';
    });

    links[1].addEventListener('click', (e) => {
      e.preventDefault();
      modalForgot.style.display = 'flex';
    });

    window.addEventListener('click', (e) => {
      if (e.target === modalLogin) modalLogin.style.display = 'none';
      if (e.target === modalForgot) modalForgot.style.display = 'none';
    });