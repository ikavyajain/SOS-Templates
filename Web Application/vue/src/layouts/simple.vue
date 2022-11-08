<template>
  <!-- loader Start -->
  <div id="loading">
    <loader/>
  </div>
  <!-- loader END -->
  <div class="wrapper">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'simple'
}
</script>
