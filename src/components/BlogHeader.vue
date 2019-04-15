<template>
  <div class="blogheader">
    <router-link to="/">index</router-link>
    <router-link to="/add">addblog</router-link>
  </div>
</template>

<script>
export default {
  name: 'blogheader',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.blogheader{
    box-sizing: border-box;
    max-width: 800px;
    height: 50px;;
    margin: 20px auto;
    background-color: #eee;
    text-align: center;
    border-radius: 5px;
}
a{
    width: 50px;
    height: 50px;
    border-radius: 5px;
    background-color: #eee;
    line-height: 50px;
    text-decoration: none;
    margin: 0px 20px;
    color: grey;
    display: inline-block;
}
.router-link-exact-active{
    color: skyblue;
}
</style>
