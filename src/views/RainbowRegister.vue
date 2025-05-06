<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-title>Register</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="register">
        <h2 class="animate__animated animate__rubberBand">🌈 Become a Fantasy Star</h2>
        <form>
          <ion-input placeholder="Name" class="input" />
          <ion-input placeholder="Email" type="email" class="input" />
          <ion-input placeholder="Password" type="password" class="input" />
          <ion-button expand="block" class="register-btn">Register</ion-button>
        </form>
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
  IonInput,
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/vue';
</script>

<style scoped>
@import 'animate.css';

.register {
  background: radial-gradient(circle, #ff00ff, #660066);
  color: white;
  padding: 2rem;
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 2rem;
}

.input {
  padding: 0.7rem;
  border-radius: 10px;
  border: none;
}

.register-btn {
  background: #ff33aa;
  color: white;
}
</style>
