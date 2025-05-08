<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>Iniciar sesión</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="login">
        <img src="/src/assets/imagen8.png" class="side-img" />
        <form class="form animate__animated animate__fadeInRight">
          <h3>Iniciar sesión</h3>
          <ion-input type="email" placeholder="Email" class="input-field" />
          <ion-input type="password" placeholder="Password" class="input-field" />
          <ion-button expand="full" type="submit" @click="goToHome">Login</ion-button>

          <ion-button expand="full" color="light" @click="goToRegister">
            Registrarse
          </ion-button>
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
 
} from '@ionic/vue'

import { useRouter } from 'vue-router'
const router = useRouter()

const goToRegister = () => {
  router.push('/register')  
}
const goToHome = () => {
  router.push('/home')  
}
</script>


<style scoped>
@import 'animate.css';

.login {
  display: flex;
  justify-content: space-around;
  align-items: center;
  background: #12001f;
  color: white;
  padding: 3rem;
  min-height: 100vh;
}

.side-img {
  width: 300px;
  height: auto;
  border-radius: 20px;
}

.form {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 400px;
  width: 100%;
}

.input-field {
  padding: 0.5rem;
  border-radius: 10px;
  border: none;
}

ion-button {
  background: #ff33cc;
  color: white;
  border-radius: 10px;
}
</style>
