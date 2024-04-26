import { Link } from "react-router-dom"
function Footer() {
  return (
    <>
        <div className="bg-blue-900 w-full h-auto flex   justify-between flexbox flex-wrap py-[40px] px-[40px]">
          <div className="block py-9">
            <img src="LOGO.svg" alt="logo" className="my-1"/>
                <div className="flex space-x-0">
                    <a href="https://www.instagram.com"><img src="ig.svg" alt="igicon"/></a>
                    <a href="https://www.x.com"><img src="x.svg" alt="xicon" /></a>
                    <a href="https://www.tiktok.com"><img src="tiktok.svg" alt="tiktokicon" /></a>
                    <a href="https://www.facebook.com"><img src="facebook.svg" alt="facebookicon" /></a>
                </div>
          </div>
          <div className="text-white  my-6 gap-x-4 md:w-1/3 text-start flex flexbox justify-between flex-wrap">
            <div className="block">
              <ul>
                
                <li className="font-bold">Support</li>
                <li className="text-xs font-thin "><Link to="">Articles</Link></li>
                <li className="text-xs font-thin "><Link to="">FAQs</Link></li>
                <li className="text-xs font-thin "><Link to="">Tutorials</Link></li>
                <li className="text-xs font-thin "><Link to="/contact">Contact us</Link></li>
                <li className="text-xs font-thin "><Link to="">Privacy Policy</Link></li>
                
              </ul>
                </div>
                <div className="block">
                <ul>
              <li className="font-bold">Contact Us</li>
                <li className="text-xs font-thin "><Link to="/about">About us</Link></li>
              <li className="text-xs font-thin "><Link to="">The Team</Link></li>
              <li className="text-xs font-thin "><Link to="">Partnership</Link></li>
              <li className="text-xs font-thin "><Link to="">Awards</Link></li>
              <li className="text-xs font-thin "><Link to="">Press</Link></li>
              
              
            </ul>
              </div>
              <div className="block">
              <ul>
              <li className="font-bold">More</li>
              <li className="text-xs font-thin "><a href="">Partner Program</a></li>
             <li className="text-xs font-thin "><a href="">Customer Stories</a></li>
             </ul>
              </div>
      
            </div>
        </div>
    </>
  )
}

export default Footer
