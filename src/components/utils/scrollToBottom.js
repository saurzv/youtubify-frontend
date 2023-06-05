export const scrollToBottom = () => {
  window.scrollBy({
    top: window.scrollY + window.innerHeight,
    behavior: "smooth",
  });
  console.log("scrolled");
};
