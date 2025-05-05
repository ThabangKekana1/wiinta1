import Image from "next/image";

const WiintaLogo = (props) => (
  <Image
    src="/wiinta-logo.png" // ✅ Use relative path from public
    alt="Wiinta Logo"
    height={32}
    width={100} // width must be a number
    {...props}
  />
);

export default WiintaLogo;
