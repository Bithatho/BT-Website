import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --primary-gold: #D4AF37;
    --primary-blue: #1E3A8A;
    --secondary-blue: #3B82F6;
    --accent-teal: #14B8A6;
    --dark-navy: #0F172A;
    --light-gray: #F8FAFC;
    --medium-gray: #64748B;
    --white: #FFFFFF;
    --gradient-primary: linear-gradient(135deg, #D4AF37 0%, #B8860B 100%);
    --gradient-blue: linear-gradient(135deg, #1E3A8A 0%, #3B82F6 100%);
    --gradient-dark: linear-gradient(135deg, #0F172A 0%, #1E293B 100%);
    --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
    --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
    --shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: var(--dark-navy);
    line-height: 1.6;
    overflow-x: hidden;
  }

  html {
    scroll-behavior: smooth;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
  }

  h1 {
    font-size: clamp(2.5rem, 5vw, 4rem);
  }

  h2 {
    font-size: clamp(2rem, 4vw, 3rem);
  }

  h3 {
    font-size: clamp(1.5rem, 3vw, 2rem);
  }

  p {
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.7;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    border: none;
    cursor: pointer;
    font-family: inherit;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 1rem;
  }

  .section {
    padding: 5rem 0;
    position: relative;
  }

  .section-dark {
    background: var(--gradient-dark);
    color: var(--white);
  }

  .section-light {
    background: var(--light-gray);
  }

  .gradient-text {
    background: var(--gradient-primary);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  .btn {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 2rem;
    border-radius: 50px;
    font-weight: 600;
    font-size: 1rem;
    transition: all 0.3s ease;
    cursor: pointer;
    border: none;
    text-decoration: none;
    position: relative;
    overflow: hidden;
  }

  .btn-primary {
    background: var(--gradient-primary);
    color: var(--dark-navy);
    box-shadow: var(--shadow-md);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: var(--shadow-xl);
  }

  .btn-secondary {
    background: transparent;
    color: var(--primary-gold);
    border: 2px solid var(--primary-gold);
  }

  .btn-secondary:hover {
    background: var(--primary-gold);
    color: var(--dark-navy);
    transform: translateY(-2px);
  }

  .btn-outline {
    background: transparent;
    color: var(--white);
    border: 2px solid var(--white);
  }

  .btn-outline:hover {
    background: var(--white);
    color: var(--dark-navy);
    transform: translateY(-2px);
  }

  .card {
    background: var(--white);
    border-radius: 20px;
    padding: 2rem;
    box-shadow: var(--shadow-lg);
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-xl);
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: var(--gradient-primary);
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  .card:hover::before {
    transform: scaleX(1);
  }

  @media (max-width: 768px) {
    .container {
      padding: 0 1.5rem;
    }

    .section {
      padding: 3rem 0;
    }

    .btn {
      padding: 0.875rem 1.5rem;
      font-size: 0.9rem;
    }
  }

  /* Custom scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: var(--light-gray);
  }

  ::-webkit-scrollbar-thumb {
    background: var(--gradient-primary);
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: var(--primary-gold);
  }
`;

export default GlobalStyles;
