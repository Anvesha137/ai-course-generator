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


export const GenerateChapterContent_AI = model. startChat({
generationConfig,
history:[
  {
    role: "user",
parts:[
  {
    text: "Generate A Course Tutorial on Following Detail With field Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level:Basic, Duration:1 hours, NoOf Chapters:5, in JSON format",
  }
],
  },
  {
    role: "model",
    parts: [
      {
        text: "```json\n{\n  \"course\": {\n    \"Introduction to variable\",\n   "
  }
],
}
],
});


export const GenerateCourseLayout_AI = model. startChat({
generationConfig,
history:[
  {
    role: "user",
parts:[
  {
    text: "Explain the concept in Detail on Topic: '+course?.name+', Chapter :'+Chapter?.ChapterName+' in JSON Format with list of array with field as title, description in detail, CodeExample( Code field in <precode> Code format) if applicable",
  }
],
  },
  {
    role: "model",
    parts: [
      {
        text: "```json\n{\n  \title\": {\n    \"Introduction to variable\",\n    \"description\": \"A comprehensive course designed for beginners to learn the fundamentals of Python programming.\",\n    \"details\": {\n      \"category\": \"Programming\",\n      \"level\": \"Basic\",\n      \"duration\": \"1 hour\",\n      \"chapters\": 5,\n      \"hasVideos\": false\n    },\n    \"chapters\": [\n      {\n        \"number\": 1,\n        \"title\": \"Getting Started with Python\",\n        \"description\": \"Introduction to Python, installation, and setup.\",\n        \"duration\": \"10 minutes\",\n        \"content\": \"In this chapter, we will cover the basics of Python, how to install it, and set up your development environment.\"\n      },\n      {\n        \"number\": 2,\n        \"title\": \"Variables and Data Types\",\n        \"description\": \"Understanding variables and different data types in Python.\",\n        \"duration\": \"15 minutes\",\n        \"content\": \"This chapter will introduce you to variables, data types, and how to use them in Python.\"\n      },\n      {\n        \"number\": 3,\n        \"title\": \"Control Structures\",\n        \"description\": \"Learn about if statements, loops, and control flow in Python.\",\n        \"duration\": \"15 minutes\",\n        \"content\": \"In this chapter, we will explore control structures like if statements and loops.\"\n      },\n      {\n        \"number\": 4,\n        \"title\": \"Functions and Modules\",\n        \"description\": \"Creating and using functions and modules in Python.\",\n        \"duration\": \"10 minutes\",\n        \"content\": \"This chapter will teach you how to create functions and use modules in your Python programs.\"\n      },\n      {\n        \"number\": 5,\n        \"title\": \"Conclusion and Next Steps\",\n        \"description\": \"Wrap up the course and discuss next steps for learning Python.\",\n        \"duration\": \"10 minutes\",\n        \"content\": \"In this final chapter, we will summarize what you've learned and suggest next steps for further learning.\"\n      }\n    ]\n  }\n}\n```\"\n"
  }
],
}
],
});


