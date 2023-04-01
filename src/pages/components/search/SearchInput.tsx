import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Input, { Wrapper } from "./Styles";

export default function SearchInput({ onVariableChange, filterFavoritePersona, typeIcon }: any) {
  function handleClickFavorite() {
    filterFavoritePersona();
  }

  function handleChange(event: any) {
    const value = event.target.value;
    onVariableChange(value);
  }

  return (
    <Wrapper id="grid-1">
      <Input placeholder="Pesquise o nome do personagem" type="text" onChange={handleChange} disabled={typeIcon} />
      <motion.img
        className="filter-icon"
        src={typeIcon ? "/img/filterFavorClean.png" : "/img/filterFavor.png"}
        alt="Filtrar Resultados"
        width={40}
        height={40}
        onClick={handleClickFavorite}
        key={typeIcon ? "favor-clean" : "favor"}
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      />
    </Wrapper>
  );
}
