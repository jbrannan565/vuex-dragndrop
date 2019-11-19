<template>
    <b-list-group-item 
        class="card-obj"
        :id="card.id"
        draggable="true"
        @drag.prevent
        @dragstart="dragStart"
        >
        {{card.text}}
    </b-list-group-item>
</template>
<script>
export default {
    name: "card-obj",
    props: ['card', 'groupId'],
    methods: {
        dragStart(e) {
            e.dataTransfer.setData("text/plain", JSON.stringify({
                text: this.card.text,
                id: this.card.id,
                fromGroupId: this.groupId
            }))
        }
    }
}
</script>