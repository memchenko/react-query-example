import { useInfiniteQuery } from "react-query";

import { getCustomers } from "../helpers/api";
import { Customer } from "../helpers/types";

const PAGE_SIZE = 10;

export const useCustomers = () => {
    const { isError, fetchNextPage, data, isLoading } = useInfiniteQuery<Customer[], string, Customer>(
        "customers",
        ({ pageParam = 0 }) => getCustomers(pageParam),
        {
            getNextPageParam(lastPage: Customer[], allPages: Customer[][]) {
                return lastPage.length >= PAGE_SIZE ? allPages.length : null;
            },
        },
    );
    const customers = (data?.pages ? data.pages.flat() : data || []) as Customer[];

    return {
        isError,
        fetchNextPage,
        customers,
        isLoading,
    };
};
