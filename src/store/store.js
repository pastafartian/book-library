import { create } from 'zustand';

const useStore = create((set) => ({
  books: [{
    title: "Critique of Pure Reason",
    author: {
      first: "Immanuel",
      last: "Kant",
    },
    pages: 500,
    publicationYear: 1781,
  },
  {
    title: "The Silmarillion",
  author: {
    first: "J.R.R.",
    last: "Tolkien",
  },
  pages: 365,
  publicationYear: 1977,
  },
  ],
  addBook:
    () => set(
      (state) => ({
        books: [ ...state.books, {
          title: state.input.title,
          author: {
          first: state.input.firstName,
          last: state.input.lastName
        },
          pages: state.pagesInput,
          publicationYear: state.publicationYearInput
        }],
        input: {
          titleInput: "",
          firstNameInput: "",
          lastNameInput: "",
          pagesInput: null,
          publicationYearInput: null
        },
      })
    ),
  input: {
    titleInput: "",
    firstNameInput: "",
    lastNameInput: "",
    pagesInput: null,
    publicationYearInput: null,
  },
}));

export default useStore;
