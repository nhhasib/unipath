import React, { useContext } from "react";
import { Link, Navigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useForm } from "react-hook-form";
import SocialMediaLogin from "../../shared/SocialMediaLogin";
// import { Helmet } from "react-helmet-async";

const Login = () => {
  const { loginUser } = useContext(AuthContext)
  const { register, handleSubmit,  formState: { errors } } = useForm();
  const onSubmit = data => {
  
    const email = data.email;
      const password = data.password;
      
      loginUser(email, password)
          .then(result => {
            const user = result.user;
            
              
          })
      .catch(error => console.log(error))
    
      

  };
  return (
    <div>
      {/* <Helmet>
                <title>MusiQuest | Login</title>
            </Helmet> */}


      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          
          <div className="card flex-shrink-0 shadow-2xl bg-base-100 ">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input type="text"  {...register("email", { required: true })} name="email" placeholder="Enter Email" className="input input-bordered" />
                                {errors.email && <span className="text-red-600">Email is required</span>}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input type="password"  {...register("password", { required: true })} name="password" placeholder="Password" className="input input-bordered" />
                                {errors.password && <span className="text-red-600">Password is required</span>}
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="button-primary">Login</button>
                </div>
    </form>
              <SocialMediaLogin></SocialMediaLogin>
              <p className="text-center">
                New to Here? Please{" "}
                <Link to="/register">
                  <span className="underline text-red-800">register</span>
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
