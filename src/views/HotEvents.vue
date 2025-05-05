<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-title>🔥 Eventos Calientes</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="events">
        <h2 class="animate__animated animate__flash">🔥 Eventos Calientes 🔥</h2>
        <ul>
          <li v-for="(event, index) in events" :key="index" @click="openModal(index)">
            <ion-icon :name="event.icon" slot="start" color="primary"></ion-icon>
            {{ event.name }}
          </li>
        </ul>
      </div>

      <!-- Modal para mostrar información del evento -->
      <ion-modal :isOpen="showModal" @didDismiss="closeModal">
        <ion-header>
          <ion-toolbar color="danger">
            <ion-title>{{ selectedEvent.name }}</ion-title>
          </ion-toolbar>
        </ion-header>

        <ion-content class="ion-padding modal-content">
          <div class="modal-header">
            <ion-icon name="sparkles" size="large" color="warning"></ion-icon>
          </div>
          <p>{{ selectedEvent.description }}</p>
          <p v-if="selectedEvent.discount" class="promo">{{ selectedEvent.discount }}</p>
          <ion-button expand="full" color="danger" @click="closeModal">Cerrar</ion-button>
        </ion-content>
      </ion-modal>
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
  IonModal,
  IonIcon
} from '@ionic/vue';
import { ref } from 'vue';

const events = [
  { 
    name: 'Exhibición Nocturna Glow', 
    description: 'Una noche llena de luces brillantes y energía desbordante. ¡Prepárate para un espectáculo de luces y música como nunca antes!',
    discount: 'Descuento del 20% en tu primera reserva!',
    icon: 'flash'
  },
  { 
    name: 'Fiesta Neón', 
    description: 'La fiesta de neón más grande de la galaxia. Colores brillantes, música electrónica y un ambiente futurista te esperan.',
    discount: '¡2x1 en bebidas para grupos!',
    icon: 'color-palette'
  },
  { 
    name: 'Fiebre de la Jungla Fantástica', 
    description: '¡Siente la adrenalina! Una fiesta salvaje en la jungla con un toque sensual y misterioso. Prepárate para bailar hasta el amanecer.',
    discount: 'Promoción especial: 10% de descuento en tu próxima entrada.',
    icon: 'paw'
  },
  { 
    name: 'Showdown de Fuego y Hielo', 
    description: 'Una batalla épica entre fuego y hielo, donde la pasión y la energía se fusionan para ofrecer un espectáculo inolvidable.',
    discount: '¡Consigue un 30% de descuento si llegas antes de las 10pm!',
    icon: 'flame'
  },
  { 
    name: 'Bajo las Estrellas de la Seducción', 
    description: 'Bajo un cielo estrellado, vive la noche más seductora, llena de magia, sensualidad y una atmósfera única.',
    discount: '¡Entradas a mitad de precio si vienes en pareja!',
    icon: 'star'
  },
  { 
    name: 'Festival Lujuria y Luces', 
    description: 'Un festival de luces y deseo, donde la música y las luces se combinan para crear un ambiente único de tentación.',
    discount: '¡20% de descuento con tu primera compra en línea!',
    icon: 'bulb'
  },
];

const showModal = ref(false);  // Usar ref para control de estado en Vue 3
const selectedEvent = ref({});

const openModal = (index) => {
  selectedEvent.value = events[index];
  showModal.value = true;  // Abrir el modal
};

const closeModal = () => {
  showModal.value = false;  // Cerrar el modal
};
</script>

<style scoped>
@import 'animate.css';

.events {
  background: #2e003e;
  color: #ffaaff;
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  margin: 1rem 0;
  font-size: 1.2rem;
  background: #ff99cc33;
  padding: 1rem;
  border-radius: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

li:hover {
  background: #ff99cc;
}

/* Estilo para el modal */
.modal-content {
  width: 80%;
  max-width: 350px;
  margin: auto;
  text-align: center;
  background: #fff5e6;  /* Color de fondo más suave */
  color: #333;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);  /* Agregar sombra sutil */
}

.modal-header {
  margin-bottom: 1rem;
}

.modal-content p {
  font-size: 1rem;
  margin-top: 1rem;
}

.promo {
  font-size: 1.2rem;
  color: #e74c3c;
  margin-top: 1rem;
  font-weight: bold;
}

ion-button {
  margin-top: 1rem;
}
</style>


