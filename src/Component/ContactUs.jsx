import Footer from "./Footer"
import Form from "./Form"
import Navbar from "./Navbar"

function ContacUs() {
  return (
    <>
    <Navbar/>
        <div className="bg-bodybg bg-contain text-center md:w-100 h-auto mx-auto justify-content-center">
        <div className='text-white bg-ourquest bg-cover bg-center my-[4%] w-3/4 h-auto rounded-lg pb-4 px-6  mx-auto block'>
                    <h2 className='text-bold text-xl py-2 h-10%'>Reach Out, We're Here for You</h2>
                    <p className='font-light px-[30px] h-20% py-2'>Don't hesitate to contact us for any assistance or inquiries. Our team is dedicated to ensuring your success with RIS. 
Let us help you make the most of your HR management journey.</p>
            </div>
            <div className="flex flexbox flex-wrap gap-[20%] justify-center">
              <div className="my-auto">
              <div className="block w-[250px] text-center rounded-2xl justify-center font-serif bg-slate-200 h-[240px] border-2 mb-[15px] px-3 py-3 border-slate-400">
                <img src="c1.svg" alt="c1" className="mx-auto my-[5px]"/>
                <div className="font-bold font-serif text-sm">"Seamless online support, available anytime, anywhere for instant solutions."</div>
              </div>
              <div className="block w-[250px] mb-[15px] text-center rounded-2xl justify-center font-serif bg-slate-200 h-[240px] border-2 px-3 py-3 border-slate-400">
                <img src="c2.svg" alt="c1" className="mx-auto my-[5px]"/>
                <div className="font-bold font-serif text-sm">"Connect on social media for fast support and updates. We're here for you, wherever you are."</div>
              </div>
              <div className="block w-[250px] mb-[15px] text-center rounded-2xl justify-center font-serif bg-slate-200 h-[240px] border-2 px-3 py-3 border-slate-400">
                <img src="c3.svg" alt="c1" className="mx-auto my-[5px]"/>
                <div className="font-bold font-serif text-sm">"Interested in partnering? Contact 
us today. Let's explore collaboration opportunities together."</div>
              </div>
              </div>
              <div className="justify-center mx-[10px] py-[50px]">
                <div className="text-black font-bold justify-center ">Please Fill Out This Ticket</div>
                <div className=" bg-white my-40px rounded-3xl border-2  mx-auto md:w-auto h-auto border-black">
                  <div className="mb-[20px] pt-[40px] px-[40px]">Support Ticket</div>
                    <Form />
                </div>
              </div>
            </div>
        </div>
        <div className="mx-0 my-0 px-[50px] py-[15px] w-full justify-center h-auto flex flexbox flex-wrap gap-[25%] bg-green-800">
            <img src="cpic.svg" alt="cpic" className="w-[170px]" />
            <div className="block text-center text text-white">
              <h2 className="font-bold">Our Location?</h2>
              <div className="font-thin font-serif">
                <p>Find us at:</p>  
                <p>NaijaTech Plaza</p>
                <p>15 Obafemi Awolowo Way,</p>
                <p>Ikeja, Lagos State,</p>
                <p>Nigeria.</p>
              </div>
            </div>
        </div>
        <Footer/>
    </>
  )
}

export default ContacUs