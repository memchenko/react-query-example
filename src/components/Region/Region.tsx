import React from "react";

import { List } from "../List/List";

export interface RegionProps {
    isLoading: boolean;
    title: string;
    list: { id: number; name: string }[];
    onItemClick(id: number): void;
    onToggle(state: boolean): void;
}

export function Region(props: RegionProps) {
    const { isLoading, title, list, onItemClick, onToggle } = props;
    const [isOpened, setIsOpened] = React.useState(false);
    const handleToggleButtonClick = () => setIsOpened((isOpened) => !isOpened);

    React.useEffect(() => onToggle(isOpened), [isOpened, onToggle]);

    return (
        <div>
            <h1>
                {title}
                <button onClick={handleToggleButtonClick}>Toggle</button>
            </h1>
            {isLoading && (
                <div>Loading...</div>
            )}
            {isOpened && !isLoading && (<List list={list} onItemClick={onItemClick} />)}
        </div>
    );
}
