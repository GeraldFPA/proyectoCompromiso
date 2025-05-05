<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>VIP Membership</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="vip">
        <h2 class="animate__animated animate__jackInTheBox">💎 VIP Membership</h2>
        <img src="/src/assets/imagen14.png" class="badge" />
        <p>Unlock fantasy perks, private shows, and exclusive access.</p>
        <ion-button expand="full" color="primary">Join Now</ion-button>
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
  IonButton
} from '@ionic/vue';
</script>

<style scoped>
@import 'animate.css';

.vip {
  background: linear-gradient(to bottom, #400040, #ff00ff);
  color: white;
  padding: 2rem;
  text-align: center;
}

.badge {
  width: 120px;
  margin: 1rem 0;
}

ion-button {
  padding: 1rem 2rem;
  background: #ff3399;
  border-radius: 15px;
  color: white;
  font-size: 1rem;
  margin-top: 1rem;
}
</style>
