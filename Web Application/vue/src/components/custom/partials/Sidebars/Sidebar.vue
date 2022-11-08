<template>
    <aside :class="`sidebar sidebar-default sidebar-hover navs-pill-all ${minisidebar ? '':'sidebar-mini'}`">
    <div class="sidebar-header d-flex align-items-center justify-content-start">
        <router-link :to="{name: 'default.dashboard'}" class="navbar-brand">
          <logo/>
        </router-link>
        <div class="sidebar-toggle" data-toggle="sidebar" data-active="true" @click="SidebarMini">
                <i class="icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.25 12.2744L19.25 12.2744" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                        <path d="M10.2998 18.2988L4.2498 12.2748L10.2998 6.24976" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                    </svg>
                </i>
            </div>
    </div>
    <div class="sidebar-body pt-0 data-scrollbar">
        <div class="navbar-collapse" id="sidebar">
            <verticalnav/>
        </div>
    </div>
    <div class="sidebar-footer"></div>
</aside>
</template>
<script>
import Scrollbar from 'smooth-scrollbar'
import verticalnav from '@/components/custom/partials/Sidebars/Verticalnav'
import logo from '@/components/custom/Logo/logo'
export default {
  name: 'Sidebar',
  components: {
    verticalnav,
    logo
  },
  props: {
    minisidebar: { type: Boolean, default: false }
  },
  mounted () {
    this.SmoothScrollbar()
  },
  methods: {
    SmoothScrollbar () {
      const elementExistMain = document.querySelector('.data-scrollbar')
      if (elementExistMain) {
        Scrollbar.init(document.querySelector('.data-scrollbar'), {
          continuousScrolling: false
        })
      }
    },
    SidebarMini () {
      this.$emit('makeminisidebar', !this.minisidebar)
    }
  }
}
</script>
