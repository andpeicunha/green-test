import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import * as S from "./Styles";

export default function SearchInput({ onVariableChange, filterFavoritePersona, typeIcon }: any) {
  function handleClickFavorite() {
    filterFavoritePersona();
  }

  function handleChange(event: any) {
    const value = event.target.value;
    onVariableChange(value);
  }

  return (
    <S.Wrapper id="grid-1">
      <S.Input placeholder="Pesquise pelo nome" type="text" onChange={handleChange} disabled={typeIcon} />
      <motion.img
        className="filter-icon"
        src={typeIcon ? "/img/filterFavorClean.png" : "/img/filterFavor.png"}
        alt="Filtrar Resultados"
        width={40}
        height={40}
        onClick={handleClickFavorite}
        key={typeIcon ? "favor-clean" : "favor"}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    </S.Wrapper>
  );
}
