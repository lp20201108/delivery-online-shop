import BaseHttpService from "./base-http.service";

class CategoiesService extends BaseHttpService {
  getAllCategories = () => {
    return this.get("categories?limit=30");
  };
}

export default CategoiesService;
