import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  { id: "q1", author: "Beka", text: "Learning React is fun!" },
  { id: "q2", author: "Ilia", text: "Learning React is great!" },
];

const AllQoutes = () => {
  return <QuoteList quotes={DUMMY_QUOTES} />;
};

export default AllQoutes;
