"use client";
import { Button } from "@/components/ui/form-elements/Button";
import ColorModal from "@/components/ui/form-elements/ColorModal";
import FormField from "@/components/ui/form-elements/Field";
import { ErrorMessage, Field, Form, useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import AddColorIcon from "@/assets/AddColor.svg";
import AddSizeIcon from "@/assets/AddSizeButton.svg";
import Image from "next/image";
import { TextArea } from "@/components/ui/form-elements/TextArea";
import SizeModal from "@/components/ui/form-elements/SizeModal";
import ImageUploader from "../ui/form-elements/ImageUploader";

const ItemSchema = Yup.object().shape({
  name: Yup.string().required("Zəhmət olmasa Məhsulun adı daxil edin"),
  category: Yup.string().required("Zəhmət olmasa Məhsulun Kateqoriyası daxil edin"),
  price: Yup.number().required().positive(),
  itemDescription: Yup.string(),
  materialDescription: Yup.string(),
  colors: Yup.array().of(Yup.string()),
  file: Yup.mixed().required("Please upload an image"),
});

export const AddProductForm = () => {
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [showColorModal, setShowColorModal] = useState(false);
  const [showSizeModal, setShowSizeModal] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      price: "",
      category: "",
      itemDescription: "",
      materialDescription: "",
      colors: [],
      sizes: [],
      file: null,
    },
    onSubmit: (values) =>
      console.log(
        "Form submitted ====",
        JSON.stringify({ ...values, colors, sizes }, null, 2)
      ),
    validationSchema: ItemSchema,
  });

  const handleSaveColors = (selectedColors: string[]) => {
    setColors(selectedColors);
    setShowColorModal(false);
  };

  const handleSaveSizes = (selectedSizes: string[]) => {
    setSizes(selectedSizes);
    setShowSizeModal(false);
  };
  return (
    <div className="w-full p-8">
      <div className="mx-auto ">
        <div className="flex justify-between items-center mb-[50px]">
          <div className="text-[34px] font-bold">Məhsul Elave Et</div>
          <div className="ml-auto flex flex-row gap-2">
            <Button primary>Məhsul əlavə et</Button>
            <Button secondary>Kategoriyalar</Button>
          </div>
        </div>
        <main className="flex flex-col-reverse gap-6 mb-[50px]">
          <form onSubmit={formik.handleSubmit}>
            <FormField
              inputLabel="Məhsulun adı"
              placeholder="Məhsulun adı"
              {...formik.getFieldProps("name")}
            />
            <FormField
              inputLabel="Məhsulun Kateqoriyası"
              placeholder="Kateqoriya -id"
              {...formik.getFieldProps("category")}
            />
            <FormField
              inputLabel="Məhsulun qiyməti"
              placeholder="Məhsulun qiyməti"
              {...formik.getFieldProps("price")}
            />
            <div className="mb-[20px]">
              <span className="text-lg block font-medium text-black mb-4">
                Ölçü Əlavə Et
              </span>
              <div className="flex flex-row items-center gap-3 w-[588px] h-[76px] p-4 border border-solid text-black border-[#CFCFCF] rounded-md ">
                {sizes.map((size) => (
                  <div
                    key={size}
                    className="h-[44px] rounded-xl border border-[#CBCBCB] px-[15px] pb-[4px] pt-[8px]"
                  >
                    {size}
                  </div>
                ))}

                <Image
                  className="cursor-pointer"
                  onClick={() => setShowSizeModal(true)}
                  src={AddSizeIcon}
                  alt="Add Item"
                  width={38}
                  height={38}
                />
              </div>
            </div>
            <span className="text-lg block font-medium text-black mb-4">
              Rəng əlavə et
            </span>
            <div className="flex gap-3 w-[588px] h-[76px] p-4 border border-solid border-[#CFCFCF] rounded-md ">
              {colors.map((color) => (
                <div
                  key={color}
                  className="w-[44px] h-[44px] rounded-full"
                  style={{ backgroundColor: color }}
                />
              ))}

              <Image
                className="cursor-pointer"
                onClick={() => setShowColorModal(true)}
                src={AddColorIcon}
                alt="Add Item"
                width={44}
                height={44}
              />
            </div>

            <TextArea
              inputStyle="px-4 py-6 h-[180px] w-[588px] border-[#793a3a] border-gray-300 focus:ring-blue-500 block bg-transparent"
              placeholder="Məhsul haqqında"
              {...formik.getFieldProps("itemDescription")}
            />

            <TextArea
              inputStyle="px-4 py-6 h-[180px] w-[588px] border-[#793a3a] border-gray-300 focus:ring-blue-500 block bg-transparent"
              placeholder="Məhsul matreal haqqında"
              {...formik.getFieldProps("materialDescription")}
            />
            <Button primary type="submit" className="w-full">
              Əlavə et
            </Button>
          </form>

          <div>
            {showColorModal && (
              <ColorModal
                close={() => {
                  setShowColorModal(false);
                }}
                selectedColors={colors}
                onSave={handleSaveColors}
              />
            )}
            {showSizeModal && (
              <SizeModal
                close={() => {
                  setShowSizeModal(false);
                }}
                selectedSizes={sizes}
                onSave={handleSaveSizes}
              />
            )}
          </div>

          <ImageUploader
            imageSrc={formik.values.file}
            handleOnImageChange={(e: any) => {
              formik.setFieldValue(
                "file",
                URL.createObjectURL(e.target.files[0])
              );
            }}
          />
        </main>
      </div>
    </div>
  );
};
