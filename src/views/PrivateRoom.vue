<template>
    <div class="private">
      <h2 class="animate__animated animate__pulse">🔒 Private Room</h2>
      <img src="/src/assets/imagen12.png" class="room" />
      <p>Exclusive and intimate moments await you.</p>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  @import 'animate.css';
  
  .private {
    background: #290033;
    color: #ffb3ec;
    text-align: center;
    padding: 2rem;
  }
  
  .room {
    width: 75%;
    border-radius: 25px;
    margin: 1rem 0;
    border: 5px solid #ff66cc;
  }
  </style>
  