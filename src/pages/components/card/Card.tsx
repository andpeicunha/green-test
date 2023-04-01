import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

import CardMain, { CardText, CardName, CardLocation, FavBt } from "./Styles";
import StarIcon from "../../../../public/img/star";

interface ICardProps {
  key: string;
  id: string;
  name: string;
  image: string;
  location?: string;
  onClick: (id: string, status: boolean) => void;
  iconActiveFavor: string;
}

export default function Card(props: ICardProps) {
  function i() {
    const idNumber = Number(props.id);
    if (idNumber <= 20) {
      return idNumber;
    }
    if (idNumber >= 21) {
      return idNumber / 20;
    }
  }

  function handleClick() {
    props.onClick(props.id, true);
  }

  return (
    <CardMain>
      <Link href={`/components/details/Details?id=${props.id}`}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 + (i() ?? 0) * 0.1, ease: "easeInOut" }}
        >
          <Image src={props.image} height={200} width={200} alt={props.name} priority />
        </motion.div>

        <CardText>
          <CardName>{props.name?.split(" ").slice(0, 2).join(" ")}</CardName>
          <CardLocation>{props.location}</CardLocation>
        </CardText>
      </Link>

      <FavBt onClick={handleClick} className={props.iconActiveFavor}>
        <StarIcon />
      </FavBt>
    </CardMain>
  );
}
