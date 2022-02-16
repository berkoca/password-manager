<template>
  <v-theme-provider>
    <v-table fixed-header height="600px" density="compact">
      <thead style="z-index: 1">
        <tr>
          <th class="text-left" width="1%">#</th>
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
            <span>{{ index + 1 }}</span>
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
              <i class="fas fa-pencil"></i>
            </div>
          </td>
          <td>
            <div class="table-button">
              <i class="fas fa-trash"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-theme-provider>
</template>

<script setup>
// Imports
import { inject } from "vue";

// Injects
const passwords = inject("passwords");
const showViewPasswordDialog = inject("showViewPasswordDialog");
const selectedPassword = inject("selectedPassword");

// Functions
const showPassword = (password) => {
    showViewPasswordDialog.value = true;
    selectedPassword.value = password;
}
</script>

<style scoped>
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
</style>