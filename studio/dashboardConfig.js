export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nuxt-events'
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
                  buildHookId: '',
                  title: 'Sanity Studio',
                  name: 'nuxt-project-studio',
                  apiId: '22e46ba4-9e78-4031-8cba-93c69cf8a793'
                },
                {
                  buildHookId: '5ee1501dbf198bffc68d1b22',
                  title: 'Events Website',
                  name: 'nuxt-project',
                  apiId: 'b3087dd3-1284-40f6-a11f-0772336ae4b3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/MrRobotjs/nuxt-project',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://nuxt-project.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently created sessions', order: '_createdAt desc', types: ['session']},
      layout: {width: 'medium'}
    }
  ]
}
