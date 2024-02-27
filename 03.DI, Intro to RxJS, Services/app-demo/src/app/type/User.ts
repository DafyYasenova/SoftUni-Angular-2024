export interface User {
    name: string;
    age: number;
}


// Interface Segregation Principle:

export interface Geo {
    lat: string,
    lng: string,
};
export interface Address {
    street: string,
    suite: string,
    city: string,
    zipcode: string,
    geo: Geo,
};
export interface Company {
    name: string,
    catchPhrase: string,
    bs: string,
}

export interface UserInfo {
    id: number,
    name: string,
    username: string,
    email: string,

}

export interface JsonPlaceHolderUser extends UserInfo {
    address: Address,
    phone: string,
    website: string,
    company: Company,
}