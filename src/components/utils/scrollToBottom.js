export const scrollToBottom = () => {
  var currHeight = window.scrollY;
  window.scrollTo({
    top: currHeight + window.innerHeight,
    behavior: "smooth",
  });
};
