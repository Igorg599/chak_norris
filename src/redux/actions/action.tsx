export const addJoke = (item: string) => ({
  type: "ADD_JOKE",
  payload: item
});
  
export const deleteJoke = (item: string) => ({
  type: "DELETE_JOKE",
  payload: item
});

export const deleteAllJokes = () => ({
  type: "DELETE_ALL_JOKES"
});