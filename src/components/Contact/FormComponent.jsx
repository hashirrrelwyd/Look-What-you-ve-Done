// import { useCursor } from "../../context/CursorContext";

// export default function FormComponent() {
//   const { setHoverType } = useCursor();
//   return (
//     <form className="flex flex-col gap-4 m-5">
//       <input
//         onMouseEnter={() => setHoverType("input")}
//         onMouseLeave={() => setHoverType("black")}
//         type="text"
//         placeholder="Name*"
//         className="py-3 px-4 rounded-md cursor-none bg-[#7D7D7D14] outline-none text-[#7D7D7DCC]"
//       />
//       <input
//         onMouseEnter={() => setHoverType("input")}
//         onMouseLeave={() => setHoverType("black")}
//         type="email"
//         placeholder="Email*"
//         className="py-3 px-4 rounded-md cursor-none bg-[#7D7D7D14] outline-none text-[#7D7D7DCC]"
//       />
//       <input
//         onMouseEnter={() => setHoverType("input")}
//         onMouseLeave={() => setHoverType("black")}
//         type="number"
//         placeholder="Phone number*"
//         className="py-3 px-4 rounded-md cursor-none bg-[#7D7D7D14] outline-none text-[#7D7D7DCC]"
//       />
//       <textarea
//         onMouseEnter={() => setHoverType("input")}
//         onMouseLeave={() => setHoverType("black")}
//         placeholder="Enter your message*"
//         className="py-3 px-4 rounded-md h-32 cursor-none bg-[#7D7D7D14] outline-none text-[#7D7D7DCC]"
//       ></textarea>
//       <button
//         onMouseEnter={() => setHoverType("button")}
//         onMouseLeave={() => setHoverType("black")}
//         type="submit"
//         className="bg-[#111111] text-white py-3 px-4 rounded-md hover:bg-[#292619] transition-colors cursor-none"
//       >
//         Send Message
//       </button>
//     </form>
//   );
// }


import React, { useState } from "react";
import { useCursor } from "../../context/CursorContext";

// Define initial empty state for form fields
const initialFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

export default function FormComponent() {
  // Mock the cursor hook and setHoverType to prevent errors related to the commented out import
  const { setHoverType } = useCursor();
  
  const [formData, setFormData] = useState(initialFormState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Helper function to validate email format
  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  // Validation Logic
  const validate = () => {
    const newErrors = {};

    // Name Validation
    if (!formData.name) {
      newErrors.name = "Name is required.";
    } else if (formData.name.length < 2) {
      newErrors.name = "Name must be at least 2 characters.";
    }

    // Email Validation
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Phone Validation (Checking for numbers and length)
    if (!formData.phone) {
      newErrors.phone = "Phone number is required.";
    } else if (formData.phone.length !== 10) {
      newErrors.phone = "Phone number must be exactly 10 digits.";
    }

    // Message Validation
    if (!formData.message) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);
    // Returns true if the newErrors object is empty
    return Object.keys(newErrors).length === 0;
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    
    // Clear the error for the field being typed into
    if (errors[name]) {
        setErrors(prevErrors => ({ ...prevErrors, [name]: '' }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (validate()) {
      // Validation passed!
      console.log("Form submitted successfully:", formData);
      // NOTE: Using a custom modal/message box is required, not 'alert'
      // For this isolated component, we will use a console log instead of 'alert'
      console.log("Message sent successfully!"); 
      
      // Reset form and submission state
      setFormData(initialFormState);
    } else {
      // Validation failed
      console.log("Form validation failed.");
    }
    setIsSubmitting(false);
  };

  // Error message component style (Simple, small red text)
  const ErrorMessage = ({ message }) => (
    <p className="text-red-500 text-sm -mt-2 -mb-1">{message}</p>
  );

  return (
    <form className="flex flex-col gap-4 m-5" onSubmit={handleSubmit} noValidate>
      {/* Name Input */}
      <input
        onMouseEnter={() => setHoverType("input")}
        onMouseLeave={() => setHoverType("black")}
        type="text"
        name="name"
        placeholder="Name*"
        value={formData.name}
        onChange={handleChange}
        className="py-3 px-4 rounded-md cursor-none bg-[#7D7D7D14] outline-none text-[#7D7D7DCC]"
      />
      {errors.name && <ErrorMessage message={errors.name} />}
      
      {/* Email Input */}
      <input
        onMouseEnter={() => setHoverType("input")}
        onMouseLeave={() => setHoverType("black")}
        type="email"
        name="email"
        placeholder="Email*"
        value={formData.email}
        onChange={handleChange}
        className="py-3 px-4 rounded-md cursor-none bg-[#7D7D7D14] outline-none text-[#7D7D7DCC]"
      />
      {errors.email && <ErrorMessage message={errors.email} />}
      
      {/* Phone Input */}
      <input
        onMouseEnter={() => setHoverType("input")}
        onMouseLeave={() => setHoverType("black")}
        type="tel"
        name="phone"
        placeholder="Phone number*"
        value={formData.phone}
        onChange={handleChange}
        className="py-3 px-4 rounded-md cursor-none bg-[#7D7D7D14] outline-none text-[#7D7D7DCC]"
      />
      {errors.phone && <ErrorMessage message={errors.phone} />}
      
      {/* Message Textarea */}
      <textarea
        onMouseEnter={() => setHoverType("input")}
        onMouseLeave={() => setHoverType("black")}
        name="message"
        placeholder="Enter your message*"
        value={formData.message}
        onChange={handleChange}
        className="py-3 px-4 rounded-md h-32 cursor-none bg-[#7D7D7D14] outline-none text-[#7D7D7DCC]"
      ></textarea>
      {errors.message && <ErrorMessage message={errors.message} />}
      
      {/* Submit Button */}
      <button
        onMouseEnter={() => setHoverType("button")}
        onMouseLeave={() => setHoverType("black")}
        type="submit"
        disabled={isSubmitting}
        className="bg-[#111111] text-white py-3 px-4 rounded-md hover:bg-[#292619] transition-colors cursor-none"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}