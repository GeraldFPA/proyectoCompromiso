<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-title>Galería Sensual</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="gallery">
        <h2 class="animate__animated animate__zoomIn">🎨 Galería Sensual</h2>
        <img src="/src/assets/imagen9.png" class="main-image" />
        <p>Nuestras strippers son más que bailarinas, ¡son arte en movimiento!</p>
        <p>En nuestra Galaxia Stripper, cada uno de nuestros artistas tiene una esencia única. Se entregan por completo en su trabajo, creando experiencias que te dejarán sin aliento. Con sus cuerpos y habilidades sensuales, cada uno de nuestros strippers transforma la noche en un espectáculo de seducción, arte y diversión. Ven y disfruta de un viaje visual, ¡donde el placer y el deseo se hacen realidad!</p>

        <!-- Botón para redirigir a la ventana StripperGalaxy -->
        <ion-button expand="full" color="primary" @click="goToStripperGalaxy">Explorar la Galaxia Stripper</ion-button>
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
import { useRouter } from 'vue-router';

const router = useRouter();

// Función para redirigir a la ventana StripperGalaxy
const goToStripperGalaxy = () => {
  router.push('/galaxy'); // Asumiendo que la ruta '/galaxy' está configurada en tu router
};
</script>

<style scoped>
@import 'animate.css';

.gallery {
  background: linear-gradient(to right, #33001a, #ff0066);
  color: #fff0f5;
  text-align: center;
  padding: 2rem;
}

.main-image {
  width: 50%; /* Imagen aún más pequeña */
  border-radius: 20px;
  margin: 1rem 0;
}

ion-button {
  margin-top: 2rem;
}
</style>

