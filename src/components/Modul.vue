<template>
<div>
  <b-button v-b-modal.modal-center>{{button_text}}</b-button>
  <b-modal id="modal-center" centered :title="title" hide-footer="true">
    <p class="my-4">{{description}}</p>
  </b-modal>
</div>
</template>

<script>
export default {
    name: 'Modul',
    props: {
        button_text: String,
        title: String,
        description: String,
    },
    
}
</script>
