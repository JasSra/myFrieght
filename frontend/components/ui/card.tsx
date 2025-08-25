import clsx from 'clsx';
export function Card({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={clsx('rounded-xl border border-gray-200 dark:border-gray-800 bg-white/60 dark:bg-gray-900/60 p-6', className)} {...props} />;
}
