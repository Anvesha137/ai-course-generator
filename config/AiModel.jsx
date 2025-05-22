import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const apikey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apikey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
}); 

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const GenerateCourseLayout_AI = model.startChat({
  generationConfig,
  history:[
    {
      role: "user",
      parts:[
        {
          text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level:Basic, Duration:1 hours, NoOfChapters:5, in JSON format",
        }
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: `{
  "course": {
    "name": "Introduction to Python Programming",
    "description": "A comprehensive course designed for beginners to learn the fundamentals of Python programming.",
    "details": {
      "category": "Programming",
      "level": "Basic",
      "duration": "1 hour",
      "chapters": 5,
      "hasVideos": false
    },
    "chapters": [
      {
        "number": 1,
        "title": "Getting Started with Python",
        "description": "Introduction to Python, installation, and setup.",
        "duration": "10 minutes",
        "content": "In this chapter, we will cover the basics of Python, how to install it, and set up your development environment."
      },
      {
        "number": 2,
        "title": "Variables and Data Types",
        "description": "Understanding variables and different data types in Python.",
        "duration": "15 minutes",
        "content": "This chapter will introduce you to variables, data types, and how to use them in Python."
      },
      {
        "number": 3,
        "title": "Control Structures",
        "description": "Learn about if statements, loops, and control flow in Python.",
        "duration": "15 minutes",
        "content": "In this chapter, we will explore control structures like if statements and loops."
      },
      {
        "number": 4,
        "title": "Functions and Modules",
        "description": "Creating and using functions and modules in Python.",
        "duration": "10 minutes",
        "content": "This chapter will teach you how to create functions and use modules in your Python programs."
      },
      {
        "number": 5,
        "title": "Conclusion and Next Steps",
        "description": "Wrap up the course and discuss next steps for learning Python.",
        "duration": "10 minutes",
        "content": "In this final chapter, we will summarize what you've learned and suggest next steps for further learning."
      }
    ]
  }
}`
        }
      ],
    }
  ],
});