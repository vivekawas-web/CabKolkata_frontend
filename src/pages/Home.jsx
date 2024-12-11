import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="bg-cover bg-center bg-[url(https://img.freepik.com/free-photo/vertical-shot-uphill-road-middle-buildings-with-cars-driving_181624-14077.jpg)] h-screen pt-8 w-full flex justify-between flex-col">
        <img className="w-20 ml-5" src="src\assets\logo.png" alt="Logo" />
        <div className="bg-yellow-100 pb-7 py-4 px-4">
          <h2 className="text-2xl font-bold">Get Started with Cab Kolkata</h2>
          <Link
            to={"/userLogin"}
            className="flex items-center justify-center w-full bg-black text-white py-3 rounded-lg mt-5"
          >
            <Link />
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
