<template>
  <a-layout id="components-layout-demo-top" class="layout">
    <newdayheader-partial></newdayheader-partial>

    <a-layout-content style="padding: 0 50px">
      <div :style="{ background: '#fff', padding: '24px', minHeight: '280px' }">
        <a-row :gutter="30">
          <newdayidentity-partial></newdayidentity-partial>
          <a-col :span="18">
            <newdaymessage-partial></newdaymessage-partial>
          </a-col>
        </a-row>

      </div>
    </a-layout-content>
  </a-layout>
</template>

<script>
  import NewdayheaderPartial from '@/components/partials/NewdayheaderPartial'
  import NewdayidentityPartial from '@/components/partials/NewdayidentityPartial'
  import NewdaymessagePartial from '@/components/partials/NewdaymessagePartial'

  export default {
    name: 'Chat',

    components: {
      'newdayheader-partial': NewdayheaderPartial,
      'newdayidentity-partial': NewdayidentityPartial,
      'newdaymessage-partial': NewdaymessagePartial,
    },

    methods: {
      setScrollDown() {
        // Handling scroll
        var element = document.getElementById("chat");
        element.scrollTop = element.scrollHeight + 500;
      },
    },

    computed: {
      isConnected() {
        return this.$store.state.isConnected
      },

      messages() {
        return this.$store.getters.getMessages
      },

      members() {
        return this.$store.getters.getMembers
      },

      startChat() {
        return this.$store.getters.getStartChat
      }
    },

    mounted() {
      this.setScrollDown();
    }
  }
</script>

<style>
#components-layout-demo-top .logo {
  width: 120px;
  height: 31px;
  background: rgba(255,255,255,.2);
  margin: 16px 24px 16px 0;
  float: left;
}
</style>