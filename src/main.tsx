
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import emailjs from '@emailjs/browser'

// Initialize EmailJS with your public key
emailjs.init('-1JUpipZtOJotNaI9');

createRoot(document.getElementById("root")!).render(<App />);
