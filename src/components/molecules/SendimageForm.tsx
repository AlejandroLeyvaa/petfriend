import { useSendImage } from '../../hooks/useSendImage';

export const SendimageForm = () => {
  const {formRef, handleSubmit, handleChange, fileInputRef} = useSendImage('/api/images/pets')
  return (
    <form className='sendImage-form' ref={formRef} onSubmit={handleSubmit}>
      <label htmlFor='image'>
       <input
         type='text'
         name='petName'
         ref={fileInputRef}
        />
      </label>
      <label htmlFor='image'>
       <input
         type='file'
         name='image'
         accept='image/*'
         onChange={handleChange}
         ref={fileInputRef}
        />
      </label>
      <button className='button send' id='send' type='submit'>
        Enviar
      </button>
    </form>
  )
}
