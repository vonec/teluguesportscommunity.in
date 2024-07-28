<template>
  <div class="mobile-navigation">
    <nav class="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li
          v-for="(menuItem, index) in menu"
          :key="index"
          class="menu-item-has-children relative block"
        >
          <n-link
            class="text-base font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black text-dark"
            :to="menuItem.link"
          >
            {{ menuItem.title }}
          </n-link>
          <ul v-if="menuItem.submenu.length" class="sub-menu ml-2">
            <li
              v-for="(submenuItem, subIndex) in menuItem.submenu"
              :key="subIndex"
            >
              <n-link
                class="text-sm font-semibold capitalize block pb-4 pt-4 border-b-1 border-gray-200 transition-all hover:text-primary text-black"
                :to="submenuItem.link"
                >{{ submenuItem.title }}</n-link
              >
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import menu from "@/data/menu.json";
export default {
  name: "MobileNavMenu",
  data() {
    return {
      menu,
    };
  },
  mounted() {
    const offCanvasNav = document.querySelector("#offcanvas-navigation");
    const offCanvasNavSubMenu = offCanvasNav.querySelectorAll(".sub-menu");
    const anchorLinks = offCanvasNav.querySelectorAll("a");

    for (let i = 0; i < offCanvasNavSubMenu.length; i++) {
      offCanvasNavSubMenu[i].insertAdjacentHTML(
        "beforebegin",
        "<span class='menu-expand'><i class='plus-minus'></i></span>"
      );
    }

    const menuExpand = offCanvasNav.querySelectorAll(".menu-expand");
    const numMenuExpand = menuExpand.length;

    for (let i = 0; i < numMenuExpand; i++) {
      menuExpand[i].addEventListener("click", (e) => {
        sideMenuExpand(e);
      });
    }

    for (let i = 0; i < anchorLinks.length; i++) {
      anchorLinks[i].addEventListener("click", () => {
        closeMobileMenu();
      });
    }

    const sideMenuExpand = (e) => {
      e.currentTarget.parentElement.classList.toggle("active");
    };
    const closeMobileMenu = () => {
      const offcanvasMobileMenu = document.querySelector(
        "#offcanvas-mobile-menu"
      );
      offcanvasMobileMenu?.classList.remove("active");
    };
  },
};
</script>
