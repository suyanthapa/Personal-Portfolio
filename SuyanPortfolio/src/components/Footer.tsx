const Footer = () => {
    return (
        <div id="Footer" >
            <div className="text-black bg-pink-100 text-center p-5">
                <h1 className=" text-3xl font-black">Let's make something great together.</h1>
                <p className=" mt-7  text-xl text-bold ">Have a project you would like to dicsuss?  <span className="underline"> Get in touch for a quick note</span></p>
            </div>

            <div className="bg-[#0a2340] text-center p-8 text-white flex flex-col gap-10">
                <h1 className="text-bold font-white text-3xl">Suyan Thapa , Full Stack Developer</h1>
                <nav className="flex justify-center">
                    <ul className="flex gap-15">
                    <a href="#home">Home</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#contact">Contact</a>
                    </ul>
                    
                </nav>
            </div>
      </div>
      
    );
  }
  
  export default Footer;
  