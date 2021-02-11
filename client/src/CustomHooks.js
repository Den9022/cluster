import { useState } from "react";

  const HandleForm = () => {
    const [inputs, setInputs] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (event) => {
      if (event) {
        event.preventDefault();
      }
      setIsSubmitted(true);
    };
    const handleInputChange = (event) => {
      event.persist();
      setInputs((inputs) => ({
        ...inputs,
        [event.target.name]: event.target.value,
      }));
    };
    return {
      handleSubmit,
      handleInputChange,
      inputs,
      isSubmitted
    };
  };


export default HandleForm;
