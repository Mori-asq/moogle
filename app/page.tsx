"use client";
import { useState } from "react";
import Button from "@/components/Button/Button";
import Logo from "@/components/Logo/Logo";
import SearchInput from "@/components/SearchInput/SearchInput";

const Home = () => {
  const [query, setQuery] = useState("");

  return (
    <div className="searchSection centerCol">
      <Logo wrapperWidth={100} wrapperHeight={30} logoSize={370} />
      <SearchInput
        setQuery={setQuery}
        path={"/search-result"}
        query={{ query: `${query}` }}
      />
      <Button
        path={"/search-result"}
        query={{ query: `${query}` }}
        text={"Moogle Search"}
      />
    </div>
  );
};

export default Home;
