<template>
  <div class="container mt-5">
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <h1 class="text-center">User Information Form</h1>
        <form @submit.prevent="submitForm">
          <!-- Username and Password -->
          <div class="row mb-3">
            <div class="col-md-6">
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

            <div class="col-md-6">
              <label for="gender" class="form-label">Gender</label>
              <select
                class="form-select"
                id="gender"
                v-model="formData.gender"
              >
                <option value="Select Gender">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <p v-if="errors.gender" class="text-danger">{{ errors.gender }}</p>
            </div>
          </div>

          <!-- Australian Resident and Gender -->
          <div class="row mb-3">
            <div class="col-md-6">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                class="form-control"
                id="password"
                @blur="() => validatePassword(true)"
                @input="() => validatePassword(false)"
                v-model="formData.password"
              />
              <div v-if="errors.password" class="text-danger">{{ errors.password }}</div>
            </div>
            <div class="col-md-6 col-sm-6">
              <label for="confirm-password" class="form-label">Confirm password</label>
              <input
                type="password"
                class="form-control"
                id="confirm-password"
                @blur="() => validateConfirmPassword(true)"
                v-model="formData.confirmPassword"
              />
              <div v-if="errors.confirmPassword" class="text-danger">{{ errors.confirmPassword }}</div>
            </div>
          </div>

          <div class="row mb-3">
            <div class="col-md-6">
              <div class="form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="isAustralian" 
                  v-model="formData.isAustralian"
                />
                <label class="form-check-label" for="isAustralian">
                  Australian Resident?
                </label>
              </div>
            </div>
          </div>

          <!-- Reason for joining -->
          <div class="mb-3">
            <label for="reason" class="form-label">Reason for joining</label>
            <textarea
              class="form-control"
              id="reason"
              rows="3"
              v-model="formData.reason"
            ></textarea>
            <div v-if="errors.reason" class="text-danger">{{ errors.reason }}</div>
          </div>

          <!-- Buttons -->
          <div class="text-center">
            <button type="submit" class="btn btn-primary me-2">Submit</button>
            <button
              type="button"
              class="btn btn-secondary"
              @click="clearForm"
            >
              Clear
            </button>
          </div>
        </form>
    <div class="row mt-5" v-if="submittedCards.length">
        <div class="card">
            <DataTable :value="submittedCards" tableStyle="min-width: 50rem">
                <Column field="username" header="Username"></Column>
                <Column field="password" header="Password"></Column>
                <Column field="isAustralian" header="Australian Resident">
                    <template #body="slotProps">
                        {{ slotProps.data.isAustralian ? 'Yes' : 'No' }}
                    </template>
                </Column>
                <Column field="gender" header="Gender"></Column>
                <Column field="reason" header="Reason"></Column>
            </DataTable>
        </div>
    </div>
      </div>
    </div>
  </div>
</template>




<script setup>
import { ref } from 'vue';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const formData = ref({
  username: '',
  password: '',
  confirmPassword: '',
  isAustralian: false,
  reason: '',
  gender: 'Select Gender'
});

const errors = ref({
  username: null,
  password: null,
  confirmPassword: null,
  isAustralian: null,
  gender: null,
  reason: null,
});

const validateName = (blur) => {
  if (formData.value.username.length < 3) {
    if (blur) errors.value.username = 'Username must be at least 3 characters long';
  }else{
    errors.value.username = null;
  }
};

const validatePassword = (blur) => {
  const password = formData.value.password;
  const minlength = 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasLowercase = /[a-z]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password.length < minlength) {
    if (blur) errors.value.password = `Password must be at least ${minlength} characters long`;
  } else if (!hasUppercase) {
    if (blur) errors.value.password = 'Password must contain uppercase character';
  } else if (!hasLowercase)  {
    if (blur) errors.value.password = 'Password must contain lowercase character';
  } else if (!hasNumber)  {
    if (blur) errors.value.password = 'Password must contain number';
  } else if (!hasSpecialChar)  {
    if (blur) errors.value.password = 'Password must contain special character';
  } else {
    errors.value.password = null;
  }
};

const validateConfirmPassword = (blur) => {
  if (formData.value.confirmPassword !== formData.value.password) {
    if (blur) errors.value.confirmPassword = 'Passwords do not match';
  } else {
    errors.value.confirmPassword = null;
  }
};

const validateGender = (blur) => {
  if (formData.value.gender === "Select Gender") {
    if (blur) errors.value.gender = 'Gender is required';
  } else {
    errors.value.gender = null;
  }
};

const validateReason = (blur) => {
  if (formData.value.reason.length > 200) {
    if (blur) errors.value.reason = 'Reason must be less than 200 characters';
  } else {
    errors.value.reason = null;
  }
};

const submittedCards = ref([]);

const submitForm = () => {
  validateName(true);
  validatePassword(true);
  validateConfirmPassword(true);
  validateGender(true);
  validateReason(true);
  if(!errors.value.username && !errors.value.password && !errors.value.confirmPassword && !errors.value.gender && !errors.value.reason) {
    submittedCards.value.push({ ...formData.value });
    clearForm();
  }
  
};

const clearForm = () => {
  formData.value = {
    username: '',
    password: '',
    confirmPassword: '',
    isAustralian: false,
    reason: '',
    gender: 'Select Gender'
  };
};
</script>

<style scoped>
   .card {
   border: 1px solid #ccc;
   border-radius: 10px;
   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
   }
   .card-header {
   background-color: #275FDA;
   color: white;
   padding: 10px;
   border-radius: 10px 10px 0 0;
   }
   .list-group-item {
   padding: 10px;
   }
</style>