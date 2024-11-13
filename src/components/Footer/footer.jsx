import xLogo from "../../images/twitxLogo.png";
import metaLogo from "../../images/metaLogo.png";
import instaLogo from "../../images/instaLogo.png";
import gitLogo from "../../images/gitLogo.png";
import LinkedIn from "../../images/linkIn.png";

export default function Footer() {
  return (
    <footer className="shadow-md bg-[#161619] flex justify-center items-center gap-6 rounded-b-lg w-auto h-[70px]">
      <a href="https://x.com/uh_bay?s=21&t=TlH2SFKEItYBiWO9fQrmHQ" target="_blank" rel="noopener noreferrer">
        <img src={xLogo} alt="X icon" className="bg-white w-[30px] h-[30px] object-contain rounded-md" />
      </a>
      <a href="https://www.instagram.com/uhh_bay" target="_blank" rel="noopener noreferrer">
        <img src={instaLogo} alt="Instagram icon" className="bg-white w-[30px] h-[30px] object-contain rounded-md" />
      </a>
      <a href="https://github.com/Uhhbay" target="_blank" rel="noopener noreferrer">
        <img src={gitLogo} alt="Github icon" className="bg-white w-[30px] h-[30px] object-contain rounded-md" />
      </a>
      <a href="https://www.linkedin.com/in/246abhaysingh" target="_blank" rel="noopener noreferrer">
        <img src={LinkedIn} alt="LinkedIn icon" className="bg-white w-[30px] h-[30px] object-contain rounded-md" />
      </a>
    </footer>
  );
}
