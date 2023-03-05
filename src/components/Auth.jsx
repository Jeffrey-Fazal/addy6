import React from "react";

function Auth() {
  return (
    <div>
        <h1>Login or sign up</h1>
        <input type="text" placeholder="Username" className="input input-bordered input-primary w-full max-w-xs" />
        <input type="text" placeholder="Password" className="input input-bordered input-primary w-full max-w-xs" />
        <button className="btn btn-primary">Sign In</button>
    </div>
  );
}

export default Auth;
