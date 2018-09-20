<template>
  <div>
    <h4>NewDay Chat</h4>
    <a-divider type="horizontal"/>
    <div style="height: 240px; overflow-y: scroll; padding: 10px 10px 20px 10px" id="chat">
      <a-timeline v-if="startChat">
        <a-timeline-item v-for="(msg, index) in messages" :key="index">
          <strong>{{ msg.handle }}: </strong> {{ msg.message }}
        </a-timeline-item>
      </a-timeline>
    </div>
    <a-input v-if="startChat" v-model="message" placeholder="Your message..." @pressEnter="sendMessage"/>
  </div>
</template>


<script>
  export default {
    name: 'NewdaymessagePartial',

    data() {
      return {
        message: ''
      }
    },

    methods: {
      sendMessage() {
        this.$socket.emit('chat', {
          handle: this.$store.getters.getHandler,
          message: this.message,
          time: Date(Date.now())
        })

        this.message = ''
      },
    },

    computed: {
      messages() {
        return this.$store.getters.getMessages
      },

      startChat() {
        return this.$store.getters.getStartChat
      }
    },


  }
</script>