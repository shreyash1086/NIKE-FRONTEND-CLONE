import { copyrightSign } from "../assets/icons";
import { footerLogo } from "../assets/images"
import { footerLinks, socialMedia } from "../constants";

const Footer = () => {
  return (
    <footer className="max-container ">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-start">
          <a href="/">
            <img
              src={footerLogo}
              width={150}
              height={46}
            />
          </a>
          <p className="mt-6 tetxt-base leading-7 font-montserrat text-white-400 sm:max-w-sm">
          Get shoes ready for the new term at your nearest Nike store. Find
          Your perfect Size In Store. Get Rewards
          </p>
          <div className="items-center flex gap-5 mt-8">
            {socialMedia.map((icon)=>(
                <div className="flex justify-center h-12 w-12 items-center bg-white rounded-full">
                  <img src={icon.src} alt={icon.alt} height={24} width={24}/>
                </div>
            ))}
          </div>
        </div>
        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
            {footerLinks.map((section)=>(
              <div key={section}>
                <h4 className="text-white font-montserrat text-2xl leading-normal font-medium mb-6">{section.title}</h4>
                <ul>
                  {section.links.map((link)=>(
                    <li className="mt-3 text-white-400 font-montserrat leading-normal text-base hover:text-slate-gray cursor-pointer" 
                    key={link.name}>
                      <a>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
            <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
              <img
                src={copyrightSign}
                alt="copy"
                height={20}
                width={20}
                className="rounded-full m-0"
              />
              <p>Copyright. All rights reserved.</p>
            </div>
            <p className="cursor-pointer font-montserrat">
              Terms & Conditions
            </p>
      </div>
    </footer>
  )
}

export default Footer