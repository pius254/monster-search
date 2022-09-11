// import Input from "./input.component";

const FormInput = ({ onChangeHandler }) => {
  return (
    <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
      <input
        type="search"
        className="form-control me-2"
        placeholder="Search..."
        aria-label="Search"
        onChange={onChangeHandler}
      />
    </form>
  );
};

export default FormInput;
