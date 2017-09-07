<template lang="html">
   <section class="product_list_wrap">
      <header class="tac">
         <p class="h2">être par Lee</p>
         <p class="h5">La simplicité,l'artistique,et le confort,C'est la mode d'être par Lee .</p>
      </header>
      <article class="product_box">
         <ul class="class_list flex between">
            <li v-for="item in hot_list.summer">
               <div class="mask">
                  <router-link to="/product_list/summer">{{item.series}}</router-link>
               </div>
               <img :src="item.img" />
            </li>
         </ul>
         <div class="tac linker">
            <router-link to="/product_list/all" class="more_series">查看更多系列</router-link>
         </div>
      </article>
      <article class="product_box">
         <div class="advertise">
            <img src="images/ser_03.jpg">
            <p>La simplicité,l'artistique,et le confort,<br>C'est la mode d'être par Lee .</p>
         </div>
         <ul class="class_list flex between">
            <li v-for="item in hot_list.holiday">
               <div class="mask">
                  <router-link to="/product_list/holiday">{{item.series}}</router-link>
               </div>
               <img :src="item.img" />
            </li>
         </ul>
         <div class="tac linker">
            <router-link to="/product_list/all" class="more_series">查看更多系列</router-link>
         </div>
      </article>
      <article class="product_box">
         <div class="advertise">
            <img src="images/ser_06.jpg">
            <p>La simplicité,l'artistique,et le confort,<br>C'est la mode d'être par Lee .</p>
         </div>
         <ul class="class_list flex between">
            <li v-for="item in hot_list.youth">
               <div class="mask">
                  <router-link to="/product_list/youth">{{item.series}}</router-link>
               </div>
               <img :src="item.img" />
            </li>
         </ul>
         <div class="tac linker">
            <router-link to="/product_list/all" class="more_series">查看更多系列</router-link>
         </div>
      </article>
   </section>
</template>

<script type="text/ecmascript-6">
export default {
   data(){
      return {
         hot_list: {
            summer: [
               {img: 'images/p_11.jpg', series: '初夏系列'},
               {img: 'images/p_13.jpg', series: '初夏系列'},
               {img: 'images/p_15.jpg', series: '初夏系列'}
            ],
            holiday: [
               {img: 'images/p_26.jpg', series: '假日系列'},
               {img: 'images/p_28.jpg', series: '假日系列'},
               {img: 'images/p_30.jpg', series: '假日系列'}
            ],
            youth: [
               {img: 'images/p_41.jpg', series: '青春系列'},
               {img: 'images/p_43.jpg', series: '青春系列'},
               {img: 'images/p_45.jpg', series: '青春系列'}
            ]
         }
      }
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.product_list_wrap
   padding-top: 58px
   padding-bottom: 77px
   header
      color: #b4b4b4
      padding-bottom: 70px
      .h2
         font-size: 40px
         font-weight: 200
         padding-bottom: 30px
      .h5
         font-size: 18px
   .product_box
      .advertise
         padding: 60px 203px 66px
         font-size: 18px
         color: #b4b4b4
         line-height: 1.4
         img
            margin-bottom: 22px
      .more_series
         color: #909090
         font-size: 20px
      .linker
         padding: 40px 0
      .class_list
         li
            width: calc(33vw - 7px)
            position: relative
            overflow: hidden
            img
               width: 100%
            .mask
               left: 0
               top: 0
               right: 0
               bottom: 0
               position: absolute
               background: rgba(0,0,0,0.5)
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
                  color: white
                  font-size: 24px
                  margin: 0 40px 40px 0
            &:hover
               .mask
                  opacity: 1
                  visibility: visible
                  -webkit-filter: blur(0px)
                  filter: blur(0px)
</style>
