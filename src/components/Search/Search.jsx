import React from "react";
import { withFormik } from "../../hocs";

const Search = ({ handleChange, values, onSubmit }) => {
  // state = {
  //   query: "",
  // };
  //
  // handleChange = ({ target }) => {
  //   const { value: query } = target;
  //   this.setState({ query });
  // };
  //
  // onSubmit = (event) => {
  //   event.preventDefault();
  //   this.props.onSubmit(this.state.query);
  //   this.setState({ query: "" });
  // };

  // render() {
  const { query } = values;
  return (
    <form className="d-flex" onSubmit={onSubmit}>
      <input
        name="query"
        className="form-control me-2"
        type="search"
        onChange={handleChange}
        placeholder="Search"
        aria-label="Search"
        value={query}
      />
      <button className="btn btn-outline-success" type="submit">
        Поиск
      </button>
    </form>
  );
  // }
};

const handleSubmit = (values) => {
  alert(JSON.stringify(values));
};

export default withFormik({ initialValues: { query: "" }, handleSubmit })(
  Search
);
