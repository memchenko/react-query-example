import React from "react";

import { CustomersList } from "./containers/CustomersList/CustomersList";
import { Regions } from "./containers/Regions/Regions";
import { Details } from "./components/Details/Details";
import { useCustomerDetails } from "./hooks/useCustomerDetails";
import { useCustomerActions } from "./hooks/useCustomerActions";

import "./App.css";

function App() {
    const [customerId, setCustomerId] = React.useState(-1);
    const { data, refetch, isLoading } = useCustomerDetails(customerId);
    const { changeCustomer } = useCustomerActions();
    const inputRef = React.useRef<HTMLInputElement | null>(null);
    const nameRef = React.useRef<HTMLInputElement | null>(null);
    const handleItemClick = (id: number) => setCustomerId(id);
    const handleFetchDetailsClick = () => {
        const id = Number(inputRef.current?.value);
        setCustomerId(id);
    };
    const handleChangeNameClick = () => {
        const name = String(nameRef.current?.value);

        changeCustomer({ id: customerId, name });
    };

    React.useEffect(() => {
        refetch();
    }, [customerId, refetch]);

    return (
        <div>
            <div className="main">
                <div>
                    <Regions onItemClick={handleItemClick} />
                </div>
                <div>
                    <CustomersList onItemClick={handleItemClick} />
                </div>
            </div>
            <section>
                <h1>Details</h1>
                <div>
                    <input ref={inputRef} type="number" placeholder="Customer id" />
                    <button onClick={handleFetchDetailsClick}>Fetch details</button>
                </div>
                {isLoading && (
                    <div>Loading...</div>
                )}
                {data && !isLoading && (
                    <Details id={data.id} name={data.name} />
                )}
                <div>
                    <input ref={nameRef} type="text" placeholder={`Change name to id ${customerId}`} />
                    <button onClick={handleChangeNameClick}>Change name</button>
                </div>
            </section>
        </div>
    );
}

export default App;
