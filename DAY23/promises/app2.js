

// API Application programming Interface, API's are stored in json format because in json all programming languages are accepted

import axios from "axios";

let data =  axios.get("https://api.github.com/users/ayeshakhatoon17")
data
.then((output)=>{
    console.log(output.data)
})
.catch((error)=>{
console.log(error)
}
)

//if are getting undefined then promise is empty
/* // it prints our github's profile written in JSON
output: {
  login: 'ayeshakhatoon17',
  id: 118762990,
  node_id: 'U_kgDOBxQt7g',
  avatar_url: 'https://avatars.githubusercontent.com/u/118762990?v=4',
  gravatar_id: '',
  url: 'https://api.github.com/users/ayeshakhatoon17',
  html_url: 'https://github.com/ayeshakhatoon17',
  followers_url: 'https://api.github.com/users/ayeshakhatoon17/followers',
  following_url: 'https://api.github.com/users/ayeshakhatoon17/following{/other_user}',
  gists_url: 'https://api.github.com/users/ayeshakhatoon17/gists{/gist_id}',
  starred_url: 'https://api.github.com/users/ayeshakhatoon17/starred{/owner}{/repo}',
  subscriptions_url: 'https://api.github.com/users/ayeshakhatoon17/subscriptions',
  organizations_url: 'https://api.github.com/users/ayeshakhatoon17/orgs',
  repos_url: 'https://api.github.com/users/ayeshakhatoon17/repos',
  events_url: 'https://api.github.com/users/ayeshakhatoon17/events{/privacy}',
  received_events_url: 'https://api.github.com/users/ayeshakhatoon17/received_events',
  type: 'User',
  site_admin: false,
  name: 'Ayesha Khatoon',
  company: null,
  blog: '',
  location: null,
  email: null,
  hireable: null,
  bio: 'Frontend Developer',
  twitter_username: 'Ayesha__Khatoon',
  public_repos: 14,
  public_gists: 3,
  followers: 3,
  following: 4,
  created_at: '2022-11-21T17:45:18Z',
  updated_at: '2023-01-01T15:56:03Z'
} */