export default function Home() {
  return (
    <div id="home">
      <div className="min-h-screen flex flex-col md:flex-row justify-between items-center px-8 py-20 text-white relative overflow-hidden bg-[#081b29]">
        {/* Left Section - Text */}
        <div className="max-w-xl flex flex-col gap-5">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Hi, I am Suyan Thapa
          </h1>
          <h3 className="text-3xl md:text-4xl font-semibold text-green-400">
            Enthusiastic Learner
          </h3>
          <p>
            Full-stack web developer skilled in JavaScript, TypeScript, React, Node.js, and MongoDB.
            Experienced in building web applications and developing RESTful APIs.
            Currently pursuing a Bachelor's degree in Computer Application with a focus on software development and database management.
          </p>

          {/* Buttons */}
          <div className="w-[280px] h-[45px] gap-6 flex flex-row text-white font-bold rounded-md">
            <button className="bg-[#00abf0] w-[140px] h-full rounded-md">
              Hire Me
            </button>
            <button className="w-[120px] h-full border-2 border-[#00abf0] rounded-md text-[#00abf0]">
              Let's Talk
            </button>
          </div>
        </div>

        {/* Right Section - Profile Image */}
        <div className="mt-10 md:mt-0">
          
          <img
            src="/profile.png" // <-- Change this path based on where you keep your image
            alt="Profile Photo"
            className="w-[300px] h-[350px] object-cover rounded-full border-4 border-[#00abf0] shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
