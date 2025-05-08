<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/fantasy" />
        </ion-buttons>
        <ion-title>🌌 Galaxia de Bailarines/as</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="galaxy">
        <h2 class="animate__animated animate__zoomIn">✨ ¡Bienvenido a la Galaxia de Bailarines/as! ✨</h2>
        <p class="intro-text">
          Explora un universo lleno de talento y sensualidad. ¡Las mejores Bailarinas y Bailarines de la galaxia están aquí para ti!
        </p>

        <div class="stripper-list">
          <img
            v-for="stripper in strippers"
            :key="stripper.id"
            :src="`src/assets/imagen${stripper.imageIndex}.png`"
            class="card"
            alt="Imagen de stripper"
            @click="openPopup(stripper)"
          />
        </div>
      </div>

      
      <div v-if="showPopup" class="popup-overlay" @click.self="closePopup">
        <div
          class="popup-card animate__animated animate__fadeInDown"
          :class="{ 'popup-small': selectedStripper.id <= 3 }"
        >
          <img :src="`src/assets/imagen${selectedStripper.imageIndex}.png`" alt="Imagen" class="popup-img" />
          <h3>{{ selectedStripper.name }}</h3>
          <p>{{ selectedStripper.description }}</p>
          <div class="popup-buttons">
            <button @click="goToContact" class="reserve-btn">Reservar</button>
            <button @click="closePopup" class="close-btn">Cerrar</button>
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
} from '@ionic/vue';

import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const strippers = [
  { id: 1, imageIndex: 2, name: "Sergio", description: "Un stripper lleno de pasión y energía. Su actuación hipnotiza a todos en la sala." },
  { id: 2, imageIndex: 3, name: "Sasha", description: "Elegante y seductora, Sasha es conocida por su baile sensual y movimientos suaves." },
  { id: 3, imageIndex: 4, name: "Jafet", description: "Con un estilo oscuro y misterioso, Jafet ofrece una experiencia única e intensa." },
  { id: 4, imageIndex: 5, name: "El Equipo Dinamita", description: "Un grupo explosivo de strippers masculinos que te harán vibrar con cada movimiento." },
  { id: 5, imageIndex: 6, name: "Victoria", description: "Sofisticada y cautivadora, Victoria tiene la habilidad de atraer todas las miradas con su presencia." },
  { id: 6, imageIndex: 7, name: "Bella", description: "Bella, con su estilo encantador y su gracia, se mueve como una diosa, dejando a todos cautivados." },
  { id: 7, imageIndex: 22, name: "Los hermanos", description: "Con una habilidad de otro mundo, Los hermanos explotan la galaxia con su sensualidad y estilo." },
  { id: 8, imageIndex: 23, name: "Orion", description: "Fuerza y carisma combinados. Orion domina el escenario con movimientos que encienden pasiones." },
  { id: 9, imageIndex: 24, name: "Zafira", description: "Exótica y misteriosa, Zafira encanta con su danza celestial y mirada intensa." },
  { id: 10, imageIndex: 25, name: "Leo", description: "Valiente y audaz, Leo es una estrella en el arte del striptease cósmico." },
  { id: 11, imageIndex: 26, name: "Nébula", description: "Como una explosión de colores, Nébula transforma el escenario en una fantasía intergaláctica." },
  { id: 12, imageIndex: 27, name: "Axel", description: "Axel es intensidad pura. Su show deja huella en todos los planetas que visita." },
  { id: 13, imageIndex: 28, name: "Selene", description: "Grácil como la luna, Selene mezcla elegancia con un toque picante." },
  { id: 14, imageIndex: 29, name: "Estela", description: "Brilla como una supernova, Estela es una figura icónica del erotismo sideral." },
  { id: 15, imageIndex: 30, name: "Ragnar", description: "Guerrero espacial del deseo, Ragnar impresiona con su físico y energía arrolladora." },
  { id: 16, imageIndex: 31, name: "Dante", description: "Con fuego en la mirada, Dante quema las pasarelas de la galaxia." },
  { id: 17, imageIndex: 32, name: "Cassandra", description: "Belleza sobrenatural y movimientos envolventes. Cassandra es un sueño estelar." },
  { id: 18, imageIndex: 21, name: "PikaChulo", description: "Este hombre disfrazado de Pikachu electriza el escenario con su actuación juguetona y divertida." },
  { id: 19, imageIndex: 10, name: "Wolverina", description: "Una fiera vestida de Wolverine. Su estilo salvaje y sensualidad rasgan corazones." },
  { id: 20, imageIndex: 12, name: "El Electrico", description: "Un hombre lleno de carisma y ritmo. Su show es pequeño en tamaño, pero gigante en energía." },
  { id: 21, imageIndex: 14, name: "La ley", description: "Irreverente, divertido y sorprendente." }
];

const showPopup = ref(false);
const selectedStripper = ref({});

const openPopup = (stripper) => {
  selectedStripper.value = stripper;
  showPopup.value = true;
};

const closePopup = () => {
  showPopup.value = false;
};

const goToContact = () => {
  router.push('/contact');
};
</script>

<style scoped>
@import 'animate.css';

.galaxy {
  background: linear-gradient(145deg, #330066, #9900cc);
  color: white;
  padding: 2rem;
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.intro-text {
  font-size: 1.2rem;
  margin: 1rem 0;
  font-style: italic;
  color: #ffccff;
}

.stripper-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.card {
  width: 180px;
  height: 250px;
  object-fit: cover;
  border-radius: 1rem;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.3);
}
.card:hover {
  transform: scale(1.05) rotate(2deg);
}

.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.popup-card {
  background-color: #1a0033;
  padding: 2rem;
  border-radius: 20px;
  color: white;
  text-align: center;
  max-width: 350px;
  box-shadow: 0 0 20px #ff66cc;
  position: relative;
}

.popup-small {
  max-width: 280px;
  padding: 1.5rem;
}

.popup-img {
  width: 100%;
  border-radius: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 0 10px white;
}

.popup-buttons {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.reserve-btn {
  padding: 0.5rem 1.2rem;
  background-color: #33cc99;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.reserve-btn:hover {
  background-color: #28a67a;
}

.close-btn {
  padding: 0.5rem 1.2rem;
  background-color: #ff3399;
  border: none;
  color: white;
  font-weight: bold;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}
.close-btn:hover {
  background-color: #cc0066;
}
</style>





