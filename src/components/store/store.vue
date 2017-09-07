<template lang="html">
   <section class="about_wrap">
      <div class="banner">
         <img :src="banner" />
      </div>
      <div class="content">
         <div class="city_wrap">
            <h3>辽宁省</h3>
            <ul class="city_list">
               <li v-for="item in cityList">
                  <p class="name">{{item.name}}</p>
                  <p class="address">{{item.address}}</p>
               </li>
            </ul>
         </div>
      </div>
   </section>
</template>

<script type="text/ecmascript-6">
export default {
   data(){
      return {
         banner: 'images/store_02.jpg',
         cityList:[
            {name: '大连万达广场', address: '大连市高新园区万达广场一楼   0411-88880000'},
            {name: '抚顺恒隆广场', address: '大连市高新园区万达广场一楼   0411-88880000'},
            {name: '沈阳中街兴隆大家庭', address: '大连市高新园区万达广场一楼   0411-88880000'},
            {name: '抚顺千盛百货', address: '大连市高新园区万达广场一楼   0411-88880000'},
         ]
      }
   },
   beforeMount(){
      this.cid = this.$route.params.id
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.city_wrap
   padding: 47px 18px 0
   color: #666
   h3
      font-size: 30px
   .city_list
      padding-top: 36px
      li
         padding: 33px 0
         border-bottom: 1px dashed #666
         .name
            font-size: 24px
            padding-bottom: 15px
         .address
            font-size: 18px

</style>
