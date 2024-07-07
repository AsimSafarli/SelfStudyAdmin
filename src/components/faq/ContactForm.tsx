"use client";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ContactSchema } from "./ContactSchema";
import { handleRequestWithAxiosFaqAdd } from "./ContactRequest";
function ContactForm() {
  const initialValues: AddWordRequest = {
    answer: "",
    question: "",
  };
  return (
    <div>
      <Formik
        validationSchema={ContactSchema}
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          try {
            handleRequestWithAxiosFaqAdd(values);
            resetForm();
            console.log(values);

            toast("Qısa zamanda əlaqə yaradılacaq");
          } catch (error) {
            alert("Yenidən cəhd edin");
          }
        }}
      >
        <Form className="flex flex-col gap-y-6  w-full ">
          <div className="flex flex-col gap-y-5 w-full">
            <div className="flex flex-col gap-y-[6px] w-full">
              <label className="text-main-color-900">Question</label>
              <Field
                name="question"
                type="text"
                className="border border-solid w-full  border-[#d4d4dd]  rounded-md px-4 py-2"
              />
              <ErrorMessage name="question">
                {(msg) => <div className="text-red-600">{msg}</div>}
              </ErrorMessage>
            </div>
            <div className="flex flex-col gap-y-[6px] w-full">
              <label className="text-main-color-900">Answer</label>
              <Field
                name="answer"
                type="text"
                className="border border-solid  border-[#d4d4dd] rounded-md px-4 py-2"
              />
              <ErrorMessage name="answer">
                {(msg) => <div className="text-red-600">{msg}</div>}
              </ErrorMessage>
            </div>
           
          </div>
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-500/90 w-full py-[10px] h-[48px] rounded-md text-white font-medium"
          >
            Göndərmək
          </button>
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default ContactForm;