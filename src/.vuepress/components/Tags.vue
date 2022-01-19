<template>
  <div class="tags">
    <p class="tags__title" @click="toggle">Tags</p>
    <ul class="tags__list" v-for="tag in tags" v-if="enabled">
      <li>{{ tag }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Tags',
  data: () => ({
    enabled: false,
  }),
  computed: {
    tags: () => ['one', 'two', '3'],
  },
  methods: {
    toggle() {
      this.enabled = !this.enabled;
    },
  },
};
</script>

<style scoped lang="stylus">
.tags
  text-align right
  position absolute
  top 4rem
  right 1.5rem

.tags__title
  font-weight 500

.tags__list
  list-style-type none
  margin 0
  padding 0
</style>
