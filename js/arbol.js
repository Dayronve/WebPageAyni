// Cuando el DOM esté listo
document.addEventListener("DOMContentLoaded", () => {
  // =====================
  // INDEX.HTML
  // =====================

  const btnEnterOld = document.getElementById("btnEnter");
  const btnCreateOld = document.getElementById("btnCreate");
  const btnSend = document.getElementById("btnSend");

  if (btnEnterOld) {
    btnEnterOld.addEventListener("click", () => {
      window.location.href = "pagina2.html";
    });
  }

  if (btnCreateOld) {
    btnCreateOld.addEventListener("click", () => {
      window.location.href = "pagina2.html";
    });
  }

  if (btnSend) {
    btnSend.addEventListener("click", () => {
      const email = document.getElementById("email").value;
      console.log(`Enviar invitación a ${email}`);
      alert(`Invitation sent to ${email}`);
    });
  }

  // =====================
  // PAGINA2.HTML
  // =====================

  const btnSend2 = document.getElementById("btnSend2");
  const btnReturn1 = document.getElementById("btnReturn1");
  const btnReturn2 = document.getElementById("btnReturn2");

  if (btnSend2) {
    btnSend2.addEventListener("click", () => {
      const email2 = document.getElementById("email2").value;
      console.log(`Re-enviar invitación a ${email2}`);
      alert(`Invitation re-sent to ${email2}`);
    });
  }

  if (btnReturn1) {
    btnReturn1.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  if (btnReturn2) {
    btnReturn2.addEventListener("click", () => {
      window.location.href = "index.html";
    });
  }

  // Aceptar / Rechazar usuarios (solo efecto visual)
  document.querySelectorAll(".accept").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.target.style.opacity = 0.5;
      console.log("User accepted");
    })
  );

  document.querySelectorAll(".reject").forEach((btn) =>
    btn.addEventListener("click", (e) => {
      e.target.style.opacity = 0.5;
      console.log("User rejected");
    })
  );

  // =====================
  // FUNCIONES PARA INDEX – MODAL
  // =====================

  const modal = document.getElementById("myModal");
  const openModal = document.getElementById("openModal");
  const closeModal = document.querySelector(".close");
  const confirmCreate = document.getElementById("confirmCreate");
  const btnEnter = document.getElementById("btn-enter");

  // Mostrar el modal
  if (openModal) {
    openModal.addEventListener("click", () => {
      modal.style.display = "flex";
    });
  }

  // Cerrar el modal al hacer clic en la X
  if (closeModal) {
    closeModal.addEventListener("click", () => {
      modal.style.display = "none";
    });
  }

  // Cerrar el modal al hacer clic fuera del contenido
  if (modal) {
    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    });
  }

  // Confirmar creación
  if (confirmCreate) {
    confirmCreate.addEventListener("click", () => {
      window.location.href = "pagina2.html";
    });
  }

  // Botón "Enter Family Tree"
  if (btnEnter) {
    btnEnter.addEventListener("click", () => {
      window.location.href = "pagina2.html";
    });
  }

  // =====================
  // Sidebar abrir/cerrar
  // =====================

  const openBtn = document.querySelector(".sidebar-btn.open-btn");
  const closeBtn = document.querySelector(".sidebar-btn.close-btn");
  const sidebar = document.querySelector(".sidebar");

  if (openBtn && closeBtn && sidebar) {
    openBtn.addEventListener("click", () => {
      sidebar.classList.remove("collapsed");
    });
    closeBtn.addEventListener("click", () => {
      sidebar.classList.add("collapsed");
    });
  }
});
// Mostrar el modal de verificación
document.addEventListener("DOMContentLoaded", () => {
  const openModalBtn = document.getElementById("openModal");
  const modal = document.getElementById("verificationModal");

  if (openModalBtn && modal) {
    openModalBtn.addEventListener("click", () => {
      modal.style.display = "flex";
    });

    // Cerrar al hacer click fuera del contenido
    window.addEventListener("click", (event) => {
      if (event.target === modal) {
        modal.style.display = "none";
      }
    });

    // Auto-focus al siguiente input
    const inputs = modal.querySelectorAll(".code-inputs input");
    inputs.forEach((input, idx) => {
      input.addEventListener("input", () => {
        if (input.value.length === 1 && idx < inputs.length - 1) {
          inputs[idx + 1].focus();
        }
      });
    });

    // Acción al presionar "GET INTO"
    const verifyBtn = document.getElementById("verifyCode");
    verifyBtn.addEventListener("click", () => {
      const code = Array.from(inputs).map(input => input.value).join('');
      console.log("Código ingresado:", code);
      // Aquí puedes hacer validación o redirección
      alert(`Entered Code: ${code}`);
      modal.style.display = "none";
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.querySelector(".sidebar-btn.open-btn");
  const closeBtn = document.querySelector(".sidebar-btn.close-btn");
  const sidebar = document.querySelector(".sidebar");

  if (openBtn && closeBtn) {
    openBtn.addEventListener("click", () => sidebar.classList.remove("collapsed"));
    closeBtn.addEventListener("click", () => sidebar.classList.add("collapsed"));
  }

  // Abrir/cerrar modal
  const openModal = document.getElementById("openModal");
  const modal = document.getElementById("verificationModal");

  if (openModal && modal) {
    openModal.addEventListener("click", () => {
      modal.classList.add("show");
    });

    // Cerrar si haces clic fuera del contenido
    modal.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const openBtn = document.querySelector(".open-btn");
  const closeBtn = document.querySelector(".close-btn");

  openBtn.addEventListener("click", () => {
    sidebar.classList.add("expanded");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("expanded");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const sidebar = document.querySelector(".sidebar");
  const openBtn = document.querySelector(".open-btn");
  const closeBtn = document.querySelector(".close-btn");

  openBtn.addEventListener("click", () => {
    sidebar.classList.add("expanded");
  });

  closeBtn.addEventListener("click", () => {
    sidebar.classList.remove("expanded");
  });
});

