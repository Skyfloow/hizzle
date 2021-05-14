export interface OrderBy {
    sortTitle: string,
    title: string
}

export interface Property {
    _id: string,
    id: number,
    kind: string,
    location: string,
    bedrooms: number,
    area: number
}

export interface Offer {
    _id: string,
    id: number,
    offered_by: string,
    price: number,
    property: Property
}
