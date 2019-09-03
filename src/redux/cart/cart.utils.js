export const addItemToCart = (latestCartItems, cartItemToAdd) => {
  const existingCartItem = latestCartItems.find(
    cartItem => cartItem.id === cartItemToAdd.id
  );

  if (existingCartItem) {
    return latestCartItems.map(cartItem =>
      cartItem.id === cartItemToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...latestCartItems, { ...cartItemToAdd, quantity: 1 }];
};
