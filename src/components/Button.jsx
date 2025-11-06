// src/components/Button.jsx
import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  border-radius: var(--border-radius);
  font-size: 0.875rem;
  font-weight: 500;
  border: none;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  text-decoration: none;
  padding: 0.625rem 1rem;
  min-height: 2.5rem;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  ${props =>
    props.$variant === 'primary' &&
    css`
      background: var(--primary);
      color: var(--primary-foreground);
      box-shadow: var(--shadow-button);
      &:hover:not(:disabled) {
        background: var(--primary-glow);
        box-shadow: var(--shadow-glow);
      }
    `}

  ${props =>
    props.$variant === 'outline' &&
    css`
      background: transparent;
      color: var(--foreground);
      border: 2px solid var(--border);
      &:hover:not(:disabled) {
        background: var(--accent);
        color: var(--accent-foreground);
        border-color: var(--accent);
      }
    `}
  
  ${props =>
    props.$variant === 'secondary' &&
    css`
      background: var(--secondary);
      color: var(--secondary-foreground);
      box-shadow: var(--shadow-button);
      &:hover:not(:disabled) {
        opacity: 0.9;
        transform: translateY(-1px);
      }
    `}
`;

export default Button;  