<template>
  <div>
    <h1 class="mui--clearfix">
      Events Dashboard
      <button
        @click="signOut"
        class="mui-btn mui-btn--danger mui-btn--small mui-btn--raised mui--pull-right"
      >
        Sign Out
      </button>
    </h1>
    <AddEvent />
    <EventItem
      v-for="(event, index) in $store.state.events"
      :event="event"
      :key="index"
    />
    <!-- {{$store.state}}
    {{$store.state.events}} -->
  </div>
</template>
<script>
  import { firebaseApp, eventsRef } from '../firebaseApp';
  import AddEvent from './AddEvent.vue';
  import EventItem from './EventItem.vue';

  export default {
    methods: {
      signOut() {
        this.$store.dispatch('signOut');
        firebaseApp.auth().signOut();
      }
    },
    components: {
      AddEvent,
      EventItem
    },
    mounted() {
      eventsRef.on('value', snap => {
        let events = [];
        snap.forEach(event => {
          events.push(event.val());
        });
        this.$store.dispatch('getEvents', events);
      });
    }
  }
</script>
