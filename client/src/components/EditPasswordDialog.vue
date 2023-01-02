<template>
  <v-theme-provider theme="dark">
    <div class="text-center">
      <v-dialog v-model="showEditPasswordDialog" style="width: 100vh;">
        <v-card>
          <v-card-title> Editing a Password </v-card-title>
          <v-card-text>
            <v-row style="width: 500px">
              <v-col cols="12">
                <v-text-field class="form-input" density="compact" label="Application Name/URL"
                  v-model="selectedPassword.application"></v-text-field>
                <v-text-field class="form-input" density="compact" label="Username/E-mail"
                  v-model="selectedPassword.username"></v-text-field>
                <v-text-field class="form-input" density="compact" label="Password"
                  v-model="selectedPassword.password"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <v-btn variant="contained-text" block @click="showEditPasswordDialog = false">Cancel</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn variant="contained-text" color="success" block @click="savePassword">Save Changes</v-btn>
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
import axios from "axios";

// Injects
const showEditPasswordDialog = inject("showEditPasswordDialog");
const selectedPassword = inject("selectedPassword");
const notification = inject("notification");

// Functions
const savePassword = async () => {
  try {
    const data = {
      application: selectedPassword.value.application,
      username: selectedPassword.value.username,
      password: selectedPassword.value.password
    };

    const response = await axios.put("http://localhost:3000/passwords/" + selectedPassword.value.id, data);
    if (response && response.data) {
      notification.value.show = true;
      notification.value.message = response.data.message;
      notification.value.isError = false;

      setTimeout(() => {
        notification.value.show = false;
        notification.value.message = null;
      }, 2000);
    }
  } catch (error) {
    notification.value.show = true;
    notification.value.message = error.response.data.message || error.message;
    notification.value.isError = true;

    setTimeout(() => {
      notification.value.show = false;
      notification.value.message = null;
    }, 2000);
  }
  showEditPasswordDialog.value = false;
};
</script>

<style scoped>
.form-input {
  margin-bottom: -10px;
}
</style>