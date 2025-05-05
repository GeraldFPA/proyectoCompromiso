<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Sensual Gallery</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="gallery">
        <h2 class="animate__animated animate__zoomIn">🎨 Sensual Gallery</h2>
        <img src="/src/assets/imagen9.png" class="main-image" />
        <p>Our strippers are more than dancers – they’re living art.</p>
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

.gallery {
  background: linear-gradient(to right, #33001a, #ff0066);
  color: #fff0f5;
  text-align: center;
  padding: 2rem;
}

.main-image {
  width: 80%;
  border-radius: 20px;
  margin: 1rem 0;
}
</style>
