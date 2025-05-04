<template>
    <div class="register">
      <h2 class="animate__animated animate__rubberBand">🌈 Become a Fantasy Star</h2>
      <form>
        <input placeholder="Name" />
        <input placeholder="Email" />
        <input placeholder="Password" type="password" />
        <button>Register</button>
      </form>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  @import 'animate.css';
  
  .register {
    background: radial-gradient(circle, #ff00ff, #660066);
    color: white;
    padding: 2rem;
    text-align: center;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 2rem;
  }
  input, button {
    padding: 0.7rem;
    border-radius: 10px;
    border: none;
  }
  button {
    background: #ff33aa;
    color: white;
  }
  </style>
  