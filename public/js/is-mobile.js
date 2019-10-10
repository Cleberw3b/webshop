import useWindowDimensions from "../../src/hooks/window-dimensions";

export default function isMobile() {
  const { width } = useWindowDimensions();
  if (width <= 768) return true;
  return false;
}
