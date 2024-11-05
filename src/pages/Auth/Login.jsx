import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputField from '../../components/common/InputField';
import Loader from '../../components/common/Loader';
import { login } from '../../store/AuthStore';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

const schema = yup.object().shape({
  email: yup.string().email('Invalid email address').required('Email is required'),
  password: yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
});

const Login = () => {
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    if (localStorage.getItem('token')) {
      navigate('/dashboard');
    }
  }, []);

  const onSubmit = async(data) => {
    try{
      setLoader(true);
      let res = await login(data);
      if(res?.success === true){
        navigate('/dashboard');
      }
    } catch (error) {
      toast.error("Failed to login");
    } finally {
      setLoader(false);
    }
  };

  return (
    <div className="flex w-full items-center justify-center min-h-screen bg-gray-100">
    {loader && <Loader />}
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 transform transition hover:shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <InputField
              label="Email"
              type="email"
              error={errors.email?.message}
              {...register('email')}
            />
          </div>
          <div className="mb-4">
            <InputField
              label="Password"
              type="password"
              error={errors.password?.message}
              {...register('password')}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-4 px-4 rounded hover:bg-blue-700 transition duration-200 mt-5"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login