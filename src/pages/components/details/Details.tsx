import React from "react";
import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();
  const id = router.query.id;

  return (
    <>
      <div>Página Details {id}</div>
    </>
  );
}
