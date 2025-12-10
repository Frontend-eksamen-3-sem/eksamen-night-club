const Button = ({ children, className = "" }) => {
  return (
    <div className={`border-t border-b border-white max-w-30  text-white ${className}`}>
      <button className="custom-btn px-4 py-2">{children}</button>
    </div>
  );
};

export default Button;
