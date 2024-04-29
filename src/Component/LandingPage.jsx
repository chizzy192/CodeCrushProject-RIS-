import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function LandingPage() {
  return (
    <>
    
    <Navbar/>
    <div className="pt-[70px]  justify-center "
    style={{
      background: "linear-gradient( rgba(199, 244, 174, 5), rgba(24, 53, 171, 1) )"
    }}>
    <div className='flex flexbox  flex-wrap mx-auto px-[30px] justify-center gap-[15%] align-middle'>
          <div className="block font-bold justify-start  my-[15px] md:w-1/3">
            <div className="text-3xl pb-[15px] ">
            Step Into The Future HR Management. 
            </div>
            <div className='flex flexbox text-sm pb-1 sm:text-lg'>
              <img src="checked.svg" alt="" />
              <span>Experience the power of personalized solutions</span>
            </div>
            <div className='flex flexbox text-sm pb-1 sm:text-lg'>
              <img src="checked.svg" alt="" />
              <span>Enjoy unified data</span>
            </div>
            <div className='flex flexbox text-sm pb-1 sm:text-lg'>
              <img src="checked.svg" alt="" />
              <span>Receive Predictive Insight</span>
            </div>
            <div className='flex flexbox text-sm pb-1 sm:text-lg'>
              <img src="checked.svg" alt="" />
              <span>Experience Seamless Operations</span>
            </div>
          </div>
          <div className="w-[431px] "><img src="picture2.svg" alt="picture" className=' rounded-lg'/></div>
        </div>

        <div className='text-white bg-blue-400 border-2 border-blue-500 bg-cover font-bold bg-center w-6/7 h-auto rounded-lg pb-4 px-6 my-[50px] mx-[10px]  justify-center align-middle   '>
                    <h2 className='text-bold text-center text-xl sm:text-3xl py-4 h-10% w-100%'>Meet Our Team</h2>
                    
                    <div className="card flex flexbox  justify-center align-middle  text-black flex-wrap">
                
                <div className="w-[280px] bg-slate-100 m-auto mb-[30px] h-[170px] block  rounded-lg">
                    
                    <div className="  justify-center mx-auto  ">
        
                        <img src="team1.svg" alt="" className="w-[70px] rounded-full my-[20px]  mx-auto h-[70px]" />
                        <div className="justify-center  text-center">
                        <div className="font-bold text-lg text-center justify-center sm:text-2xl">Adaeze Eze</div>
                        <div className="text-xs font-thin  mx-auto sm:text-sm">Lead Web Developer</div>
                        </div>
                    </div>
                </div>
                <div className="w-[280px] bg-slate-100 m-auto mb-[30px] h-[170px] block space-x-[40px] rounded-lg">
                    
                    <div className="justify-center mx-auto  ">
        
                        <img src="team2.svg" alt="" className="w-[70px] rounded-full my-[20px]  mx-auto h-[70px]" />
                        <div className=" justify-center text-center">
                        <div className="font-bold text-lg justify-center sm:text-2xl px-auto ">Chioma Nwosu</div>
                    <div className="text-xs font-thin  mx-auto sm:text-sm">Software Engineer</div>
                        </div>
                    </div>
                </div>
                <div className="w-[280px] bg-slate-100 m-auto mb-[30px] h-[170px] block space-x-[40px] rounded-lg">
                    
                    <div className=" justify-center mx-auto  ">
        
                        <img src="team3.svg" alt="" className="w-[70px] rounded-full my-[20px]  mx-auto h-[70px]" />
                        <div className="justify-center text-center">
                        <div className="font-bold text-lg justify-center sm:text-2xl px-auto ">Kelvin Nguyen</div>
                    <div className="text-xs font-thin  mx-auto sm:text-sm">QA tester</div>
                        </div>
                    </div>
                </div>
                <div className="w-[280px] bg-slate-100 m-auto mb-[30px] h-[170px] block space-x-[40px] rounded-lg">
                    
                    <div className=" justify-center mx-auto  ">
        
                        <img src="team4.svg" alt="" className="w-[70px] rounded-full my-[20px]  mx-auto h-[70px]" />
                        <div className="justify-center text-center">
                          <div className="font-bold text-lg justify-center px-auto sm:text-2xl">Tolulope Adewale</div>
                          <div className="text-xs font-thin mx-auto sm:text-sm">UI/UX Designer</div>

                        </div>
                    </div>
                </div>
                </div>
                
            </div>
            <div className='bg-white w-full py-[30px]   text-black text-center bg-cover font-bold bg-center  h-auto pb-4 px-6 my-[50px]   justify-center align-middle'>
                  <div className="font-bold md:text-2xl text-center">Why Choose RIS?</div>
                  <div className="card flex lg:flex-row max-md:flex-col  justify-between align-middle  w-[100%]   text-black flex-wrap">
                  
                    <div className=" w-[31%] max-md:w-auto m-auto md:text-xl h-auto block">
                      <img src="bar.svg" alt="bar" className='mx-auto'/>
                    <div>
                    Unlock predictive HR insights with RIS, anticipate trends, make data-driven 
decisions, and stay ahead effortlessly.
                    </div>
                    
                    </div>
                  <div className="w-[31%] m-auto max-md:w-auto h-auto md:text-xl block">
                    <img src="setting.svg" alt="setting" className='mx-auto' />
                    <div>
                    Unlock predictive HR insights with RIS, anticipate trends, make data-driven 
decisions, and stay ahead effortlessly.
                    </div>
                  </div>
                  
                  <div className=" w-[31%] m-auto max-md:w-auto md:text-xl h-auto block">
                    <img src="support.svg" alt="support" className='mx-auto' />
                    <div>
                    Unlock predictive HR insights with RIS, anticipate trends, make data-driven 
decisions, and stay ahead effortlessly.
                    </div>
                  </div> 
                  </div>
                  
                  
              </div>
              
              <div className='bg-slate-400 py-[50px]  rounded-lg text-center bg-center w-6/7 h-auto  pb-4 px-6 my-[50px] mx-[20px] flex flexbox  justify-center align-middle   flex-wrap'>
                <div className='font-bold text-2xl sm:text-3xl py-[30px]'>Features</div>
                <div className="flex md:flex-row max-sm:flex-col justify-between  mx-[30px] w-[100%] flexwrap align-middle">
                  
                  <div className='w-full'>
                  <img src="feature1.svg" alt="feature1" className=' hidden sm:block' />
                  </div>
                    <div className='bg-slate-200 px-[15px] mx-[30px] my-[30px] rounded-2xl py-[30px] h-auto w-full md:w-[98%] md:block'>
                        <h2 className='font-bold text-lg sm:text-2xl my-[10px]'>Efficient Employee Database Management</h2>
                        <div className='font-thin text-start text-sm sm:text-lg'>
                          Streamline your HR processes with our comprehensive database 
system. Securely store and access employee information including personal details, employment history, skills, qualifications, and performance reviews. Simplify your workflow with centralized records 
and a user-friendly interface. Experience hassle-free management of
 your workforce data with our robust platform
                        </div>
                        
                    </div>
                  
                </div>
                <div className="flex justify-center max-sm:flex-col gap-5 lg:flex-row sm:flex-col mx-[30px] flexwrap align-middle">
                  
                    <div className='bg-slate-200 px-[15px] mx-[30px] rounded-2xl py-[30px] my-[30px] h-auto w-1/2 max-sm:w-[98%]'>
                        <h2 className='font-bold  my-[10px] text-lg sm:text-2xl'>Employee Self-Service Portal</h2>
                        <div className='font-thin text-start text-sm sm:text-lg'>
                          Empower your workforce with easy access to personal information, pay stubs, benefits enrollment, leave balances, and performance reviews. Reduce HR administrative burden with streamlined self-service capabilities
                        </div>
                    </div>
                    <div className='w-[50%]'>
                  <img src="feature2.svg" alt="feature1"  className=' hidden sm:block' />
                  </div>
                </div>
              </div>
              <div className="bg-green-800 w-full text-white h-auto flex flexbox flex-wrap justify-between px-[60px] py-[30px]">
                <img src="icon.svg" alt="icon" className='text-black' />
                <div className='block justify-center align-center'>
                  <h2 className='font-bold text-2xl py-[10px]'>Ready To Give Us A Try?</h2>
                  <button className='bg-white mx-9 py-[10px] px-[20px] rounded-xl shadow-sm shadow-black text-green-400 w-2/3 text-xs hover:bg-slate-200'>Try out the Demo</button>
                </div>
                <img src="icon.svg" alt="icon" />
              </div>
    </div>
        
    <Footer/>
    </>
  );
}

export default LandingPage;
