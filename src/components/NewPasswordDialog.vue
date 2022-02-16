<template>
  <v-theme-provider theme="dark">
    <div class="text-center">
      <v-dialog v-model="showDialog">
        <v-card class="dialog">
          <v-card-header>
            <v-card-header-text> Adding a New Password </v-card-header-text>
          </v-card-header>
          <v-card-text>
            <v-row style="width: 500px;">
              <v-col cols="12">
                <v-checkbox class="form-input" density="compact" label="Include Symbols (@#$%)" v-model="newPasswordForm.includeSymbols"></v-checkbox>
                <v-checkbox class="form-input" density="compact" label="Include Numbers (123456)" v-model="newPasswordForm.includeNumbers"></v-checkbox>
                <v-checkbox class="form-input" density="compact" label="Include Lowercase Characters (abcdefgh)" v-model="newPasswordForm.includeLowercaseCharacters"></v-checkbox>
                <v-checkbox class="form-input" density="compact" label="Include Uppercase Characters (ABCDEFGH)" v-model="newPasswordForm.includeUppercaseCharacters"></v-checkbox>
                <v-checkbox class="form-input" density="compact" label="Exclude Ambiguous Characters (i, l, 1, L, o, 0, O)" v-model="newPasswordForm.excludeAmbiguousCharacters"></v-checkbox>
                <v-text-field class="form-input" density="compact" label="Password Length" v-model="newPasswordForm.passwordLength"></v-text-field>
                <v-text-field class="form-input" density="compact" label="Application Name/URL" v-model="newPasswordForm.applicationName"></v-text-field>
                <v-text-field class="form-input" density="compact" label="Username/Email" v-model="newPasswordForm.username"></v-text-field>                
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-row>
              <v-col cols="6">
                <v-btn color="primary" block @click="showDialog = false">Cancel</v-btn>
              </v-col>
              <v-col cols="6">
                <v-btn color="success" block @click="showDialog = false">Generate and Save</v-btn>
              </v-col>
            </v-row>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-theme-provider>
</template>

<script setup>
import { inject } from "vue";
const showDialog = inject("showDialog");
const newPasswordForm = inject("newPasswordForm");
</script>

<style scoped>
.form-input {
  margin-bottom: -30px;
}
.dialog {
  margin-top: -60px;
}
</style>