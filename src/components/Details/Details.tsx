import React from "react";

export interface DetailsProps {
    id: number;
    name: string;
}

export function Details(props: DetailsProps) {
    const { id, name } = props;

    return (
        <>
            <div>{id}</div>
            <div>{name}</div>
        </>
    );
}
