<template>
  <v-theme-provider theme="dark">
    <div class="text-center">
      <v-dialog v-model="showNewPasswordDialog">
        <v-card class="dialog">
          <v-card-header>
            <v-card-header-text> Adding a New Password </v-card-header-text>
          </v-card-header>
          <v-card-text>
            <v-row style="width: 500px">
              <v-col cols="12">
                <v-checkbox class="form-input" density="compact" label="Include Symbols (@#$%)" v-model="newPasswordForm.useSymbols"></v-checkbox>
                <v-checkbox class="form-input" density="compact" label="Include Numbers (123456)" v-model="newPasswordForm.useNumbers"></v-checkbox>
                <v-checkbox
                  class="form-input"
                  density="compact"
                  label="Include Lowercase Characters (abcdefgh)"
                  v-model="newPasswordForm.useLowercaseLetters"
                ></v-checkbox>
                <v-checkbox
                  class="form-input"
                  density="compact"
                  label="Include Uppercase Characters (ABCDEFGH)"
                  v-model="newPasswordForm.useUppercaseLetters"
                ></v-checkbox>
                <v-text-field class="form-input" density="compact" label="Password Length" v-model="newPasswordForm.length"></v-text-field>
                <v-text-field class="form-input" density="compact" label="Application Name/URL" v-model="newPasswordForm.application"></v-text-field>
                <v-text-field class="form-input" density="compact" label="Username/Email" v-model="newPasswordForm.username"></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <v-btn variant="contained-text" block @click="showNewPasswordDialog = false">Cancel</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn variant="contained-text" color="success" block @click="saveNewPassword">Generate and Save</v-btn>
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
const showNewPasswordDialog = inject("showNewPasswordDialog");
const newPasswordForm = inject("newPasswordForm");
const passwords = inject("passwords");

// Functions
const saveNewPassword = async () => {
  try {
    const data = {
      application: newPasswordForm.value.application,
      username: newPasswordForm.value.username,
      password: {
        length: newPasswordForm.value.length,
        useNumbers: newPasswordForm.value.useNumbers,
        useSymbols: newPasswordForm.value.useSymbols,
        useLowercaseLetters: newPasswordForm.value.useLowercaseLetters,
        useUppercaseLetters: newPasswordForm.value.useUppercaseLetters,
      },
    };
    const response = await axios.post("http://localhost:3000/passwords", data);
    if (response && response.data && response.data.data) {
      passwords.value.push(response.data.data);
    }
  } catch (error) {
    console.log("An error occured while tring to save new password: " + error.message);
  }
  showNewPasswordDialog.value = false;
};
</script>

<style scoped>
.form-input {
  margin-bottom: -30px;
}
.dialog {
  margin-top: -50px;
}
</style>