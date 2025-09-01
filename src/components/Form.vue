<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">User Information Form</h1>
        <form @submit.prevent="submitForm">
          <!-- username -->
          <div class="row mb-3">
            <div class="col-sm-6">
              <label for="username" class="form-label">Username</label>
              <input
                type="text"
                class="form-control"
                id="username"
                @blur="() => validateName(true)"
                @input="() => validateName(false)"
                v-model="formData.username"
              />
              <div v-if="errors.username" class="text-danger">{{ errors.username }}</div>
            </div>
            <div class="col-sm-6">
              <!-- password -->
              <label for="password" class="form-label">Password</label>
              <input type="password"
                class="form-control"
                id="password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
                v-model="formData.password"
              />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
          </div>

          <div class="row mb-3">
            <!-- Australian Resident -->
            <div class="col-sm-6">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="isAustralian"
                  v-model="formData.isAustralian"
                  @change="() => validateIsAustralian(true)"
                  @blur="() => validateIsAustralian(false)"
                />
                <label class="form-check-label" for="isAustralian">Australian Resident?</label>
                <div v-if="errors.resident" class="text-danger">{{ errors.resident }}</div>
              </div>
            </div>
            <div class="col-sm-6">
              <!-- Gender  -->
              <label for="gender" class="form-label">Gender</label>
              <select class="form-select" id="gender" v-model="formData.gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>
          <div class="mb-3">
            <!-- Reason for joining -->
            <label for="reason" class="form-label">Reason of joining</label>
            <textarea
              class="form-control"
              id="reason"
              rows="3"
              v-model="formData.reason"
              @input="() => validateReason(false)"
              @blur="() => validateReason(true)"
            ></textarea>
            <div v-if="errors.reason" class="text-danger">{{ errors.reason }}</div>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button type="button" class="btn btn-secondary" @click="clearForm">Clear</button>
          </div>
        </form>
      </div>
    </div>
  </div>
  <div class="row mt-5" v-if="submittedCards.length">
    <div class="d-flex flex-wrap justify-content-start">
      <div
        v-for="(card, index) in submittedCards"
        :key="index"
        class="card m-2"
        style="width: 18rem"
      >
        <div class="card-header">User Information</div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Username: {{ card.username }}</li>
          <li class="list-group-item">Password: {{ card.password }}</li>
          <li class="list-group-item">
            Australian Resident: {{ card.isAustralian ? 'Yes' : 'No' }}
          </li>
          <li class="list-group-item">Gender: {{ card.gender }}</li>
          <li class="list-group-item">Reason: {{ card.reason }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.card-header {
  background-color: #275fda;
  color: white;
  padding: 10px;
  border-radius: 10px 10px 0 0;
}

.list-group-item {
  padding: 10px;
}
</style>

<script setup>
import { ref } from 'vue'

const formData = ref({
  username: '',
  password: '',
  isAustralian: false, // boolean is better than null for a checkbox
  reason: '',
  gender: '',
})

const submittedCards = ref([])

const errors = ref({
  username: null,
  password: null,
  isAustralian: null, // <-- use the SAME key you'll read in the template
  gender: null,
  reason: null,
})

// ---- validations ----
const validateName = (blur) => {
  if (formData.value.username.trim().length < 3) {
    if (blur) errors.value.username = 'User name must be at least 3 letters'
  } else {
    errors.value.username = null
  }
}

const validatePassword = (blur) => {
  const password = formData.value.password
  const minLength = 8
  const maxLength = 20
  const hasUppercase = /[A-Z]/.test(password)
  const hasLowercase = /[a-z]/.test(password)
  const hasNumber = /[0-9]/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)

  if (password.length < minLength) {
    if (blur) errors.value.password = `Password must be at least ${minLength} characters`
  } else if (password.length > maxLength) {
    if (blur) errors.value.password = `Password must be at most ${maxLength} characters`
  } else if (!hasUppercase) {
    if (blur) errors.value.password = 'Password must contain at least one uppercase letter'
  } else if (!hasLowercase) {
    if (blur) errors.value.password = 'Password must contain at least one lowercase letter'
  } else if (!hasNumber) {
    if (blur) errors.value.password = 'Password must contain at least one number'
  } else if (!hasSpecialChar) {
    if (blur) errors.value.password = 'Password must contain at least one special character'
  } else {
    errors.value.password = null
  }
}

const validateIsAustralian = (blur) => {
  if (!formData.value.isAustralian) {
    if (blur) errors.value.isAustralian = 'You must confirm your Australian residency'
  } else {
    errors.value.isAustralian = null
  }
}

const validateGender = (blur) => {
  if (!formData.value.gender) {
    if (blur) errors.value.gender = 'You must select a gender'
  } else {
    errors.value.gender = null
  }
}

const validateReason = (blur) => {
  const text = formData.value.reason?.trim() || ''
  if (!text) {
    if (blur) errors.value.reason = 'Reason is required'
  } else if (text.length < 10) {
    if (blur) errors.value.reason = 'Reason must be at least 10 characters long'
  } else {
    errors.value.reason = null
  }
}

// helper
const isFormValid = () =>
  !errors.value.username &&
  !errors.value.password &&
  !errors.value.isAustralian &&
  !errors.value.gender &&
  !errors.value.reason

// ---- submit & clear ----
const submitForm = () => {
  // run ALL validations on submit
  validateName(true)
  validatePassword(true)
  validateIsAustralian(true)
  validateGender(true)
  validateReason(true)

  if (isFormValid()) {
    submittedCards.value.push({ ...formData.value })
    resetFormInputs() // reset fields, NOT the printed cards
  }
}

// Reset the inputs (keep submitted cards visible)
const resetFormInputs = () => {
  formData.value = {
    username: '',
    password: '',
    isAustralian: false,
    reason: '',
    gender: '',
  }
  errors.value = {
    username: null,
    password: null,
    isAustralian: null,
    gender: null,
    reason: null,
  }
}

// Keep your "Clear" button but make it clear intent:
const clearForm = () => {
  submittedCards.value = [] // clears printed results only
}
</script>
