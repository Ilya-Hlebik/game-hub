import React from "react";
import {SimpleGrid, Text} from "@chakra-ui/react"
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";


const GameGrid = () => {
    const {data, error, isLoading} = useGames();
    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} padding={'10px'} spacing={3}>
                {isLoading && Array.from(Array(10).keys()).map(skeleton => <GameCardContainer><GameCardSkeleton
                    key={skeleton}/></GameCardContainer>)}
                {data.map(game => <GameCardContainer> <GameCard key={game.id} game={game}/></GameCardContainer>)}
            </SimpleGrid>
        </>
    );
}

export default GameGrid;
