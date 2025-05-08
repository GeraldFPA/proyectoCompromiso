<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-title>💌 Reserva</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="contact">
        <h2 class="main-title animate__animated animate__heartBeat">💌 Reserva Tu Fantasía</h2>
        <p class="description">¿Listo para vivir una experiencia única? <br />Completa este formulario y uno de nuestros agentes se pondrá en contacto contigo.</p>
        <form @submit.prevent="enviarReserva">
          <ion-input placeholder="Tu nombre" class="input-field" />
          <ion-input placeholder="Tu correo" type="email" class="input-field" />
          <ion-input placeholder="Nombre del bailarin o bailarina" class="input-field" />
          <ion-datetime
            presentation="date"
            placeholder="Selecciona una fecha"
            class="input-field"
          />
          <ion-input placeholder="Hora del servicio (ej: 18:30)" class="input-field" />
          <ion-select placeholder="Duración del servicio" class="input-field">
            <ion-select-option value="1">1 hora</ion-select-option>
            <ion-select-option value="2">2 horas</ion-select-option>
            <ion-select-option value="3">3 horas</ion-select-option>
            <ion-select-option value="custom">Más de 3 horas</ion-select-option>
          </ion-select>
          <ion-textarea
            placeholder="Describe tu fantasía, temática, lugar, preferencias y cualquier detalle especial"
            class="input-field"
            rows="6"
          ></ion-textarea>
          <ion-button expand="full" type="submit">Enviar Solicitud</ion-button>
        </form>
      </div>

      <ion-alert
        :is-open="mostrarAlerta"
        header="🎉 Solicitud enviada"
        sub-header="Gracias por tu confianza"
        message="Tu reserva ha sido recibida. Nos pondremos en contacto contigo pronto para confirmar los detalles. 💕"
        :buttons="['Aceptar']"
        @didDismiss="mostrarAlerta = false"
      />
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
  IonSelect,
  IonSelectOption,
  IonButtons,
  IonBackButton,
  IonDatetime,
  IonAlert
} from '@ionic/vue'
import { ref } from 'vue'

const mostrarAlerta = ref(false)

function enviarReserva() {
  mostrarAlerta.value = true
}
</script>

<style scoped>
@import 'animate.css';

.contact {
  background: linear-gradient(to bottom, #2a0044, #4d0066);
  color: #ffddff;
  padding: 2rem;
  border-radius: 20px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

.main-title {
  font-size: 2.2rem;
  color: #ff99ff;
  text-align: center;
  text-shadow: 0 0 10px #ff66cc;
}

.description {
  font-size: 1.2rem;
  text-align: center;
  color: #ffd6ff;
  margin-bottom: 1.5rem;
  animation: fadeIn 1s ease-in-out;
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
  --background: #330044;
  --color: #ffffff;
  --placeholder-color: #cc99cc;
  font-size: 1rem;
}

ion-button {
  --background: #ff33cc;
  color: white;
  border-radius: 10px;
  font-size: 1.1rem;
  box-shadow: 0 0 10px #ff33cc;
}

ion-button:hover {
  filter: brightness(1.1);
  transform: scale(1.02);
}

ion-alert {
  --background: #330033;
  --color: #ffe6ff;
  --backdrop-opacity: 0.7;
  --border-radius: 16px;
  text-align: center;
}
</style>


