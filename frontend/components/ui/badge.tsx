import clsx from 'clsx';

export function Badge({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return <span className={clsx('inline-flex items-center rounded-full border border-brand/30 bg-brand/10 px-2 py-0.5 text-xs text-brand', className)} {...props} />;
}
