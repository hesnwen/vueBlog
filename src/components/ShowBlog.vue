<template>
  <div class="shwoblog">
    <h1 >博客总览</h1>
    <input type="text" placeholder="搜索" v-model="search">
    <div v-for="blog in searchBlogs" :key="blog.id" class="title" v-size="blog.id">
        <router-link v-bind:to="'/blogcontent/'+blog.id">
            <h2 v-color>{{blog.title|toUpperCase}}</h2>
            <article class="body">{{blog.body|nappit}}</article>
        </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shwoblog',
  data () {
    return {
        blogs:[],
        search:''
    }
  },
  created() {
    this.$http.get('./../../static/posts.json').then(function(data){
        this.blogs = data.body.slice(0,10);
    })
  },
  computed: {
    searchBlogs(blogs){
        return this.blogs.filter((blog)=>{
            return blog.title.match(this.search);
        })
    }
  },
  filters:{
    toUpperCase(value){
        return value.toUpperCase();
    },
    'nappit':function(value){
        return value.slice(0,100)+'...';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
input{
    margin: 20px 0;
    width: 100%;
    padding: 5PX;
    box-sizing: border-box;
    border: 1PX solid #aaa;
}
.shwoblog{
    max-width: 800px;
    margin: 20px auto;
}
.title{
    background-color: #eee;
    padding: 20px;
    box-sizing: border-box;
    border-radius: 5px;
}
.body{
    margin: 10px auto;
}
a{
    text-decoration: none;
    color: black;
}
</style>
