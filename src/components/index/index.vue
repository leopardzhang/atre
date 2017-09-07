<template lang="html">
   <div class="index">
      <ul class="index_list flex center">
         <li class="rel" v-for="item in indexList">
            <div class="mask abs tac flex center column">
               <h4>{{item.title}}</h4>
               <p>{{item.text}}</p>
               <router-link :to="'/product_list/'+ item.classical">查看更多</router-link>
            </div>
            <img :src="item.img" />
         </li>
      </ul>
   </div>
</template>

<script type="text/ecmascript-6">
export default {
   data(){
      return {
         indexList: [
            {title: 'être par Lee', text: "La simplicité,l'artistique,et le confort,C'est la mode d'être par Lee .", img: 'images/index_02.jpg', classical: "sunmmer"},
            {title: 'être par Lee', text: "La simplicité,l'artistique,et le confort,C'est la mode d'être par Lee .", img: 'images/index_03.jpg', classical: "holiday"},
            {title: 'être par Lee', text: "La simplicité,l'artistique,et le confort,C'est la mode d'être par Lee .", img: 'images/index_06.jpg', classical: "youth"}
         ]
      }
   },
   created(){

   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.index
   padding-top: 70px
   padding-bottom: 45px
   .index_list
      li
         overflow: hidden
         .mask
            width: 100%
            height: 100%
            padding: 0 115px
            background: rgba(255,255,255,.6)
            -webkit-transition: .3s linear
            transition: .3s linear
            opacity: 0
            visibility: hidden
            >*
               margin: 10px 0
               -webkit-filter: blur(60px)
               filter: blur(60px)
               -webkit-transition: .3s linear
               transition: .3s linear
            h4
               font-size: 24px
            p
               color: #6f6f6f
               font-size: 14px
               line-height: 2
         &:hover
            .mask
               opacity: 1
               visibility: visible
               >*
                  -webkit-filter: blur(0)
                  filter: blur(0)
</style>
