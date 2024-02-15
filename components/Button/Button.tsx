import Link from "next/link";
import styles from "./button.module.scss";

interface ButtonProps {
  path: string;
  query: any;
  text: string;
}

const Button = ({ path, query, text }: ButtonProps) => {
  return (
    <button
      className={`w-[100%] h-[3rem] centerRow ${styles.searchBtnWrapper}`}
    >
      <Link
        href={{
          pathname: path,
          query: query,
        }}
        className={`${styles.searchBtn} w-[20%] h-[100%] border-none text-[1.5rem] font-normal rounded-lg centerRow`}
      >
        {text}
      </Link>
    </button>
  );
};

export default Button;
