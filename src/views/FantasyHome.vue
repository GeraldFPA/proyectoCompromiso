<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>🌟 Fantasy Home</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="fantasy-home">
        <img src="/src/assets/Imagen1.png" class="bg-image" />
        <h1 class="title animate__animated animate__bounceIn">Welcome to StippFantasy 🌟</h1>
        <p class="subtitle">Where your fantasies meet reality</p>
        <router-link to="/galaxy" class="btn">Explore Strippers</router-link>
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
</script>

<style scoped>
@import 'animate.css';

.fantasy-home {
  text-align: center;
  background-color: #1f0026;
  color: #ff99cc;
  padding: 2rem;
  position: relative;
  min-height: 100vh;
}

.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.title {
  font-size: 3rem;
  z-index: 1;
  position: relative;
}

.subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.btn {
  background: #ff33cc;
  padding: 1rem 2rem;
  color: white;
  border-radius: 2rem;
  text-decoration: none;
  transition: 0.3s;
  position: relative;
  z-index: 1;
}
.btn:hover {
  background: #cc00aa;
}
</style>
