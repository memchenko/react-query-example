import { useMutation, useQueryClient } from "react-query";

import { changeCustomerName } from "../helpers/api";

export const useCustomerActions = () => {
    const queryClient = useQueryClient();
    const { mutate, isLoading } = useMutation(
        "customer-mutation",
        ({ id, name }: { id: number; name: string }) => changeCustomerName(id, name),
        {
            onSuccess(customer) {
                queryClient.invalidateQueries("customers");
                queryClient.invalidateQueries(["region-customers", customer?.regionId], {
                    refetchInactive: true,
                });
                queryClient.invalidateQueries(["customer", customer?.id], {
                    refetchInactive: true,
                });
            },
        },
    );

    return {
        isLoading,
        changeCustomer: mutate,
    };
};
