import Platform from "./Platform";
import Genre from "./Genre";
import Publisher from "./Publisher";

export default interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    genres: Genre[];
    publishers: Publisher[];
    metacritic: number;
    rating_top: number;
    slug: string;
    description_raw: string;
}
