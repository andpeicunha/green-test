import Image from "next/image";
import { useEffect, useState } from "react";
import { useInfiniteQuery } from "@tanstack/react-query";

import MainCont from "./Styles";
import { CardBt, ErrorMsg, LogoImage } from "../card/Styles";
import Card from "../card/Card";
import SearchInput from "../search/SearchInput";

interface IFavoritePersona {
  id: string;
  status: boolean;
}

export default function Main() {
  const [filterOn, setFilterOn] = useState(false);
  const [typingTimeout, setTypingTimeout] = useState<any>();
  const [searchValue, setSearchValue] = useState("");
  const [favoritePersona, setFavoritePersona] = useState<IFavoritePersona[]>([]);
  const [favoritePersonaFilter, setFavoritePersonaFilter] = useState("");
  const [errorMessageSearch, setErrorMessageSearch] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favoritePersonaFromStorage = localStorage.getItem("favoritePersona");
      if (favoritePersonaFromStorage) {
        const parsedFavoritePersona = JSON.parse(favoritePersonaFromStorage);
        setFavoritePersona(parsedFavoritePersona);
      }
    }
  }, [favoritePersonaFilter]);

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
        const res = await fetch(url);
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

  function handleSearchChange(value: any) {
    clearTimeout(typingTimeout);
    setTypingTimeout(
      setTimeout(() => {
        setSearchValue(value);
      }, 500)
    );
  }

  function handleButtonFilterFavorite() {
    if (filterOn) {
      setFavoritePersonaFilter("");
    } else {
      setFavoritePersonaFilter(favoritePersona.map((obj) => obj.id).join(","));
    }
    setFilterOn(!filterOn);
  }

  function handleClickAddFavorPersona(id: string, status: boolean) {
    const newFavoritePersona = { id, status };
    const isFavorite = favoritePersona.some((p: any) => p.id === id);

    if (isFavorite) {
      const newFavoritePersonaList = favoritePersona.filter((p: any) => p.id !== id);
      setFavoritePersona(newFavoritePersonaList);
      localStorage.setItem("favoritePersona", JSON.stringify(newFavoritePersonaList));
    } else {
      const newFavoritePersonaList = [...favoritePersona, newFavoritePersona];
      setFavoritePersona(newFavoritePersonaList);
      localStorage.setItem("favoritePersona", JSON.stringify(newFavoritePersonaList));
    }
  }

  return (
    <>
      <MainCont>
        <LogoImage id="grid-1">
          <Image src="/img/logo-rickandmorty.png" height={2160} width={3840} alt="Rick and Morty" priority />
        </LogoImage>

        <SearchInput
          onVariableChange={handleSearchChange}
          filterFavoritePersona={handleButtonFilterFavorite}
          typeIcon={filterOn}
          qtdePersonagens={favoritePersona.length}
        />

        {isLoading && (
          <ErrorMsg className="search" id="grid-1">
            Buscando Personagens...
          </ErrorMsg>
        )}

        {favoritePersonaFilter && (
          <ErrorMsg className="filter" id="grid-1">
            Esses são seus {favoritePersona.length} personagens favoritos
            <span onClick={handleButtonFilterFavorite} className="limpar-filtro">
              Limpar Filtro
            </span>
          </ErrorMsg>
        )}

        {errorMessageSearch !== "" ? (
          <ErrorMsg className="error" id="grid-1">
            {errorMessageSearch}
          </ErrorMsg>
        ) : (
          data &&
          data?.pages.map((page) =>
            (page.results ? page.results : Array.isArray(page) ? page : [page])?.map((d: any, i: number) => (
              <Card
                key={d.id}
                id={d.id}
                name={d.name}
                location={d.location.name}
                onClick={() => handleClickAddFavorPersona(d.id, true)}
                image={d.image}
                iconActiveFavor={favoritePersona.find((p: any) => d.id === p.id && p.status) ? "active" : ""}
              />
            ))
          )
        )}
      </MainCont>

      {hasNextPage && (
        <CardBt id="grid-1">
          <button onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
            {isFetchingNextPage ? <span>Carregando...</span> : <span>Mostrar Mais Personagens</span>}
          </button>
        </CardBt>
      )}
    </>
  );
}
