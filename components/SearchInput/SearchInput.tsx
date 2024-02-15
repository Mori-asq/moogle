import Image from "next/image";
import Link from "next/link";
import styles from "./searchInput.module.scss";
import SearchIcon from "../../public/Icons/search.png";
import { useState } from "react";

interface SearchInputProps {
  setQuery: Function;
  path: string;
  query: any;
  value?: any;
}

const SearchInput = ({ setQuery, path, query, value }: SearchInputProps) => {
  const [val, setVal] = useState(value);
  return (
    <div
      className={`${styles.searchBarWrapper} w-[100%] h-[5rem] centerRow relative my-4 px-4 rounded-[2rem]`}
    >
      <input
        type="text"
        name="searchInput"
        placeholder="Search Moogle ..."
        value={val}
        className={`${styles.searchInput} w-[95%] w h-[100%] text-[2rem] font-normal border-none`}
        onChange={(e) => {
          setQuery(e.target.value);
          setVal(e.target.value);
        }}
      />
      <Link
        href={{
          pathname: path,
          query: query,
        }}
        className={`${styles.serachIconWrapper} h-[100%] centerRow relative right-0`}
      >
        <Image
          src={SearchIcon}
          alt="Search"
          className={`${styles.serachIcon} relative w-[2.5rem]`}
        />
      </Link>
    </div>
  );
};

export default SearchInput;
