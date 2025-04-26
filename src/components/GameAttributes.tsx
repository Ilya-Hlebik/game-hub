import {SimpleGrid, Text} from '@chakra-ui/react';
import Game from "../entities/Game";
import Definition from "./Definition";
import CriticScore from "./CriticScore";

interface Props {
    game: Game;
}

const GameAttributes = ({game}: Props) => {


    return (
        <SimpleGrid columns={2} as={'dl'}>
            <Definition term={'Platforms'}>
                {game.parent_platforms?.map(({platform}) => <Text key={platform.id}>{platform.name}</Text>)}
            </Definition>
            <Definition term={'Metascore'}>
                <CriticScore score={game.metacritic}/>
            </Definition>
            <Definition term={'Genres'}>
                {game.genres.map(genre => <Text key={genre.id}>{genre.name}</Text>)}
            </Definition>
            <Definition term={'Publishers'}>
                {game.publishers.map(publisher => <Text key={publisher.id}>{publisher.name}</Text>)}
            </Definition>
        </SimpleGrid>
    )
}

export default GameAttributes
