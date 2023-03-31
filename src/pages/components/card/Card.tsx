import Image from "next/image";
import Link from "next/link";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";

import * as S from "./Styles";
import SearchInput from "../search/SearchInput";
import StarIcon from "../../../../public/img/star";

interface IFavoritePersona {
  id: string;
  status: boolean;
}

export default function Card() {
  const [searchValue, setSearchValue] = useState("");
  const [favoritePersona, setFavoritePersona] = useState<IFavoritePersona[]>([]);
  const [errorMessageSearch, setErrorMessageSearch] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favoritePersonaFromStorage = localStorage.getItem("favoritePersona");
      if (favoritePersonaFromStorage) {
        const parsedFavoritePersona = JSON.parse(favoritePersonaFromStorage);
        setFavoritePersona(parsedFavoritePersona);
      }
    }
  }, []);

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, error } = useInfiniteQuery(
    ["RickAndMorty", searchValue],
    async ({ pageParam = 1 }) => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${pageParam}&name=${searchValue}`);
        if (res.ok) {
          setErrorMessageSearch("");
          return res.json();
        }
        if (res.status === 404) {
          const message = "Não localizamos esse personagem";
          setErrorMessageSearch(message);
          return [message];
        }
      } catch (err) {
        console.error("Erro:", err);
      }
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (!lastPage || !lastPage.info || !lastPage.info.next) {
          return undefined;
        }
        const nextPage: any = lastPage.info.next;
        if (!nextPage) {
          return undefined;
        }
        return nextPage.split("=")[1];
      },
      retry: 0,
    }
  );

  const handleSearchChange = (value: any) => {
    setSearchValue(value);
  };

  function handleClick(id: string, status: boolean) {
    const newFavoritePersona = { id, status };

    if (!favoritePersona.some((p: any) => p.id === id)) {
      const newArrayLocalStorage = [...favoritePersona, newFavoritePersona];
      setFavoritePersona(newArrayLocalStorage);
      localStorage.setItem("favoritePersona", JSON.stringify(newArrayLocalStorage));
    }
  }

  return (
    <>
      <S.StyledImage id="grid-1">
        <Image src="/img/logo-rickandmorty.png" height={2160} width={3840} alt="Rick and Morty" priority />
      </S.StyledImage>

      <SearchInput onVariableChange={handleSearchChange} />
      {isLoading && <S.ErrorMsg id="grid-1">Buscando Personagens...</S.ErrorMsg>}

      {errorMessageSearch !== "" ? (
        <>
          <S.ErrorMsg id="grid-1">{errorMessageSearch}</S.ErrorMsg>
        </>
      ) : (
        data &&
        data.pages &&
        data.pages.map(
          (page, i) =>
            page.results &&
            page.results.map((d: any) => (
              <Link key={d.id} href={`/components/details/Details?id=${d.id}`}>
                <S.CardMain>
                  <Image src={d.image} height={200} width={200} alt={d.name} priority />
                  <S.CardText>
                    <S.CardName>{d.name.split(" ").slice(0, 2).join(" ")}</S.CardName>
                    <S.CardLocation>{d.location.name}</S.CardLocation>
                  </S.CardText>
                  <S.FavBt
                    key={d.id}
                    onClick={() => handleClick(d.id, true)}
                    className={favoritePersona.find((p: any) => p.id === d.id && p.status) ? "active" : ""}
                  >
                    <StarIcon />
                  </S.FavBt>
                </S.CardMain>
              </Link>
            ))
        )
      )}

      {hasNextPage && (
        <S.CardBt id="grid-1" onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          Mostrar Mais Personagens
        </S.CardBt>
      )}
    </>
  );
}
