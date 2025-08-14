import { Card, Skeleton, SkeletonText } from "@chakra-ui/react"
import React from "react";

function PokemonCardLoader() {
	return (
	  <Card.Root className="animate-pulse">
		<Card.Header>
			<SkeletonText noOfLines={2} />
		</Card.Header>
		<Card.Body p={4}>
			<Skeleton height="200px" />
		</Card.Body>
	  </Card.Root>
	);
}

export default PokemonCardLoader;
