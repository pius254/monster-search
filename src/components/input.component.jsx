const Input = ({ className, placeholder }) => {
  return (
    <input
      type="search"
      className={className}
      placeholder={placeholder}
      aria-label="Search"
    ></input>
  );
};

export default Input;
