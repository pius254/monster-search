const Input = ({ className, placeholder, onChangeHandler }) => {
  return (
    <input
      type="search"
      className={className}
      placeholder={placeholder}
      aria-label="Search"
      onChange={onChangeHandler}
    ></input>
  );
};

export default Input;
