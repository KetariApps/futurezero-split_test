import { useMediaQuery } from "react-responsive";

export default function useIsMobile() {
  const isMobile = useMediaQuery({ query: "(max-width: 680px)" });

  return isMobile;
}
