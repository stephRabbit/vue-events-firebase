<template>
  <div class="card mui-panel">
    <h2>{{event.title}}</h2>
    <p>
      <em>{{event.description}}</em>
    </p>
    <ul class="card-list card-list--hightlight">
      <li>Date: {{event.date}}</li>
      <li>Location: {{event.location}}</li>
      <li>Email: {{event.email}}</li>
    </ul>
  </div>
</template>
<script>
  export default {
    props: ['event']
  }
</script>
