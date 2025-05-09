import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

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

export const GenerateCourseLayout = async () => {
    const response = await model.startChat({
        generationConfig,
        history: [
            {
                role: "user",
                parts: [
                    {
                        text: "Generate A Course Tutorial on Following Detail With field as Course Name, Description, Along with Chapter Name, about, Duration: ",
                    },
                ],
            },
            {
                role: "model",
                parts: [
                    {
                        text: JSON.stringify({
                            course: {
                                name: "Introduction",
                                description: "Course Description",
                                category: "Category",
                                sub_category: "Sub Category",
                                level: "Beginner",
                                language: "English",
                                duration: 10,
                                price: 0,
                                image_url: "https://example.com/image.jpg",
                                video_url: "https://example.com/video.mp4",
                            },
                            lessons: [
                                {
                                    name: "Lesson 1",
                                    description: "Lesson 1 Description",
                                    duration: 5,
                                    content_url: "https://example.com/lesson1.mp4",
                                },
                                {
                                    name: "Lesson 2",
                                    description: "Lesson 2 Description",
                                    duration: 5,
                                    content_url: "https://example.com/lesson2.mp4",
                                },
                            ],
                        }),
                    },
                ],
            },
        ],
    });

    return response;
};
