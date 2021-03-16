import { useState } from "react";

const HandleForm = () => {
  const [inputs, setInputs] = useState({
    randomSeed: 11,
    embeddingCount: 8,
    embeddingLength: 3,
    vectorCount: 3,
    thresholdValue: 2,
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
