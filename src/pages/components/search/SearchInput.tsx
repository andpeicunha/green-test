import React from "react";
import * as S from "./Styles";

export default function SearchInput({ onVariableChange }: any) {
  function handleChange(event: any) {
    const value = event.target.value;
    onVariableChange(value);
  }

  return <S.Input placeholder="Pesquise pelo nome" id="grid-1" type="text" onChange={handleChange} />;
}
