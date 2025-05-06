import Image from "next/image";
import logo from "../../public/Wiinta-logo.png";

const WiintaLogo = (props) => (
  <Image
    src={logo}// ✅ Use relative path from public
    alt="Wiinta Logo"
    height={32}
    width={100} // width must be a number
    {...props}
  />
);

export default WiintaLogo;
