import { useQuery } from "react-query";

import { getRegionCustomers } from "../helpers/api";

export const useRegionCustomers = (id: number) => {
    const { isError, isLoading, data = [], refetch } = useQuery(
        ["region-customers", id],
        () => getRegionCustomers(id),
        { enabled: false }
    );

    return {
        isError,
        isLoading,
        data,
        refetch,
    };
};
