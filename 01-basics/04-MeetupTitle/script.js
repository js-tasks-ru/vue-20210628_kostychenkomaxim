import { createApp } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

// Требуется создать Vue приложение

const app = createApp({
  data() {
    return {
      meetupId: null,
      meetup: null,
    };
  },
  watch: {
    meetupId(id) {
      this.meetup = null;
      this.fetchMeetup(id);
    },
  },
  methods: {
    fetchMeetup(id) {
      fetchMeetupById(id).then((meetup) => (this.meetup = meetup));
    },
  },
}).mount('#app');
