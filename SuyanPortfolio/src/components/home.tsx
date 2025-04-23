

export default function home() {
  return (
 <div id="home">

    <div className="min-h-screen h-70vh flex flex-col  md:flex-row  justify-between px -8 py-20 text-white relative overflow-hidden bg-[#081b29] pl-20 pt-30">
      <div className="max-w-xl flex flex-col  gap-5">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight">Hi, I am Suyan Thapa</h1>
        <h3 className="text-3xl bold md:text-4xl font-semibold text-blue
         text-green-400 ">Enthusiastic Learner</h3>
        <p>Passionate learner dedicated to exploring new ideas and acquiring knowledge across various disciplines. Committed to academic excellence and personal growth. Actively involved in extracurricular activities to develop leadership and teamwork skills. Excited about the journey ahead and making a meaningful impact.</p>

        <div className="w-[280px] h-[45px] gap-6 flex flex-row text-white font-bold rounded-md">
          <button className="bg-[#00abf0] w-[140px] h-full rounded-md ">Hire Me</button>
          <button className="w-[120px] h-full border-2 border-[#00abf0] rounded-md text-[#00abf0]">Let's Talk</button>
</div>

      </div>
    </div>


 </div>
  )
}