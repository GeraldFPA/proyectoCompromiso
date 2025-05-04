<template>
    <div class="fantasy-home">
      <img src="@/assets/Imagen1.png" class="bg-image" />
      <h1 class="title animate__animated animate__bounceIn">Welcome to StippFantasy 🌟</h1>
      <p class="subtitle">Where your fantasies meet reality</p>
      <router-link to="/galaxy" class="btn">Explore Strippers</router-link>
    </div>
  </template>
  
  <script setup>
  // Nada por ahora
  </script>
  
  <style scoped>
  @import 'animate.css';
  
  .fantasy-home {
    text-align: center;
    background-color: #1f0026;
    color: #ff99cc;
    padding: 2rem;
    position: relative;
  }
  
  .bg-image {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0.1;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .title {
    font-size: 3rem;
    z-index: 2;
  }
  
  .subtitle {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
  
  .btn {
    background: #ff33cc;
    padding: 1rem 2rem;
    color: white;
    border-radius: 2rem;
    text-decoration: none;
    transition: 0.3s;
  }
  .btn:hover {
    background: #cc00aa;
  }
  </style>
  