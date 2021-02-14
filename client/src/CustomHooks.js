import { useState } from "react";

const HandleForm = () => {
  const [inputs, setInputs] = useState({
    randomSeed: 0,
    embeddingCount: 0,
    embeddingLength: 0,
    vectorCount: 0,
    thresholdValue: 0,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    setIsSubmitted(true);
  };
  const handleInputChange = (event) => {
    const val = event.target.value;
    event.persist();
    setInputs((inputs) => ({
      ...inputs,
      [event.target.name]: val,
    }));
  };
  return {
    handleSubmit,
    handleInputChange,
    inputs,
    isSubmitted,
  };
};

export default HandleForm;
