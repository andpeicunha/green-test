import { useInfiniteQuery } from "@tanstack/react-query";
import * as S from "./Styles";

export default function Card() {
  const fetchRickAndMorty = async ({ pageParam = 1 }) => {
    const res = await fetch(`https://rickandmortyapi.com/api/character?page=${pageParam}`);
    return res.json();
  };

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, error } = useInfiniteQuery(
    ["RickAndMorty", { pageParam: 1 }],
    fetchRickAndMorty,
    {
      getNextPageParam: (lastPage, allPages) => {
        const nextPage = lastPage.info.next;
        return nextPage ? nextPage.split("=")[1] : undefined;
      },
    }
  );

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {error && <div>Error...</div>}
      {data?.pages.map((page, i) => page.results.map((d: any) => <S.CardMain key={d.id}>{d.name}</S.CardMain>))}
      {hasNextPage && (
        <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? "Loading more..." : "Load more"}
        </button>
      )}
    </>
  );
}
