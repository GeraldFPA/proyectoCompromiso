<template>
    <div class="login">
      <img src="/src/assets/imagen8.png" class="side-img" />
      <form class="form animate__animated animate__fadeInRight">
        <h3>Login to Fantasy</h3>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  @import 'animate.css';
  
  .login {
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: #12001f;
    color: white;
    padding: 3rem;
  }
  
  .side-img {
    width: 300px;
    height: auto;
    border-radius: 20px;
  }
  
  .form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  input {
    padding: 0.5rem;
    border-radius: 10px;
    border: none;
  }
  button {
    background: #ff33cc;
    color: white;
    border: none;
    padding: 0.7rem;
    border-radius: 10px;
  }
  </style>
  