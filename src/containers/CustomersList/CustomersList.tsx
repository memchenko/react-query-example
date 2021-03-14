import React from "react";

import { List } from "../../components/List/List";
import { useCustomers } from "../../hooks/useCustomers";

export interface CustomersListProps {
    onItemClick(id: number): void;
}

export function CustomersList(props: CustomersListProps) {
    const { onItemClick } = props;
    const { fetchNextPage, customers, isLoading } = useCustomers();
    const handleMoreButtonClick = () => fetchNextPage();

    return (
        <section>
            <h1>Customers</h1>
            <List
                list={customers}
                onItemClick={onItemClick}
            />
            {isLoading && (
                <div>Loading...</div>
            )}
            <button onClick={handleMoreButtonClick}>More</button>
        </section>
    );
}
