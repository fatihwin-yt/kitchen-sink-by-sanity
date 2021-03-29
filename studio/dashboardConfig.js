export default {
  widgets: [
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
                  buildHookId: '606165e6c78bfbdc9ba56fc2',
                  title: 'Sanity Studio',
                  name: 'kitchen-sink-by-sanity-studio',
                  apiId: '4b83fd8b-5d4a-4504-b7a4-437d53d51635'
                },
                {
                  buildHookId: '606165e6a5b467fbc30870f1',
                  title: 'Blog Website',
                  name: 'kitchen-sink-by-sanity',
                  apiId: 'b82107bb-8af5-4fd2-a98e-cb2a8915da76'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/fatihwin-yt/kitchen-sink-by-sanity',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://kitchen-sink-by-sanity.netlify.app', category: 'apps'}
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
