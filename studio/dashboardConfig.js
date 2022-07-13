export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '62ceda716181172f52e9ca45',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-yj5byifb',
                  apiId: 'aa1ed395-c47e-46b0-a7da-f636505602d9'
                },
                {
                  buildHookId: '62ceda715b887e348aa2961d',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-5mxbewtf',
                  apiId: '022d6243-2f4c-485e-8e87-2bf372ed9c29'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bridjno/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-5mxbewtf.netlify.app', category: 'apps'}
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
