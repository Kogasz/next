import Link from 'next/link';
import { useState } from "react";

function HOME(){


const ItemList = ({ items }) => {
    return (
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    );
  };
  
  const Index = () => {
    const favoriteMovies = ['Star Wars', 'FLASH', 'CARS', 'BATMAN'];
  
    return (
      <div>
        <h1>My Favorite Movies</h1>
        <ItemList items={favoriteMovies} />
      </div>
    );
  };
  
  
  function TextBlock({ heading, content }) {
    return (
      <div>
        <h2>{heading}</h2>
        <p>{content}</p>
      </div>
    );
  }
  
  const Welcoming = () => {
    return (
      <TextBlock heading="WELLCOME!" content="!!!" />
    );
  }

  function ImageWithText({ imageUrl, tekst }) {
    return (
      <div><img src={imageUrl} alt={tekst} style={{ width: '100px', height: '100px' }} /><p>{tekst}</p></div>  );
  }
  const ZDJ = ()=> {
    return(
        <ImageWithText 
        imageUrl="https://as2.ftcdn.net/v2/jpg/04/93/91/31/500_F_493913135_q0Ar7Aund7lRPFSxa8qg1hTQmhG5kdNP.jpg" 
        tekst="LIKE"/>
    );
  }


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
  
  const FormHome = () => {
    const [submittedValue, setSubmittedValue] = useState("");
  
    const handleFormSubmit = (value) => {
      setSubmittedValue(value);  
    };
  
    return (
      <div>
        <h1>Strona Główna</h1>
        <SimpleForm
          label="Podaj swoje imię:"
          placeholder="Wpisz imię"
          onSubmit={handleFormSubmit} 
        />
        {submittedValue && <p>Wprowadzono: {submittedValue}</p>}
      </div>
    );
  };


  function ConditionalDisplay({ isVisible }) {
    return (
<div>
      {isVisible ? (
        <p>Treść widoczna, bo isVisible jest prawdziwe</p>   
      ) : (
        <p>Brak danych do wyświetlenia</p>
      )}
    </div>
    );
  }
  const FLAGH = () => {
    return (
      <div>
        <ConditionalDisplay isVisible={true} />
      </div>
    );
  };

  function ListWithObjects({ items }) {
    return (
      <ul>      {items.map((item, index) => (        <li key={index}>          {item.name}: {item.value}        </li>
        ))}
      </ul>  );
  }
  const Products = () => {
    const productData = [
      { name: 'Laptop', value: '$1000' },
      { name: 'Smartphone', value: '$700' },
      { name: 'Tablet', value: '$300' },
    ];
  
    return (
      <div>
        <h1>Produkty</h1>
        <ListWithObjects items={productData} />
      </div>
    );
  };

    return(
        <div>
            <ZDJ/>
            <Welcoming/>
            <Index/>
            <Link href="/about">Go to About Page</Link>
            <p><Link href="/components/Footer">Go to Footer/About us Page</Link></p>
            <p><Link href="/contact">Go to Contact Page</Link></p>
            <p><Link href="/produkty">Go to Product Page</Link></p>
            <FormHome/>
            <FLAGH/>
            <Products/>
        </div>
    )
  
}
export default HOME;