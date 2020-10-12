<template>
  <div id="demo" :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <sidebar-menu
      :menu="menu"
      :collapsed="collapsed"
      :theme="selectedTheme"
      :show-one-child="true"
      @toggle-collapse="onToggleCollapse"
      @item-click="onItemClick"
    />
    <div v-if="isOnMobile && !collapsed" class="sidebar-overlay" @click="collapsed = true" />
  </div>
</template>

<script>
const separator = {
  template: `<hr style="border-color: rgba(0, 0, 0, 0.1); margin: 20px;">`,
};

export default {
  name: "App",
  data() {
    return {
      menu: [
        {
          header: true,
          title: "Main Module",
          hiddenOnCollapse: true,
        },
        {
          href: "/admin",
          title: "Dashboard",
          icon: "fa fa-tachometer-alt",
        },
        {
          href: "/admin/courses",
          title: "Courses",
          icon: "fa fa-book-reader",
        },
        {
          href: "/admin/quizes",
          title: "Quiz",
          icon: "fab fa-quora",
        },
        {
          href: "/admin/categories",
          title: "Categories & Tags",
          icon: "fas fa-th-list",
        },
        {
          header: true,
          title: "Reporting",
          hiddenOnCollapse: true,
        },
        {
          href: "/admin/students",
          title: "Students",
          icon: "fa fa-user-graduate",
        },
        {
          href: "/admin/payments",
          title: "Payments",
          icon: "fa fa-shopping-basket",
        },
        {
          href: "/admin/chatting",
          title: "Chatting",
          icon: "fa fa-comments",
        },
        {
          href: "/admin/reviews",
          title: "Reviews",
          icon: "fa fa-star",
        },
        {
          href: "/admin/anounsment",
          title: "Anounsments",
          icon: "fa fa-bell",
        },
        {
          component: separator,
        },
        {
          header: true,
          title: "Management",
          hiddenOnCollapse: true,
        },
        {
          href: "/admin/users",
          title: "Users",
          icon: "fas fa-users",
          badge: {
            text: "new",
            class: "vsm--badge_default",
          },
        },
        {
          href: "/admin/app-settings",
          title: "App Settings",
          icon: "fab fa-android",
          badge: {
            text: "new",
            class: "vsm--badge_default",
          },
        },
        {
          title: "Settings",
          icon: "fa fa-cog",
          child: [
            {
              href: "/admin/profile",
              title: "Profile",
              icon: "fa fa-file-alt",
            },
            {
              href: "/admin/other-settings",
              title: "Sub Page 02",
              icon: "fa fa-file-alt",
            },
          ],
        },
        {
          title: "Help & Feedback",
          icon: "fa fa-list-alt",
          child: [
            {
              title: "Contact Us",
            },
            {
              title: "Tutorials",
            },
          ],
        },
      ],
      collapsed: true,
      themes: [
        {
          name: "Default theme",
          input: "",
        },
        {
          name: "White theme",
          input: "white-theme",
        },
      ],
      selectedTheme: "",
      isOnMobile: false,
    };
  },
  mounted() {
    this.onResize();
    window.addEventListener("resize", this.onResize);
  },
  methods: {
    onToggleCollapse(collapsed) {
      console.log(collapsed);
      this.collapsed = collapsed;
    },
    onItemClick(event, item, node) {
      console.log("onItemClick");
      console.log(event);
      console.log(item);
      console.log(node);
    },
    onResize() {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true;
        this.collapsed = true;
      } else {
        this.isOnMobile = false;
        this.collapsed = true;
      }
    },
  },
};
</script>

<style lang="scss">
.fade-enter {
    opacity: 0;
}

.fade-enter-active {
    transition: opacity .5s ease;
}

.fade-leave-active {
    transition: opacity .5s ease;
    opacity: 0;
}
</style>
