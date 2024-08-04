"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import { LiaEdit } from "react-icons/lia";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { VscChromeClose } from "react-icons/vsc";
import VideoContactForm from "@/components/videocategory/ContactForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import VideoForm from "@/components/video/VideoForm";
import Link from "next/link";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};
function AddVideo() {
  const [users, setUsers] = useState([]);
  console.log(users);

  const [openDelete, setOpenDelete] = useState(false);
  const [faqId, setFaqId] = useState("");
  function handleOpenDelete(id: any) {
    setOpenDelete(true);
    setFaqId(id);
  }
  const handleCloseDelete = () => setOpenDelete(false);
  const [openAdd, setOpenAdd] = useState(false);
  const handleOpenAdd = () => setOpenAdd(true);
  const handleCloseAdd = () => setOpenAdd(false);
  useEffect(() => {
    axios
      .get("https://lobster-app-225yp.ondigitalocean.app/api/video")
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);

  async function handleFaqDeleteById() {
    await axios.delete(
      `https://lobster-app-225yp.ondigitalocean.app/api/video/${faqId}`
    );
    toast("Uğurla silindi");

    location.reload();
  }
  return (
    <div className="flex flex-col gap-3">
      <ToastContainer />
      {/* delete modal */}
      <Modal
        open={openDelete}
        onClose={handleCloseDelete}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col gap-3">
            <h1 className="text-xl font-medium">
              Silmək istədiyinizə əminsiniz?{" "}
            </h1>
            <div className="flex flex-col gap-3  justify-between">
              <button
                type="button"
                onClick={handleCloseDelete}
                className="hover:bg-blue-700 py-2 px-4 rounded-md text-white bg-blue-600 flex flex-row items-center justify-center gap-2"
              >
                Xeyir
              </button>
              <button
                type="button"
                onClick={handleFaqDeleteById}
                className="hover:bg-red-700 py-2 px-4 rounded-md text-white bg-red-600 flex flex-row items-center justify-center gap-2"
              >
                Bəli
              </button>
            </div>
          </div>
        </Box>
      </Modal>
      

      <div className="flex flex-row justify-between items-center">
        <h1 className="text-xl font-medium">Video Type</h1>
        <div>
          <Link 
          href={'/admin/add-item/video'}
            className="px-4 py-2 rounded-md bg-blue-600 hover:bg-blue-700 text-white"
          >
            Elave Et
          </Link>
        </div>
      </div>
      <div className="overflow-x-auto">
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50  dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Video Type ID
                </th>
                <th scope="col" className="px-6 py-3">
                  Video Type
                </th>

                <th scope="col" className="px-6 py-3">
                  Düzəliş Et
                </th>
                <th scope="col" className="px-6 py-3">
                  Sil
                </th>
              </tr>
            </thead>
            <tbody>
              {users?.map((item: any) => (
                <tr key={item._id} className=" even:bg-gray-50 ">
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {item._id}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {item.video_title}
                  </td>
                  <td>
                    <video src={item.video} className="h-10 w-10" />
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                    {item.video_type.video_type}
                  </td>
                  <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                   <source  src={item.video_mp3}/>
                  </td>

                  <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap  text-center ">
                    <button
                      type="button"
                      className="hover:bg-green-700 py-2 px-4 rounded-md text-white bg-green-600 flex flex-row items-center justify-center gap-2"
                    >
                      Düzəliş Et <LiaEdit />
                    </button>
                  </td>
                  <td className="px-6 py-4  font-medium text-gray-900 whitespace-nowrap  text-center ">
                    <button
                      onClick={() => handleOpenDelete(item._id)}
                      type="button"
                      className="hover:bg-red-700 py-2 px-4 rounded-md text-white bg-red-600 flex flex-row items-center justify-center gap-2"
                    >
                      Sil <FaRegTrashAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default AddVideo;
