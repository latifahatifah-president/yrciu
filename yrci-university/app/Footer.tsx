import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {faFaceboo} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="bg-yrci-black h-20 flex items-center mt-8 md:mt-20">
        <div className="flex items-center justify-between w-full px-8 md:px-20">
            <span className="text-white text-lg md:text-xl">© 2024 YRCI</span>
            <div className="flex justify-around items-center">
                <FontAwesomeIcon icon={faFacebook} className="text-yrci-red text-lg md:text-[32px] mx-5"/>
                <FontAwesomeIcon icon={faTwitter} className="text-yrci-red text-lg md:text-[32px] mx-5"/>
            </div>
        </div>
    </div>
  )
}

export default Footer