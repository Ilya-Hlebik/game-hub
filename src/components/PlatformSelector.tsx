import {Button, Menu, MenuButton, MenuItem, MenuList} from "@chakra-ui/react";
import {BsChevronDown} from "react-icons/bs";
import usePlatforms, {Platform} from "../hooks/usePlatforms";
import usePlatform from "../hooks/usePlatform";

interface Props {
    onSelectPlatform: (platform: Platform) => void;
    selectedPlatformId?: number;
}

const PlatformSelector = ({onSelectPlatform, selectedPlatformId}: Props) => {
    const {data: platforms, error} = usePlatforms();

    if (error) return null;

    const selectedPlatform = usePlatform(selectedPlatformId);
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown/>}>
                {selectedPlatform?.name || 'Platforms'}
            </MenuButton>
            <MenuList>
                {platforms?.results.map(platform => <MenuItem onClick={() => onSelectPlatform(platform)}
                                                         key={platform.id}>{platform.name}</MenuItem>)}
            </MenuList>
        </Menu>
    );
};

export default PlatformSelector;
