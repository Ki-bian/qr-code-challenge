import "./App.css";

const App = () => {
  return (
    <div className="bg-white flex flex-col rounded-[20px] gap-6 shadow-[0_4px_16px_rgba(0,0,0,0.05)] w-[320px] h-124.75 px-4 pt-4 pb-10 text-center">
      <img
        src="/image-qr-code.png"
        alt="QR Code Image"
        className="w-[288px] h-72 rounded-[10px]"
      />
      <div className="px-4">
        <h1 className="text-slate-900 font-bold leading-[120%] mb-4 text-[22px] ">
          Improve your front-end skills by building projects
        </h1>
        <p className="text-slate-500 font-normal leading-[140%] text-[15px]">
          Scan the QR code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default App;
