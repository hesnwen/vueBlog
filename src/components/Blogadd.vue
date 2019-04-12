<template>
  <div id="blog">
    <div id="blogadd" v-show="!isShowContent">
      <h1>添加博客</h1>
      <form action="">
        <p>
          <label>博客标题：</label><input type="text" name="title" v-model="blog.title" id="">
        </p>
        <p>
          <label>博客内容：</label><textarea name="content" v-model="blog.content" cols="30" rows="4"></textarea>
        </p>
        <p>
          <label>博客标签：</label>
          <input type="checkbox" value="vue" v-model="blog.tags">vue
          <input type="checkbox" value="node" v-model="blog.tags">node
          <input type="checkbox" value="ag" v-model="blog.tags">ag
          <input type="checkbox" value="react" v-model="blog.tags">react
        </p>
        <p>
          <label>作者</label>
          <select v-model="blog.author">
            <option v-for="author in authors" :key="author">{{author}}</option>
          </select>
        </p>
        <button v-on:click.prevent="submitData()">添加博客</button>
      </form>
    </div>
    <hr>
    <div id="showBlog" v-show="isShowContent">
      <h2>博客总览</h2>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容：{{blog.content}}</p>
      <p>博客标签：
        <ul>
          <li v-for="tag in blog.tags" :key="tag">
            {{tag}}
          </li>
        </ul>
      </p>
      <p>作者:{{blog.author}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'blog',
  data () {
    return {
      blog:{
        title:'',
        content:'',
        tags:[],
        author:''
      },
      authors:['hesn','wen','hesnwen'],
      isShowContent:false,
    }
  },
  methods: {
    submitData:function(){
      this.$http.post('https://jsonplaceholder.typicode.com/posts',{
        userId:1,
        id:1,
        title:this.blog.title,
        body:this.blog.content
      }).then(function(data){
        this.isShowContent = true;
        console.log(data);
      })
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#blog *{
  box-sizing: border-box;
}
#blogadd{
  width: 90%;
  margin: 20px auto;
  box-sizing: border-box;
}
label{
  display: block;
  margin-bottom: 5px;
}
input[type="checkbox"]{
  display: inline;
  margin-left: 5px;
}
input[type="text"],textarea,select{
  border:1px solid gray;
  border-radius: 5px;
  width: 100%;
  padding: 10px;
  display: block;

}
button{
  width: 100px;
  height: 40px;
  border:none;
  border-radius: 5px;
  background-color: crimson;
  color: #ffffff;
}
</style>
