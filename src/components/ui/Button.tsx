type Props = {
  width?: "w-full" | "w-1/2" | "w-40" | string;
  className?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  onClick?: () => void;
};

const Button = ({
  width = "",
  className = "",
  children,
  icon,
  onClick
}: Props) => {
  return (
    <button
      onClick={onClick}
      className={`uiverse-btn ${width}`}>
      <div
        className={`w-full flex items-center justify-center py-2 px-4 border-2 border-border ${className}`}
      >
        <span className='flex items-center justify-center gap-2 text-xl'>
          {icon && <span>{icon}</span>}
          {children}
        </span>
      </div>
    </button>
  );
};

export default Button;
