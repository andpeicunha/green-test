import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import BackButton from "../commons/BackButton";
import Wrapper, { StImgDetails, MaskGradiente } from "./Styles";
import { ErrorMsg, FavBt } from "../card/Styles";
import StarIcon from "../../../../public/img/star";
import LogoRickMorty from "../../../../public/img/LogoRickMorty";

export default function Details() {
  const [isLoading, setIsLoading] = useState(true);
  const [favoritePersona, setFavoritePersona] = useState<any>([]);

  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const favoritePersonaFromStorage = localStorage.getItem("favoritePersona");
      if (favoritePersonaFromStorage) {
        const parsedFavoritePersona = JSON.parse(favoritePersonaFromStorage);
        setFavoritePersona(parsedFavoritePersona);
      }
    }
  }, []);

  async function fetchTodoList() {
    console.log("acessou fetchTodoList");
    setIsLoading(true);
    if (id !== undefined) {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      if (res.ok) {
        console.log("fetch sucess");
        setIsLoading(false);
        return res.json();
      }
      return [];
    }
  }

  const { status, data, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodoList,
    enabled: id !== undefined,
  });
  if (status === "loading") {
    return <ErrorMsg className="search">Carregando...</ErrorMsg>;
  }
  if (status === "error") {
    return <ErrorMsg className="error">Erro ao Carregar Dados</ErrorMsg>;
  }
  const g = data.gender === "Female" ? "a" : "o"; //genero

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
      {isLoading ? (
        <ErrorMsg className="search">Carregando...</ErrorMsg>
      ) : (
        <>
          <StImgDetails data-testid="imgPersonaBack" src={data.image} alt={data.name} />
          {/* <LogoRickMorty data-testid="imgLogo" /> */}
          <Wrapper>
            <Image
              className="imgBigMedia"
              data-testid="imgPersonaDestaqueTop"
              src={data.image}
              alt={data.name}
              width={300}
              height={300}
            />
            <BackButton />

            <div className="nome">
              {data.name}
              <FavBt
                onClick={() => handleClickAddFavorPersona(data.id, true)}
                className={
                  favoritePersona.find((p: any) => data.id === p.id && p.status)
                    ? "active favorite-icon"
                    : "favorite-icon"
                }
                data-testid="favorite-icon"
              >
                <StarIcon />
              </FavBt>
            </div>

            <div className="description">
              El{g} participou de <span id="strongBg">{data.episode.length}</span> episódio(s) e é{" "}
              {data.species === "Human" ? `Human${g}` : "Alien"}.
              <br />
              Sua origem é <span id="strongBg">{data.location.name}</span>
            </div>

            <div className="episode">
              <span className="item title" id="strongBg">
                Episódios
              </span>
              {data.episode.map((e: any, index: number) => (
                <ul key={index}>
                  <li>
                    <span id="strongBg" className="item">
                      {e.split("/").pop()}
                    </span>
                  </li>
                </ul>
              ))}
            </div>
          </Wrapper>
          <MaskGradiente />
        </>
      )}
    </>
  );
}
