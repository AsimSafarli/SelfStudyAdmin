"use client"
import axios from 'axios'
import {  toast } from "react-toastify";

function handleRequestWithAxiosVideoAdd(values:any){
    axios.post("https://lobster-app-225yp.ondigitalocean.app/api/video", values);
    toast("Qısa zamanda əlaqə yaradılacaq");

}

export {handleRequestWithAxiosVideoAdd}