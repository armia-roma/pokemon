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
            <Progress.Root size="sm" value={stat.base_stat} max={stat.base_stat > 100 ? stat.base_stat : 100}  className="w-full" >
              <HStack gap="5">
                <Progress.Track flex="1">
                  <Progress.Range className={`
                    h-full
                    ${stat.base_stat > 50 ? 'bg-green-500' : stat.base_stat >  35 ? 'bg-yellow-500' : 'bg-red-500'}
                    transition-colors duration-300
                  `} />
                </Progress.Track>
              </HStack>
            </Progress.Root>
          </div>
        ))}
      </div>
    </div>
  );
}
