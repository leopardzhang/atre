<template lang="html">
   <section class="about_wrap">
      <div class="banner">
         <img :src="banner" />
      </div>
      <div class="container">
         <p class="footer_title tac">加盟合作</p>
         <div class="join_wrap">
            <h3>加盟代理</h3>
            <p>总部必须拥有一套专项技术或者商业经营特权，并且有权进行授权或转让；总部选定代理项目须受到政府相关部门的监督和管理；总部须有相应的资本实力用以承担项目亏损给加盟商带来的经济损失。
加盟商需根据自身条件选择项目进行投资，包括自身拥有的人力、自然和其他资源。投资过程中需有经验人士进行指导，切勿盲目投资。<br>
<br>
一、选定投资项目进行考察并作评估分析。<br>
<br>
二、根据加盟商自身条件制定详细投资计划。<br>
<br>
三、总部和加盟商根据自愿签订加盟代理合同。<br>
<br>
四、总部帮助加盟商完成经营环境配置（比如店面、设备）并提供产品说明和员工培训。<br>
<br>
五、在试营初期总部负责监督指导，直到加盟商经营走向正规。<br>

<br>
六、加盟商和总部定时进行对话交流确保合作流畅。</p>
         </div>
      </div>
   </section>
</template>

<script type="text/ecmascript-6">
export default {
   data(){
      return {
         banner: 'images/join_02.jpg'
      }
   },
   beforeMount(){
      this.cid = this.$route.params.id
   }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.join_wrap
   padding-top: 43px
   font-size: 14px
   line-height: 2
   h3
      text-align: center
      font-size: 24px
      margin-bottom: 28px
</style>
