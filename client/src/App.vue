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
import axios from "axios";

// Components
import NewPasswordDialog from "@/components/NewPasswordDialog";
import ViewPasswordDialog from "@/components/ViewPasswordDialog";
import PasswordList from "@/components/PasswordList";
import PasswordCount from "@/components/PasswordCount";
import Notification from "@/components/Notification";

// Variables
const passwords = ref([]);
const selectedPassword = ref(null);
const showNewPasswordDialog = ref(false);
const showViewPasswordDialog = ref(false);
const showNotification = ref(false);
const notificationMessage = ref(null);
const newPasswordForm = ref({
  useSymbols: true,
  useNumbers: true,
  useLowercaseLetters: true,
  useUppercaseLetters: true,
  length: 8,
  application: null,
  username: null,
});

// Providing Variables
provide("showNewPasswordDialog", showNewPasswordDialog);
provide("showViewPasswordDialog", showViewPasswordDialog);
provide("showNotification", showNotification);
provide("passwords", passwords);
provide("newPasswordForm", newPasswordForm);
provide("selectedPassword", selectedPassword);
provide("notificationMessage", notificationMessage);

// Functions
const getPasswords = async () => {
  try {
    const response = await axios.get("http://localhost:3000/passwords");
    if (response && response.data && response.data.data) {
      passwords.value = response.data.data;
    }
  } catch (error) {
    console.log("An error occured while trying to get passwords from server: " + error.message);
  }
};

getPasswords();
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