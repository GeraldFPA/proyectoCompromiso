<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="dark">
        <ion-buttons slot="start">
          <ion-back-button default-href="/home" />
        </ion-buttons>
        <ion-title>🌺 Nosotros</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true" class="ion-padding">
      <div class="about">
        <img src="/src/assets/Imagen1.png" alt="Doctor" class="decor" />
        <h2 class="animate__animated animate__fadeInDown">🌺 Acerca de StrippFantasy</h2>
        <p>
          Somos una agencia cósmica que trae strippers temáticos para tus eventos de fantasía desde 2025. Nuestra misión es ofrecer entretenimiento exótico seguro, placentero y divertido. Cada evento es una experiencia única y especial, adaptada a tus deseos más extravagantes. Este proyecto es el resultado del esfuerzo conjunto de estudiantes de la Universidad de Costa Rica, sede Guanacaste, quienes se unieron en un proyecto de invención informática del curso Compromiso Social de la Informática. El equipo de trabajo estuvo conformado por: Conejo Elizondo Steven David, Espinoza Cabezas María Félix, Álvarez Ruiz Jerry Fabricio, Álvarez Paladino Gerald, Anthony Gabriel Conejo Alvarado y Víctor Josué Rodríguez Arce.
        </p>
        <p>
          El proyecto StrippFantasy representa la creatividad y el trabajo en equipo, con el objetivo de desarrollar soluciones innovadoras en el ámbito digital. A través de este proyecto, buscamos no solo ofrecer entretenimiento de alta calidad, sino también destacar la importancia de la tecnología y la programación en la construcción de experiencias únicas para todos.
        </p>
        <div class="team">
          <h3>Integrantes del Proyecto:</h3>
          <ul>
            <li>Conejo Elizondo Steven David</li>
            <li>Espinoza Cabezas María Félix</li>
            <li>Álvarez Ruiz Jerry Fabricio</li>
            <li>Álvarez Paladino Gerald</li>
            <li>Anthony Gabriel Conejo Alvarado</li>
            <li>Víctor Josué Rodríguez Arce</li>
          </ul>
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
</script>

<style scoped>
@import 'animate.css';

.about {
  background: #3a004d;
  color: #f0b3ff;
  padding: 2rem;
  text-align: center;
  position: relative;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
}

.decor {
  width: 200px;
  position: absolute;
  top: -50px;
  right: 10px;
  animation: spin 10s infinite linear;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

p {
  max-width: 600px;
  margin: auto;
  line-height: 1.6;
}

.team {
  margin-top: 2rem;
  text-align: left;
  color: #f0b3ff;
}

.team h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.team ul {
  list-style-type: none;
  padding: 0;
}

.team li {
  margin: 0.5rem 0;
}

.animate__fadeInDown {
  animation-duration: 1.5s;
}
</style>
