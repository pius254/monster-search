import Input from "./input.component";

const Form = ({ className }) => {
  return (
    <form className={className} role="search">
      <Input
        className="form-control form-control-dark text-bg-dark"
        placeholder="Search..."
      />
    </form>
  );
};

export default Form;
