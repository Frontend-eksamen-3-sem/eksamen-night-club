const Button = ({ children, className = "" }) => {
  return (
    <div className={`border-t border-b border-white max-w-25   ${className}`}>
      <button className="custom-btn">{children}</button>
    </div>
  );
};

export default Button;
