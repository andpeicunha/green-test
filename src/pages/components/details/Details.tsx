import React from "react";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import BackButton from "../commons/BackButton";

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
    return <span>Carregando...</span>;
  }

  if (status === "error") {
    return <div>Erro API</div>;
  }

  console.log(data);
  return (
    <>
      <div>Página Details {id}</div>
      <BackButton />

      <div>{data.name}</div>
    </>
  );
}
