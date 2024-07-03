import { InputHTMLAttributes, TextareaHTMLAttributes } from "react"

export interface IFieldProps {
  name?: string
    inputLabel?: string
      placeholder: string
      error?: any
      inputStyle?: any
  }
  
  type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps
  
  export interface IField extends TypeInputPropsField {}
  

  export interface IField extends TypeInputPropsField {}
  
type TypeTextAreaPropsField = TextareaHTMLAttributes<HTMLTextAreaElement> &
	IFieldProps
    export interface ITextArea extends TypeTextAreaPropsField {}
  
export interface ITextArea extends TypeTextAreaPropsField {}