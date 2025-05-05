<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Stripper Galaxy</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="galaxy">
        <h2 class="animate__animated animate__zoomIn">✨ Stripper Galaxy ✨</h2>
        <div class="stripper-list">
          <img
            v-for="i in 6"
            :key="i"
            :src="`src/assets/imagen${i+1}.png`"
            class="card"
          />
        </div>
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
} from '@ionic/vue';
</script>

<style scoped>
@import 'animate.css';

.galaxy {
  background: linear-gradient(145deg, #330066, #9900cc);
  color: white;
  padding: 2rem;
  text-align: center;
}

.stripper-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.card {
  width: 180px;
  height: 250px;
  object-fit: cover;
  border-radius: 1rem;
  transition: transform 0.3s ease-in-out;
}
.card:hover {
  transform: scale(1.05) rotate(2deg);
}
</style>
