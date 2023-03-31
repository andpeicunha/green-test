import React from "react";
import Image from "next/image";
import * as S from "./Styles";

export default function SearchInput({ onVariableChange, filterFavoritePersona }: any) {
  function handleClickFavorite() {
    console.log("handleClickFavorite");
    filterFavoritePersona();
  }

  function handleChange(event: any) {
    const value = event.target.value;
    onVariableChange(value);
  }

  return (
    <S.Wrapper id="grid-1">
      <S.Input placeholder="Pesquise pelo nome" type="text" onChange={handleChange} />
      <Image src="/img/filterFavor.png" alt="Filtrar Resultados" width={22} height={30} onClick={handleClickFavorite} />
    </S.Wrapper>
  );
}
