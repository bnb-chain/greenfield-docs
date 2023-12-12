---
title: How to chat to a doc stored in Greenfield
order: 2
---


## Background

This is part 2 of a series of tutorials about how to leverage Greenfield for AI/machine learning. In the [previous tutorial](hugging-face-intro.md), we demonstrate that Greenfield can be used to efficiently store machine learning datasets and models.

In this tutorial, we'll explore another topic: the integration of OpenAI's GPT model with a customized, dynamically updated data source from the Greenfield blockchain, an approach known as [Retrieval-Augmented Generation (RAG)](https://research.ibm.com/blog/retrieval-augmented-generation-RAG). This method enhances the GPT's capabilities by providing access to the most current and domain-specific information, addressing its limitations in handling recent or niche data.

Additionally, we'll utilize [Chroma databases](https://www.trychroma.com/) for efficient data management and querying, ensuring that the text generation process is not only fluent and contextually relevant but also informed by the latest real-time data. This synergy of advanced technologies empowers the generation of highly accurate and up-to-date content.

## What is Chroma

![img](https://docs.trychroma.com/img/hrm4.svg)

[source](https://docs.trychroma.com/)

To quote the [official documentation](https://docs.trychroma.com/), Chroma is the open-source embedding database. Chroma stores embeddings along with their metadata, and, by using its built-in functionality, help embed documents (convert documents into vectors), and query the stored embeddings based on the embedded documents.

## What are embeddings?

In the context of [Natural Language Processing (NLP)](https://www.ibm.com/topics/natural-language-processing#:~:text=the next step-,What is natural language processing%3F,same way human beings can.), [embeddings](https://developers.google.com/machine-learning/crash-course/embeddings/video-lecture) are numerical representations of words, phrases, or even entire documents, where each unique element is mapped to a vector in a high-dimensional space. These vectors capture semantic meaning and relationships between words based on their usage in language. For example, words with similar meanings are often represented by vectors that are close together in this space. Embeddings are fundamental in NLP for tasks like text classification, sentiment analysis, and machine translation, as they enable algorithms to process and understand text by converting words into a format that machines can work with.

# Prerequisites

- [Gnfd-cmd](https://github.com/bnb-chain/greenfield-cmd) installed

- Python >= 3.9 with the following packages:

- - openai (tested with version 0.28)
  - langchain (tested with version 0.0.200)
  - chromadb (tested with version 0.4.4)
  - tqdm

- Access to OpenAI's API key, You will need an OpenAI API key to run this demo. You can [get one here](https://platform.openai.com/account/api-keys).

- A Chroma database set up. You can follow the instructions [here](https://docs.trychroma.com/usage-guide#running-chroma-in-clientserver-mode).

# Creating the vector database

In this section, you will retrieve an external document from Greenfield and index it to be queried. In your project, create a new empty local managed folder called documents first.

## Get your Chroma database Running

A Chroma database should be running. You can follow the instructions [here](https://docs.trychroma.com/usage-guide#running-chroma-in-clientserver-mode).

 chroma run --path /path/to/your/folder

## Getting the file from Greenfield

In this tutorial, we use `[gnfd-cmd](https://github.com/bnb-chain/greenfield-cmd)` to download files. If you are not familiar with this CLI, please follow the instructions [here](https://docs.bnbchain.org/greenfield-docs/docs/tutorials/cli/file-management/overview) to complete the installation and setup.

The "object get" command is used to download an object to local path. This command will return the local file path where the object will be downloaded and the file size after successful execution.

gnfd-cmd object get gnfd://gnfd-bucket/gnfd-object file-path

## Indexing and persisting the database

The first step will extract the text from your document, transform it into embeddings then store them inside a vector database. Embeddings are the A.I-native way to represent any kind of data, making them the perfect fit for working with all kinds of A.I-powered tools and algorithms.

Chroma provides a convenient wrapper around OpenAI's embedding API. By default, Chroma uses *text-embedding-ada-002*.

In practice, you will use that vector database to enrich your prompt by adding relevant text from the document. This will allow the LLM to directly leverage the document’s data when asked about its content.

In the `loda_data.py` file, the information from files stored in “documentation” is read and Instantiate a persistent chroma client in the persist_directory.
```python
  # If the collection already exists, we just return it. This allows us to add more

  # data to an existing collection.

  collection = client.get_or_create_collection(name=collection_name)

  # Create ids from the current count

  count = collection.count()

  print(f"Collection already contains {count} documents")

  ids = [str(i) for i in range(count, count + len(documents))]

  # Load the documents in batches of 100

  for i in tqdm(

           range(0, len(documents), 100), desc="Adding documents", unit_scale=100

  ):

           collection.add(

             ids=ids[i : i + 100],

             documents=documents[i : i + 100],

             metadatas=metadatas[i : i + 100], # type: ignore

           )

  new_count = collection.count()

  print(f"Added {new_count - count} documents")
```

The 3 key points in this example:

- FIle loading: This code reads files from a given directory. Processing each line in the files, stripping whitespace, and skipping empty lines.
- Creating a Collection: with a Chroma client, checking if the specified collection exists or creating a new one.
- Batch Processing: Adding documents to the collection in batches, which is a common practice in database operations to optimize performance.

# Running Queries

Now that the Chroma database is ready, you can combine it with a call to your LLM.

## Build a Prompt

First, you have to build an openAI prompt. This function takes the original query, and the returned context, and asks the model to answer the question based only on what's in the context, not what's in its weights. More information can be found [here](https://platform.openai.com/docs/guides/chat/introduction)

```python
def build_prompt(query: str, context: List[str]) -> List[Dict[str, str]]:

  system = {

           "role": "system",

           "content": "I am going to ask you a question, which I would like you to answer"

           "based only on the provided context, and not any other information."

           "If there is not enough information in the context to answer the question,"

           'say "I am not sure", then try to make a guess.'

           "Break your answer up into nicely readable paragraphs.",

  }

  user = {

           "role": "user",

           "content": f"The question is {query}. Here is all the context you have:"

           f'{(" ").join(context)}',

  }

  return [system, user]

## Get LLM Response

Then, you need to create a function to send queries to the GPT API to get a response to the question.

def get_chatGPT_response(query: str, context: List[str]) -> str:

  response = openai.ChatCompletion.create(

           model="gpt-3.5-turbo",

           messages=build_prompt(query, context),

  )

  return response.choices[0].message.content # type: ignor

Load collections from Chroma Database

 # Instantiate a persistent chroma client in the persist_directory.

  # This will automatically load any previously saved collections.

  # Learn more at docs.trychroma.com

  client = chromadb.PersistentClient(path=persist_directory)

  # Get the collection.

  collection = client.get_collection(name=collection_name)

Get the user query, then send the GPT response back

 # We use a simple input loop.

  while True:

           # Get the user's query

           query = input("Query: ")

           if len(query) == 0:

             print("Please enter a question. Ctrl+C to Quit.\n")

             continue

           print("\nThinking...\n")

           # Query the collection to get the 5 most relevant results

           results = collection.query(

             query_texts=[query], n_results=5, include=["documents", "metadatas"]

           )

           sources = "\n".join(

             [

               f"{result['filename']}: line {result['line_number']}"

               for result in results["metadatas"][0] # type: ignore

             ]

           )

           # Get the response from GPT

           response = get_chatGPT_response(query, results["documents"][0]) # type: ignore

```

## Test Your Query

Example output when chat with Greenfield docs:

```

Query: what is Simple Storage Service (SSS) ?

Thinking...

Based on the provided context, Simple Storage Service (SSS) is a service that provides developers with API primitives and storage models similar to AWS S3 cloud storage. It seems to be part of the Greenfield blockchain project, which utilizes SSS for storing data. However, the context does not specify the exact purpose or features of SSS, so it is difficult to provide further details.

In conclusion, based on the given context, Simple Storage Service is a storage service that offers developers API primitives and storage models similar to AWS S3 cloud storage, but without more information, it is unclear what specific functionalities it provides.

Source documents:

downloaded_file.md: line 2

downloaded_file.md: line 6

downloaded_file.md: line 8

downloaded_file.md: line 62

downloaded_file.md: line 19

```

# Wrapping up

Congratulations, you have implemented a full example of RAG-based LLM usage to extract information from a document! From there, you can dig deeper and for example:

- Try uploading your private documents and adjust the prompt templates accordingly
- Try different types of embeddings
- Play with the number of similarity search outputs to widen the information given to the model

Here are the complete versions of the code presented in this tutorial:

[Github link](https://github.com/chroma-core/chroma/blob/main/examples/chat_with_your_documents/main.py )



------