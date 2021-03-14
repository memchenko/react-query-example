import { useInfiniteQuery } from "react-query";

import { getRegions } from "../helpers/api";
import { Region } from "../helpers/types";

const PAGE_SIZE = 10;

export const useRegions = () => {
    const { isError, fetchNextPage, data, isLoading } = useInfiniteQuery(
        "regions",
        ({ pageParam = 0 }) => getRegions(pageParam),
        {
            getNextPageParam(lastPage: Region[], allPages: Region[][]) {
                return lastPage.length >= PAGE_SIZE ? allPages.length : null;
            },
        },
    );
    const regions = (data?.pages ? data.pages.flat() : data || []) as Region[];

    return {
        isError,
        fetchNextPage,
        regions,
        isLoading,
    };
};
