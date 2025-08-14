import { Button } from "@chakra-ui/react";
import { useRouter } from "next/navigation";

export function PokemonError({ message }: { message: string }) {
  const router = useRouter();

  return (
    <div className="text-center py-8">
      <p className="text-red-500 mb-4">Error: {message}</p>
      <Button onClick={() => router.push("/")}>Back to List</Button>
    </div>
  );
}
export default PokemonError;