<template>
  <div id="app">
    <div class="page-main">
      <div class="page-container">
        <events-page />
      </div>
    </div>

    <notifications  position="bottom right" />
  </div>
</template>

<script>
import EventsPage from './components/EventsPage.vue'

export default {
  name: 'App',
  components: {
    EventsPage
  },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500&display=swap');

body {
  font-family: 'Inter', sans-serif;
}

.page {
    &-container {
      margin: 50px auto;
      max-width: 984px;
      width: 100%;

      @media (max-width: 984px) {
        max-width: 732px;
      }

      @media (max-width: 768px) {
        max-width: 480px;
      }

      @media (max-width: 480px) {
        max-width: 373px;
      }
    }
}

.btn {
  background: #FCC431;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: inline-block;
  font-size: 13px;
  line-height: 16px;
  color: #000;
  padding: 8px 14px;
}

.vue-notification {
  margin: 0 5px 15px;
}

</style>
