<template lang="html">
   <section class="store_list_wrap">
      <div class="content">
         <ul class="store_list flex wrap">
            <li v-for="item in storeList">
               <div class="img_box">
                  <img :src="item.img" />
               </div>
               <div class="name_box flex column aic center">
                  <router-link :to="'/store/'+item.id">
                     <p>{{item.name}}</p>
                     <p>{{item.en}}</p>
                  </router-link>
               </div>
            </li>
         </ul>
      </div>
   </section>
</template>

<script type="text/ecmascript-6">
export default {
   data(){
      return {
         storeList: [
            {id: 1, name: '北京', en: 'BEIJING', img: 'images/store_05.jpg'},
            {id: 2, name: '上海', en: 'SHANGHAI', img: 'images/store_05.jpg'},
            {id: 3, name: '重庆', en: 'CHONGQING', img: 'images/store_05.jpg'},
            {id: 4, name: '江苏', en: 'JIANGSU', img: 'images/store_05.jpg'},
            {id: 5, name: '首尔', en: 'SEOUL', img: 'images/store_05.jpg'},
            {id: 6, name: '纽约', en: 'NEW YORK', img: 'images/store_05.jpg'},
            {id: 7, name: '伦敦', en: 'LONDON', img: 'images/store_05.jpg'},
            {id: 8, name: '巴黎', en: 'PARIS', img: 'images/store_05.jpg'}
         ]
      }
   },
   beforeMount(){
      this.cid = this.$route.params.id
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.store_list_wrap
   padding-top: 67px
   .store_list
      li
         width: 276px
         height: 266px
         background: #f5f5f5
         position: relative
         margin-right: 31px
         margin-bottom: 31px
         overflow: hidden
         &:nth-child(4n)
            margin-right: 0
         >div
            position: absolute
            left: 0
            top: 0
            right: 0
            bottom: 0
            overflow: hidden
            -webkit-transition: .2s linear
            transition: .2s linear
         .img_box
            opacity: 0
            -webkit-filter: blur(60px)
            filter: blur(60px)
         .name_box
            z-index: 2
            color: #3d3d3d
            a
               p
                  font-size: 24px
                  margin: 10px 0
                  text-align: center
         &:hover
            .img_box
               opacity: 1
               -webkit-filter: blur(0)
               filter: blur(0)
            .name_box
               background: rgba(0, 0, 0, .75)
               color: white
               a
                  p
                     color: white
</style>
