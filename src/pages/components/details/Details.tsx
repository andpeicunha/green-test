import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

import BackButton from "../commons/BackButton";
import Wrapper, { StImgDetails } from "./Styles";
import { ErrorMsg, FavBt } from "../card/Styles";
import StarIcon from "../../../../public/img/star";

export default function Details() {
  const [favoritePersona, setFavoritePersona] = React.useState<any>([]);
  const [statusIcon, setStatusIcon] = React.useState("");

  const router = useRouter();
  const id = router.query.id;
  const statusIconRouter = () => {
    const status = String(router.query.status);
    setStatusIcon(status);
  };

  console.log(statusIcon);

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
    if (id !== undefined) {
      const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
      if (res.ok) {
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
  const dataCreated = new Date(data.created); // converte a string em um objeto Date
  const dataFormatada = `${dataCreated.getUTCDate()}/${dataCreated.getUTCMonth() + 1}/${dataCreated.getUTCFullYear()}`; // formata a data no formato desejado

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
      <Wrapper>
        <Image src="/img/logo-rickandmorty.png" height={2160} width={3840} alt="Rick and Morty" priority />
        <StImgDetails src={data.image} alt={data.name} />
        <BackButton />

        <div className="nome">
          {data.name}
          <FavBt onClick={() => handleClickDetailsPersona(data.id, true)} className={`${statusIcon} favorite-icon`}>
            <StarIcon />
          </FavBt>
        </div>
        <div className="description">
          {data.name} participou de <span id="strongBg">{data.episode.length}</span>
          episódio(s).
          <br />É <span id="strongBg">{data.species === "Human" ? `Human${g}` : "Alien"}</span> e sua origem é{" "}
          <span id="strongBg">{data.location.name}.</span>
          <p /> Este personagem foi criad{g} em <span id="strongBg">{dataFormatada}</span>.
        </div>
      </Wrapper>
    </>
  );
}
