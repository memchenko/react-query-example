import faker from "faker";

import { Customer, Region } from "./types";

const customers = new Map<number, Customer>();
const regions = new Map<number, Region>();

Array.from({ length: 30, }, (_, i) => ({
    id: i,
    name: faker.name.findName(),
    regionId: i % 2 === 0 ? 0 : 1,
})).forEach((customer) => {
    customers.set(customer.id, customer);
});

Array.from({ length: 2 }, (_, i) => ({
    id: i,
    title: faker.address.country(),
})).forEach((region) => {
    regions.set(region.id, region);
});

function wait() {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    });
}

export const getCustomers = (page: number) => {
    const start = page * 10;
    const end = start + 10;

    return Promise.resolve(wait()).then(() => ([...customers.values()].slice(start, end)));
};

export const getCustomer = (id: number) => {
    return Promise.resolve(wait()).then(() => customers.get(id));
};

export const getRegions = (page: number) => {
    const start = page * 10;
    const end = start + 10;

    return Promise.resolve(wait()).then(() => ([...regions.values()].slice(start, end)));
};

export const getRegionCustomers = (id: number) => {
    return Promise.resolve(wait()).then(
        () => ([...customers.values()].filter(({ regionId }) => regionId === id))
    );
};

export const changeCustomerName = (id: number, name: string) => {
    const customer = customers.get(id);

    if (customer) {
        customers.set(id, { ...customer, name });
    }

    return Promise.resolve(wait()).then(() => (customers.get(id)));
};
