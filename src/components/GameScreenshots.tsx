import useScreenshots from "../hooks/useScreenshots";
import {Image, SimpleGrid} from "@chakra-ui/react";

interface Props {
    gameId: number;
}

const GameScreenshots = ({gameId}: Props) => {
    const {data, isLoading, error} = useScreenshots(gameId);
    if (isLoading) {
        return null;
    }
    if (error) {
        throw error;
    }

    return <SimpleGrid
        columns={{base: 1, md: 2}}
        spacing={2}
    > {data?.results.map(({image, id}) =>
        <Image key={id} src={image}/>)}
    </SimpleGrid>;

}

export default GameScreenshots;
