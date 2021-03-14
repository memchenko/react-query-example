import React from "react";

import { Region as RegionView } from "../../components/Region/Region";
import { useRegionCustomers } from "../../hooks/useRegionCustomers";

export interface RegionProps {
    id: number;
    title: string;
    onItemClick(id: number): void;
}

export function Region(props: RegionProps) {
    const { id, title, onItemClick } = props;
    const { refetch, data, isLoading } = useRegionCustomers(id);
    const handleToggle = React.useCallback((state: boolean) => {
        if (state) {
            refetch();
        }
    }, [refetch]);

    return (
        <RegionView
            isLoading={isLoading}
            title={title}
            list={data}
            onItemClick={onItemClick}
            onToggle={handleToggle}
        />
    );
}
