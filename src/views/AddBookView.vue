<template>
    <div>
        <h1> Add a New Book </h1>
        <form @submit.prevent="addBook">
            <div>
                <label for = "isbn"> ISBN: </label>
                <input type="text" v-model="isbn" id="isbn"  required />
            </div>
            <div>
                <label for = "name"> Title: </label>
                <input type="text" v-model="name" id="name" required />
            </div>
            <button type="submit"> Add Book </button>
        </form>
    </div>
</template>

<script>
import { ref } from 'vue';
import db from '../Firebase/init.js';
import { collection, addDoc } from "firebase/firestore";
import Booklist from '@/components/Booklist.vue';
export default {
    setup(){
        const isbn = ref('');
        const name = ref('');

        const addBook = async () => {
            try {
                const isbnNumber = Number (isbn.value);
                if (isNaN(isbnNumber)) {
                    alert("ISBN must be a number");
                    return;
                }

                await addDoc(collection(db, 'books'), {
                    isbn: isbnNumber,
                    name: name.value
                });

                isbn.value = '';
                name.value = '';
                alert("Book added successfully");
        }catch (error){
            console.error("Error adding document: ", error);
        }
    };

return { isbn, name, addBook };
    },
    components: { Booklist }

};
</script>

<style scoped>
/* Add any styles for this component here */
</style>