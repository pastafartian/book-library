import { create } from 'zustand';

const useStore = create((set) => ({
  books: [{
    title: "Critique of Pure Reason",
    auther: {
      first: "Immanuel",
      last: "Kant",
    },
    pages: 500,
    publicationYear: 1781,
  }],

}));

export default useStore;
