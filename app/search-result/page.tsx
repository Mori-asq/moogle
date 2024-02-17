"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Loader from "@/components/Loader/Loader";
import SearchInput from "@/components/SearchInput/SearchInput";

interface ApiProps {
  id: number;
  score: number;
}

const SearchResult = () => {
  const params = useSearchParams();
  const query = params.get("query");
  const endPoint = `http://127.0.0.1:8000/search/${query}`; //original api
  // const endPoint = `https://jsonplaceholder.typicode.com/${query}`; // fake api

  const [rankedResults, setRankedResults] = useState<ApiProps[] | undefined>();
  const [loading, setLoading] = useState(true);
  const [newQuery, setNewQuery] = useState("");

  const FETCH_API = async (endPoint: string) => {
    setRankedResults(undefined);
    const response = await fetch(endPoint, {
      method: "GET", 
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
    });
    if (response.ok) {
      const finalResult = await response.json();
      setRankedResults(finalResult);
    }
    setLoading(false);
  };

  useEffect(() => {
    FETCH_API(endPoint);
  }, [endPoint]);

  return (
    <div className="resultWrapper flex flex-col items-center">
      <div className="searchBarResult w-[80%] flex flex-row items-center">
        <div className="w-[100%]">
          <SearchInput
            setQuery={setNewQuery}
            path={"/search-result"}
            query={{ query: `${newQuery}` }}
            value={query}
          />
        </div>
      </div>

      {!loading ? (
        rankedResults?.map((result) => {
          return (
            <div
              key={result.id}
              className="result w-[80%] my-2 px-2 rounded-[0.5rem]  flex flex-row"
            >
              <div className="rank w-[3rem] mt-4 text-[1.5rem] mr-8">
                #{result.id}
              </div>
              <div className="titleWrapper w-[100%] mt-4">
                <div className="title mb-4 text-[1.5rem]">{result.score}</div>
                {/* <div className="description text-[1rem]">{result.title}</div> */}
              </div>
            </div>
          );
        })
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default SearchResult;
