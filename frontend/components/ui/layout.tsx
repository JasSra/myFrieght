import clsx from 'clsx';

export function Container({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('max-w-7xl mx-auto px-6', className)} {...props} />;
}

export function Section({ className, ...props }: React.HTMLAttributes<HTMLElement>) {
  return <section className={clsx('py-10', className)} {...props} />;
}
