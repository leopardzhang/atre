<template lang="html">
   <footer>
      <p class="footer_title tac">CONTACT US</p>
      <p class="footer_h2 tac">La simplicité,l'artistique,et le confort,C'est la mode d'être par Lee .</p>
      <div class="footer_box">
         <ul class="footer_list flex center">
            <li>
               <h2>关于我们</h2>
               <ul class="footer_links">
                  <li>
                     <router-link to="/index.html">品牌介绍</router-link>
                  </li>
                  <li>
                     <router-link to="/product_list.html">产品展示</router-link>
                  </li>
               </ul>
            </li>
            <li>
               <h2>营业时间</h2>
               <ul class="footer_links">
                  <li>
                     <p>周一-周五 / {{footerInf.workday}}</p>
                  </li>
                  <li>
                     <p>周末 / {{footerInf.weekend}}</p>
                  </li>
               </ul>
            </li>
            <li>
               <h2>联系方式</h2>
               <ul class="footer_links">
                  <li>
                     <p>电话 / {{footerInf.tel}}</p>
                  </li>
                  <li>
                     <p>邮箱 / {{footerInf.email}}</p>
                  </li>
               </ul>
            </li>
            <li>
               <h2>社交媒体</h2>
               <ul class="footer_links">
                  <li>
                     <a :href="footerInf.weibo.url">微博 / {{footerInf.weibo.text}}</a>
                  </li>
                  <li>
                     <a href="javascript:">微信 /etreparlee</a>
                  </li>
               </ul>
            </li>
         </ul>
      </div>
   </footer>
</template>

<script>
export default {
  data(){
    return {
      footerInf: {
         tel: '400-0000888',
         email: 'etreparlee@163.com',
         workday: '9AM-5PM',
         weekend: '9AM-8PM',
         weibo: {
            text: '艾特禾服饰',
            url: 'http://www.longcai.com'
         }
       }
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
transform()
   -webkit-transform: arguments
   transform: arguments
footer
   padding-bottom: 87px
   .footer_title
      color: #d2d0d0
      font-size: 20px
      padding-bottom: 36px
      background: url("bg_03.jpg") no-repeat center bottom
      padding-top: 40px
   .footer_h2
      color: #8c8c8c
      font-size: 20px
      line-height: 92px
   .footer_box
      padding-top: 50px
      .footer_list
         transform translateX(80px)
         >li
            flex: 0 0 258px
            h2
               font-size: 18px
               color: #8c8c8c
            .footer_links
               padding-top: 30px
               line-height: 2
               color: #8c8c8c
               a
                  color: #8c8c8c
</style>
