import Link from 'next/link';

function TextBlock({ heading, content }) {
  return (
    <div>
      <h2>{heading}</h2>
      <p>{content}</p>
    </div>
  );
}

const Footer = () => {
  return (
    <footer>
      <TextBlock heading="About Us" content="This website is created to share amazing content with the world." />
      <Link href="/">Go back!</Link>
    </footer>
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

const FlagH = () => {
  return (
    <div>
      <ConditionalDisplay isVisible={false} /> 
    </div>
  );
};

function FooterComponent() {
  return (
    <div>
      <Footer />
      <FlagH />
    </div>
  );
}

export default FooterComponent;
