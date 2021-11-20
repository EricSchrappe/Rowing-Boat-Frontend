<template>
<div>
  <b-button :variant="variant" v-b-modal.modal-tall>{{button_text}}</b-button>
  <b-modal id="modal-tall" centered :title="title" :hide-footer="true">
      <p class="my-4 space">{{description}}</p>
  </b-modal>
</div>
</template>

<script>
import { privacy_policy } from '../assets/privacy_policy.js';

export default {
    name: 'Modul',
    props: {
        button_text: String,
        title: String,
        variant: String,
    },
    data() {
      return {
        description: privacy_policy,
      }
    },
}
</script>

<style scoped>
  .space{
    white-space: pre-wrap;
  }
</style>
