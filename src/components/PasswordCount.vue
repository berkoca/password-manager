<template>
    <p style="font-size: 12px; padding-top: 5px; margin-left: 3px;">{{ passwords.length }} passwords in list.</p>
</template>

<script setup>
import { inject } from "vue";
const passwords = inject("passwords");
</script>