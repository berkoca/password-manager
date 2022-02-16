<template>
  <v-theme-provider theme="dark">
    <div class="text-center">
      <v-dialog v-model="showViewPasswordDialog">
        <v-card class="dialog">
          <v-card-header>
            <v-card-header-text> Viewing a Password </v-card-header-text>
          </v-card-header>
          <v-card-text>
            <v-row style="width: 500px;">
              <v-col cols="12">
                <v-text-field class="form-input" density="compact" label="Application Name/URL" v-model="selectedPassword.application" disabled></v-text-field>
                <v-text-field class="form-input" density="compact" label="Username/E-mail" v-model="selectedPassword.username" disabled></v-text-field>
                <v-text-field class="form-input" density="compact" label="Password" v-model="selectedPassword.password" disabled></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <v-btn variant="contained-text" block @click="showViewPasswordDialog = false">Close</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn variant="contained-text" color="success" block @click="updateClipboard(selectedPassword.password)">Copy Password</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-theme-provider>
</template>

<script setup>
// Imports
import { inject } from "vue";

// Injects
const showViewPasswordDialog = inject("showViewPasswordDialog");
const selectedPassword = inject("selectedPassword");
const showNotification = inject("showNotification");

// Functions
const updateClipboard = (newClip) => {
  navigator.clipboard.writeText(newClip).then(function() {
    showNotification.value = true;
    setTimeout(() => {
        showNotification.value = false;
    }, 2000);
  }, function() { });
}
</script>

<style scoped>
.form-input {
  margin-bottom: -30px;
}
.dialog {
  margin-top: -50px;
}
</style>