<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>🌟 StrippFantasy</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="home">
        <div class="particles">
          <span v-for="n in 4" :key="`left-${n}`" class="particle left" :style="{ top: `${n * 20}%` }">💖</span>
          <span v-for="n in 4" :key="`right-${n}`" class="particle right" :style="{ top: `${n * 20}%` }">💖</span>
        </div>

        <h1 class="animate__animated animate__fadeIn title">🌟 StrippFantasy</h1>
        <img :src="logo" alt="Logo de StippFantasy" class="logo animate__animated animate__pulse" />

        <div class="grid animate__animated animate__fadeInUp">
          <RouterLink
            v-for="(ruta, index) in rutasMenu"
            :key="ruta.path"
            :to="ruta.path"
            class="card"
            :class="{ 'cerrar-sesion': ruta.path === '/login' }"
            :style="{ animationDelay: `${index * 0.1}s` }"
          >
            {{ ruta.label }}
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
import logo from '/src/assets/logoS.png'

const rutasMenu = [
  { label: '🎭 Inicio Fantasía', path: '/fantasy' },
  { label: '🔥 Eventos de tendencia', path: '/events' },
  { label: '📞 Contacto', path: '/contact' },
  { label: '💋 Sobre Nosotros', path: '/about' },
  { label: '🎨 Galería Sensual', path: '/gallery' },
  { label: '❓ Preguntas Frecuentes', path: '/faq' },
  { label: '💎 Membresía VIP', path: '/vip' },
  { label: '🚪 Cerrar sesión', path: '/login' }
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
  position: relative;
  overflow: hidden;
}

.title {
  font-size: 3rem;
  margin-bottom: 1rem;
  font-weight: bold;
  text-shadow: 0 0 10px #fff;
  animation: bounce 2s infinite, glow 2s ease-in-out infinite alternate;
}

.logo {
  width: 150px;
  margin-bottom: 2rem;
  border-radius: 20px;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.5);
  animation: pulse 2s infinite;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 1.2rem;
  width: 100%;
  max-width: 800px;
  margin-top: 1rem;
  z-index: 1;
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
  animation: slideIn 0.5s ease-out forwards;
  animation-fill-mode: both;
}

.card:hover {
  background: white;
  color: #ff00cc;
  transform: scale(1.05) rotate(-1deg);
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

.particles {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 0;
}

.particle {
  position: absolute;
  font-size: 2rem;
  animation: float 8s linear infinite;
  opacity: 0.7;
}

.particle.left {
  left: 5%;
}

.particle.right {
  right: 5%;
}

@keyframes bounce {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-10px); }
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #fff, 0 0 20px #ff33cc, 0 0 30px #ff33cc;
  }
  to {
    text-shadow: 0 0 20px #ff66ff, 0 0 40px #ff66ff, 0 0 60px #ff66ff;
  }
}

@keyframes pulse {
  0% { transform: scale(1); opacity: 0.8; }
  50% { transform: scale(1.1); opacity: 1; }
  100% { transform: scale(1); opacity: 0.8; }
}

@keyframes slideIn {
  0% { transform: translateY(50px); opacity: 0; }
  100% { transform: translateY(0); opacity: 1; }
}

@keyframes float {
  0% { transform: translateY(0); opacity: 0.7; }
  100% { transform: translateY(-100vh); opacity: 0; }
}
</style>