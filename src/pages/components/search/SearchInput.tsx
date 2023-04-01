import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import Input, { Wrapper, StyledMenu } from "./Styles";
import { Button, Menu, MenuItem } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

export default function SearchInput({ onVariableChange, filterFavoritePersona, typeIcon }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function handleClickFavorite() {
    filterFavoritePersona();
    setAnchorEl(null);
  }

  function handleChange(event: any) {
    const value = event.target.value;
    onVariableChange(value);
  }

  return (
    <Wrapper id="grid-1">
      <Input placeholder="Pesquise o nome do personagem" type="text" onChange={handleChange} disabled={typeIcon} />
      {/* <motion.img
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
      /> */}

      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <FilterAltIcon />
      </Button>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem onClick={handleClickFavorite} className="custom-class">
          Mostrar Favoritos
        </MenuItem>
      </StyledMenu>
    </Wrapper>
  );
}
