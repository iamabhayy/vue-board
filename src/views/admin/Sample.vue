<template>
  <div
    id="demo"
    :class="[{'collapsed' : collapsed}, {'onmobile' : isOnMobile}]"
  >
    <div class="demo">
      <div class="container">
        <h1>
          vue-sidebar-menu
          <a
            style="color: #000;text-transform: uppercase;font-size: 14px;font-weight: 400;"
            href="https://github.com/yaminncco/vue-sidebar-menu"
          >
            Github
          </a>
        </h1>
        <p>A vue.js sidebar menu component</p>
        <div>
          Select theme:
          <select v-model="selectedTheme">
            <option
              v-for="(theme, index) in themes"
              :key="index"
              :value="theme.input"
            >
              {{ theme.name }}
            </option>
          </select>
        </div>
        <hr style="margin: 50px 0px;border: 1px solid #e3e3e3;">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      
    }
  },
  mounted () {
    this.onResize()
    window.addEventListener('resize', this.onResize)
  },
  methods: {
    onToggleCollapse (collapsed) {
      console.log(collapsed)
      this.collapsed = collapsed
    },
    onItemClick (event, item, node) {
      console.log('onItemClick')
      console.log(event)
      console.log(item)
      console.log(node)
    },
    onResize () {
      if (window.innerWidth <= 767) {
        this.isOnMobile = true
        this.collapsed = true
      } else {
        this.isOnMobile = false
        this.collapsed = false
      }
    }
  }
}
</script>