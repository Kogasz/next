import Link from 'next/link';

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

    return(
        <div>
            <ZDJ/>
            <Welcoming/>
            <Index/>
            <Link href="/about">Go to About Page</Link>
            <p><Link href="/components/Footer">Go to Footer Page</Link></p>
            <p><Link href="/contact">Go to Contact Page</Link></p>
        </div>
    )
  
}
export default HOME;