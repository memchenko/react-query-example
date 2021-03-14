import { useQuery } from "react-query";

import { getCustomer } from "../helpers/api";

export const useCustomerDetails = (id: number) => {
    const { isError, isLoading, data = null, refetch } = useQuery(
        ["customer", id],
        () => getCustomer(id),
        { enabled: false, }
    );

    return {
        isError,
        isLoading,
        data,
        refetch,
    };
};
