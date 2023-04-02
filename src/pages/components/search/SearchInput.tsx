import React from "react";

import Input, { Wrapper, StyledMenu } from "./Styles";
import { Button, ListItemIcon, Menu, MenuItem } from "@mui/material";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
import StarIcon from "@mui/icons-material/Star";
import FaceIcon from "@mui/icons-material/Face";

export default function SearchInput({ onVariableChange, filterFavoritePersona, typeIcon }: any) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClickCleanFilter = () => {
    filterFavoritePersona();
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

      {typeIcon ? (
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
          onClick={handleClick}
        >
          <FilterAltIcon />
        </Button>
      )}
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
          <ListItemIcon className="custom-icon">
            <StarIcon fontSize="small" />
          </ListItemIcon>
          Mostrar Favoritos
        </MenuItem>
      </StyledMenu>
    </Wrapper>
  );
}
