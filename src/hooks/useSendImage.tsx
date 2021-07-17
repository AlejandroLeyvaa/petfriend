import { useRef, useState } from 'react';
import axios from 'axios';

export const useSendImage = (route: string) => {
  const [blobImage, setBlobImage] = useState(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);

  const ROUTE: string = route;

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    const config = {
      headers: { 'content-type': 'multipart/form-data' },
    };

    const pet = {
      'petName': formData.get('petName'),
      'image': formData.get('image'),
    }

    axios.post(ROUTE, formData, {
      headers: { 'content-type': 'multipart/form-data' },
    });
  };
  const handleChange = (e) => {
    e.preventDefault();
    const image = e.target.files[0];
    console.log(image);
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
