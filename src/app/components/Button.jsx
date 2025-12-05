const Button = ({ children, className = "" }) => {
  return (
    <div className={`border-t border-b border-white text-text  ${className}`}>
      <button className="w-full text-center grid content-center">{children}</button>
    </div>
  );
};

export default Button;
