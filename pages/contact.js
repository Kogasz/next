import Link from 'next/link';
import { useState } from "react";

function ImageWithText({ imageUrl, tekst }) {
  return (
    <div>
      <img src={imageUrl} alt={tekst} style={{ width: '100px', height: '100px' }} />
      <p>{tekst}</p>
    </div>
  );
}

const Contact = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <ImageWithText
        imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXI5tg7VncOcsfNZPZ61NFVTkXRXoM7w7KRg&s"
        tekst="532423654"
      />
      <p>If you have any questions, please reach out to us!</p>
      <Link href="/">Back to Home</Link>
    </div>
  );
};

function SimpleForm({ label, placeholder, onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>{label}</label>
      <input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button type="submit">Wyślij</button>
    </form>
  );
}

const FormConta = () => {
  const [submittedValue, setSubmittedValue] = useState("");

  const handleFormSubmit = (value) => {
    setSubmittedValue(value);  
  };

  return (
    <div>
      <h1>Strona Główna</h1>
      <SimpleForm
        label="Podaj swój email:"
        placeholder="Wpisz email"
        onSubmit={handleFormSubmit} 
      />
      {submittedValue && <p>Wprowadzono: {submittedValue}</p>}
    </div>
  );
};

function page_c() {
  return (
    <>
      <Contact />
      <FormConta />
    </>
  );
}

export default page_c;
