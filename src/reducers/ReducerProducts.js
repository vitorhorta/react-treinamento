var products = [{
      id: 1,
      name: "Item name 1",
      price: 100
  },{
      id: 2,
      name: "Item name 2",
      price: 100
  },
  {
      id: 3,
      name: "Item name 2",
      price: 100
  },
  {
      id: 4,
      name: "Item name 2",
      price: 100
  },
  {
      id: 5,
      name: "Item name 2",
      price: 100
  },
  {
      id: 6,
      name: "Item name 2",
      price: 100
  },
  {
      id: 7,
      name: "Item name 2",
      price: 100
  },
  {
      id: 8,
      name: "Item name 2",
      price: 100
  },
  {
      id: 9,
      name: "Item name 2",
      price: 100
  },
  {
      id: 10,
      name: "Item name 2",
      price: 100
  },
   {
      id: 11,
      name: "Item name 2",
      price: 100
  }
];

export default function(state = {products: products}, action) {
    switch (action.type) {
        case "FETCH_PRODUCTS_FULFILLED":
        console.log(action.payload);
             state = {...state, products: action.payload}
            break;
        case "FETCH_PRODUCTS":
            state = {...state}
            break;    
        }
    return state;
}
