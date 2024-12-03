import os

from groq import Groq

api_key = os.getenv("GROQ_API_KEY")
client = Groq(api_key="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")

from groq import Groq

# client = Groq()
prompt = "I have an Idea to start a coffee shop"

stream = client.chat.completions.create(
    #
    # Required parameters
    #
    messages=[
        # Set an optional system message. This sets the behavior of the
        # assistant and can be used to provide specific instructions for
        # how it should behave throughout the conversation.
        {
            "role": "system",
            "content": "you are a helpful assistant. Answer as Kat. Ask the user about their idea and transform it into something new using other users suggestions and also check statistical data and compare it with the data given by the user. Also check if it is possible to setup. Ask data like budget, location, capital, resource,etc. and analyze the data."
        },
        # Set a user message for the assistant to respond to.
        {
            "role": "user",
            "content": prompt,
        }
    ],

    # The language model which will generate the completion.
    model="llama3-70b-8192",

    #
    # Optional parameters
    #

    # Controls randomness: lowering results in less random completions.
    # As the temperature approaches zero, the model will become deterministic
    # and repetitive.
    temperature=0.5,

    # The maximum number of tokens to generate. Requests can use up to
    # 2048 tokens shared between prompt and completion.
    max_tokens=1024,

    # Controls diversity via nucleus sampling: 0.5 means half of all
    # likelihood-weighted options are considered.
    top_p=1,

    # A stop sequence is a predefined or user-specified text string that
    # signals an AI to stop generating content, ensuring its responses
    # remain focused and concise. Examples include punctuation marks and
    # markers like "[end]".
    stop=None,

    # If set, partial message deltas will be sent.
    stream=True,
)

# Print the incremental deltas returned by the LLM.
for chunk in stream:
    print(chunk.choices[0].delta.content, end="")


