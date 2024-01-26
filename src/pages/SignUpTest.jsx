import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import api from "../../api/api";
import { Link,useNavigate } from "react-router-dom";
import { Switch } from '@headlessui/react'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function ExampleSignUp() {
    const navigate = useNavigate();
const [username,setUserName] = useState('');
const [password,setPassword] = useState('');
const [email,setEmail] = useState('');
const [errorMessage,setErrorMessage] = useState('');
const handleUserName = (e) => setUserName(e.target.value);
const handlePassword = (e) => setPassword(e.target.value);
const handleEmail = (e) => setEmail(e.target.value);
const handleSubmit = async (e) => {
    e.preventDefault();
    try {
     await api.signUp({username,email,password});
     navigate('/');
     return;
    } catch (error) {
       setErrorMessage(error.response.data.description);
        console.log(error);
    }
    
}

  return (<div> 
    
    <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Create your account</h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
         Let's work together!
        </p>
      </div>
      <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="username" className="block text-sm font-semibold leading-6 text-gray-900">
              Username
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="username"
                value={username}
                onChange={handleUserName}
                id="username"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-semibold leading-6 text-gray-900">
              Password
            </label>
            <div className="mt-2.5">
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={handlePassword}
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            
            
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={handleEmail}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Account
          </button>
          {errorMessage && <p className="text-center text-red-600">{errorMessage}</p> }
        </div>
      </form>
    </div>

    </div>
    
  )
}
