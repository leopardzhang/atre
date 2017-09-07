<template lang="html">
   <header class="header">
      <nav>
         <ul class="nav_list flex center">
            <li>
               <router-link to="/index">首页</router-link>
            </li>
            <li>
               <router-link to="/about">品牌介绍</router-link>
            </li>
            <!-- <li>
               <router-link to="/index">设计师们</router-link>
            </li> -->
            <li>
               <router-link to="/product_hot">产品展示</router-link>
            </li>
            <li>
               <router-link to="/store_list">门店分布</router-link>
            </li>
            <!-- <li>
               <router-link to="/index">活动资讯</router-link>
            </li> -->
            <li>
               <router-link to="/join">加盟合作</router-link>
            </li>
         </ul>
      </nav>
   </header>
</template>

<script>
export default {
  data(){
    return {

    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.header
   height: 102px
   padding-top: 36px
   .nav_list
      li
         margin: 0 10px
         a
            font-size: 16px
            line-height: 32px
            color: #808080
            display: block
            -webkit-transition: .3s linear
            transition: .3s linear
            &:hover
               color: black
         a.active
            color: black
</style>
