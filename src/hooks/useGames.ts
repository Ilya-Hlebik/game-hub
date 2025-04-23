import {useInfiniteQuery} from "@tanstack/react-query";
import ApiClient, {FetchResponse} from "../services/api-client";
import ms from "ms";
import {GameQuery} from "../store";
import {Game} from "../entities/game";

const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) => useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', gameQuery],
    queryFn: ({pageParam = 1}) => apiClient.getAll({
        params: {
            genres: gameQuery.genreId,
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,
            page_size: gameQuery.pageSize,
        }
    }),
    getNextPageParam: (lastPage, allPages) => lastPage.next ? allPages.length + 1 : undefined,
    staleTime: ms('24h')
});

export default useGames;
