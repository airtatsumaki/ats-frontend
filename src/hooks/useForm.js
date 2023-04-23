import { useState } from 'react';

function useForm(initValues){
  const [formData, setFormData] = useState(initValues);

  function handleInput(event){
    const { name, value } = event.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  }
  return [formData, handleInput];
}

export default useForm;