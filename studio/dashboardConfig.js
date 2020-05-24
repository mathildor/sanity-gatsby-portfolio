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
                  buildHookId: '5ecaacc0c16d8400ef50dd69',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-eoddacc8',
                  apiId: 'a3d429a4-2985-4979-ba73-b1bd00262c32'
                },
                {
                  buildHookId: '5ecaacc1d2193e15f58e032e',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-ns74vdyr',
                  apiId: 'ceb1112d-1653-46cf-943e-19c60472c43f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mathildor/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-ns74vdyr.netlify.app',
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
