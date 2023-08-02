# Social-Network

## Description

Social Network API, a RESTful API built using Node.js, Express.js, and MongoDB. The API allows developers to interact with the backend of a social network application to manage users, posts, comments, and other related functionalities. Here is a walkthrough video (https://watch.screencastify.com/v/KcP3cQKkC9YeTrGkOeuB)

## Table of Contents
Features
Requirements
Installation
Usage
Endpoints

## Features

Create, read, update, and delete user profiles.
Create, read, update, and delete posts.
Add comments to posts and manage them.

## Requirements

Before using the API, you need the following:

Node.js (v12.0.0 or higher)
MongoDB (v4.0.0 or higher)
Installation
Clone the repository:

git clone https://github.com/mavarreteno/social-network.git

cd social-network-api
Install dependencies:

npm install

Start the server:

npm node server

## Usage
Once the server is up and running, you can access the API at http://localhost:3001 (or the specified PORT).

Make sure to use appropriate API endpoints with the necessary HTTP methods to perform various operations on the social network.

## Endpoints
The API offers the following endpoints:

POST /api/users/register: Register a new user.

POST /api/users/login: Log in with existing credentials.

GET /api/users/profile: Get the current user's profile.

PUT /api/users/profile: Update the current user's profile.

DELETE /api/users/profile: Delete the current user's profile.

GET /api/posts: Get all posts.

GET /api/posts/:postId: Get a specific post by its ID.

POST /api/posts: Create a new post.

PUT /api/posts/:postId: Update a post by its ID.

DELETE /api/posts/:postId: Delete a post by its ID.

POST /api/posts/:postId/comments: Add a comment to a post.

DELETE /api/posts/:postId/comments/:commentId: Delete a comment from a post.

POST /api/posts/:postId/like: Like a post.
