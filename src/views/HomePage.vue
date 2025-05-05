<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>🌈 StippFantasy</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="home">
        <h1 class="animate__animated animate__rubberBand title">🌈 StippFantasy</h1>
        <img :src="logo" alt="Logo de StippFantasy" class="logo animate__animated animate__fadeIn" />

        <div class="grid animate__animated animate__fadeInUp">
          <RouterLink
            v-for="ruta in rutasMenu"
            :key="ruta.path"
            :to="ruta.path"
            class="card"
            replace
          >
            {{ ruta.label }}
          </RouterLink>

          <!-- Botón de cerrar sesión -->
          <RouterLink to="/login" class="card cerrar-sesion" replace>
            🚪 Cerrar sesión
          </RouterLink>
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
  IonContent
} from '@ionic/vue'
import logo from '/src/assets/Imagen1.png'

const rutasMenu = [
  { label: '🎭 Inicio Fantasía', path: '/fantasy' },
  { label: '🪐 Galaxia Stripper', path: '/galaxy' },
  { label: '🌈 Registrarse', path: '/register' },
  { label: '🔥 Eventos Ardientes', path: '/events' },
  { label: '📞 Contacto', path: '/contact' },
  { label: '💋 Sobre Nosotros', path: '/about' },
  { label: '🎨 Galería Sensual', path: '/gallery' },
  { label: '🌒 Fantasía Oscura', path: '/dark-fantasy' },
  { label: '🚪 Habitación Privada', path: '/private-room' },
  { label: '❓ Preguntas Frecuentes', path: '/faq' },
  { label: '💎 Membresía VIP', path: '/vip' }
]
</script>

<style scoped>
@import 'animate.css';

.home {
  min-height: 100vh;
  background: linear-gradient(135deg, #ff00cc, #3333ff);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem;
  color: white;
  text-align: center;
}

.title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 0 0 10px #fff;
}

.logo {
  width: 150px;
  margin-bottom: 2rem;
  border-radius: 20px;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.2rem;
  width: 100%;
  max-width: 800px;
  margin-top: 1rem;
}

.card {
  background: rgba(255, 255, 255, 0.1);
  border: 2px solid #fff;
  color: white;
  text-decoration: none;
  padding: 1rem;
  border-radius: 20px;
  font-size: 1rem;
  transition: all 0.3s ease;
  text-shadow: 0 0 5px #ff66ff;
  backdrop-filter: blur(4px);
  box-shadow: 0 0 10px rgba(255, 255, 255, 0.3);
}

.card:hover {
  background: white;
  color: #ff00cc;
  transform: scale(1.05);
  box-shadow: 0 0 15px #ff00cc;
}

.cerrar-sesion {
  border-color: #ff6666;
  text-shadow: 0 0 5px #ff9999;
}

.cerrar-sesion:hover {
  color: #fff;
  background: #ff3366;
  box-shadow: 0 0 15px #ff3366;
}
</style>
