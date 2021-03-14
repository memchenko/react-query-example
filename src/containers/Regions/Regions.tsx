import React from "react";

import { Region } from "../Region/Region";
import { useRegions } from "../../hooks/useRegions";

export interface RegionsProps {
    onItemClick(id: number): void;
}

export function Regions(props: RegionsProps) {
    const { onItemClick } = props;
    const { regions, isLoading } = useRegions();

    return (
        <section>
            <h1>Regions</h1>
            {isLoading && (
                <div>Loading...</div>
            )}
            {
                !isLoading && regions.map(({ id, title }) => (
                    <Region
                        key={id}
                        id={id}
                        title={title}
                        onItemClick={onItemClick}
                    />
                ))
            }
        </section>
    );
}
