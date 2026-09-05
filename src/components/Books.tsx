interface Book {
  id: string;
  name: string;
}

const books: Book[] = [
  { id: "id-1", name: "JS for beginners" },
  { id: "id-2", name: "React basics" },
  { id: "id-3", name: "React Query overview" },
];

export default function BookApp() {
  return (
    <>
      <h1>Top Books of week</h1>
      <ul style={{ color: "red" }}>
        {books.map((book) => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </>
  );
}
