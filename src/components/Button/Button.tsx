import React from 'react';
import { IconType } from 'react-icons';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  icon?: IconType;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon: Icon, 
  iconPosition = 'right', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex justify-center items-center py-3 px-6 text-base font-medium rounded-full transition-all transform hover:-translate-y-1 focus:ring-4 outline-none";
  
  const variants = {
    primary: "text-white bg-[#8B5CF6] hover:bg-violet-700 focus:ring-violet-300 dark:focus:ring-violet-900 shadow-lg hover:shadow-violet-500/30",
    secondary: "text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 hover:text-[#8B5CF6] focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-[#1E293B] dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {Icon && iconPosition === 'left' && <Icon className="mr-2 text-lg" />}
      {children}
      {Icon && iconPosition === 'right' && <Icon className="ml-2 text-lg" />}
    </button>
  );
};

export default Button;