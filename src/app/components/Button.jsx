const Button = ({ children, className = "" }) => {
  return (
    <div className={`border-t border-b border-black ${className}`}>
      <button className="w-full text-center">{children}</button>
    </div>
  );
};

export default Button;
