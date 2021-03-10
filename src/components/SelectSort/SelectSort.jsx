import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import CategoriesService from "../../services/categories.service";

class SelectSort extends PureComponent {
  categoriesService = new CategoriesService();
  state = {
    categories: [],
    category: "",
    error: null,
  };

  componentDidMount() {
    this.categoriesService
      .getAllCategories()
      .then(({ data: { result: categories } }) => this.setState({ categories }))
      .catch((error) => this.setState({ error }));
    console.log(this.state.categories);
  }

  handleChangeCategory = (evt) => {
    const { value } = evt.target;
    this.setState({ category: value });
    // this.props.history.push();
  };

  render() {
    const { categories, category } = this.state;
    return (
      <select
        name="category"
        id="category"
        className="form-select"
        aria-label="Sort"
        value={category}
        onChange={this.handleChangeCategory}
      >
        {categories.map(({ _id, name }) => (
          <option key={_id} value={_id}>
            {name.ukr}
          </option>
        ))}
      </select>
    );
  }
}

export default withRouter(SelectSort);
