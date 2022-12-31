import { defineStore } from "pinia";
import axios from "axios";

export const usePasswordStore = defineStore("password", {
  state: () => ({
    passwords: [],
  }),
  actions: {
    async getPasswords() {
      try {
        const response = await axios.get("http://localhost:3000/passwords");
        if (response?.data?.data) {
          this.passwords = response.data.data;
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    async createPassword(data) {
      try {
        const response = await axios.post("http://localhost:3000/passwords", data);
        if (response?.data?.data) {
          this.passwords.push(response.data.data);
        }
      } catch (error) {
        console.log(error.message);
      }
    },
    async deletePassword(id) {
      try {
        await axios.delete("http://localhost:3000/passwords/" + id);
        this.passwords = this.passwords.filter((x) => x.id != id);
      } catch (error) {
        console.log(error.message);
      }
    },
  },
});
