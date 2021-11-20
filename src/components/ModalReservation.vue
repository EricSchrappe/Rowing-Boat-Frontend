<template>
<div>
    <b-button :variant="variant" @click="$bvModal.show('modal-scoped-'+id)">{{ buttonText }}</b-button>

  <b-modal :id="'modal-scoped-'+id" :hide-header="hideHeader" :hide-footer="hideFooter" centered>
    <template #modal-header="{ close }">
      <h5 class="mt-2">Team Members</h5>
      <b-button size="sm" @click="close()">
        <font-awesome-icon @click="close()" icon="times" />
      </b-button>
    </template>

    <template #default>
        <div v-if="team" class="row align-items-center justify-content-between">
            <div class="col mb-3 ml-3 align-self-center">
                <b-avatar></b-avatar>
            </div>
            <div class="col my-4 align-self-center">
                <p>{{ name }}</p>
            </div>
            <div class="col my-4 align-self-center">
                <p>{{ phone }}</p>
            </div>
        </div>
        <div v-else>
          <h2 class="text-center"><strong>{{ alertText }}</strong></h2>
        </div>
    </template>

    <template #modal-footer="{ ok, cancel }">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12 align-self-center text-center">
            <b-button class="mx-5" size="sm" variant="secondary" @click="cancel()">
              Cancel
            </b-button>
            <b-button class="mx-5" size="sm" :variant="modulVariant" @click="() => {$emit('reserve-boat'); ok()}">
              {{ modulButtonText }}
            </b-button>
          </div>
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
        hideFooter: Boolean,
        hideHeader: Boolean,
        team: Boolean,
        variant: String,
        modulButtonText: String,
        alertText: String,
        modulVariant: String,
    },
}
</script>