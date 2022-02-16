<template>
  <v-theme-provider theme="dark" class="pt-4">
    <v-table fixed-header height="700px" density="compact">
      <thead style="z-index: 1">
        <tr>
          <th class="text-left">#</th>
          <th class="text-left">Application</th>
          <th class="text-left">Username</th>
          <th class="text-left">Password</th>
          <th class="text-left">Edit</th>
          <th class="text-left">Delete</th>
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
            <span>{{ password.showPassword ? password.password : "********" }}</span>
          </td>
          <td>
            <div class="edit-button">
              <i class="fas fa-pencil"></i>
            </div>
          </td>
          <td>
            <div class="delete-button">
              <i class="fas fa-trash"></i>
            </div>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-theme-provider>
</template>

<script setup>
import { inject } from "vue";
const passwords = inject("passwords");
</script>

<style scoped>
.edit-button, .delete-button {
  width: 50px;
  height: 28px;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: 0.17s;
}

.edit-button {
  background-color: #2196F3;
}

.delete-button {
  background-color: #F44336;
}

.edit-button:hover, .delete-button:hover {
  opacity: 0.85;
}
</style>