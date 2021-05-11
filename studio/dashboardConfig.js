export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '609a4bb3abddebcc92ec0ef7',
                  title: 'Sanity Studio',
                  name: 'portfolio-studio-imj5w2zk',
                  apiId: '1a39a106-36ba-4fcc-9f7b-d3e8c65be616'
                },
                {
                  buildHookId: '609a4bb303966abab60ca0d5',
                  title: 'Portfolio Website',
                  name: 'portfolio-web-q6m915nc',
                  apiId: 'c36ae85e-9349-432f-845a-23376065460c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/evanbrierton/portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://portfolio-web-q6m915nc.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
