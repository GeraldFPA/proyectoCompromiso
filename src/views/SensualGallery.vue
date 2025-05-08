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
          Nuestras Bailarinas/es son más que bailarinas, ¡son arte en movimiento!
        </p>
        <p>
          En nuestra Galaxia Stripper, cada uno de nuestros artistas tiene una esencia única. Se entregan por completo en su trabajo, creando experiencias que te dejarán sin aliento. Con sus cuerpos y habilidades sensuales, cada uno de los y las Bailarines/as transforman la noche en un espectáculo de seducción, arte y diversión. Ven y disfruta de un viaje visual, ¡donde el placer y el deseo se hacen realidad!
        </p>

        
        <div class="packages">
          <h3>💎 Paquetes Sensuales a Domicilio 💎</h3>
          <ul>
            <li>
              ✨ <strong>Pack Básico:</strong> Show privado con 1 Bailarin/a, música personalizada y ambiente íntimo.
              <span class="price">₡65,000</span>
            </li>
            <li>
              💃 <strong>Pack Dúo Ardiente:</strong> Un show de alto voltaje. ¡Ideal para despedidas!
              <span class="price">₡120,000</span>
            </li>
            <li>
              🌈 <strong>Pack Fiesta Neón:</strong> Show con luces LED, barras portátiles, humo y coreografías con pintura UV.
              <span class="price">₡160,000</span>
            </li>
            <li>
              🔥 <strong>Pack Show VIP:</strong> Experiencia exclusivas para los miembros VIP.
              <span class="price">₡220,000</span>
            </li>
            <li>
              🌟 <strong>Pack Fantasía:</strong> Personaliza tu fantasía: desde uniformes hasta temáticas (bombero/a, policía, colegiala/o, etc).
              <span class="price">₡80,000 + vestuario (₡10,000–₡25,000)</span>
            </li>
          </ul>
          <p class="note">🎁 Todos nuestros shows incluyen animación, juegos picantes y momentos inolvidables. ¡Llevamos la fiesta hasta tu sala!</p>
        </div>

        
        <ion-button expand="full" color="primary" @click="goToStripperGalaxy">
          Explorar la Galaxia Bailarines/as
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


.packages {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 2rem;
  margin-top: 2rem;
  box-shadow: 0 0 15px rgba(255, 0, 102, 0.3);
}
.packages h3 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #fff;
}
.packages ul {
  text-align: left;
  list-style: none;
  padding: 0;
}
.packages li {
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}
.packages strong {
  color: #ffd700;
}
.packages .note {
  margin-top: 1.5rem;
  font-style: italic;
  color: #ffdaec;
}
.price {
  display: block;
  font-weight: bold;
  color: #ffcc00;
  margin-top: 0.3rem;
}
</style>


