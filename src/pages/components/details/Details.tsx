import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import BackButton from "../commons/BackButton";

import Wrapper from "./Styles";
import { ErrorMsg } from "../card/Styles";

export default function Details() {
  const router = useRouter();
  const id = router.query.id;

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

  return (
    <>
      <Wrapper>
        <BackButton />
        <div>Nome: {data.name}</div>
        <div>Participou de quantos episódios: {data.episode.length}</div>
      </Wrapper>
    </>
  );
}
