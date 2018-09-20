<template>
  <div>
    <a-layout-header>
      <div class="logo" />
      <a-menu theme="dark" 
              mode="horizontal" 
              :style="{ lineHeight: '64px' }">
        <a-menu-item key="1">New Day</a-menu-item>
      </a-menu>
    </a-layout-header>
    <br>
  </div>
</template>


<script>
  export default {
    name: 'NewdayheaderPartial'
  }
</script>