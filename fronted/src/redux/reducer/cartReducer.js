
const initialState = {
  items: JSON.parse(localStorage.getItem('cart')) || [],
}

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const updatedCart = [...state.items, action.payload ];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
      return {
        ...state,
        items: updatedCart,
      };

    case 'CLEAR_CART':
      localStorage.removeItem('cart');
      return {
        ...state,
        items: [],
      };

      case 'INCREMENT_QUANTITY':
        const incrementCart = [...state.items];
        incrementCart[action.payload].quantity += 1;
        localStorage.setItem('cart', JSON.stringify(incrementCart));
        return {
          ...state,
          items: incrementCart,
        };
  
      case 'DECREMENT_QUANTITY':
        const decrementCart = [...state.items];
        decrementCart[action.payload].quantity = Math.max(decrementCart[action.payload].quantity - 1, 1);
        localStorage.setItem('cart', JSON.stringify(decrementCart));
        return {
          ...state,
          items: decrementCart,
        };
  
      case 'REMOVE_FROM_CART':
        const removedCart = [...state.items];
        if(window.confirm('Are you sure you want to delete this cart')){
          removedCart.splice(action.payload, 1);
          localStorage.setItem('cart', JSON.stringify(removedCart));
          return {
            ...state,
            items: removedCart,
        }
        };

    default:
      return state;
  }

}

export default cartReducer;
