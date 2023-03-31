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
  const [favoritePersonaFilter, setFavoritePersonaFilter] = useState("");
  const [filterOn, setFilterOn] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<any>();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favoritePersonaFromStorage = localStorage.getItem("favoritePersona");
      if (favoritePersonaFromStorage) {
        const parsedFavoritePersona = JSON.parse(favoritePersonaFromStorage);
        setFavoritePersona(parsedFavoritePersona);
      }
    }
  }, []);

  const getBuildUrlSearch = (searchValue: any, searchStringFavPersona: any, pageParam: any) => {
    let url = "https://rickandmortyapi.com/api/character";
    if (favoritePersonaFilter) {
      url += `/${searchStringFavPersona}`;
    } else {
      url += `?name=${searchValue}&page=${pageParam}`;
    }
    return url;
  };

  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage, error } = useInfiniteQuery(
    ["RickAndMorty", favoritePersonaFilter, searchValue],
    async ({ pageParam = 1 }) => {
      try {
        const url = getBuildUrlSearch(searchValue, favoritePersonaFilter, pageParam);
        const res = await fetch(`${url}`);
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
    clearTimeout(typingTimeout);

    setTypingTimeout(
      setTimeout(() => {
        setSearchValue(value);
      }, 500)
    );
  };

  const handleButtonFilterFavorite = () => {
    if (filterOn) {
      setFavoritePersonaFilter("");
      setFilterOn(false);
    } else {
      setFavoritePersonaFilter(favoritePersona.map((obj) => obj.id).join(","));
      setFilterOn(true);
    }
  };

  function handleClickDetailsPersona(id: string, status: boolean) {
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

      <SearchInput
        onVariableChange={handleSearchChange}
        filterFavoritePersona={handleButtonFilterFavorite}
        typeIcon={filterOn}
      />

      {isLoading && (
        <S.ErrorMsg className="search" id="grid-1">
          Buscando Personagens...
        </S.ErrorMsg>
      )}
      {favoritePersonaFilter && (
        <S.ErrorMsg className="filter" id="grid-1">
          Esses são seus personagens marcados como favoritos
        </S.ErrorMsg>
      )}

      {errorMessageSearch !== "" ? (
        <>
          <S.ErrorMsg className="error" id="grid-1">
            {errorMessageSearch}
          </S.ErrorMsg>
        </>
      ) : (
        data &&
        data.pages &&
        data.pages.map((page) =>
          (page.results ? page.results : page)?.map((d: any) => (
            <S.CardMain key={d.id}>
              <Link href={`/components/details/Details?id=${d.id}`}>
                <Image src={d.image} height={200} width={200} alt={d.name} priority />
                <S.CardText>
                  <S.CardName>{d.name.split(" ").slice(0, 2).join(" ")}</S.CardName>
                  <S.CardLocation>{d.location.name}</S.CardLocation>
                </S.CardText>
              </Link>

              <S.FavBt
                onClick={() => handleClickDetailsPersona(d.id, true)}
                className={favoritePersona.find((p: any) => p.id === d.id && p.status) ? "active" : ""}
              >
                <StarIcon />
              </S.FavBt>
            </S.CardMain>
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
