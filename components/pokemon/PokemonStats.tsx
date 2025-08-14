import { Progress, HStack } from "@chakra-ui/react";
import type { Pokemon } from "@/libs/types";

export function PokemonStats({ stats }: { stats: Pokemon["stats"] }) {
  return (
    <div>
      <h3 className="font-semibold mb-3">Base Stats</h3>
      <div className="space-y-2">
        {stats?.map((stat) => (
          <div key={stat.stat.name} className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="capitalize">{stat.stat.name.replace("-", " ")}</span>
              <span>{stat.base_stat}</span>
            </div>
            <Progress.Root>
              <HStack gap="5">
                <Progress.Track flex="1">
                  <Progress.Range />
                </Progress.Track>
              </HStack>
            </Progress.Root>
          </div>
        ))}
      </div>
    </div>
  );
}
