<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-title>🖤 Dark Fantasy</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="dark">
        <h2 class="animate__animated animate__fadeInDown">🖤 Dark Fantasy Night</h2>
        <img src="/src/assets/imagen10.png" class="bg" />
        <p>Enter a world of shadows, lace, and mystery.</p>
        
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
  IonContent,
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const goHome = () => {
  router.push('/')
}
</script>

<style scoped>
@import 'animate.css';

.dark {
  background-color: #1a001f;
  color: #cc99ff;
  text-align: center;
  padding: 2rem;
  position: relative;
  min-height: 100vh;
}

.bg {
  width: 60%;
  border-radius: 15px;
  margin: 1rem 0;
  box-shadow: 0 0 25px #cc00ff55;
}
</style>
