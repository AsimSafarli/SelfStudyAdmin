"use client"
import axios from 'axios'

function handleRequestWithAxiosFaqAdd(values:any){
    axios.post("https://lobster-app-225yp.ondigitalocean.app/api/faqs", values);
}

export {handleRequestWithAxiosFaqAdd}