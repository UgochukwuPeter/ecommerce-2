import { useState } from 'react';
import './sellRegister.scss';

const SellRegistration = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    firstName:'',
    lastName:'',
    phone:'',
  });
  const handleNext = () => {
    if (validateForm()) {
      if (Object.keys(errors).length === 0) {
        setStep(step + 1);
      }
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert('Form submitted successfully');
    // Handle form submission logic here
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name === 'confirmPassword') {
      console.log('Updating confirmPassword field:', value);
      setFormData({ ...formData, confirmPassword: value });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validateForm = () => {
    let errors = {};
    if(step === 1){
      if(!formData.companyName){
        errors.comapnyName  =  'Company Name is required';
      }
      if (!formData.email) {
        errors.email = 'Email is required';
      }
      if (!formData.password) {
        errors.password = 'Password is required';
      }
      if (!formData.confirmPassword) {
        errors.confirmPassword = 'Confirm Password is required';
      }
      if(formData.password != formData.confirmPassword){
        errors.confirmPassword   = 'Password do not match';
      }
      
    }else if (step === 2){
      if (!formData.firstName) {
        errors.firstName = 'First Name is required';
      }else if (/^[0-9]/.test(formData.firstName)) {
        errors.firstName = 'First Name cannot start with a number';
      }else if (/^[0-9]/.test(formData.lastName)) {
        errors.lastName = 'Last Name cannot start with a number';
      }
      if (!formData.lastName) {
        errors.lastName = 'Last Name is required';
      }
      if (!formData.phone) {
        errors.phone = 'Phone Number is required';
      }else if(isNaN(formData.phone)){
        errors.phone = 'Phone must be a valid number';
      }
    }
    setErrors(errors);
    // if (Object.keys(errors).length === 0) {
    //   handleNext(); 
    // }
    return Object.keys(errors).length === 0;
  };
  console.log('Password:', formData.password);
console.log('Confirm Password:', formData.confirmPassword);

  const handlePasswordChange = (event) => {
    const password = event.target.value;
    if (password.length > 0) {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
      if (!passwordRegex.test(password)) {
        setErrors({ ...errors, password: 'Password must start with an uppercase letter, followed by a lowercase letter, a number, and a special character' });
        // setFormData({...formData,password:''});
      } else {
        setFormData({ ...formData, password: password });
      }
    }
  };
  return (
    <div>
       {step === 1 && (
        <Form1
          formData={formData}
          setFormData={setFormData} 
          handleInputChange={handleInputChange}
          handleNext={handleNext}
          validateForm={validateForm}
          errors={errors}
          handlePasswordChange={handlePasswordChange}
        />
      )}
       {step === 2 && (
        <Form2
          formData={formData}
          setFormData={setFormData}
          validateForm={validateForm}
          errors={errors}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />
      )}
       {step === 3 && (
        <Form3
          formData={formData}
          setFormData={setFormData}
          handleFormSubmit={handleFormSubmit}
          handlePrev={handlePrev}
        />
      )}
    </div>
  )
};
const Form1 = ({ formData, setFormData, handleNext,validateForm,errors,handlePasswordChange,handleInputChange }) => {
  return (
    <div className='form1'>
      <div className='form1-header'>
      <i className='bx bx-store-alt'></i>
      <h1>Create your  Sellers Account</h1>
      <p>Let's get started by creating your account.</p>
      </div>
      <form>
      <input
          type="text"
          placeholder='Company Name'
          value={formData.companyName}
          onChange={(event) =>
            setFormData({ ...formData, companyName: event.target.value })
          }
        />
           {errors.comapnyName && <p className='error'>{errors.companyName  }</p>}
      <input
          type="email"
          placeholder='Email'
          value={formData.email}
          onChange={(event) =>
            setFormData({ ...formData, email: event.target.value })
          }
        />
         {errors.email && <p className='error'>{errors.email}</p>}
         <input
        type="password"
        placeholder='Password'
        value={formData.password}
        onChange={handlePasswordChange}
      />
        {errors.password && <p className='error'>{errors.password}</p>}
        <input
        type="password"
        placeholder='Confirm Password'
         name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleInputChange}
        />
       {errors.confirmPassword && (
          <p className='error'>{errors.confirmPassword}</p>
        )}
        <button type="button" onClick={() => {
         if (validateForm()) {
          handleNext();
          }
        }}>
         Continue
        </button>
      <p>For further support, you may visit the  Help Center or contact our custor service team</p>
    </form>
    </div>
    
  );
};
const Form2 = ({ formData, setFormData, handleNext, handlePrev,validateForm,errors }) => {
  return (
    <div className='form1'>
      <div className='form1-header'>
      <i className='bx bx-store-alt'></i>
      <h1>Personal details</h1>
      <p>We just need you to fill in some details</p>
      </div>
      <form>
      <input
          type="text"
          placeholder='First Name*'
          value={formData.firstName}
          onChange={(event) =>
            setFormData({ ...formData, firstName: event.target.value })
          }
        />
        {errors.firstName && <p className='error'>{errors.firstName}</p>}
        <input
          type="text"
          placeholder='Last Name*'
          value={formData.lastName}
          onChange={(event) =>
            setFormData({ ...formData, lastName: event.target.value })
          }
        />
        {errors.lastName && <p className='error'>{errors.lastName}</p>}
        <input
          type="text"
          placeholder='Phone Number'
          value={formData.phone}
          onChange={(event) =>
            setFormData({ ...formData, phone: event.target.value })
          }
        />
        {errors.phone && <p className='error'>{errors.phone}</p>}
     
      {/* <button onClick={handlePrev}>Previous</button> */}
      <button type="button" onClick={() => {
         if (validateForm()) {
          handleNext();
          }
        }}>
         Continue
        </button>
      <p>For further support, you may visit the  Help Center or contact our custor service team</p>
    </form>
    </div>
   
  );
};
const Form3 = ({ formData, setFormData, handleFormSubmit, handlePrev }) => {
  return (
    <div className='form1'>
      <div className='form1-header'>
      <i className='bx bx-store-alt'></i>
      <h1>Personal details</h1>
      <p>Almost there... Just a few more details</p>
      </div>
      <form onSubmit={handleFormSubmit}>
      <select onChange={(event) => {
      setFormData({ ...formData, gender: event.target.value });
      }}>
        <option value="">Gender*</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
    </select>
    <input
          type="date"
          value={formData.dateOfBirth}
          onChange={(event) =>
            setFormData({ ...formData, dateOfBirth: event.target.value })
          }
        />
      
      {/* <button onClick={handlePrev}>Previous</button> */}
      <button type="submit">Continue</button>
      <p>For further support, you may visit the  Help Center or contact our custor service team</p>
    </form>
    </div>
   
  );
};

export default SellRegistration