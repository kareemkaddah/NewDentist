import React from 'react';

interface IconProps {
  className?: string;
  size?: number;
  color?: string;
}

export const ToothIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M7 2C7 2 8 2 8 3C8 4 7 4 7 5C7 6 8 6 8 7C8 8 7 8 7 9C7 10 8 10 8 11C8 12 7 12 7 13C7 14 8 14 8 15C8 16 7 16 7 17C7 18 8 18 8 19C8 20 7 20 7 21C7 22 6 22 6 21C6 20 5 20 5 19C5 18 6 18 6 17C6 16 5 16 5 15C5 14 6 14 6 13C6 12 5 12 5 11C5 10 6 10 6 9C6 8 5 8 5 7C5 6 6 6 6 5C6 4 5 4 5 3C5 2 6 2 6 2H7Z'
      fill={color}
    />
    <path
      d='M17 2C17 2 16 2 16 3C16 4 17 4 17 5C17 6 16 6 16 7C16 8 17 8 17 9C17 10 16 10 16 11C16 12 17 12 17 13C17 14 16 14 16 15C16 16 17 16 17 17C17 18 16 18 16 19C16 20 17 20 17 21C17 22 18 22 18 21C18 20 19 20 19 19C19 18 18 18 18 17C18 16 19 16 19 15C19 14 18 14 18 13C18 12 19 12 19 11C19 10 18 10 18 9C18 8 19 8 19 7C19 6 18 6 18 5C18 4 19 4 19 3C19 2 18 2 18 2H17Z'
      fill={color}
    />
  </svg>
);

export const TreatmentIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 2L2 7L12 12L22 7L12 2Z'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2 17L12 22L22 17'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M2 12L12 17L22 12'
      stroke={color}
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const AestheticIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z'
      fill={color}
    />
    <path
      d='M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z'
      fill={color}
    />
  </svg>
);

export const CrownIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path d='M2 19H22V21H2V19Z' fill={color} />
    <path d='M12 3L15 9L22 9L17 14L19 21H5L7 14L2 9L9 9L12 3Z' fill={color} />
  </svg>
);

export const StarIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z'
      fill={color}
    />
  </svg>
);

export const TrophyIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M20.2 2H20H17V0H7v2H4.5H3.8H2v11h1.8h.7H7v7h10v-7h2.5h.7H22V2h-1.8zM9 2h6v2H9V2zm6 17H9v-5h6v5zm4-11h-2V5h2v3zM7 5h2v3H7V5z'
      fill={color}
    />
  </svg>
);

export const DiamondIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 2L2 9l10 7 10-7-10-7zM2 15l10 7 10-7M2 12l10 7 10-7'
      fill={color}
    />
  </svg>
);

export const PeriodontIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z'
      fill={color}
    />
    <path
      d='M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z'
      fill={color}
    />
  </svg>
);

export const ChildIcon: React.FC<IconProps> = ({
  className = '',
  size = 24,
  color = 'currentColor',
}) => (
  <svg
    className={className}
    width={size}
    height={size}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z'
      fill={color}
    />
    <path
      d='M12 6C8.69 6 6 8.69 6 12C6 15.31 8.69 18 12 18C15.31 18 18 15.31 18 12C18 8.69 15.31 6 12 6ZM12 16C9.79 16 8 14.21 8 12C8 9.79 9.79 8 12 8C14.21 8 16 9.79 16 12C16 14.21 14.21 16 12 16Z'
      fill={color}
    />
  </svg>
);
