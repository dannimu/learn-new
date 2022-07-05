export default [
    {
        path: '/',
        component: () => import('./views/Home'),
        children: [
            {
                path: 'one',
                component: () => import('./views/One'),
            },
            {
                path: 'two',
                component: () => import('./views/Two')
            },
            {
                path: 'three',
                component: () => import('./views/Three')
            },
            {
                path: 'four',
                component: () => import('./views/Four'),
            },
            {
                path: 'five',
                component: () => import('./views/Five')
            },
            {
                path: 'six',
                component: () => import('./views/Six')
            },
            {
                path: 'seven',
                component: () => import('./views/Seven'),
            },
            {
                path: 'eight',
                component: () => import('./views/Eight')
            },
            {
                path: 'nine',
                component: () => import('./views/Nine')
            },
            {
                path: 'ten',
                component: () => import('./views/Ten'),
            },
            {
                path: 'eleven',
                component: () => import('./views/Eleven')
            },
            {
                path: 'twelve',
                component: () => import('./views/Twelve')
            },
            {
                path: 'thirteen',
                component: () => import('./views/Thirteen'),
            },
            {
                path: 'fourteen',
                component: () => import('./views/Fourteen')
            },
            {
                path: 'fifteen',
                component: () => import('./views/Fifteen')
            },
        ]
    },
]