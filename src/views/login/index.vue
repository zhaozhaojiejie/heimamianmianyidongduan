<template>
    <div id='login'>
        <van-nav-bar
            title="登录"
        />
        <van-cell-group>
            <vant-icon class="icon-shouji"/>
            <van-field
            v-model="phone"
            placeholder="请输入电话号码"
            error-message="手机号格式错误"
            />
           <van-field
            placeholder="请输入验证码"
            />
        </van-cell-group>
    </div>
</template>

<script>

export default {
  // 一般每一个组件都命名这样有利于维护
  name: 'LoginPage',
  components: {},
  props: {},
  data () {
    return {}
  },
  computed: {},
  watch: {},
  created () {},
  methods: {}
}
</script>

<style lang='less' scoped>

</style>
