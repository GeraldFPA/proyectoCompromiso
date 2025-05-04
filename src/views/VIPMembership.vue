<template>
    <div class="vip">
      <h2 class="animate__animated animate__jackInTheBox">💎 VIP Membership</h2>
      <img src="@/assets/imagen14.png" class="badge" />
      <p>Unlock fantasy perks, private shows, and exclusive access.</p>
      <button>Join Now</button>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  @import 'animate.css';
  
  .vip {
    background: linear-gradient(to bottom, #400040, #ff00ff);
    color: white;
    padding: 2rem;
    text-align: center;
  }
  
  .badge {
    width: 120px;
    margin: 1rem 0;
  }
  
  button {
    padding: 1rem 2rem;
    background: #ff3399;
    border: none;
    border-radius: 15px;
    color: white;
    font-size: 1rem;
    margin-top: 1rem;
  }
  </style>
  