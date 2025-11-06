// src/styles/GlobalStyle.js
import { createGlobalStyle, keyframes } from 'styled-components';

// --- Animations ---
export const slideUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const bounceIn = keyframes`
  0% { opacity: 0; transform: scale(0.8); }
  50% { transform: scale(1.05); }
  100% { opacity: 1; transform: scale(1); }
`;

export const pulseGlow = keyframes`
  0%, 100% { box-shadow: 0 0 20px hsl(262, 83%, 58%, 0.3); }
  50% { box-shadow: 0 0 40px hsl(262, 83%, 58%, 0.6); }
`;

// --- NEW ANIMATION FOR THE BACKGROUND ---
const gradientAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

// --- Global Styles ---
const GlobalStyle = createGlobalStyle`
  :root {
    /* ... (all your CSS variables are still here) ... */
    /* Colors */
    --background: hsl(240, 10%, 3.9%);
    --foreground: hsl(0, 0%, 98%);
    --card: hsl(240, 10%, 3.9%);
    --card-foreground: hsl(0, 0%, 98%);
    --primary: hsl(262, 83%, 58%);
    --primary-foreground: hsl(0, 0%, 98%);
    --primary-glow: hsl(262, 100%, 75%);
    --secondary: hsl(215, 100%, 60%);
    --secondary-foreground: hsl(0, 0%, 98%);
    --muted: hsl(240, 5%, 26%);
    --muted-foreground: hsl(240, 5%, 65%);
    --accent: hsl(180, 100%, 50%);
    --accent-foreground: hsl(240, 10%, 3.9%);
    --success: hsl(142, 76%, 36%);
    --success-foreground: hsl(0, 0%, 98%);
    --destructive: hsl(0, 84%, 60%);
    --destructive-foreground: hsl(0, 0%, 98%);
    --border: hsl(240, 10%, 20%);
    --input: hsl(240, 10%, 20%);
    --ring: hsl(262, 83%, 58%);

    /* Quiz specific colors */
    --quiz-correct: hsl(142, 76%, 36%);
    --quiz-incorrect: hsl(0, 84%, 60%);
    --quiz-progress: hsl(262, 83%, 58%);

    /* Gradients */
    --gradient-primary: linear-gradient(135deg, hsl(262, 83%, 58%), hsl(215, 100%, 60%));
    --gradient-success: linear-gradient(135deg, hsl(142, 76%, 36%), hsl(160, 100%, 40%));

    /* Shadows */
    --shadow-glow: 0 0 40px hsl(262, 83%, 58%, 0.3);
    --shadow-button: 0 4px 20px hsl(262, 83%, 58%, 0.4);

    /* Spacing */
    --container-padding: 1rem;
    --border-radius: 0.75rem;
    --border-radius-lg: 1rem;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* --- THIS IS THE UPGRADED BODY --- */
  body {
    font-family: 'Inter', system-ui, sans-serif;
    color: var(--foreground);
    line-height: 1.6;
    overflow-x: hidden;
    
    /* The "Best CSS" Upgrade: Animated Gradient Background */
    background: linear-gradient(-45deg, 
        hsl(240, 10%, 3.9%), 
        hsl(262, 83%, 10%), 
        hsl(240, 10%, 3.9%), 
        hsl(215, 100%, 10%)
    );
    background-size: 400% 400%;
    animation: ${gradientAnimation} 15s ease infinite;
    background-attachment: fixed;
  }
  
  /* ... (rest of your scrollbar styles) ... */
`;

export default GlobalStyle;