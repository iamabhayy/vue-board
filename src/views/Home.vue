<template>
  <div id="demo" :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]">
    <div class="demo">
      <div class="container">
        <router-view />
      </div>
      <sidebar-menu
        :menu="menu"
        :collapsed="true"
        :theme="selectedTheme"
        :show-one-child="true"
        @toggle-collapse="onToggleCollapse"
        @item-click="onItemClick"
      />
      <div v-if="isOnMobile && !collapsed" class="sidebar-overlay" @click="collapsed = true" />
    </div>
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
          href: "/",
          title: "Dashboard",
          icon: "fa fa-tachometer-alt",
        },
        {
          href: "/sample",
          title: "Courses",
          icon: "fa fa-book-reader",
        },
        {
          href: "/quizes",
          title: "Quiz",
          icon: "fab fa-quora",
        },
        {
          header: true,
          title: "Reporting",
          hiddenOnCollapse: true,
        },
        {
          href: "/props",
          title: "Students",
          icon: "fa fa-user-graduate",
        },
        {
          href: "/events",
          title: "Payments",
          icon: "fa fa-shopping-basket",
        },
        {
          href: "/styling",
          title: "Chating",
          icon: "fa fa-comments",
        },
        {
          href: "/styling",
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
          href: "/disabled",
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
              href: "/page/sub-page-1",
              title: "Profile",
              icon: "fa fa-file-alt",
            },
            {
              href: "/page/sub-page-2",
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
        this.collapsed = false;
      }
    },
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,600");

body,
html {
  margin: 0;
  padding: 0;
}

body {
  font-family: "Source Sans Pro", sans-serif;
  font-size: 18px;
  background-color: #f2f4f7;
  color: #262626;
}
.sidebar-overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: #000;
  opacity: 0.5;
  z-index: 900;
}
.container {
  max-width: 900px;
}
.demo {
  padding: 50px;
}

pre {
  font-family: Consolas, monospace;
  color: #000;
  background: #fff;
  border-radius: 2px;
  padding: 15px;
  line-height: 1.5;
  overflow: auto;
}
</style>
