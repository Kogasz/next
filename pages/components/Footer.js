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
  export default Footer;