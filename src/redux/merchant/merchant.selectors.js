export function getMerchantById (state, id) {
  return state.merchant.items.filter((item) => item.id === id)[0];
}
