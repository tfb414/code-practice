
const upperThatCase = (inText) => inText.toUpperCase();

const cussWords = {
  'shit': 'der poopen'
};

const removeExplitives = (inText) => (
  inText.split(" ")
    .map((word) => (cussWords[word] ? cussWords[word] : word)).join(" "))

export default {
  'upper': upperThatCase,
  'explitives': removeExplitives,
}