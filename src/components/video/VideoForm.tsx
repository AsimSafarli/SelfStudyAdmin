"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React, { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { VideoSchema } from "./VideoSchema";
import { handleRequestWithAxiosVideoAdd } from "./VideoRequestApI";
import { useRouter } from "next/navigation";
import { VscChromeClose } from "react-icons/vsc";

import axios from "axios";
function VideoForm() {
  const [type, setType] = useState([]);

  useEffect(() => {
    axios
      .get("https://lobster-app-225yp.ondigitalocean.app/api/video-type")
      .then((response) => {
        setType(response.data);
      })
      .catch((error) => {
        console.error("There was an error fetching the users!", error);
      });
  }, []);
  const initialValues: VideoAddInterface = {
    video: "",
    video_title: "",
    video_cover: "",
    video_type: "",
    video_music: "",
    video_level: "",
  };
  const navigation = useRouter();

  return (
    <div>
      <div className="flex flex-row gap-2 items-center justify-start">
        <button
          className="px-4 py-2 bg-gray-200 text-black rounded-md flex flex-row gap-2 items-center justify-center"
          onClick={() => navigation.back()}
        >
          <VscChromeClose /> Geri dön
        </button>
      </div>
      <Formik
        validationSchema={VideoSchema}
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          try {
            handleRequestWithAxiosVideoAdd(values);
            resetForm();
            console.log(values);

          } catch (error) {
            alert("Yenidən cəhd edin");
            toast("Olmadi");

          }
        }}
      >
        <Form className="flex flex-col gap-y-6  w-full ">
          <div className="flex flex-col gap-y-5 w-full">
            <div className="flex flex-col gap-y-[6px] w-full">
              <label className="text-main-color-900">Video Url</label>
              <Field
                name="video"
                type="text"
                className="border border-solid w-full  border-[#d4d4dd]  rounded-md px-4 py-2"
              />
              <ErrorMessage name="video">
                {(msg) => <div className="text-red-600">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="flex flex-col gap-y-[6px] w-full">
              <label className="text-main-color-900">Video Title</label>
              <Field
                name="video_title"
                type="text"
                className="border border-solid w-full  border-[#d4d4dd]  rounded-md px-4 py-2"
              />
              <ErrorMessage name="video_title">
                {(msg) => <div className="text-red-600">{msg}</div>}
              </ErrorMessage>
            </div>

            <div className="flex flex-col gap-y-[6px] w-full">
              <label className="text-main-color-900">Video Mp3</label>
              <Field
                name="video_music"
                type="text"
                className="border border-solid w-full  border-[#d4d4dd]  rounded-md px-4 py-2"
              />
              <ErrorMessage name="video_music">
                {(msg) => <div className="text-red-600">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="flex flex-col gap-y-[6px] w-full">
              <label className="text-main-color-900">Video Level</label>
              <Field
                name="video_level"
                type="text"
                className="border border-solid w-full  border-[#d4d4dd]  rounded-md px-4 py-2"
              />
              <ErrorMessage name="video_level">
                {(msg) => <div className="text-red-600">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="flex flex-col gap-y-[6px] w-full">
              <label className="text-main-color-900">Video Type</label>
              <Field
                as="select"
                name="video_type"
                className="border border-solid w-full  border-[#d4d4dd]  rounded-md px-4 py-2"
              >
               <option value="">Select a video type</option>
                {type?.map((item:any) => (
                  <option key={item._id} value={item._id}>
                    {item.video_type}
                  </option>
                ))}
                {/* <option value="red">Red</option>
             <option value="green">Green</option>
             <option value="blue">Blue</option> */}
              </Field>
              {/* <Field
                name="video_type"
                type="text"
                className="border border-solid w-full  border-[#d4d4dd]  rounded-md px-4 py-2"
              /> */}
              <ErrorMessage name="video_type">
                {(msg) => <div className="text-red-600">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="flex flex-col gap-y-[6px] w-full">
              <label className="text-main-color-900">Video Cover</label>
              <Field
                name="video_cover"
                type="text"
                className="border border-solid w-full  border-[#d4d4dd]  rounded-md px-4 py-2"
              />
              <ErrorMessage name="video_cover">
                {(msg) => <div className="text-red-600">{msg}</div>}
              </ErrorMessage>
            </div>
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-500/90 w-full py-[10px] h-[48px] rounded-md text-white font-medium"
          >
            Add
          </button>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default VideoForm;
