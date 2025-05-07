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
        
        <!-- Imagen principal -->
        <img src="/src/assets/imagen9.png" class="main-image" />

        <!-- Miniaturas debajo -->
        <div class="thumbnails">
          <img
            v-for="n in [10, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32]"
            :key="n"
            :src="`/src/assets/imagen${n}.png`"
            class="thumbnail-image"
            alt="Mini stripper"
          />
        </div>

        <p>
          Nuestras strippers son más que bailarinas, ¡son arte en movimiento!
        </p>
        <p>
          En nuestra Galaxia Stripper, cada uno de nuestros artistas tiene una esencia única. Se entregan por completo en su trabajo, creando experiencias que te dejarán sin aliento. Con sus cuerpos y habilidades sensuales, cada uno de nuestros strippers transforma la noche en un espectáculo de seducción, arte y diversión. Ven y disfruta de un viaje visual, ¡donde el placer y el deseo se hacen realidad!
        </p>

       <!-- Botón para redirigir a la Galaxia Stripper -->
        <ion-button expand="full" color="primary" @click="goToStripperGalaxy">
          Explorar la Galaxia Stripper
        </ion-button>
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

const goToStripperGalaxy = () => {
  router.push('/galaxy');
};
</script>

<style scoped>
@import 'animate.css';

.gallery {
  background: linear-gradient(to right, #33001a, #ff0066);
  color: #fff0f5;
  text-align: center;
  padding: 3rem;
  font-size: 1.5rem;
}

.main-image {
  width: 70%;
  border-radius: 20px;
  margin: 2rem 0;
}

/* Miniaturas */
.thumbnails {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
}

.thumbnail-image {
  width: 100px;
  height: 140px;
  object-fit: cover;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
  transition: transform 0.3s ease;
}
.thumbnail-image:hover {
  transform: scale(1.05);
}

h2 {
  font-size: 3rem;
}

p {
  font-size: 1.25rem;
  line-height: 1.6;
  margin: 1rem 0;
}

ion-button {
  margin-top: 3rem;
  font-size: 1.25rem;
}
</style>

