require('dotenv').config()

const express = require('express')
const app = express()
const port = 5000

const githubData = {
    "login": "YukiP7",
    "id": 109288720,
    "node_id": "U_kgDOBoOdEA",
    "avatar_url": "https://avatars.githubusercontent.com/u/109288720?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/YukiP7",
    "html_url": "https://github.com/YukiP7",
    "followers_url": "https://api.github.com/users/YukiP7/followers",
    "following_url": "https://api.github.com/users/YukiP7/following{/other_user}",
    "gists_url": "https://api.github.com/users/YukiP7/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/YukiP7/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/YukiP7/subscriptions",
    "organizations_url": "https://api.github.com/users/YukiP7/orgs",
    "repos_url": "https://api.github.com/users/YukiP7/repos",
    "events_url": "https://api.github.com/users/YukiP7/events{/privacy}",
    "received_events_url": "https://api.github.com/users/YukiP7/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Yukti garg",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 9,
    "public_gists": 0,
    "followers": 0,
    "following": 1,
    "created_at": "2022-07-14T12:23:04Z",
    "updated_at": "2023-09-09T18:45:55Z"
  }

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login' , (req , res) => {
    res.send('Successfully Logged In')
})

app.get('/about' , (req , res) => {
    res.send('<h1>Yukti is Learning Backened</h2>')
})

app.get('/github' , (req , res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})