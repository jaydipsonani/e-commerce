
export const addToCart = (item) => {
  const newItem = {
    ...item,
    quantity: item.quantity || 1, 
  };
  return {
    type: 'ADD_TO_CART',
    payload: newItem,
  };
};

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const incrementQuantity = (item) => ({
    type: 'INCREMENT_QUANTITY',
    payload: item,
});

export const decrementQuantity = (item) => ({
    type: 'DECREMENT_QUANTITY',
    payload: item,
});

export const removeFromCart = (item) => ({
    type: 'REMOVE_FROM_CART',
    payload: item,
});