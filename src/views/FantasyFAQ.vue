<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-title>❓ FAQ</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="faq">
        <h2 class="animate__animated animate__flipInX">❓ Fantasy FAQ</h2>
        <img src="/src/assets/imagen13.png" class="decor" />
        <ul>
          <li><strong>How do I book?</strong> — Choose, click, confirm!</li>
          <li><strong>Is it safe?</strong> — 100% professionally managed.</li>
          <li><strong>What themes?</strong> — Pirates, angels, warriors, and more!</li>
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
  IonContent,
  IonButtons,
  IonBackButton
} from '@ionic/vue'
</script>

<style scoped>
@import 'animate.css';

.faq {
  background: #3d0055;
  color: #ffe6ff;
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
}

.decor {
  width: 150px;
  border-radius: 10px;
  margin-bottom: 1rem;
}

ul {
  text-align: left;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.8;
}
</style>
