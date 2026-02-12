import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    await API.post("/auth/register", form);
    alert("Registered Successfully");
    navigate("/");
  };

  return (
      <>
     <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit={handleRegister} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-400">
                Name
              </label>
              <div className="mt-2">
                <input placeholder="Name"
                  onChange={(e)=>setForm({...form,name:e.target.value})}
                  required
                  autoComplete="name"
                  className="block w-full rounded-md px-3 bg-white/5 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
             <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-400">
                Email address
              </label>
              <div className="mt-2">
                <input
                  placeholder="Email"
                  name="email"
                  type="email"
                  onChange={(e)=>setForm({...form,email:e.target.value})}
                  required
                  autoComplete="email"
                  className="block w-full rounded-md px-3 bg-white/5 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-400">
                Address
              </label>
              <div className="mt-2">
                <input placeholder="Address"
                  onChange={(e)=>setForm({...form,address:e.target.value})}
                  required
                  autoComplete="address"
                  className="block w-full rounded-md px-3 bg-white/5 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-400">
                  Password
                </label>
                
              </div>
              <div className="mt-2">
                <input
                  placeholder="Password"
                  type="password"
                  onChange={(e)=>setForm({...form,password:e.target.value})}
                  required
                  autoComplete="current-password"
                  className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Sign up
              </button>
            </div>

         <p className="mt-10 text-center text-sm/6 text-gray-400">
            <a href="/" className="font-semibold text-indigo-400 hover:text-indigo-300">
              sign in
            </a>
          </p>
          </form>

        </div>
      </div>
    </>
  );
}

export default Register;
