<template>
  <v-app>
    <toolbar @toggle-drawer="$refs.drawer.drawer = !$refs.drawer.drawer"/>
    <drawer ref="drawer"/>
    <router-view></router-view>
    <v-overlay :value="$store.state.overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </v-app>
</template>

<script>
import Toolbar from './components/Toolbar';
import Drawer from './components/Drawer';
import Menufunc from './components/Menufunc';
import store from "@/store/index.js";

export default {
  name: 'App',

  components: {
    Toolbar,
    Drawer,
    Menufunc,
  },

  data: () => ({
    
  }),
  
  

  
};
</script>
