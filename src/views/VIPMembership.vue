<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-title>Membresía VIP</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="vip">
        <h2 class="animate__animated animate__jackInTheBox">💎 Membresía VIP</h2>
        <img src="/src/assets/imagen14.png" class="badge" />
        <p>
          Únete a nuestra exclusiva Membresía VIP y desbloquea una serie de beneficios únicos, incluyendo acceso a shows privados, descuentos especiales y contenido exclusivo solo para miembros. Disfruta de una experiencia personalizada, diseñada especialmente para ti.
        </p>
        <h3>Paquetes de Membresía</h3>
        <div class="packages">
          <div class="package">
            <h4>Paquete Básico</h4>
            <p>Acceso a shows exclusivos y descuentos en eventos.</p>
            <p><strong>Precio:</strong> ₡12,000/mes</p>
            <p><strong>Duración:</strong> 1 mes</p>
          </div>
          <div class="package">
            <h4>Paquete Premium</h4>
            <p>Todo en el Paquete Básico + acceso a contenido adicional y un show privado mensual.</p>
            <p><strong>Precio:</strong> ₡30,000/mes</p>
            <p><strong>Duración:</strong> 1 mes</p>
          </div>
          <div class="package">
            <h4>Paquete Platinum</h4>
            <p>Todo en el Paquete Premium + beneficios exclusivos como prioridad en la reserva de shows y acceso anticipado a eventos especiales.</p>
            <p><strong>Precio:</strong> ₡60,000/mes</p>
            <p><strong>Duración:</strong> 1 mes</p>
          </div>
        </div>
        <ion-button expand="full" color="primary">Únete Ahora</ion-button>
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
} from '@ionic/vue';
</script>

<style scoped>
@import 'animate.css';

.vip {
  background: linear-gradient(to bottom, #400040, #ff00ff);
  color: white;
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.5rem; /* Aumentar tamaño de fuente global */
}

.badge {
  width: 250px; /* Aumentar tamaño de la imagen */
  margin: 2rem 0;
  display: block;
  margin-left: auto;
  margin-right: auto; /* Centrar imagen */
}

h2 {
  font-size: 2.5rem; /* Aumentar tamaño del título */
}

h3 {
  font-size: 2rem; /* Aumentar tamaño del subtítulo */
  margin-top: 2rem;
}

.packages {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
}

.package {
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  margin: 1.5rem 0;
  border-radius: 10px;
  width: 80%;
  max-width: 500px;
}

.package h4 {
  font-size: 1.75rem; /* Aumentar tamaño del nombre del paquete */
  font-weight: bold;
}

.package p {
  font-size: 1.25rem; /* Aumentar tamaño del texto */
  margin: 0.75rem 0;
}

ion-button {
  padding: 1.5rem 2.5rem;
  background: #ff3399;
  border-radius: 15px;
  color: white;
  font-size: 1.25rem; /* Aumentar tamaño del botón */
  margin-top: 2rem;
}
</style>

