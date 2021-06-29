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
      // const byPageDateDesc = (page1, page2) => page1.frontmatter.date && page2.frontmatter.date
      //     ? new Date(page1.frontmatter.date) - new Date(page2.frontmatter.date)
      //     : new Date(page1.lastUpdated) - new Date(page2.lastUpdated);
      // const byPageDateDesc = (page1, page2) => page1.frontmatter.date - page2.frontmatter.date;
      const byPagePath = (page1, page2) => {
        if (page1.path > page2.path) return 1;
        if (page1.path < page2.path) return -1;
        return 0;
      }
      const byPageDate = (page1, page2) => {
        if (page1.frontmatter.date > page2.frontmatter.date) return 1;
        if (page1.frontmatter.date < page2.frontmatter.date) return -1;
        return 0;
      }
      console.log('this.$page', this.$page);
      return this.$site.pages
                 .filter(pathStartsWithArticles)
                 .sort(byPageDate)
                 .reverse();
    }
  },
};
</script>

<style scoped>

</style>
