export const ROUTES_NAMES = {
    DASHBOARD: '/dashboard',
    VIEW_POST: '/view-post',
    CATEGORIES: '/categories',
    TAGS: '/tags',
    DEFAULT: '/',
}

export const ROUTES = {
    [ROUTES_NAMES.DASHBOARD]: {
        title: 'DASHBOARD',
        key: '1'
    },
    [ROUTES_NAMES.VIEW_POST]: {
        title: 'VIEW POST',
        key: '2'
    },
    [ROUTES_NAMES.CATEGORIES]: {
        title: 'CATEGORIES',
        key: '3'
    },
    [ROUTES_NAMES.TAGS]: {
        title: 'TAGS',
        key: '4'
    },
    default: {
        title: 'DASHBOARD',
        path: ROUTES_NAMES.DASHBOARD,
    },
}
