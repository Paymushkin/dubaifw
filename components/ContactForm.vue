<template>
  <div v-if="isOpen" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div class="bg-white p-6 rounded-lg max-w-md w-full mx-4">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-semibold">Contact Us</h3>
        <button 
          @click="close" 
          class="text-gray-500 hover:text-gray-700 text-2xl leading-none"
        >
          ×
        </button>
      </div>

      <form @submit.prevent="handleSubmit" class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input 
            v-model="form.name"
            type="text"
            required
            class="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          >
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            v-model="form.email"
            type="email"
            required
            :class="[
              'w-full px-3 py-2 text-black border rounded-md focus:outline-none focus:ring-2 focus:ring-black',
              emailError ? 'border-red-500' : 'border-gray-300'
            ]"
          >
          <p v-if="emailError" class="mt-1 text-sm text-red-500">{{ emailError }}</p>
        </div>

        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
          <textarea 
            v-model="form.message"
            required
            rows="4"
            class="w-full text-black px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
          ></textarea>
        </div>

        <button 
          type="submit"
          :disabled="isSubmitting"
          class="w-full bg-black text-white py-2 rounded-md hover:bg-opacity-90 transition-colors disabled:bg-gray-400"
        >
          {{ isSubmitting ? 'Sending...' : 'Send Message' }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRuntimeConfig } from 'nuxt/app';

const props = defineProps({
  isOpen: Boolean
});

const emit = defineEmits(['close']);

const form = reactive({
  name: '',
  email: '',
  message: ''
});

const emailError = ref('');
const isSubmitting = ref(false);
const showSuccess = ref(false);
const showError = ref(false);
const config = useRuntimeConfig();

const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
};

const close = () => {
  emit('close');
  form.name = '';
  form.email = '';
  form.message = '';
  emailError.value = '';
  showSuccess.value = false;
  showError.value = false;
};

const handleSubmit = async () => {
  emailError.value = '';
  
  if (!validateEmail(form.email)) {
    emailError.value = 'Please enter a valid email address';
    return;
  }

  isSubmitting.value = true;

  try {
    const apiUrl = `${config.public.apiBase}/send-email`;
    console.log('Sending request to:', apiUrl);
    
    const response = await fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: form.name,
        email: form.email,
        message: form.message
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Server response:', errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    console.log('Success:', data);
    showSuccess.value = true;
    form.name = '';
    form.email = '';
    form.message = '';
    setTimeout(() => {
      showSuccess.value = false;
      emit('close');
    }, 3000);
  } catch (error) {
    console.error('Error sending message:', error);
    showError.value = true;
    setTimeout(() => {
      showError.value = false;
    }, 3000);
  } finally {
    isSubmitting.value = false;
  }
};
</script> 