const container = document.getElementById('widget-container');
const script = document.createElement('script');
script.src = 'https://idyllic-dasik-b960b3.netlify.app/widget.js'; // Replace with the correct path
script.async = true;

container.appendChild(script);
