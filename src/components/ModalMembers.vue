<template>
<div>
    <b-button variant="outline-success" @click="$bvModal.show('modal-scoped-'+id)">{{ buttonText }}</b-button>

  <b-modal :id="'modal-scoped-'+id" :hide-footer="true">
    <template #modal-header="{ close }">
      <h5 class="mt-2">Team Members</h5>
      <b-button size="sm" @click="close()">
        <font-awesome-icon @click="close()" icon="times" />
      </b-button>
    </template>

    <template #default>
        <div class="row align-items-center justify-content-between">
            <div class="col mb-3 ml-2 align-self-center">
                <b-avatar></b-avatar>
            </div>
            <div class="col my-4 align-self-center">
                <p>{{ name }}</p>
            </div>
            <div class="col my-4 align-self-center">
                <p>{{ phone }}</p>
            </div>
        </div>
    </template>
  </b-modal>
</div>
  
</template>

<script>
export default {
    name: 'ModalMembers',
    props: {
        id: String,
        name: String,
        phone: String,
        buttonText: String,
    }
}
</script>