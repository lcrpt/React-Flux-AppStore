const CartAPI = {
  catalog: [],
  cartItems: [],

  removeItem(item) {
    cartItems.splice(this.cartItems.findIndex(i => i === item), 1)
  },

  findCartItem(item) {
    return this.cartItems.find(cartItem => cartItem.id === item.id)
  },

  increaseItem(item){
    item.qty++
  },

  decreaseItem(item) {
    item.qty--;
    if(item.qty === 0) {
      this.removeItem(item)
    }
  },

  addItem(item) {
    const cartItem = this.findCartItem(item);
    if (!cartItem) {
      this.cartItems.push(Object.assign({qty: 1}, item))
    }else{
      this.increaseItem(cartItem)
    }
  },

  cartTotals(qty = 0, total = 0) {
    this.cartItems.forEach(cartItem => {
      qty += cartItem.qty;
      total += cartItem.qty * cartItem.cost
    });
    return {qty, total};
  },

  getCatalog(){
    return this.catalog.map(item => {
      return Object.assign({}, item, this.cartItems.find(cItem => cItem.id === item.id))
    });
  },

  init(){
    for (let i = 0; i < 9; i++) {
      this.catalog.push({
        'id': 'Widget' + i,
        'title': 'Widget #' + i,
        'summury': 'A great widget',
        'description': 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        'cost': i
      });
    }
  }

}

CartAPI.init();
export default CartAPI;
