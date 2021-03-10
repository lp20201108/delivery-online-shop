import React, { PureComponent } from "react";
import { withRouter } from "react-router-dom";
import queryString from "query-string";
import CategoiesService from "../../services/categories.service";

class SelectSort extends PureComponent {
  categoriesService = new CategoiesService();
  state = {
    categories: [],
    category: "",
    error: null,
  };

  componentDidMount() {
    const { categoryId } = queryString.parse(this.props.location.search);
    if (this.props.location.search) {
    }
    this.categoriesService
      .getAllCategories()
      .then(({ data: { result: categories } }) => this.setState({ categories }))
      .catch((error) => this.setState({ error }));
  }

  handleChangeCategory = (event) => {
    const { value } = event.target;
    this.setState({ category: value });
    if (!value) {
      this.props.history.push("/products");
      // this.setState({ category: "" });
      return;
    }
    this.props.history.push(`?categoryId=${value}`);
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
        {/* <option value="">По умолчанию</option>
        <option value="lowest">Цена (низкая > высокая)</option>
        <option value="highest">Цена (высокая > низкая)</option> */}
        <option value="">Выбрать категорию</option>
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
