import { useRef, useState } from 'react';
import axios from 'axios';

export const useSendImage = (route: string) => {
  const [blobImage, setBlobImage] = useState(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const ROUTE: string = route;
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };
    console.log(e.target);
    formData.append('image', blobImage);
    axios.post(ROUTE, formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    setBlobImage(image);
  };
  return {
    blobImage,
    setBlobImage,
    fileInputRef,
    formRef,
    handleSubmit,
    handleChange,
  };
};
