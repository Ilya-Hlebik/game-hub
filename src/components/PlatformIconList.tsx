import {HStack, Icon} from "@chakra-ui/react";
import {Platform} from "../hooks/useGames";
import {FaAndroid, FaApple, FaLinux, FaPlaystation, FaWindows, FaXbox} from 'react-icons/fa'
import {BsGlobe, MdPhoneIphone, SiNintendo} from "react-icons/all";
import {IconType} from "react-icons";
import {SiSega} from "react-icons/si";

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({platforms}: Props) => {
    const iconMap: { [key: string]: IconType } = {
        pc: FaWindows,
        playstation: FaPlaystation,
        xbox: FaXbox,
        nintendo: SiNintendo,
        mac: FaApple,
        linux: FaLinux,
        android: FaAndroid,
        ios: MdPhoneIphone,
        web: BsGlobe,
        sega: SiSega,
    }
    return (<HStack marginY={1}>
        {platforms.map((platform) => {
            return <Icon key={platform.id} as={iconMap[platform.slug]} color={'gray.500'}/>
        })}
    </HStack>);

};

export default PlatformIconList;
