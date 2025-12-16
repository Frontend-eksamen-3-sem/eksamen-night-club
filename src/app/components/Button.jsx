const Button = ({ children, className = "" }) => {
  return (
    <div className={`border-t border-b border-white hover:border-accent ${className}`}>
      <button className="custom-btn px-4 py-2 hover:text-accent! ">{children}</button>
    </div>
  );
};

export default Button;
