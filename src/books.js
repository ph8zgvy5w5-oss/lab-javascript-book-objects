// Iteration 1 | Books Array

// Book 1
// title: The Old Man and the Sea
// pages: 128
// author: Ernest Hemingway
// details: {
//    language: English
//    description: One of Hemingway's most famous works, it tells the story of Santiago...
// }

// Book 2
// title: The Airbnb Story
// pages: 256
// author: Leight Gallagher
// details: {
//    language: English
//    description: This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...
// }

// Book 3
// title: Educated - A Memoir
// pages: 352
// author: Tara Westover
// details: {
//    language: English
//    description: Educated is an account of the struggle for self-invention...
// }

// Book 4
// title: The Art of Learning
// pages: 288
// author: Josh Waitzkin
// details: {
//    language: English
//    description: The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.
// }


// Your code here:
const booksArray =[
  {
    Book1: {
   title: "The Old Man and the Sea",
   pages: 128,
   author: "Ernest Hemingway",
   details: {
      language: "English",
      description: "One of Hemingway's most famous works, it tells the story of Santiago...",
  },},
},

{
  Book2: { 
  title: "The Airbnb Story",
  pages: 256,
   author: "Leight Gallagher",
   details: {
      language: "English",
      description: "This is the remarkable behind-the-scenes story of the creation and growth of Airbnb...",
},
},},

{
Book3: {
  title: "Educated - A Memoir",
   pages: 352,
   author: "Tara Westover",
   details: {
      language: "English",
      description: "Educated is an account of the struggle for self-invention...",
},
},},

{
  Book4: { title: "The Art of Learning",
  pages: 288,
  author: "Josh Waitzkin",
  details: {
    language: "English",
      description: "The Art of Learning takes readers through Waitzkin's unique journey to excellence. He explains in clear detail how a well-thought-out, principled approach to learning is what separates success from failure.",
  },
},},

];
    
console.log(booksArray[0].title)
console.log(booksArray[1].title)
console.log(booksArray[2].title)
console.log(booksArray[3].title)



// Iteration 2 | Book Details
function getBookDetails(Book1, Book2, Book3, Book4) {
  // Your code here:
  const bookTitle = "title";
  const bookAuthor = "author";
  const bookPages = "pages";
  const book1filter = booksArray[0]-[title]-[author][pages];
  const book2filter = booksArray[1]-[title]-[author][pages];
  const book3filter = booksArray[2]-[title]-[author][pages];
  const book4filter = booksArray[3]-[title]-[author][pages];

  console.log(book1filter, book2filter, book3filter, book4filter "pages." )
  


}



// Iteration 3 | Delete Language
// Your code here:

 const bookslanguage = "language";
  const Regroupelanguage = booksArray[0].details[1][2][3][title];
  
  delete Regroupelanguage;


// Iteration 4 | Estimated Reading Time
// Your code here:

const addElements = ["readingTime"];
const elementsCopie=- = []

//for(let i=0; i < addElements.length; Ii++) {
  //elementsCopie.push(addElements[i]);
//}

addElements.forEach(addElements => {
  elementsCopie.push(addElements);
});

Book1.readingTime : (Math.ceil((book.pages * 128) / 90));
Book2.readingTime : (Math.ceil((book.pages * 256) / 90));
Book3.readingTime : (Math.ceil((book.pages * 352) / 90));
Book4.readingTime : (Math.ceil((book.pages * 288) / 90));

// Bonus: Iteration 5 | Books Dictionary

/* The `dictionary` is an object containing books grouped by author. 
 The book info is stored in arrays with structure: [title, pages]. 
*/
const dictionary = {
    "J. K. Rowling": [
        ["Harry Potter and the Philosopher's Stone", 223],
        ["Harry Potter and the Chamber of Secrets", 251],
        ["Harry Potter and the Prisoner of Azkaban", 317],
        ["Harry Potter and the Goblet of Fire", 636],
    ],
    "Neal Stephenson": [
        ["Cryptonomicon", 928],
        ["Anathem", 1008],
        ["Fall; or, Dodge in Hell", 896],
    ],
    "Malcolm Gladwell": [
        ["Outliers", 320],
        ["Blink", 287],
    ],
};

function booksByAuthor() {
  // Your code here:
  
}



// Bonus: Iteration 6 | Average Page Count
function averagePageCount() {
  // Your code here:
  
}
