require('dotenv').config()

const express = require('express')
const app = express()
const port = process.env.PORT || 3000;

githubData = {
  "login": "ruturajraut",
  "id": 82934880,
  "node_id": "MDQ6VXNlcjgyOTM0ODgw",
  "avatar_url": "https://avatars.githubusercontent.com/u/82934880?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/ruturajraut",
  "html_url": "https://github.com/ruturajraut",
  "followers_url": "https://api.github.com/users/ruturajraut/followers",
  "following_url": "https://api.github.com/users/ruturajraut/following{/other_user}",
  "gists_url": "https://api.github.com/users/ruturajraut/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/ruturajraut/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/ruturajraut/subscriptions",
  "organizations_url": "https://api.github.com/users/ruturajraut/orgs",
  "repos_url": "https://api.github.com/users/ruturajraut/repos",
  "events_url": "https://api.github.com/users/ruturajraut/events{/privacy}",
  "received_events_url": "https://api.github.com/users/ruturajraut/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Ruturaj Sanjay Raut",
  "company": null,
  "blog": "",
  "location": "New Panvel, Maharashtra, India.",
  "email": null,
  "hireable": null,
  "bio": "Hi, I'm Ruturaj Raut, I'm 23 living in Panvel, I did BE CSE with cgpa of 7.79.\r\nCurrently doing job as Software Developer. \r\nSkills: Python, SQL, Html, Css.Js.",
  "twitter_username": "ImRuturajRaut",
  "public_repos": 22,
  "public_gists": 0,
  "followers": 1,
  "following": 1,
  "created_at": "2021-04-21T08:01:34Z",
  "updated_at": "2025-05-14T10:30:45Z"
}

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  res.send(`<h1>Hello login!</h1>`)
})

app.get('/github', (req, res) => {
  res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
