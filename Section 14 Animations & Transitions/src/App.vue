<template>
    <router-view v-slot="slotProps">
      <transition name="route" mode="out-in">
        <component :is="slotProps.Component"></component>
      </transition>
    </router-view>
</template>  

<script>

export default {
  components:{},
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false
    };
  },
  methods: {
    animateBlock() {
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: sans-serif;
}
body {
  margin: 0;
}
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate{
  animation: slide-fade 0.3s ease-out forwards;
}

.v-enter-from{
  opacity:0;
  transform:translateY(-30px);
}

.v-enter-active{
  transition: all 0.3s ease-out;
}

.v-enter-to{
  opacity:1;
  transform:translateY(0); 
}

.v-leave-from{
  opacity:0;
  transform:translateY(-30px);
}

.v-leave-active{
  transition: all 0.3s ease-in;
}

.v-leave-to {
  opacity:1;
  transform:translateY(30px); 
}

.route-enter-from,
.route-enter-active{
  animation:slide-scale 0.5s;
}

.route-enter-to{

}

@keyframes slide-scale {
  0%{
    transform: translateX(0) scale(1);
  }

  70% {
    transform: translateX(-120px) scale(1.1);
  }

  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>