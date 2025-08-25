import { cva, type VariantProps } from 'class-variance-authority';
import clsx from 'clsx';
import Link from 'next/link';

const button = cva(
  'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand/40 disabled:opacity-50 disabled:pointer-events-none',
  {
    variants: {
      variant: {
        primary: 'bg-brand text-white hover:bg-brand-dark shadow',
        secondary: 'bg-white text-gray-900 hover:bg-gray-100 border border-gray-300 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 dark:border-gray-700',
        ghost: 'hover:bg-gray-100 dark:hover:bg-gray-800',
        outline: 'border border-gray-300 dark:border-gray-700',
      },
      size: {
        sm: 'h-8 px-3 text-sm',
        md: 'h-10 px-4 text-sm',
        lg: 'h-12 px-5',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof button> & { href?: string };

export function Button({ variant, size, className, href, ...props }: ButtonProps) {
  const cls = clsx(button({ variant, size }), className);
  if (href) {
    const rest = props as Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
    return <Link className={cls} href={href} {...rest} />;
  }
  return <button className={cls} {...props} />;
}
