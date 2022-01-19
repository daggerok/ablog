<template>
  <div>
    <div v-for="article in articles">
      <h3>
        <router-link :to="article.path">
          {{ article.frontmatter.title || article.title }}
        </router-link>
      </h3>
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
      const pathStartsWithArticles = page =>
          page.regularPath.startsWith('/articles/') && !page.frontmatter.article_index;
      const byPagePath = (page1, page2) => {
        if (page1.regularPath < page2.regularPath) return -1;
        if (page1.regularPath > page2.regularPath) return 1;
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
