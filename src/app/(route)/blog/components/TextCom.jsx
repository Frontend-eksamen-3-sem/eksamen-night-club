const TextComp = ({ title, subtitle, children }) => {
  return (
    <div>
      <h2 className="pb-1 uppercase">{title}</h2>
      <h3 className="pb-2 uppercase">{subtitle}</h3>
      <p>{children}</p>
    </div>
  );
};

export default TextComp;
