import { buttonVariants } from './Button';
import { cn } from './lib/tw';

export default function SkipToMainContent() {
  const c = cn(
    'absolute left-2 top-0 -translate-y-10 transform-gpu opacity-0 duration-base focus:translate-y-3 focus:opacity-100',
  );
  const classes = cn(buttonVariants({ variant: 'primary', size: 'small' }), c);
  return (
    <a className={classes} href="#main-content">
      Skip to main content
    </a>
  );
}
