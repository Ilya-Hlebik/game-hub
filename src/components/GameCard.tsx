import {Card, CardBody, Heading, HStack, Image} from '@chakra-ui/react'
import React from 'react'
import getCroppedImageUrl from '../services/image-url'
import CriticScore from './CriticScore'
import Emoji from './Emoji'
import PlatformIconList from './PlatformIconList'
import {Link} from "react-router-dom";
import Game from "../entities/Game";
import Platform from "../entities/Platform";

interface Props {
    game: Game
}

const GameCard = ({game}: Props) => {
    return (
        <Card>
            <Image src={getCroppedImageUrl(game.background_image)}/>
            <CardBody>
                <HStack justifyContent='space-between' marginBottom={3}>
                    <PlatformIconList platforms={game.parent_platforms?.map((p: { platform: Platform }) => p.platform)}/>
                    <CriticScore score={game.metacritic}/>
                </HStack>
                <Heading fontSize='2xl'><Link to={'/games/' + game.slug}>{game.name}</Link><Emoji
                    rating={game.rating_top}/></Heading>
            </CardBody>
        </Card>
    )
}

export default GameCard
