import React from 'react';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' };

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  const base = 'rounded-md px-4 py-2 text-sm font-medium';
  const styles = variant === 'primary' ? 'bg-brand text-white hover:opacity-90' : 'bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100';
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
