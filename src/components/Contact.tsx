import React, { useState } from 'react';

interface FormErrors {
  name?: string;
  message?: string;
  form?: string;
}

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [success, setSuccess] = useState<string | null>(null);

  const validateForm = () => {
    const errors: FormErrors = {};
    if (!name) errors.name = 'Full Name is required';
    if (!message) errors.message = 'Message is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!validateForm()) return;
    try {
      setSuccess('Your message has been sent successfully!');
      setName('');
      setMessage('');
    } catch (error) {
      console.error('Form submission error:', error);
      setSuccess(null);
      setErrors({ ...errors, form: 'Something went wrong, please try again later.' });
    }
  };

  return (
    <div className='bg-gradient-to-r from-primary to-tertiary p-8'>
      <div className='max-w-md mx-auto'>
        <span className='text-rose-400 text-2xl font-semibold mb-4 block'>Get in Touch</span>
        <form onSubmit={handleSubmit}>
          <div className='mb-4'>
            <input 
              type="text" 
              placeholder='Full Name' 
              value={name}
              onChange={(e) => setName(e.target.value)}
              className={`w-full p-2 border border-gray-300 rounded-md ${errors.name ? 'border-red-500' : ''}`}
            />
            {errors.name && <p className='text-red-500 text-sm'>{errors.name}</p>}
          </div>
          <div className='mb-4'>
            <textarea 
              name="message" 
              cols={30} 
              rows={10} 
              placeholder='Your Message' 
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className={`w-full p-2 border border-gray-300 rounded-md ${errors.message ? 'border-red-500' : ''}`}
            ></textarea>
            {errors.message && <p className='text-red-500 text-sm'>{errors.message}</p>}
          </div>
          {errors.form && <p className='text-red-500 text-sm mb-4'>{errors.form}</p>}
          <button 
            type="submit" 
            className='bg-rose-400 text-white py-2 px-4 rounded-md flex justify-center items-center'
          >
            Submit
          </button>
          {success && <p className='text-green-500 text-sm mt-4'>{success}</p>}
        </form>
        <p className='text-gray-300 flex justify-start'>© 2024 All rights reserved.</p>
      </div>
    </div>
  );
}

export default Contact;
