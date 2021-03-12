import faker from "faker";

import { Customer, Region } from "./types";

const customers = new Map<number, Customer>();
const regions = new Map<number, Region>();

Array.from({ length: 30, }, (_, i) => ({
    id: i,
    name: faker.name.findName(),
})).forEach((customer) => {
    customers.set(customer.id, customer);
});

Array.from({ length: 2 }, (_, i) => ({
    id: i,
    title: faker.address.country(),
})).forEach((region) => {
    regions.set(region.id, region);
});

export const getCustomers = (page: number) => {
    const start = page * 10;
    const end = start + 10;

    return Promise.resolve([...customers.values()].slice(end));
};

export const getCustomer = (id: number) => {
    return Promise.resolve(customers.get(id));
};

export const getRegions = () => {
    return Promise.resolve([...regions.values()]);
};

export const getRegionCustomers = (id: number) => {
    return Promise.resolve([...customers.values()].slice(id * 15));
};
