import xLogo from "../../images/twitxLogo.png";
import metaLogo from "../../images/metaLogo.png";
import instaLogo from "../../images/instaLogo.png";
import gitLogo from "../../images/gitLogo.png";

export default function Footer() {
  return (
    <footer className="shadow-md bg-[#161619] flex justify-center items-center gap-6 rounded-b-lg w-auto h-[70px]">
      <img src={xLogo} alt="X icon" className="bg-white w-[30px] h-[30px] object-contain rounded-md" />
      <img src={metaLogo} alt="Meta icon" className="bg-white w-[30px] h-[30px] object-contain rounded-md" />
      <img src={instaLogo} alt="Instagram icon" className="bg-white w-[30px] h-[30px] object-contain rounded-md" />
      <img src={gitLogo} alt="Github icon" className="bg-white w-[30px] h-[30px] object-contain rounded-md" />
    </footer>
  );
}
