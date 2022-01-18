<template>
  <div>
    <div v-for="article in articles">
      <h2>
        <router-link :to="article.path">
          {{ article.frontmatter.title }}
        </router-link>
      </h2>
      <p>{{ article.frontmatter.description }}</p>
    </div>
  </div>
</template>

<script>
import * as axios from 'axios';

export default {
  name: 'ArticleIndex',
  data() {
    return {
      items: [],
    };
  },
  async beforeMount() {
    this.$data.items = await axios.get('https://reqres.in/api/users');
  },
  computed: {
    articles() {
      const pathStartsWithArticles = page => page.path.startsWith('/articles/') && !page.frontmatter.article_index;
      const byPagePath = (page1, page2) => {
        if (page1.path > page2.path) return 1;
        if (page1.path < page2.path) return -1;
        return 0;
      };
      return this.$site.pages
          .filter(pathStartsWithArticles)
          .sort(byPagePath)
          .reverse();
    },
  },
};
</script>

<style scoped>

</style>
