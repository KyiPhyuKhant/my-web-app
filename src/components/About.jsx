import aboutImg from "./Header/react-core-concepts.png";
import Examples from "./Examples.jsx";

const About = () => {
  return (
    <>
      <div className="banner">
        <h1>About Me!</h1>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        <div className="flex flex-col items-center bg-white p-4 w-full md:w-1/3">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Odio, adipisci debitis hic ut nostrum dicta neque tempore deleniti ullam illum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
          Odio, adipisci debitis hic ut nostrum dicta neque tempore deleniti ullam illum. </p>
        </div>
        <div className="flex flex-col items-center bg-white p-4 w-full lg:w-1/2">
          <span><img src={aboutImg} alt="Stylized atom" /> </span>
        </div>
      </div>

      <Examples />
    </>
  )
};

export default About;