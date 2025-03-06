document.addEventListener("DOMContentLoaded", () => {
    const sidebar = document.getElementById("carexpo-sidebar")
    const mainContent = document.getElementById("carexpo-main-content")
    const toggleBtn = document.getElementById("carexpo-toggle-btn")
    const closeSidebarBtn = document.getElementById("carexpo-close-sidebar")
  
    function toggleSidebar() {
      if (window.innerWidth <= 992) {
        sidebar.classList.toggle("show")
      } else {
        sidebar.classList.toggle("collapsed")
        mainContent.classList.toggle("col-lg-11")
        mainContent.classList.toggle("col-xl-11")
      }
    }
  
    toggleBtn.addEventListener("click", toggleSidebar)
  
    closeSidebarBtn.addEventListener("click", () => {
      sidebar.classList.remove("show")
    })
  
    // Check screen size on resize
    window.addEventListener("resize", () => {
      if (window.innerWidth > 992) {
        sidebar.classList.remove("show")
        if (sidebar.classList.contains("collapsed")) {
          mainContent.classList.add("col-lg-11", "col-xl-11")
        } else {
          mainContent.classList.remove("col-lg-11", "col-xl-11")
        }
      } else {
        mainContent.classList.remove("col-lg-11", "col-xl-11")
        sidebar.classList.remove("collapsed")
      }
    })
  
    // Close sidebar when clicking on a menu item on mobile
    const menuItems = document.querySelectorAll(".carexpo-menu-item")
    menuItems.forEach((item) => {
      item.addEventListener("click", () => {
        if (window.innerWidth <= 992) {
          sidebar.classList.remove("show")
        }
      })
    })
  })
  
  