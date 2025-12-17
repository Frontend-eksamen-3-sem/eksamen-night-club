const TextComp = ({ title, subtitle, children, commentCount, posted }) => {
  return (
    <div>
      <h2 className="pb-1 uppercase">{title}</h2>
      <div className="flex gap-2">
        <h3>BY: {subtitle}</h3>
        <span className="text-accent">/</span>
        <h3>{commentCount} Comments</h3>
        <span className="text-accent">/</span>
        <h3>Posted {posted}</h3>
      </div>
      <p>{children}</p>
    </div>
  );
};

export default TextComp;
