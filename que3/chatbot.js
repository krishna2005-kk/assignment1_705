const responses = {
  hi: "Hello! How can I help you?",
  name: "I am chatbot, your VNSGU university assistant.",
  courses: "We offer courses in MSC.IT and MSC.ICT.",
  admission: "Admissions open from July 1st every year.",
  fees: "The tuition fees vary by course. Please check the official website for details.",
  "thank you":"Your Most welcome ",
};
function getResponse(input) {
  const question = input.toLowerCase().trim();
  for (let key in responses) {
    if (question.includes(key)) {
      return responses[key];
    }
  }
  return "Sorry, I don't understand that. Please ask something else.";
}

module.exports = { getResponse };
