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
      <div class="faq animate__animated animate__fadeIn">
        <h2 class="animate__animated animate__flipInX">❓ Preguntas Frecuentes de StrippFantasy</h2>
        <img src="/src/assets/imagen13.png" class="decor animate__animated animate__pulse animate__infinite" />

        <div class="faq-table">
          <div class="faq-row" v-for="(faq, index) in faqs" :key="index">
            <div class="faq-question">❓ {{ faq.pregunta }}</div>
            <div class="faq-answer">💬 {{ faq.respuesta }}</div>
          </div>
        </div>
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

const faqs = [
  {
    pregunta: '¿Cómo hago una reserva?',
    respuesta: 'Solo elige tu fantasía y contacta con nosotros en el area de contacto nosotros nos comunicaremos con tigo. ¡Rápido y sencillo!'
  },
  {
    pregunta: '¿Es seguro el servicio?',
    respuesta: 'Sí, todo está gestionado profesionalmente con discreción total.'
  },
  {
    pregunta: '¿Qué temáticas están disponibles?',
    respuesta: 'Piratas, ángeles, guerreros, diosas griegas, demonios, vampiros, policías, bomberos, colegialas, cyberpunk, estilo anime, y muchas más.'
  },
  {
    pregunta: '¿Puedo elegir la música o ambiente?',
    respuesta: '¡Claro! Puedes personalizar luces, música y aroma si lo deseas.'
  },
  {
    pregunta: '¿Hay opciones para despedidas de soltero/a?',
    respuesta: 'Sí, tenemos paquetes temáticos ideales para grupos y celebraciones.'
  },
  {
    pregunta: '¿Ofrecen membresías VIP?',
    respuesta: 'Sí, con beneficios exclusivos como prioridad en reservas y acceso a fantasías limitadas.'
  },
  {
    pregunta: '¿Qué métodos de pago aceptan?',
    respuesta: 'Aceptamos tarjetas, transferencias y pagos móviles'
  },
  {
    pregunta: '¿Puedo cancelar o reagendar?',
    respuesta: 'Sí, hasta 24 horas antes del evento sin penalización.'
  }
]
</script>

<style scoped>
@import 'animate.css';

.faq {
  background: linear-gradient(135deg, #3d0055, #6e007c);
  color: #ffe6ff;
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
  animation: fadeIn 1s ease-in-out;
}

.decor {
  width: 250px;
  border-radius: 15px;
  margin-bottom: 2rem;
  box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
}

.faq-table {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  max-width: 800px;
  margin: 0 auto;
}

.faq-row {
  background: rgba(255, 255, 255, 0.1);
  padding: 1rem;
  border-radius: 15px;
  border: 1px solid #ffffff30;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(6px);
  text-align: left;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.faq-row:hover {
  transform: scale(1.02);
  box-shadow: 0 0 25px #ff66cc;
}

.faq-question {
  font-weight: bold;
  color: #ffcaff;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.faq-answer {
  font-size: 1rem;
  color: #ffe9ff;
  line-height: 1.5;
}
</style>
