// This is a sample TypeScript code to demonstrate how you can create and collaborate on an application with GitHub.
// Note: This code is just a starting point and does not include all necessary features or permissions.

import { GithubClient } from 'github'

const client = new GithubClient({
  username: 'your-github-username',
  password: 'your-github-password'
})

async function main() {
  const issues = await client.getIssues({ owner: 'SchoolProjectRepository', repo: 'SchoolProject' })
  console.log('Issues:', issues)
}

main()
