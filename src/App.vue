<template>
  <div id="app" class="container">
    <div class="row">
      <card-slot v-for="cardGroup in cardGroups" :key="cardGroup.id" :cards="cardGroup.cards" :id="cardGroup.id">
      </card-slot>
    </div>
  </div>
</template>

<script>
import CardSlot from './components/CardSlot';
import store from './main.js'

export default {
  name: 'app',
  components: {
    CardSlot
  },
  computed: {
    cardGroups() {
      return store.state.cardGroups;
    },
  },
}
</script>

<style>
.card {
  width: 500px;
  height: 500px;
}
</style>
