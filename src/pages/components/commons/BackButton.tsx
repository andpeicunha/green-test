import { useRouter } from "next/router";

export default function BackButton() {
  const router = useRouter();
  return <button onClick={() => router.back()}>Voltar</button>;
}
