<template>
  <v-card class="overflow-hidden">
    <v-app-bar absolute color="primary" dark>
      <v-btn to="/">Home</v-btn>
      <v-spacer></v-spacer>
      <v-btn to="/jobs">Trabajos</v-btn>
      <v-btn>
        <v-icon>mdi-file-document</v-icon>Sube tu curriculum
      </v-btn>
    </v-app-bar>
    <v-sheet id="scrolling-techniques-8" class="overflow-y-auto" max-height="60">
      <v-container style="height: 1800px;">
      </v-container>
    </v-sheet>
  </v-card>
</template>