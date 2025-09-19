<template>
  <div class="about d-flex justify-content-center align-items-center">
    <div class="card text-center" style="max-width: 600px; width: 100%;">
      <div class="card-header">
        <h1>About Our Library</h1>
      </div>
      <div class="card-body">
        <p>
          Welcome to our digital library! We're dedicated to providing a vast collection of books and resources to our community.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.about {
  min-height: 80vh; /* takes up most of the screen */
}

.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
}

.card-header {
  background-color: #275FDA;
  color: white;
  padding: 15px;
  border-radius: 10px 10px 0 0;
}

.card-body {
  padding: 20px;
}
</style>
