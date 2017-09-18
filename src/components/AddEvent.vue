<template>
  <div class="mui-panel">
    <div class="mui-form">
      <div class="form-title mui--cleafix">
        Add an event
        <input
          class="form-toogle-check mui--pull-right"
          type="checkbox"
          v-model="showForm"
        >
      </div>
      <div
        class="form-toggle-block"
        v-if="showForm"
      >
        <div class="mui-textfield">
          <input
            class="mui--is-empty mui--is-pristine mui--is-touched"
            placeholder="Tilte"
            type="text"
            v-model="event.title"
          >
        </div>
        <div class="mui-textfield">
          <input
            class="mui--is-empty mui--is-pristine mui--is-touched"
            placeholder="Description"
            type="text"
            v-model="event.description"
          >
        </div>
        <div class="mui-textfield">
          <input
            class="mui--is-empty mui--is-pristine mui--is-touched"
            placeholder="Date"
            type="date"
            v-model="event.date"
          >
        </div>
        <div class="mui-textfield">
          <input
            class="mui--is-empty mui--is-pristine mui--is-touched"
            placeholder="Location"
            type="text"
            v-model="event.location"
          >
        </div>
        <button
          @click="addEvent"
          class="mui-btn mui-btn--primary"
        >
          Submit Event
        </button>
      </div>
    </div>
  </div>
</template>
<script>
  import { eventsRef } from '../firebaseApp';

  export default {
    data() {
      return {
        event: {
          date: '',
          description: '',
          email: '',
          location: '',
          title: ''
        },
        showForm: true
      }
    },
    methods: {
      addEvent() {
        this.event.email = this.$store.state.user.email;
        eventsRef.push(this.event);
      }
    }
  }
</script>
