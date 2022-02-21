<template>
    <div v-show="notification.show" class="notification" :class="{ 'error': notification.isError }">{{ notification.message }}</div>
</template>

<script setup>
// Imports
import { inject } from "vue";

// Injects
const notification = inject("notification");
</script>

<style scoped>
.notification {
  position: absolute;
  margin-bottom: 10px;
  margin-right: 15px;
  bottom: 0;
  right: 0;
  height: 80px;
  width: 250px;
  background-color: aliceblue;
  border-radius: 4px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  animation: fade 2s;
  box-shadow: 0px 0px 20px 0px #000000;
  padding: 10px;
}
.error {
  background-color: #ff1111;
  color: white;
}
@keyframes fade {
  0% {opacity:0;}
  1% {opacity:0.1;}
  2% {opacity:0.2;}
  3% {opacity:0.3;}
  4% {opacity:0.4;}
  5% {opacity:0.5;}
  6% {opacity:0.6;}
  7% {opacity:0.7;}
  8% {opacity:0.8;}
  9% {opacity:0.9;}
  10% {opacity:1;}
  20% {opacity:1;}
  30% {opacity:1;}
  40% {opacity:1;}
  50% {opacity:1;}
  60% {opacity:1;}
  70% {opacity:1;}
  80% {opacity:1;}
  90% {opacity:1;}
  91% {opacity:0.9;}
  92% {opacity:0.8;}
  93% {opacity:0.7;}
  94% {opacity:0.6;}
  95% {opacity:0.5;}
  96% {opacity:0.4;}
  97% {opacity:0.3;}
  98% {opacity:0.2;}
  99% {opacity:0.1;}
  100% {opacity:0;}
}
</style>