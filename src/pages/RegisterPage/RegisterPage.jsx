import React from "react";

const RegisterPage = () => {
  return (
    <div className="container mt-5">
      <div className="col-6 offset-3">
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              name="email"
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
              name="password"
              type="password"
              className="form-control"
              id="password"
              placeholder="*****"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">
              Confirm password
            </label>
            <input
              name="confirmPassword"
              type="confirmPassword"
              className="form-control"
              id="confirmPassword"
              placeholder="*****"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              name="firstName"
              type="text"
              className="form-control"
              id="firstName"
              placeholder="First Name"
            />
          </div>
          <button className="btn btn-primary mt-2 w-100">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
