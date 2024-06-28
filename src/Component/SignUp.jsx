import { Link, useNavigate } from "react-router-dom";
import loginImg from "../assets/images/login/login.svg"
import { useContext } from "react";
import { AuthContext } from "../Firebase/Provider/AuthProviderr";
import toast from "react-hot-toast";

const SignUp = () => {
    const {createUser} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleLogin= (e)=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        try{
            createUser(email,password)
            .then(result=>{
                console.log(result.user)
                toast.success("successfully user created");
                e.target.reset();
                navigate("/")
            })
            .catch(error=>{
                toast.error(error.code || error.message);
            });
        }catch(err){
            toast.error("something wend rong")
        }
      }
    return (
        <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse gap-10 lg:gap-20">
          <div className="text-center lg:text-left w-full md:w-[50%]">
            <img src={loginImg} alt="" />
          </div>
          <div className="card  w-full md:w-[50%] bg-base-100 max-w-sm shrink-0 shadow-2xl">
            <form className="card-body" onSubmit={handleLogin}>
            <h1 className="text-3xl mb-5 font-semibold text-center">Sign Up</h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6 ">
                <button type="submit" className="btn btn-primary">Sign up</button>
                <p className="text-base lowercase text-center mt-6">Already have a account please <Link to='/login' className="text-orange-500 font-semibold">Login</Link> </p>
              </div>

            </form>
          </div>
        </div>
      </div>
    );
};

export default SignUp;