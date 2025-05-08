<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-title>🔥 Eventos de tendencia</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="events">
        <h2 class="animate__animated animate__flash">🔥 Eventos de tendencia 🔥</h2>
        <ul>
          <li v-for="(event, index) in events" :key="index" @click="openModal(index)">
            <ion-icon :name="event.icon" slot="start" color="primary"></ion-icon>
            {{ event.name }}
          </li>
        </ul>
      </div>

      <!-- Modal personalizado sin fondo negro -->
      <ion-modal
        :isOpen="showModal"
        @didDismiss="closeModal"
        class="custom-modal"
        :showBackdrop="false"
        :backdropDismiss="true"
      >
        <ion-content class="ion-padding modal-content">
          <div class="modal-header">
            <ion-icon name="sparkles" size="large" color="warning"></ion-icon>
          </div>
          <h3>{{ selectedEvent.name }}</h3>
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
  IonIcon,
  IonButtons,
  IonBackButton
} from '@ionic/vue';
import { ref } from 'vue';

const events = [
  {
    name: 'Sensualidad Sobre Ruedas',
    description: 'Llevamos la fiesta hasta la puerta de tu casa con nuestros servicios. Una experiencia VIP donde tú eres el protagonista.',
    discount: '10% de descuento si reservas para una despedida de soltero este mes.',
    icon: 'car'
  },
  {
    name: 'Strippers Bajo las Estrellas',
    description: '¿Tienes una terraza o jardín? Creamos una noche inolvidable al aire libre con Bailarines/as profesionales y música personalizada.',
    discount: 'Reserva antes del viernes y obtén luces LED gratuitas para tu show.',
    icon: 'moon'
  },
  {
    name: 'Fantasy Room Experience',
    description: 'Transformamos cualquier habitación de hotel o Airbnb en un espacio íntimo para una actuación sensual y exclusiva.',
    discount: '¡20% en tu primera experiencia privada a domicilio!',
    icon: 'bed'
  },
  {
    name: 'Fuego en tu Fiesta',
    description: 'Llevamos la chispa a tu cumpleaños o celebración especial con un servicio sorpresa y efectos visuales.',
    discount: 'Agrega un segundo artista por solo ₡10.000 extra.',
    icon: 'flame'
  },
  {
    name: 'Noche de Lujuria Corporativa',
    description: 'Sí, también vamos a oficinas. Sorprende a tu equipo con un show profesional, después del trabajo.',
    discount: '15% de descuento en eventos para empresas de más de 10 personas.',
    icon: 'briefcase'
  },
  {
    name: 'Festival Seducción Total (evento especial)',
    description: 'Un evento organizado por nosotros. Música, luces, Bailarines/as y fantasía sin límites.',
    discount: 'Entradas limitadas disponibles solo este mes.',
    icon: 'people'
  }
];

const showModal = ref(false);
const selectedEvent = ref({});

const openModal = (index) => {
  selectedEvent.value = events[index];
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
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

ion-modal.custom-modal::part(backdrop) {
  background: transparent !important;
}

.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 90%;
  max-width: 300px;
  margin: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  text-align: center;
  background: #fff5f8;
  color: #333;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
}

.modal-header {
  margin-bottom: 1rem;
}

.modal-content h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
}

.modal-content p {
  font-size: 1rem;
  margin-top: 0.5rem;
}

.promo {
  font-size: 1.1rem;
  color: #e91e63;
  font-weight: bold;
  margin-top: 1rem;
}

ion-button {
  margin-top: 1rem;
}
</style>






