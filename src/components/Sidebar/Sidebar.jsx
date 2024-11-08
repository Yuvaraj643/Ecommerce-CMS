import React from 'react';
import { logout } from '../../store/AuthStore';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = async() =>{
    try{
      const response = await logout()
      if(response)
        navigate('/login')
    } catch (error){
      toast.error("Error on Logout")
    }
  }

  return (
    <div className="flex h-screen w-1/5 flex-col justify-between border-e bg-white">
      <div className="px-4 py-6">
        <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-sm text-gray-600">
          Sklassics
        </span>

        <ul className="mt-10 space-y-2">
          <li>
            <a
              href="/"
              className="block rounded-lg hover:bg-gray-100 px-4 py-2 text-lg font-medium text-gray-500"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/products"
              className="block rounded-lg px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Products
            </a>
          </li>

          <li>
            <a
              href="/orders"
              className="block rounded-lg px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Orders
            </a>
          </li>
          <li onClick={handleLogout}>
            <a
              href="#"
              className="block rounded-lg px-4 py-2 text-lg font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              Logout
            </a>
          </li>
        </ul>
      </div>

      <div className="sticky inset-x-0 bottom-0 border-t border-gray-100">
        <a href="#" className="flex items-center gap-2 bg-white p-4 hover:bg-gray-50">
          <img
            alt=""
            src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            className="size-10 rounded-full object-cover"
          />

          <div>
            <p className="text-xs">
              <strong className="block font-medium">SuperAdmin</strong>

              <span> superadmin@gmail.com </span>
            </p>
          </div>
        </a>
      </div>
    </div>

  );
};

export default Sidebar;
