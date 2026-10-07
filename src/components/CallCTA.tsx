import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import { BUSINESS } from '@/data/business';

export default function CallCTA({
  variant = 'primary',
  size = 'md',
  className = '',
  label = `Call ${BUSINESS.phone}`,
}: {
  variant?: 'primary' | 'secondary' | 'white' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  label?: string;
}) {
  const base =
    'inline-flex items-center justify-center gap-2 font-semibold rounded-xl transition-all duration-300 hover:-translate-y-0.5';
  const sizes = {
    sm: 'px-4 py-2.5 text-sm',
    md: 'px-6 py-3.5 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  const variants = {
    primary:
      'bg-warmorange-500 text-white hover:bg-warmorange-600 shadow-lg shadow-warmorange-500/25 hover:shadow-xl hover:shadow-warmorange-500/30',
    secondary:
      'bg-coolblue-600 text-white hover:bg-coolblue-700 shadow-lg shadow-coolblue-600/25 hover:shadow-xl hover:shadow-coolblue-600/30',
    white: 'bg-white text-navy-900 hover:bg-gray-100 shadow-lg',
    outline:
      'border-2 border-white/40 text-white hover:bg-white hover:text-navy-900 backdrop-blur-sm',
  };

  return (
    <a
      href={BUSINESS.phoneLink}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
    >
      <Phone className={size === 'lg' ? 'w-5 h-5' : 'w-4 h-4'} />
      {label}
    </a>
  );
}
