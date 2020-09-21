export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f6862ffd184393cc1289d3a',
                  title: 'Sanity Studio',
                  name: 'sanity-sapper-blog-studio-nk8zgugj',
                  apiId: '8c994d37-d8f5-43a0-a80d-39c081955806'
                },
                {
                  buildHookId: '5f6862ff16d9f26fd23d3f57',
                  title: 'Blog Website',
                  name: 'sanity-sapper-blog-web-3qk89e4x',
                  apiId: 'bf2492d9-acef-40df-aa38-1cbcec1f04af'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/wolfbyne/sanity-sapper-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-sapper-blog-web-3qk89e4x.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
