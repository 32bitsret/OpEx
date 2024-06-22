<template>
    <div>
      <!-- Your component's HTML here -->
    </div>
  </template>
  
  <script>
  export default {
    name: 'ChatWidget',
    mounted() {
      (function(d, w, c) {
          w.BrevoConversationsID = '666ecf046a05c93c5e7ead89';
          w[c] = w[c] || function() {
              (w[c].q = w[c].q || []).push(arguments);
          };
          var s = d.createElement('script');
          s.async = true;
          s.src = 'https://conversations-widget.brevo.com/brevo-conversations.js';
          if (d.head) d.head.appendChild(s);
      })(document, window, 'BrevoConversations');
    }
  }
  </script>
  
  <style scoped>
  /* Scoped CSS for this component */
  </style>
  