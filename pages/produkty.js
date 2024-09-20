import Link from 'next/link';
import { useState } from "react";

function ListWithObjects({ items }) {
    return (
      <ul>      {items.map((item, index) => (        <li key={index}>          {item.name}: {item.value}        </li>
        ))}
      </ul>  );
  }
  const Products = () => {
    const productData = [
      { name: 'Apple', value: '$3' },
      { name: 'Banana', value: '$2' },
      { name: 'Cherry', value: '$4' },
    ];
  
    return (
      <div>
        <h1>Produkty</h1>
        <ListWithObjects items={productData} />
      </div>
    );
  };
  function ProductComponent() {
    return (
      <div>
        <Link href="/">Go back!</Link>
        <Products/>
      </div>
    );
  }
  
  export default ProductComponent;