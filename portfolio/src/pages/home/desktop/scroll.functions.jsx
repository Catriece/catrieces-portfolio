export function handleScroll({ elementRef }) {
  elementRef.current.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
