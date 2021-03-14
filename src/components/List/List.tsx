import React from "react";

export interface ListProps {
    list: { id: number; name: string }[];
    onItemClick(id: number): void;
}

export function List(props: ListProps) {
    const { list, onItemClick } = props;

    return (
        <ul>
            {list.map(({ id, name }) => (
                <li key={id}>
                    <button onClick={onItemClick.bind(null, id)}>{id}: {name}</button>
                </li>
            ))}
        </ul>
    );
}
