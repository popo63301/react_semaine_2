import { useNavigate } from "react-router-dom";

const Page2 = () => {
  const navigate = useNavigate();

  return (
    <div>
      Page 2 <br />
      <br />
      <br />
      <button onClick={() => navigate("/page1")}>go to page 1</button>
    </div>
  );
};

export default Page2;
