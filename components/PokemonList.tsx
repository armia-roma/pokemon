"use client";
import {useState} from "react";
import {useRouter, useSearchParams} from "next/navigation";
import {Button} from "@chakra-ui/react";
import PokemonPagination from "./PokemonPagination";
import {usePokemonList} from "../hooks/usePokemonList";
import PokemonCardWithDetails from "./PokemonCardWithDetails";
import PokemonListSkeleton from "./PokemonListSkeleton";
const ITEMS_PER_PAGE = 12;


export function PokemonList() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const [currentPage, setCurrentPage] = useState(
		parseInt(searchParams.get("page") || "1", 10)
	);

	const {data, isLoading, isError, error} = usePokemonList(currentPage);

	const updateURL = (page: number) => {
		const params = new URLSearchParams(searchParams.toString());
		params.set("page", page.toString());
		router.push(`/?${params.toString()}`);
	};

	const handlePageChange = (page: number) => {
		setCurrentPage(page);
		updateURL(page);
		window.scrollTo({top: 0, behavior: "smooth"});
	};

	if (isLoading) {
		return (
			<PokemonListSkeleton itemsPerPage={ITEMS_PER_PAGE} />
		);
	}

	if (isError) {
		return (
			<div className="text-center py-8">
				<p className="text-destructive mb-4">
					Error: {(error as Error).message}
				</p>
				<Button onClick={() => window.location.reload()}>
					Try Again
				</Button>
			</div>
		);
	}

	if (!data?.results?.length) {
		return (
			<div className="text-center py-8">
				<p>No Pokemon found.</p>
				<Button onClick={() => handlePageChange(1)}>
					Load Pokemon
				</Button>
			</div>
		);
	}

	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
				{data.results.map((p: any) => (
					<PokemonCardWithDetails key={p.name} pokemon={p} />
				))}
			</div>
			<PokemonPagination
				currentPage={currentPage}
				onPageChange={handlePageChange}
				hasNextPage={data.results.length === ITEMS_PER_PAGE}
			/>
		</div>
	);
}
