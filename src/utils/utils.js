export const calculateWords = (text) => {
  return text.split(" ").filter((w) => w !== "").length;
};

export const calculateSentences = (text) => {
  const result = text.split(/[!.?]/).length;

  return result === 1 ? result : result - 1;
};

export const calculateArticles = (text) => {
  const matches = text.match(/\sthe\s|\sa\s/g);
  return matches ? matches.length : 0;
};
