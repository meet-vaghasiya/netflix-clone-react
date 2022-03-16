import BrowseContainer from "../containers/browse";
import useContent from "../hooks/use-content";
import { selectionFilter } from "../utils";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");

  const slides = selectionFilter(series, films);

  return <BrowseContainer slides={slides} />;
}
