import Link from 'next/link';

function ImageWithText({ imageUrl, tekst }) {
    return (
      <div><img src={imageUrl} alt={tekst} style={{ width: '100px', height: '100px' }} /><p>{tekst}</p></div>  );
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

export default Contact;