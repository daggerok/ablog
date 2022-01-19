<template>
  <div>
    <div class="layout-with-footer__parent-layout-content">
      <ParentLayout/>
    </div>
    <footer class="layout-with-footer__footer-content">
      Copyright © 2022-present <strong>MIT</strong> | <a href="https://github.com/daggerok/ablog">Maksim Kostromin</a>
    </footer>
  </div>
</template>

<script>
import ParentLayout from '@vuepress/theme-default/layouts/Layout.vue';

export default {
  name: 'FooterredLayout',
  components: {
    ParentLayout,
  },
};
</script>

<style scoped lang="stylus">
// see: https://css-tricks.com/couple-takes-sticky-footer/
.layout-with-footer__parent-layout-content
  min-height calc(100vh - 3rem)

.layout-with-footer__footer-content
  height 50%
  //border-top 1px solid $borderColor
  text-align center
  color lighten($textColor, 50%)
  margin 1rem
</style>
