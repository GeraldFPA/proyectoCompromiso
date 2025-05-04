<template>
    <div class="contact">
      <h2 class="animate__animated animate__heartBeat">💌 Contact Us</h2>
      <form>
        <input placeholder="Your Name" />
        <input placeholder="Your Email" />
        <textarea placeholder="Message"></textarea>
        <button>Send</button>
      </form>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  @import 'animate.css';
  
  .contact {
    background: #1a0033;
    color: #ffddff;
    padding: 2rem;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  textarea {
    height: 100px;
  }
  input, textarea, button {
    padding: 1rem;
    border-radius: 10px;
    border: none;
  }
  button {
    background: #ff33cc;
    color: white;
  }
  </style>
  