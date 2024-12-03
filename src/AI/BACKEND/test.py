import os
import time

from groq import Groq

api_key = os.getenv("GROQ_API_KEY")
client = Groq(api_key="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")

conversation_history = [
    {
        "role": "system",
        "content": "you are a helpful assistant. Answer as Kat. Ask the user about their idea and transform it into something new using other users suggestions and also check statistical data and compare it with the data given by the user. Also check if it is possible to setup. Ask data like budget, location, capital, resource,etc. and analyze the data. Ask questions one by one and not in one go. Also not only ask questions also give suggestion in between."
    }
]

while True:
    prompt = input("User: ")
    if prompt.lower() == "quit":
        break

    conversation_history.append({
        "role": "user",
        "content": prompt
    })

    response = client.chat.completions.create(
        messages=conversation_history,
        model="llama-3.2-90b-vision-preview",
        temperature=0.5,
        max_tokens=2048,
        top_p=1,
        stop=None,
        stream=True,
    )

    if isinstance(response, tuple):
        print("Error:", response[0]['error']['message'])
    else:
        # Iterate over the stream of messages
        print("Kat: ", end="")
        for chunk in response:
            text = chunk.choices[0].delta.content 
            if (text==None):
                break
            for words in text:
                print(words, end="", flush=True)
                time.sleep(0.0001)
            # for char in text.split(" "):
            #     if (char==None):
            #         break
            #     print(char, end="", flush=True)
            #     time.sleep(0.0001)  # adjust the delay to your liking\
        print()
        conversation_history.append({
            "role": "assistant",
            "content": chunk.choices[0].delta.content
        })