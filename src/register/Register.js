import React from "react";

const Register = ({ onRouteChange }) => {
  return (
    <div className="br3 w-100 w-60-m w-25-l center ba b--dark mv4 mw6  shadow-5">
      <main className="pa4 black-80">
        <form className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f4 fw6 ph0 mh0 center">Register</legend>
            <div className="mt3 flex flex-column">
              <label className="fw6 lh-copy f6" for="name">
                name
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white "
                type="name"
                name="name"
                id="name"
              />
            </div>
            <div className="mt2 flex flex-column">
              <label className="fw6 lh-copy f6" for="email-address">
                Email
              </label>
              <input
                className="pa2 input-reset ba bg-transparent hover-bg-black hover-white "
                type="email"
                name="email-address"
                id="email-address"
              />
            </div>
            <div className="mt2 flex flex-column">
              <label className="fw6 lh-copy f6" for="password">
                Password
              </label>
              <input
                className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white "
                type="password"
                name="password"
                id="password"
              />
            </div>
          </fieldset>
          <div className=" ">
            <input
              onClick={() => onRouteChange("home")}
              className="center b mb2 ph3 pv2 input-reset ba b--black-2 bg-transparent grow pointer f6 hover-bg-black hover-white shadow-3"
              type="submit"
              value="Register"
            />
          </div>
          <div className="lh-copy mt3 center"></div>
        </form>
      </main>
    </div>
  );
};

export default Register;
