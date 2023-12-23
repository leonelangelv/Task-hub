import { useState } from 'react';

export default function useForm({ initialValues, onSubmit }) {
  const [values, setValues] = useState(initialValues);

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let hasContent = true;
    Object.entries(values).forEach(([key, value]) => {
      if (!value && key !== 'images' && key !== 'id') hasContent = false;
    });

    if (hasContent) onSubmit(values);
  };

  const reset = () => setValues(initialValues);

  return {
    values,
    handleChange,
    handleSubmit,
    reset
  };
}
