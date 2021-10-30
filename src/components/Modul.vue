<template>
<div>
  <b-button :variant="variant" v-b-modal.modal-center>{{button_text}}</b-button>
  <b-modal :id="'modal-center-'+id" centered :title="title" :hide-footer="true">
    <div v-if="showReserve === true">
      <div class="row align-items-center justify-content-between">
        <div class="col mb-3 ml-2 align-self-center">
          <b-avatar></b-avatar>
        </div>
        <div class="col my-4 align-self-center">
          <p>Name</p>
        </div>
        <div class="col my-4 align-self-center">
          <p>+359-123456</p>
        </div>
      </div>
    </div>
    <div v-else>
      <p class="my-4">{{description}}</p>
    </div>
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
        variant: String,
        showReserve: Boolean,
        id: String,
    }
    
}
</script>
