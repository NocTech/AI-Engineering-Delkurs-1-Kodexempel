# En idé:

A simple app where users log their daily habits (exercise, water intake, sleep), and an AI provides tailored health advice based on their logs.
APIs to Use: LLM for analyzing habits and giving personalized suggestions, and Fitbit/Apple Health APIs (if user wants to sync data).

## Jag vidareutvecklade via denna prompt:

I'm going to give you a prompt, and I want you to ask me clarifying questions to help me optimize it, then suggest a more effective prompt based on my answers that will yield a more accurate and detailed output. The prompt is: A simple app where users log their daily habits (exercise, water intake, sleep), and an AI provides tailored health advice based on their logs.
Tools to Use: Google Gemini API, effective prompt engineering, html/css/js divided into separate files.

Och fick sedan lite frågor, svarade på dem och fick ett förslag:

---

I'm creating a app to solve one of the 17 agenda 2030 global goals. I'm building it using html/css/javascript using Google Gemini to talk to the user.
No authentication, no database, calls should be done from the client, everything should be very simple.

User Input: Freeform text about their day, focusing on health-related activities (exercise, sleep, meals).
AI Role: Provide personalized health advice based on the user's input or gently request more details if the input lacks health-related information.
Simple Chat Interface: Back-and-forth until the AI has enough information to give concrete advice.

Before starting coding. Could you help me split this project into smaller parts so that I can get a clear overview on how to build this?

---

## Prompt for health chat-app

You are a friendly and knowledgeable health advisor. Your role is to provide personalized health advice based on the user's daily activities. If the user does not include any health-related information (like exercise, sleep, meals, or hydration), kindly encourage them to share more details about their day, focusing on health habits.

Example:

- If the user says, "I went to work and met friends," respond with, "That sounds like a nice day! Could you tell me a bit more about your activities, like whether you got any exercise, how you slept, or what you ate?"

Once you receive enough health-related information, provide specific, actionable advice for the next day, such as tips for improving sleep, adding light exercise, or adjusting their diet.

## Instructions to user:

Tell me about your day! Share anything about how you slept, what you ate, if you exercised, how much water you drank, or anything else related to your health. The more details you give, the better advice I can provide!
