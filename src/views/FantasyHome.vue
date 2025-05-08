<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-title>🌟 Inicio de StrippFantasy</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="fantasy-home">
        <img src="/src/assets/Imagen1.png" class="bg-image" />
        <h1 class="title animate__animated animate__bounceIn">Bienvenido a StrippFantasy 🌟</h1>
        <p class="subtitle">Tu Fantasia a un solo click </p>
        <p class="description">
          En StrippFantasy, tenemos lo mejor de la diversión y el entretenimiento. Nuestros Bailarines/as son artistas talentosos que transforman cada evento en una experiencia única. Este mes, tenemos un catálogo increíble de Bailarines/as temáticos disponibles, cada uno con su estilo y personalidad única. ¡Haz tus fantasías realidad con solo un clic!
        </p>
        <router-link to="/galaxy" class="btn">Explorar Bailarines/as</router-link>
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
</script>

<style scoped>
@import 'animate.css';

.fantasy-home {
  text-align: center;
  background-color: #1f0026;
  color: #ff99cc;
  padding: 2rem;
  position: relative;
  min-height: 100vh;
}

.bg-image {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0.1;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.title {
  font-size: 3rem;
  z-index: 1;
  position: relative;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.description {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  position: relative;
  z-index: 1;
}

.btn {
  background: #ff33cc;
  padding: 1rem 2rem;
  color: white;
  border-radius: 2rem;
  text-decoration: none;
  transition: 0.3s;
  position: relative;
  z-index: 1;
}
.btn:hover {
  background: #cc00aa;
}
</style>
