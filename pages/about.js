export default function About() {
  return <h1>AUTHENTIC BAGELS EVERY DAY FROM 9 TO 5 </h1>;
}

const myLoader = ({ src, width, quality }) => {
  return `https://example.com/${src}?w=${width}&q=${quality || 75}`;
};

const MyImage = (props) => {
  return (
    <Image
      loader={myLoader}
      src="example.png"
      alt="Picture of the author"
      width={500}
      height={500}
    />
  );
};
