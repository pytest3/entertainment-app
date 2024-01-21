import { useLoaderData } from "react-router-dom";
import PageTemplate from "../PageTemplate";

export default function BooksPage() {
  const videos = useLoaderData();
  return <PageTemplate header="All books" videos={videos} />;
}
