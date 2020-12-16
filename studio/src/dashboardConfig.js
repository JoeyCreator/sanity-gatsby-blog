export default {
  widgets: [
    { name: 'structure-menu' },
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
                  buildHookId: '5fda4bfbb5d2200b209983d1',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-ht6mp77p',
                  apiId: 'd2482588-7623-4067-bdc6-d2c5242a695d'
                },
                {
                  buildHookId: '5fda4bfc0ea420013242dcca',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-9vizoh5g',
                  apiId: 'dfda9626-6f68-49c2-8036-8471f97348f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JoeyCreator/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-9vizoh5g.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
