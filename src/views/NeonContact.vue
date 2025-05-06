<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-title>Contact Us</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="contact">
        <h2 class="animate__animated animate__heartBeat">💌 Contact Us</h2>
        <form>
          <ion-input placeholder="Your Name" class="input-field" />
          <ion-input type="email" placeholder="Your Email" class="input-field" />
          <ion-textarea placeholder="Message" class="input-field" rows="6"></ion-textarea>
          <ion-button expand="full" type="submit">Send</ion-button>
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
  IonTextarea,
  IonButton,
  IonButtons,
  IonBackButton
} from '@ionic/vue';
</script>

<style scoped>
@import 'animate.css';

.contact {
  background: #1a0033;
  color: #ffddff;
  padding: 2rem;
}

form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.input-field {
  padding: 1rem;
  border-radius: 10px;
  border: none;
}

ion-button {
  background: #ff33cc;
  color: white;
  border-radius: 10px;
}
</style>
