<template>
  <div v-if="startChat">
    <h4>Online Members</h4>
    <div>
      <a-button type="primary" 
                v-for="(member, index) in members" 
                :key="index" 
                v-if="member!==handler">
        {{ member }}
      </a-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NewdayonlinePartial',

    computed: {
      members() {
        return this.$store.getters.getMembers
      },
      startChat() {
        return this.$store.getters.getStartChat
      },
      handler() {
        return this.$store.getters.getHandler
      }
    }
  }
</script>