<template>
  <NewPasswordDialog />
  <ViewPasswordDialog />
  <EditPasswordDialog />
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
import EditPasswordDialog from "@/components/EditPasswordDialog";
import PasswordList from "@/components/PasswordList";
import PasswordCount from "@/components/PasswordCount";
import Notification from "@/components/Notification";

// Variables
const passwords = ref([]);
const selectedPassword = ref(null);
const showNewPasswordDialog = ref(false);
const showViewPasswordDialog = ref(false);
const showEditPasswordDialog = ref(false);
const notification = ref({
  show: false,
  message: null,
  isError: false
});
const newPasswordForm = ref({
  useSymbols: true,
  useNumbers: true,
  useLowercaseLetters: true,
  useUppercaseLetters: true,
  length: 16,
  application: null,
  username: null,
});

// Providing Variables
provide("showNewPasswordDialog", showNewPasswordDialog);
provide("showViewPasswordDialog", showViewPasswordDialog);
provide("showEditPasswordDialog", showEditPasswordDialog);
provide("notification", notification);
provide("passwords", passwords);
provide("newPasswordForm", newPasswordForm);
provide("selectedPassword", selectedPassword);

// Functions
const getPasswords = async () => {
  try {
    const response = await axios.get("http://localhost:3000/passwords");
    if (response && response.data && response.data.data) {
      passwords.value = response.data.data;
    }
  } catch (error) {
    console.log("An error occured while trying to get passwords from server: " + error.message);

    notification.value.show = true;
    notification.value.message = error.message;
    notification.value.isError = true;

    setTimeout(() => {
      notification.value.show = false;
      notification.value.message = null;
    }, 2000);
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