export type Status={
    id: number,
    string_id: string,
    wording: string
}

export type History={
    id: number,
    command_id: number,
    order_status_id: number,
    status: Status
}
export type User={
    id: number,
    first_name: string,
    last_name: string,
    phone: string,
    password: string,
}
// contact_name', 'contact_phone', 'payment_type', 'cart_id','address','latitude','longitude','montant','statut','user_id','code'
export type Order={
    id: number,
    address: string,
    code:string,
    latitude: number,
    longitude: number,
    montant: number,
    contact_name: string,
    user:User,
    cart:Cart,
    statut:string,
    created_at:string,
    histories:History[],
    onEdit:boolean
}

export type Box={
    id : number;
    type : TypeBox;
    cart_id : number;
    box_slices : Array<BoxSlice>;
};

export type TypeBox={
    id: number;
    wording: string;
    price: number;
    slices_number: number;
};

export type BoxSlice={
    id : number;
    box_id : number;
    quantity : number;
    slice : Slice;
};
export type CartSlice={
    id : number;
    quantity : number;
    cart_id : number;
    slice : Slice;
}

export type Cart = {
    boxes: Box[],
    cart_slice: CartSlice[]
};

export type Slice={
    id: number;
    category_id: number;
    wording: string;
    price: number;
    weight: number;
    illustration: string;
    isInBox: boolean;
};