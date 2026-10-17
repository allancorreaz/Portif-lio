import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '../../lib/utils';
const buttonVariants = cva('ui-button inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] disabled:pointer-events-none disabled:opacity-50', { variants: { variant: { default: 'bg-[var(--ink)] text-[var(--paper)] hover:bg-[var(--accent)]', outline: 'border border-[var(--line)] hover:bg-[var(--sand)]', ghost: 'hover:text-[var(--accent)]' }, size: { default: 'h-12 px-6 rounded-full', sm: 'h-10 px-4 rounded-full', icon: 'size-11 rounded-full' } }, defaultVariants: { variant: 'default', size: 'default' } });
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> { asChild?: boolean }
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className, variant, size, asChild = false, ...props }, ref) => { const Comp = asChild ? Slot : 'button'; return <Comp data-variant={variant ?? 'default'} className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />; });
Button.displayName = 'Button';
