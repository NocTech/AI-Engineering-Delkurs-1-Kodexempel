# Examinationsuppgiften:

Kolla på myfei

# Från PDF:

- Var specifik, nämn tekniker, ange kontext
- Kontrollera längd och format
- Dela upp prompten i mindre delar
- Iterativ prompting
- Role-based prompting eller rollspels prompting
- Extra parametrar vi kan använda oss av när vi anropar API:er
  - top_p, top_k, temperature, max_tokens
- Prompts för kodning

  - Översättning av kod, dokumentation, pseudo-kod, pseudo-språk etc.
  - Leta efter API:er
  - Gör research

- Använd olika modeller, det kan vara så att en modell har mer information om en sak än en annan och på så sätt kan hjälpa att ge mer kontext.
- Be modellen skriva kod med ett bibliotek som inte är särskilt välkänt. Detta kan ge oss en insikt i både hur bred modellen är men också hur den hallucinerar.
- Kom ihåg att ta pauser och avbryt när ni känner att ni inte kommer någonstans!
- Planera era prompts! Tänk alltid ut först: Vad är det ni vill fråga och varför? Hur vill ni få tillbaka era svar?

---

# Steg 1 - Planering

- Vad är min plan här? Vad är det jag vill få hjälp med? Vad har jag redan kunskap kring?
- Vi vet hur vi tränar modeller med ml5 och tensorflow (även om vi såklart kan lära oss mer)
- Vi vet hur vi anropar API:er
- Vi vet var vi kan hitta dataset
- Vi vet de 17 globala målen i Agenda 2030

# Steg 2 - En första prompt

- Jag vill ta reda på vilken av de 17 målen som kanske är någorlunda rimliga att försöka lösa. Eller en lista(!) över vad en LLM tror, kanske en rangordnad sådan där vi låter den lista målen från 1-17 baserat på komplexitet.
- Exempelprompt: I taking a course in AI where we so far have learnt about training basic models using ml5.js and tensorflow.js. I also know where to find datasets and some basic knowledge on how to call APIs (both traditional and AI-APIs such as chatbots). We've gotten an assignment (see attached file in swedish - kanske) where we're supposed to "solve" or contribute in "solving" one of the goals from Agenda 2030. The assigment is to create a basic web application (using any framework or vanilla js/html/css) I'm starting from zero and I think I should start by just reason about the complexity of each goal before starting coding. Could you help me create an overview where you rank each one of the 17 global goals in complexity from 1-17 in a tabular format that also includes why it might be complex and one potential idea for each one of the goals?

# Steg 3 - Tänk!

- Vi får nu tillbaka en lista över målen. Är det vad vi vill ha? Borde vi omformulera prompten på något sätt? Iterera vår ursprungliga prompt? Iterera i konversationen?

### Träna en ml5 modell ex. (kommer kräva mer tid, datavalidering, visualisering etc.)

- Exempelprompt för att gå vidare med att träna en modell: Thank you, if I would like to use ml5.js to train a really simple model (only regression tasks or multi label classification, no image classification and it doesn't have to give "real" results). Can you help me brainstorm and give me three model alternatives for each one of the first 5 goals that you've listed above as the more "simple" ones. Present this in a bulleted list format and please include suggestions on datasets and where to find them.
- Uppföljningsprompt: Thank you, I think I'll try one of your suggestions but it seems a bit daunting to use a real dataset, could you help me come up with a very simple one for your first suggestion and how I then should train the model using it?

### Arbeta mot ett AI-API

- Exempelprompt: Thank you, could you help me brainstorm in coming up with ideas for how I could solve the first 5 goals that you've listed as least complex without actually training a model myself. Instead, I would like to use just traditional APIs and AI-APIs such as calling an LLM or using models from HuggingFace. Please give me three ideas per goal in a list format.

Exempelsvar:

#### Daily Health Habit Tracker with AI Tips

A simple app where users log their daily habits (exercise, water intake, sleep), and an AI provides tailored health advice based on their logs.
APIs to Use: LLM for analyzing habits and giving personalized suggestions, and Fitbit/Apple Health APIs (if user wants to sync data).

# Steg 4 - Utvärdera igen. Får jag tillbaka det jag vill av min LLM?

Ta ett steg tillbaka, fundera. Vad tycker jag? Borde jag omformulera min fråga lite, kanske använda mig av en annan prompting teknik?

Exempelprompt: I'm going to give you a prompt, and I want you to ask me clarifying questions to help me optimize it, then suggest a more effective prompt based on my answers that will yield a more accurate and detailed output. The prompt is: I'm working on an assignment to "solve" one of the 17 global goals in Agenda 2030 by training a simple ml5.js/tensorflow.js model or by using APIs and AI-APIs. I've selected five of the goals that I think should be "least complex".

Quality Education (Goal 4)
Good Health and Well-being (Goal 3)
Clean Water and Sanitation (Goal 6)
Affordable and Clean Energy (Goal 7)
Climate Action (Goal 13)

I need to brainstorm about this. And perhaps think about "smaller" projects and areas where I can make some impact but not change the world so to speak.

# Steg 5 - Skriv ner idéerna ni får från modellerna, reflektera igen.

Gå vidare med ett par idéer och se om ni kan få mer klarhet i hur er väg till att lösa uppgiften kan se ut.
