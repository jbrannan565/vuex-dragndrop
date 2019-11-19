<template>
    <div class="card-slot card col" @drop="drop" @dragover.prevent>
        <b-list-group v-for="cardObj in cards" :key="cardObj.id" >
            <card-obj :card="cardObj" :groupId="id">
            </card-obj>
        </b-list-group>
        <b-btn @click="addCard">AddCard</b-btn>
    </div>
</template>
<script>
import CardObj from './CardObj';
import store from '../main.js';
export default {
    name: "card-slot",
    props: ['id','cards'],
    components: { CardObj },
    methods: {
        // searches this.cards for id. If found, returns index, otherwise returns -1.
        findCardById(id) {
            for (let i=0; i<this.cards.length; i++) {
                if (this.cards[i].id == id)
                    return i;
            }
            return -1;
        },
        drop(e) {
            let cardObj = JSON.parse(e.dataTransfer.getData("text/plain"));
            if (this.findCardById(cardObj.id) < 0) {
                this.cards.push({
                    id: cardObj.id,
                    text: cardObj.text
                });

                let _cardId = cardObj.id;
                let _groupId = cardObj.fromGroupId;

                store.commit('deletecard', {
                    groupId: _groupId,
                    cardId: _cardId
                });
            }
        },
        addCard() {
            this.cards.push({
                id: store.state.nextCardId,
                text: `card-${store.state.nextCardId}`
            });
            store.state.nextCardId++;
        }
    }
}
</script>
<style lang="css">
.card {
  width: 500px;
  height: 500px;
}

.btn {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
}
</style>