import Image from "next/image";
import logo from "@/public/wiinta-logo.png"; // Put your logo file in the public folder

const WiintaLogo = (props) => (
  <Image src={logo} alt="Wiinta Logo" height={32} width={auto} {...props} />
);

export default WiintaLogo;
