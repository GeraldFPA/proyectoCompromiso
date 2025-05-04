<template>
    <div class="faq">
      <h2 class="animate__animated animate__flipInX">❓ Fantasy FAQ</h2>
      <img src="@/assets/imagen13.png" class="decor" />
      <ul>
        <li><strong>How do I book?</strong> — Choose, click, confirm!</li>
        <li><strong>Is it safe?</strong> — 100% professionally managed.</li>
        <li><strong>What themes?</strong> — Pirates, angels, warriors, and more!</li>
      </ul>
    </div>
  </template>
  
  <script setup></script>
  
  <style scoped>
  @import 'animate.css';
  
  .faq {
    background: #3d0055;
    color: #ffe6ff;
    padding: 2rem;
    text-align: center;
  }
  
  .decor {
    width: 150px;
    border-radius: 10px;
    margin-bottom: 1rem;
  }
  
  ul {
    text-align: left;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.8;
  }
  </style>
  