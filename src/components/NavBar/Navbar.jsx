import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import axios from 'axios';

const Navbar = () => {
  const [openModal, setOpenModal] = useState(false);
  const [logoutTimeout, setLogoutTimeout] = useState(null);

  useEffect(() => {
    // Set the logout timeout when the component mounts
    const timeout = setTimeout(logoutHandler, 5 * 60 * 1000); // 5 minutes in milliseconds
    setLogoutTimeout(timeout);

    // Clear the timeout when the component unmounts or the user interacts
    const clearLogoutTimeout = () => clearTimeout(timeout);
    window.addEventListener("mousemove", clearLogoutTimeout);
    window.addEventListener("keydown", clearLogoutTimeout);

    return () => {
      clearTimeout(timeout);
      window.removeEventListener("mousemove", clearLogoutTimeout);
      window.removeEventListener("keydown", clearLogoutTimeout);
    };
  }, []);

  const openModalHandler = () => {
    setOpenModal(true);
  };

  const closeModalHandler = () => {
    setOpenModal(false);
  };

  const logoutHandler = () => {
    localStorage.removeItem('token');
    window.location.href = '/'; // Redirect to the home page after logout
  };

  const changePasswordHandler = async () => {
  	const newPassword = prompt('Enter your new password:');
	if (newPassword) {
	  try {
		const response = await axios.post(
			"https://ecommerce-backend-xe7w.onrender.com/users/change-password",
			{
			//   oldPassword,
			  newPassword,
			}
		  );
  
		// Handle response and show success message
		console.log(response.data.msg);
	  } catch (error) {
		// Handle error and show error message
		console.error(error);
	  }
	}
  };

  return (
    <div className="fixed top-[45%] left-0">
      <ul className="hidden md:block">
        {/* ... Your existing list items ... */}

        {/* Logout button */}
        <li
          className="flex w-[160px] bg-red-700 h-[60px] px-3 justify-between items-center rounded-lg ml-[-90px] hover:ml-[-5px] duration-300"
          onClick={logoutHandler}
        >
          <span className="mr-4 text-white">Logout</span>
        </li>

        {/* Change Password button */}
        <li
          className="flex w-[160px] bg-yellow-700 h-[60px] px-3 justify-between items-center rounded-lg ml-[-90px] hover:ml-[-5px] duration-300"
          onClick={openModalHandler}
        >
          <span className="mr-4 text-white">Change Password</span>
        </li>
      </ul>

      {/* Modal for Change Password */}
      <Modal open={openModal} onClose={closeModalHandler}>
        {/* Your modal content */}
        <div className="bg-white p-4 rounded-lg">
          <h2 className="text-xl mb-2">Change Password</h2>
          {/* Add your change password form here */}
          {/* You can use form elements like inputs and buttons */}
          <button
            className="bg-yellow-500 rounded-md hover:bg-yellow-600 text-white p-2"
            onClick={changePasswordHandler}
          >
            Change Password
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Navbar;

  


