import Link from 'next/link';
import { useState } from "react";

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
    const favoriteMovies = ['PAINTING', 'HIKING', 'Photography', 'Gardening'];
  
    return (
      <div>
        <h1>My HOBBIES</h1>
        <ItemList items={favoriteMovies} />
        <Link href="/">Go back!</Link>
      </div>
    );
  };
  
  export default Index;