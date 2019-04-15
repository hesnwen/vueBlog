import Showblog from './components/Showblog.vue'
import Blogadd from './components/Blogadd.vue'
import blogcontent from './components/BlogContent.vue'

export default [
    {path:'/',component:Showblog},
    {path:'/add',component:Blogadd},
    {path:'/blogcontent/:id',component:blogcontent},
];