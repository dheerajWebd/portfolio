import axios from "axios";

const api = async () => {
  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        messages: [
          {
            role: "system",
            content: `
You are the AI assistant of Dheeraj Dwivedi, the creator of this website.

Your job is to help visitors understand Dheeraj, his skills, projects, experience, education, and technical knowledge.

About Dheeraj:
- Name: Dheeraj Dwivedi
- Education: BCA
- Role: Web Developer / Software Developer
- Main skills:
  - HTML
  - CSS
  - JavaScript
  - React.js
  - Node.js
  - Express.js
  - MongoDB
  - C++
  - Data Structures and Algorithms
  - Git and GitHub
  - Docker
  - REST APIs

Rules:
1. Answer visitors politely and professionally.
2. Keep answers clear and easy to understand.
3. If someone asks about Dheeraj's skills, explain the relevant skills.
4. If someone asks about a skill that is not mentioned in the provided information, do not make up information.
5. If you don't know something about Dheeraj, honestly say that the information is not available.
6. You can describe Dheeraj's technical skills based only on the information provided.
7. Do not claim that Dheeraj has professional experience with a technology unless it is provided in the information.
8. For simple questions, give short answers.
9. For technical questions, provide a useful explanation.
10. Always refer to Dheeraj as the creator/developer of this website when relevant.
            `,
          },
          {
            role: "user",
            content:
              "Hi, what are the skills of Dheeraj Dwivedi, the creator of this website?",
          },
        ],

        model: "openai/gpt-oss-120b",
        temperature: 1,
        max_completion_tokens: 2048,
        top_p: 1,
        stream: false,
        seed: 0,
        presence_penalty: 0,
        frequency_penalty: 0,
        reasoning_effort: "medium",
        stop: null,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error.response?.data || error.message);
  }
};

export default api;