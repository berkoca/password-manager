<template>
  <NewPasswordDialog :show="showDialog" />
  <div class="parent">
    <h1 style="color: white" class="pb-2">Password Manager</h1>
    <div class="child">
      <div class="pa-4">
        <div class="pb-3">
        <v-btn @click="showDialog = true" style="width: 100%" variant="contained-text">New Password</v-btn>
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
import PasswordList from "@/components/PasswordList"
import PasswordCount from "@/components/PasswordCount"

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
const showDialog = ref(false);
const newPasswordForm = ref({
  includeSymbols: true,
  includeNumbers: true,
  includeLowercaseCharacters: true,
  includeUppercaseCharacters: true,
  excludeAmbiguousCharacters: true,
  passwordLength: 8,
  applicationName: null,
  username: null
});

// Providing Variables
provide("showDialog", showDialog);
provide("passwords", passwords);
provide("newPasswordForm", newPasswordForm);
</script>

<style scoped>
.parent {
  height: 100vh;
  background: #212121;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.child {
  color: #ffffff;
  background-color: #484848;
  width: 800px;
  height: 800px;
  border-radius: 10px;
}
</style>