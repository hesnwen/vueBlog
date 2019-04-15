<template>
  <div id="app">
    <!-- <blogadd></blogadd> -->
    <blogheader></blogheader>
    <router-view></router-view>
    <!-- <showblog></showblog> -->
  </div>
</template>

<script>
import blogadd from './components/Blogadd'
import showblog from './components/ShowBlog'
import blogheader from './components/BlogHeader'

export default {
  name: 'App',
  components:{
    blogadd,showblog,blogheader
  }
}
</script>

<style>
</style>
