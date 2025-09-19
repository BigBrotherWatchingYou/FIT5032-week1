<template>
  <div>
    <h1> Books with ISBN > 1000</h1>
    <ul>
        <li v-for="book in books" :key="book.id">
            {{ book.isbn }} - {{ book.name }}
        </li>
    </ul>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import db from '../Firebase/init.js';
import { collection, query, where, getDocs } from "firebase/firestore";

export default {
    setup() {
        const books = ref([]);

        const fetchBooks = async () => {
            const q = query(collection(db, 'books'), where('isbn', '>', 1000));
            const querySnapshot = await getDocs(q);
            books.value = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        };


        onMounted(() => {
            fetchBooks();
        });

        return { books };
    }
};
</script>