import { create } from 'zustand';

export const bookStore = create((set) => ({
  //array of book objects
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
  }],
  //method to add a book to the array of book objects in state
  addBook:
    (values) => set(state => ({
        books: [ ...state.books, {
          title: values.title,
          author: {
          first: values.firstName,
          last: values.lastName
          },
          pages: values.pages,
          publicationYear: values.publicationYear,
        }],
        input: {
          titleInput: "",
          firstNameInput: "",
          lastNameInput: "",
          pagesInput: null,
          publicationYearInput: null
        },
      })),
  //method to replace book array with filtered array
  removeEntry: (filteredArr) => set(() => ({
    books: filteredArr,
  }))
  //input: {
  //  titleInput: "",
  //  firstNameInput: "",
  //  lastNameInput: "",
  //  pagesInput: null,
  //  publicationYearInput: null,
  //},
}));

