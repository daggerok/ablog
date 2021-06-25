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
  data () {
    return {
      items: []
    }
  },
  async beforeMount() {
    this.$data.items = await axios.get('https://reqres.in/api/users')
  },
  computed: {
    articles() {
      let pathStartsWithArticles = page => page.path.startsWith('/articles/') && !page.frontmatter.article_index;
      let byPageDateDesc = (page1, page2) => page1.frontmatter.date && page2.frontmatter.date
          ? new Date(page1.frontmatter.date) - new Date(page2.frontmatter.date)
          : new Date(page1.lastUpdated) - new Date(page2.lastUpdated);
      console.log('this.$page', this.$page);
      return this.$site.pages
                 .filter(pathStartsWithArticles)
                 .map(page => {
                   console.log('page._filePath', page._filePath);
                   console.log('this.$page._filePath', this.$page._filePath);
                   console.log('page.frontmatter.date', page.frontmatter.date);
                   console.log('page.lastUpdated', page.lastUpdated);
                   console.log(page.$lastUpdated);
                   // console.log('page.lastUpdated()', page.lastUpdated());
                   return page;
                 })
                 .sort(byPageDateDesc);
    }
  },
}
</script>

<style scoped>

</style>
