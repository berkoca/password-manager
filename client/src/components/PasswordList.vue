<template>
  <v-table v-if="passwords.length" fixed-header height="600px" density="compact" class="table">
    <thead style="z-index: 1">
      <tr>
        <th class="text-left" width="1%">ID</th>
        <th class="text-left">Application</th>
        <th class="text-left">Username</th>
        <th class="text-center" width="1%">Password</th>
        <th class="text-center" width="1%">Edit</th>
        <th class="text-center" width="1%">Delete</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(password, index) in passwords" :key="index">
        <td>
          <span>{{ password.id }}</span>
        </td>
        <td>
          <span>{{ password.application }}</span>
        </td>
        <td>
          <span>{{ password.username }}</span>
        </td>
        <td>
          <span>
            <div class="table-button">
              <i @click="showPassword(password)" class="fas fa-eye"></i>
            </div>
          </span>
        </td>
        <td>
          <div class="table-button">
            <i @click="editPassword(password)" class="fas fa-pencil"></i>
          </div>
        </td>
        <td>
          <div class="table-button">
            <i @click="deletePassword(password.id)" class="fas fa-trash"></i>
          </div>
        </td>
      </tr>
    </tbody>
  </v-table>
  <div v-else class="no-result">Please add a <u class="new-password-text" @click="showNewPasswordDialog = true">new password</u> to view table.</div>
</template>

<script setup>
// Imports
import { inject } from "vue";
import axios from "axios";

// Injects
const passwords = inject("passwords");
const showViewPasswordDialog = inject("showViewPasswordDialog");
const showEditPasswordDialog = inject("showEditPasswordDialog");
const selectedPassword = inject("selectedPassword");
const notification = inject("notification");
const showNewPasswordDialog = inject("showNewPasswordDialog");

// Functions
const showPassword = (password) => {
  showViewPasswordDialog.value = true;
  selectedPassword.value = password;
};
const editPassword = (password) => {
  showEditPasswordDialog.value = true;
  selectedPassword.value = password;
}
const deletePassword = async (id) => {
  try {
    const response = await axios.delete("http://localhost:3000/passwords/" + id);
    if (response) {
      passwords.value = passwords.value.filter((x) => x.id != id);

      if (response.data && response.data.message) {
        notification.value.show = true;
        notification.value.message = response.data.message;
        notification.value.isError = false;

        setTimeout(() => {
          notification.value.show = false;
          notification.value.message = null;
        }, 2000);
      }
    }
  } catch (error) {
    console.log("An error occured while trying to delete password (id: " + id + "): " + error.message);

    notification.value.show = true;
    notification.value.message = error.response.data.message || error.message;
    notification.value.isError = true;

    setTimeout(() => {
      notification.value.show = false;
      notification.value.message = null;
    }, 2000);
  }
};
</script>

<style scoped>
.table {
  border-radius: 5px;
}
.table-button {
  width: 50px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.1s;
  color: #1c313a;
}

.table-button:hover {
  opacity: 0.85;
  transform: scale(0.85);
}

.no-result {
  height: 600px;
}

.new-password-text {
  cursor: pointer;
}
</style>