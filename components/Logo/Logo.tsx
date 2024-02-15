import Image from "next/image";
import Link from "next/link";
import styles from "./logo.module.scss";
import MoogleLogo from "../../public/Images/MoogleLogo.png";

interface LogoProps {
  wrapperWidth: number;
  wrapperHeight: number;
  logoSize: number;
}

const Logo = ({ wrapperWidth, wrapperHeight, logoSize }: LogoProps) => {
  return (
    <Link
      href="/"
      className={`w-[${wrapperWidth}%] h-[${wrapperHeight}%] centerRow`}
    >
      <Image
        src={MoogleLogo}
        className={`relative ${styles.logo}`}
        width={logoSize}
        alt="Moogle"
        priority
      />
    </Link>
  );
};

export default Logo;
