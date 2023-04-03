import React from "react";
import { Button } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";

import Input, { Wrapper } from "./Styles";

interface Props {
  onVariableChange: (value: string) => void;
  filterFavoritePersona: () => void;
  typeIcon: boolean;
  qtdePersonagens: number;
}

function SearchInput({ onVariableChange, filterFavoritePersona, typeIcon, qtdePersonagens }: Props) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClickCleanFilter = () => {
    filterFavoritePersona();
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

      {qtdePersonagens > 0 ? (
        typeIcon ? (
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickCleanFilter}
            className="custom-iconOff-filter"
          >
            <FilterAltOffIcon />
          </Button>
        ) : (
          <Button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClickFavorite}
          >
            <FilterAltIcon /> {qtdePersonagens > 0 ? <span className="qtde-favoritos">{qtdePersonagens}</span> : ""}
          </Button>
        )
      ) : (
        ""
      )}
    </Wrapper>
  );
}

export default SearchInput;
