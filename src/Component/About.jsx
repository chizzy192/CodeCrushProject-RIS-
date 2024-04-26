
import Footer from "./Footer"
import Navbar from "./Navbar"


function About() {
  return (
    
    <>
    <Navbar/> 
        <div id="About" className='text-center bg-cover md:w-100 h-auto mx-0 my-0 justify-center '
        style={{
            background: "linear-gradient( rgba(199, 244, 174, 5), rgba(24, 53, 171, 1) )"
          }}>
            <h1 className="header text-3xl p-8 font-bold h-16">Who We Are</h1>
            <div className="flex w-full my-4 mx-0 justify-center items-start flex-wrap gap-[25%] ">
                <div className="w-[431px]  my-4 mx-4"><img src="picture1.svg" alt="picture" className=' rounded-lg my-2 '/></div>
                <div className='bg-transparent w-64 my-[60px] mx-3 '>
                    <h2 className='text-2xl font-bold '>Our History</h2>
                    <p className='font-semibold text-xs'>Debuting in 2024, RIS quickly became the hallmark 
    of HR innovation. With personalised features and predictive analytics, RIS reshapes how businesses manage their workforce, fostering informed decisions and strategic alignment effortlessly.</p>
                </div>
            </div>
            <div className='text-white bg-blue-400 border-2 border-blue-500 w-3/4 h-auto rounded-lg pb-4 px-6 my-auto mx-[auto] block'>
                    <h2 className='text-bold text-xl py-2 h-10%'>Our Quest</h2>
                    <p className='font-light px-[30px] h-20% py-2'>"Our Mission at RIS is to revolutionize HR management by providing customizable solutions that empower organizations to thrive. We strive to streamline operations, foster informed decision-making, and drive strategic alignment for our clients' success."</p>
            </div>
            <div className="header text-3xl p-8 mb-[15px] font-bold h-16">TESTIMONIES</div>
           
            <div className="card flex flexbox  justify-center align-middle space-around-[60px] text-white flex-wrap">
                <div className="w-[350px] bg-green-800 m-auto mb-[30px] h-[200px] rounded-lg">
                    <div className="flex flexbox space-x-[110px] flex-wrap">
                    <div className="rounded-lg my-[10px] mx-[10px] bg-white w-[15px] h-[15px]"></div>
                    <div className="font-bold text-lg justify center my-[13px] ">Folake Ibrahim</div>
                    </div>
                    <div className="flex flexbox items-center space-x-[50px] justify-center">
                    
                        <img src="card1.svg" alt="" className="w-[120px] rounded-full h-[120px]" />
                    
                    <div className="text-xs font-thin w-1/4">"Informed decisions, comprehensive features. Very satisfied!"</div>
                    </div>
                </div>

                <div className="w-[350px] bg-green-800 m-auto mb-[30px] h-[200px] rounded-lg">
                    <div className="flex flexbox space-x-[110px] flex-wrap">
                    <div className="rounded-lg my-[10px] mx-[10px] bg-white w-[15px] h-[15px]"></div>
                    <div className="font-bold text-lg justify center my-[13px] ">Sarah Martinez</div>
                    </div>
                    <div className="flex flexbox items-center space-x-[50px] justify-center">
                    
                        <img src="card2.svg" alt="" className="w-[120px] rounded-full h-[120px]" />
                        
                    
                    <div className="text-xs font-thin w-1/4">"Improved engagement, proactive insights. Essential tool!"</div>
                    </div>
                </div>
                <div className="w-[350px] bg-green-800 h-[200px] mx-auto mb-[30px] rounded-lg">
                    <div className="flex flexbox space-x-[110px] flex-wrap">
                    <div className="rounded-lg my-[10px] mx-[10px] bg-white w-[15px] h-[15px]"></div>
                    <div className="font-bold text-lg justify center my-[13px] ">Priya Sharma</div>
                    </div>
                    <div className="flex flexbox items-center space-x-[50px] justify-center">
                    
                        <img src="card3.svg" alt="" className="w-[120px] rounded-full h-[120px]" />
                    <div className="text-xs font-thin w-1/4">"User-friendly interface, proactive insights. Great tool!"</div>
                    </div>
                </div>
                
            </div>
            
            <Footer/>
        </div>
        

    </>
  )
}

export default About
