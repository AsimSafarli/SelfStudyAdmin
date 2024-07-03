"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { RiEditBoxLine } from "react-icons/ri";
import Navbar from "@/components/layout/Navbar";

function UsersAdmin() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://lobster-app-225yp.ondigitalocean.app/api/auth/users", {
        headers: {
          Authorization: "404134064498551958",
        },
      })
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);
  const productCount = users.length;
  return (

      <div className="overflow-x-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  USER ID
                </th>
                <th scope="col" className="px-6 py-3">
                  USER AD
                </th>

                <th scope="col" className="px-6 py-3">
                  USER EMAIL
                </th>

                <th scope="col" className="px-6 py-3">
                  Etrafli Bax
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((contact: any) => (
                <tr
                  key={contact._id}
                  className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {contact._id}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {contact.user_name_surname}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    {contact.user_email}
                  </td>
                  <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap dark:text-white text-center ">
                    <button
                      type="button"
                      className="hover:bg-gray-100 py-2 px-1 rounded-md hover:text-main-color-500 flex flex-row items-center justify-center gap-2"
                    >
                      Etrafli Bax <RiEditBoxLine />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default UsersAdmin;
