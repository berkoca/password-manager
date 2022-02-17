<template>
  <NewPasswordDialog />
  <ViewPasswordDialog />
  <Notification />
  <div class="parent">
    <h1 style="color: white" class="pb-2">Password Manager</h1>
    <div class="child">
      <div class="pa-4">
        <div class="pb-3">
        <v-btn @click="showNewPasswordDialog = true" style="width: 100%" variant="contained-text">New Password</v-btn>
        </div>
        <PasswordList />
        <PasswordCount />
      </div>
    </div>
  </div>
</template>

<script setup>
// Imports
import { provide, ref } from "vue";

// Components
import NewPasswordDialog from "@/components/NewPasswordDialog"
import ViewPasswordDialog from "@/components/ViewPasswordDialog"
import PasswordList from "@/components/PasswordList"
import PasswordCount from "@/components/PasswordCount"
import Notification from "@/components/Notification"

// Variables
const passwords = ref([
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
  {
    application: "Facebook",
    username: "berk",
    password: "12345678",
    showPassword: false,
  },
]);
const selectedPassword = ref(null);
const showNewPasswordDialog = ref(false);
const showViewPasswordDialog = ref(false);
const showNotification = ref(false);
const newPasswordForm = ref({
  includeSymbols: true,
  includeNumbers: true,
  includeLowercaseCharacters: true,
  includeUppercaseCharacters: true,
  passwordLength: 8,
  applicationName: null,
  username: null
});

// Providing Variables
provide("showNewPasswordDialog", showNewPasswordDialog);
provide("showViewPasswordDialog", showViewPasswordDialog);
provide("showNotification", showNotification);
provide("passwords", passwords);
provide("newPasswordForm", newPasswordForm);
provide("selectedPassword", selectedPassword);
</script>

<style scoped>
.parent {
  height: 100vh;
  background: #29434e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.child {
  color: #ffffff;
  background-color: #546e7a;
  width: 750px;
  height: 700px;
  border-radius: 10px;
}
</style>