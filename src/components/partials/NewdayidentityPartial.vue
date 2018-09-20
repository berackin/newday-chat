<template>
  <div>
    <a-col :span="5">
      <h4>Identity</h4>
      <a-divider type="horizontal"/>

      <span v-if="startChat">Hello {{ handler }}</span>
      <a-input v-model="handler" v-if="!startChat" placeholder="Your name..."/> <br><br>
      <a-button v-if="!startChat" @click="startNewChat">Start chat</a-button>

      <newdayonline-partial></newdayonline-partial>
    </a-col>
  </div>
</template>

<script>
  import NewdayonlinePartial from '@/components/partials/NewdayonlinePartial'

  export default {
    name: 'NewdayidentityPartial',

    components: {
      'newdayonline-partial': NewdayonlinePartial
    },

    data() {
      return {
        handler: '',
      }
    },


    methods: {
      startNewChat() {
        if (this.handler) {
          console.log(this.handler)
          this.$store.dispatch('setHandler', this.handler)
          this.$store.dispatch('setStartChat', true)
        }
        
        this.$socket.emit('register', this.handler)
      },
    },

    computed: {
      startChat() {
        return this.$store.getters.getStartChat
      }
    }
  }
</script>