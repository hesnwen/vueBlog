<template>
  <div class="blogcontent">
    <h1>{{blog.title}}</h1>
    <article>
        {{blog.body}}
    </article>
  </div>
</template>

<script>
export default {
  name: 'blogcontent',
  data () {
    return {
        id:this.$route.params.id,
        blog:{}
    }
  },
  created() {
     this.$http.get('http://jsonplaceholder.typicode.com/posts/'+this.id).then(
         function(data){
             this.blog = data.body;
         }
     ) 
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blogcontent{
    max-width: 800px;
    margin: 50px auto;
    height: 200px;;
    background-color: #eee;
    padding: 10px;
    box-sizing: border-box;
    border-radius: 5px;
}
</style>
