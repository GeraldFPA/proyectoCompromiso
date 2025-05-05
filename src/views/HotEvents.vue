<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>🔥 Hot Events</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="events">
        <h2 class="animate__animated animate__flash">🔥 Hot Events 🔥</h2>
        <ul>
          <li v-for="event in events" :key="event">{{ event }}</li>
        </ul>
      </div>
    </ion-content>
  </ion-page>
</template>

<script setup>
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent
} from '@ionic/vue'

const events = [
  'Glow Night Extravaganza',
  'Neon Dreams Bash',
  'Fantasy Jungle Fever',
  'Fire & Ice Showdown',
];
</script>

<style scoped>
@import 'animate.css';

.events {
  background: #2e003e;
  color: #ffaaff;
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 1rem 0;
  font-size: 1.2rem;
  background: #ff99cc33;
  padding: 1rem;
  border-radius: 1rem;
}
</style>
