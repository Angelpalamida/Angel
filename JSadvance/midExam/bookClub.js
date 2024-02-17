class BookClub {
  constructor(library) {
    this.library = library;
    this.books = [];
    this.members = [];
  }

  addBook(title, author) {
    const existingBook = this.books.find(
      (book) => book.title == title && book.author == author
    );

    if (existingBook) {
      return `The book "${title}" by ${author} is already in ${this.library} library.`;
    } else {
      this.books.push({ title, author });
      return `The book "${title}" by ${author} has been added to ${this.library} library.`;
    }
  }

  addMember(memberName) {
    const existingMember = this.members.find((member) => member == memberName);

    if (existingMember) {
      return `Member ${memberName} is already a part of the book club.`;
    } else {
      this.members.push(memberName);
      return `Member ${memberName} has been joined to the book club.`;
    }
  }

  assignBookToMember(memberName, bookTitle) {
    const memberIndex = this.members.indexOf(memberName);
    const bookIndex = this.books.findIndex((book) => book.title == bookTitle);

    if (memberIndex == -1) {
      throw new Error(`Member ${memberName} not found.`);
    }

    if (bookIndex == -1) {
      throw new Error(`Book "${bookTitle}" not found.`);
    }

    const assignedBook = this.books.splice(bookIndex, 1)[0];
    return `Member ${memberName} has been assigned the book "${assignedBook.title}" by ${assignedBook.author}.`;
  }

  generateReadingReport() {
    if (this.members.length == 0) {
      return "No members in the book club.";
    }

    if (this.books.length == 0) {
      return `No available books in the library.`;
    }

    const report = [`Available Books in ${this.library} library:`];
    this.books.forEach((book) =>
      report.push(`"${book.title}" by ${book.author}`)
    );

    return report.join("\n");
  }
}
