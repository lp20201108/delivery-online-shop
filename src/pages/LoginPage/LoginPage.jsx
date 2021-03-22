import React from "react";

const LoginPage = () => {
  return (
    <div className="container mt-5">
      <div className="col-6 offset-3">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="name@example.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="*****"
            />
          </div>
          <button className="btn btn-primary mt-2 w-100">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
