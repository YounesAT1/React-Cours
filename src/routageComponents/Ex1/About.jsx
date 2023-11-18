import { useParams } from "react-router-dom";

const About = () => {
  const { userName } = useParams();

  return (
    <div>
      <h1>This is about page of {userName} </h1>
    </div>
  );
};

export default About;
