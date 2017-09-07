<template lang="html">
   <section class="product_list_wrap">
      <header class="tac">
         <p class="h2">être par Lee</p>
         <nav>
            <ul class="series_list flex center">
               <li v-for="item in series">
                  <router-link :to="'/product_list/'+item.cid">{{item.text}}</router-link>
               </li>
            </ul>
         </nav>
      </header>
      <div class="product_inner">
         <ul class="product_list flex wrap">
            <li v-for="item in productList">
               <div class="mask">
                  <router-link :to="'/product/'+item.id">{{item.name}}</router-link>
               </div>
               <img :src="item.img" />
            </li>
         </ul>
      </div>
   </section>
</template>

<script type="text/ecmascript-6">
export default {
   data(){
      return {
         cid: 'all',
         series: [
            {cid: 'all', text: '全部'},
            {cid: 'summer', text: '夏日系列'},
            {cid: 'youth', text: '青春系列'},
            {cid: 'holiday', text: '假日系列'},
            {cid: 'business', text: '商务系列'},
            {cid: 'fashion', text: '时尚系列'},
         ],
         productList: [
            {id: 14, img: 'images/list_14.jpg', name: '巴拿马中檐平顶帽'},
            {id: 15, img: 'images/list_15.jpg', name: '巴拿马中檐平顶帽'},
            {id: 16, img: 'images/list_16.jpg', name: '巴拿马中檐平顶帽'},
            {id: 17, img: 'images/list_17.jpg', name: '巴拿马中檐平顶帽'},
            {id: 20, img: 'images/list_20.jpg', name: '巴拿马中檐平顶帽'},
            {id: 21, img: 'images/list_21.jpg', name: '巴拿马中檐平顶帽'},
            {id: 22, img: 'images/list_22.jpg', name: '巴拿马中檐平顶帽'},
            {id: 23, img: 'images/list_23.jpg', name: '巴拿马中檐平顶帽'},
            {id: 26, img: 'images/list_26.jpg', name: '巴拿马中檐平顶帽'},
            {id: 27, img: 'images/list_27.jpg', name: '巴拿马中檐平顶帽'},
            {id: 28, img: 'images/list_28.jpg', name: '巴拿马中檐平顶帽'},
            {id: 29, img: 'images/list_29.jpg', name: '巴拿马中檐平顶帽'},
         ]
      }
   },
   beforeMount(){
      this.cid = this.$route.params.id
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.series_list
   padding-top: 26px
   li
      margin: 0 30px
      a
         color: #b4b4b4
         font-size: 18px
         transition: .2s linear
         &:hover
            color: #373737
      a.active
         color: black
.product_inner
   padding: 0 46px
   .product_list
      li
         position: relative
         width: 25%
         overflow: hidden
         .mask
            background: rgba(0,0,0,0.3)
            position: absolute
            width: 100%
            height: 100%
            display: flex
            justify-content: flex-end
            align-items: flex-end
            -webkit-transition: .3s linear
            transition: .3s linear
            opacity: 0
            visibility: hidden
            -webkit-filter: blur(60px)
            filter: blur(60px)
            a
               margin: 0 40px 40px 0
               color: white
               font-size: 18px
               padding-right: 45px
               background: url(arr_03.png) no-repeat right center
               background-size: auto 100%
         img
            width: 100%
         &:hover
            .mask
               opacity: 1
               visibility: visible
               -webkit-filter: blur(0)
               filter: blur(0)
</style>
