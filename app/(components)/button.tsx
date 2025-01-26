import Link from 'next/link';

type ButtonProps = {
  version?: 'button' | 'link'; // 'button' for regular button, 'link' for link button
  color?: 'blue' | 'green' | 'red' | 'gray' | 'transparent'; // Button color options
  size?: 'sm' | 'md' | 'lg'; // Button size options
  children: React.ReactNode; // Content of the button
  href?: string; // The href for link buttons
  onClick?: () => void; // Action for regular button
  className?: string; // Additional custom classes
};

const Button: React.FC<ButtonProps> = ({
  version = 'button',
  color = 'blue',
  size = 'md',
  children,
  href,
  onClick,
  className = '',
}: ButtonProps) => {
  
  // Button size classes
  const sizeClasses = {
    sm: 'py-1 px-3 text-sm max-w-28',
    md: 'py-2 px-4 text-base max-w-32',
    lg: 'py-3 px-6 text-lg max-w-36',
  };
  
  // Button color classes
  const colorClasses = {
    blue: 'bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500',
    green: 'bg-green-500 text-white hover:bg-green-600 focus:ring-green-500',
    red: 'bg-red-500 text-white hover:bg-red-600 focus:ring-red-500',
    gray: 'bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500',
    transparent: 'bg-transparent text-white border-2 border-white hover:bg-gray-100 hover:bg-opacity-30',
  };
  
  // Choose button version
  const buttonClass = `${sizeClasses[size]} ${colorClasses[color]} rounded-md focus:outline-none focus:ring-2 ${className}`;

  if (version === 'link' && href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button className={buttonClass} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
