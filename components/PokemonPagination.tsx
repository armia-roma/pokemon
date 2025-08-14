import { Button } from "@chakra-ui/react";

interface Props {
    currentPage: number;
    onPageChange: (page: number) => void;
    hasNextPage: boolean;
}

export default function PokemonPagination({ currentPage, onPageChange, hasNextPage }: Props) {
    return (
        <div className="flex justify-center items-center gap-4 mt-8">
            <Button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage <= 1} variant="outline">
                Previous
            </Button>
            <span>Page {currentPage}</span>
            <Button onClick={() => onPageChange(currentPage + 1)} disabled={!hasNextPage} variant="outline">
                Next
            </Button>
        </div>
    );
}
