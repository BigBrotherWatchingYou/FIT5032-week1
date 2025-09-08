<template>
    <h1>Create an Account</h1>
    <p><input type="text" placeholder="Email" v-model = "email"/></p>4
    <p><input type="password" placeholder="Password" v-model="password"/></p>
    <p><button @click="register">Save to Firebase</button></p>
</template>

<script setup>
    import { ref } from 'vue'
    import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
    import { useRouter } from 'vue-router'
    const email = ref('')
    const password = ref('')
    const router = useRouter()
    const register = () => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
        .then((data) => {
            console.log("Firebase register successfull!")
            router.push('/FireLogin')
        }).catch((error) => {
            console.log(error.code)
        })
    };
</script>