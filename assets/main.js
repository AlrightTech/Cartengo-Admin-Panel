document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("carexpo-sidebar");
  const mainContent = document.getElementById("carexpo-main-content");
  const toggleBtn = document.getElementById("carexpo-toggle-btn");
  const closeSidebarBtn = document.getElementById("carexpo-close-sidebar");

  function toggleSidebar() {
    if (window.innerWidth <= 992) {
      sidebar.classList.toggle("show");
    } else {
      sidebar.classList.toggle("collapsed");
      mainContent.classList.toggle("col-lg-11");
      mainContent.classList.toggle("col-xl-11");
    }
  }

  toggleBtn.addEventListener("click", toggleSidebar);

  closeSidebarBtn.addEventListener("click", () => {
    sidebar.classList.remove("show");
  });

  // Check screen size on resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      sidebar.classList.remove("show");
      if (sidebar.classList.contains("collapsed")) {
        mainContent.classList.add("col-lg-11", "col-xl-11");
      } else {
        mainContent.classList.remove("col-lg-11", "col-xl-11");
      }
    } else {
      mainContent.classList.remove("col-lg-11", "col-xl-11");
      sidebar.classList.remove("collapsed");
    }
  });

  // Close sidebar when clicking on a menu item on mobile
  const menuItems = document.querySelectorAll(".carexpo-menu-item");
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      if (window.innerWidth <= 992) {
        sidebar.classList.remove("show");
      }
    });
  });
});

// dropdown user-management table admin module start
// JavaScript to toggle the dropdown
function userToggleDropdown() {
  const dropdownMenu = document.getElementById("userDropdownMenu");
  dropdownMenu.classList.toggle("user-show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".user-action-btn")) {
    const dropdowns = document.getElementsByClassName("user-dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      const openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("user-show")) {
        openDropdown.classList.remove("user-show");
      }
    }
  }
};

// dropdown user-management table admin module end


// Password visibility toggle
document
  .querySelector(".login-password-toggle")
  .addEventListener("click", function () {
    const passwordInput = document.getElementById("login-password");
    const icon = this.querySelector("i");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.classList.remove("fa-eye");
      icon.classList.add("fa-eye-slash");
    } else {
      passwordInput.type = "password";
      icon.classList.remove("fa-eye-slash");
      icon.classList.add("fa-eye");
    }
  });

// seller profile change password start
function togglePassword(id, eyeIcon) {
  let passwordInput = document.getElementById(id);
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.src = "/assets/images/seller-pasword-icon11.svg"; // Change to open-eye icon
  } else {
    passwordInput.type = "password";
    eyeIcon.src = "/assets/images/seller-pasword-icon.svg"; // Change back to closed-eye icon
  }
}

// seller profile change password start

// seller create auction form calender start
// Initialize date pickers
document.addEventListener("DOMContentLoaded", function () {
  flatpickr(".datepicker", {
    dateFormat: "Y-m-d",
    allowInput: true,
    disableMobile: true,
  });

  // Add functionality to make the form work
  const form = document.querySelector(".auction-form");
  const inputs = form.querySelectorAll("input");

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      // You can add validation logic here
      console.log(`${this.placeholder}: ${this.value}`);
    });
  });
});
// seller create auction form calender start



document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.seller-button[data-command]');
    const editor = document.getElementById('sellerEditor');
    const fullscreenBtn = document.getElementById('sellerFullscreenBtn');
    const dropdown = document.querySelector('.seller-dropdown');

    // Ensure the editor is focused when clicked
    editor.addEventListener('click', () => editor.focus());

    // Initialize the editor
    editor.focus();

    // Handle formatting buttons (Fixed page refresh issue)
    buttons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault(); // Prevent form submission

            const command = this.dataset.command;

            // Ensure text is selected before applying formatting
            if (window.getSelection().toString().length > 0) {
                document.execCommand(command, false, null);
                editor.focus();
            } else {
                alert("Please select text before applying formatting.");
            }
        });
    });

    // Handle paragraph style dropdown (Now includes H1 - H6)
    dropdown.addEventListener('change', function () {
        const value = this.value;
        let command = 'formatBlock';
        let tag = 'p';

        if (value === 'Heading 1') tag = 'h1';
        else if (value === 'Heading 2') tag = 'h2';
        else if (value === 'Heading 3') tag = 'h3';
        else if (value === 'Heading 4') tag = 'h4';
        else if (value === 'Heading 5') tag = 'h5';
        else if (value === 'Heading 6') tag = 'h6';

        document.execCommand(command, false, `<${tag}>`);
        editor.focus();
    });

    // Handle fullscreen toggle
    fullscreenBtn.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent form submission

        const container = document.querySelector('.seller-editor-container');

        if (!document.fullscreenElement) {
            if (container.requestFullscreen) {
                container.requestFullscreen();
            } else if (container.mozRequestFullScreen) {
                container.mozRequestFullScreen();
            } else if (container.webkitRequestFullscreen) {
                container.webkitRequestFullscreen();
            } else if (container.msRequestFullscreen) {
                container.msRequestFullscreen();
            }
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    });
});
