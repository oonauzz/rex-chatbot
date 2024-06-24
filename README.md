# Rex-Chatbot

## Description

This repository contains the backend code for Rex Chatbot, a project built using Firebase. 
The main functionality provided by this backend is to add messages to Firestore under specific user chats.

## Cloud Function: addMessage

This Firebase Cloud Function (addMessage) is triggered by an HTTPS request. It adds a message to Firestore under a specific user's chat. The function validates required fields (text and userId) and then constructs the message data, including a server timestamp. If successful, it returns a success status and the ID of the added message. If an error occurs, it throws an HTTP error with an appropriate message.
Parameters:

- Data: An object containing userId and text fields.
- Context: Metadata for the function invocation.

## Installation

To deploy these functions to Firebase:

- Clone the repository.
- Install dependencies with npm install.
- Deploy the functions with firebase deploy --only functions.

Make sure you have Firebase CLI installed and configured with your project before deploying.

## Usage

This backend provides an API endpoint that can be called to add messages to specific user chats in Firestore. Ensure Firebase Authentication and Firestore are properly set up and secured according to your application's requirements.
