/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as SupportIndexImport } from './routes/support/index'
import { Route as CreateIndexImport } from './routes/create/index'
import { Route as BrowseIndexImport } from './routes/browse/index'
import { Route as DetailIdImport } from './routes/detail/$id'

// Create/Update Routes

const IndexRoute = IndexImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute
} as any)

const SupportIndexRoute = SupportIndexImport.update({
  id: '/support/',
  path: '/support/',
  getParentRoute: () => rootRoute
} as any)

const CreateIndexRoute = CreateIndexImport.update({
  id: '/create/',
  path: '/create/',
  getParentRoute: () => rootRoute
} as any)

const BrowseIndexRoute = BrowseIndexImport.update({
  id: '/browse/',
  path: '/browse/',
  getParentRoute: () => rootRoute
} as any)

const DetailIdRoute = DetailIdImport.update({
  id: '/detail/$id',
  path: '/detail/$id',
  getParentRoute: () => rootRoute
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/detail/$id': {
      id: '/detail/$id'
      path: '/detail/$id'
      fullPath: '/detail/$id'
      preLoaderRoute: typeof DetailIdImport
      parentRoute: typeof rootRoute
    }
    '/browse/': {
      id: '/browse/'
      path: '/browse'
      fullPath: '/browse'
      preLoaderRoute: typeof BrowseIndexImport
      parentRoute: typeof rootRoute
    }
    '/create/': {
      id: '/create/'
      path: '/create'
      fullPath: '/create'
      preLoaderRoute: typeof CreateIndexImport
      parentRoute: typeof rootRoute
    }
    '/support/': {
      id: '/support/'
      path: '/support'
      fullPath: '/support'
      preLoaderRoute: typeof SupportIndexImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexRoute
  '/detail/$id': typeof DetailIdRoute
  '/browse': typeof BrowseIndexRoute
  '/create': typeof CreateIndexRoute
  '/support': typeof SupportIndexRoute
}

export interface FileRoutesByTo {
  '/': typeof IndexRoute
  '/detail/$id': typeof DetailIdRoute
  '/browse': typeof BrowseIndexRoute
  '/create': typeof CreateIndexRoute
  '/support': typeof SupportIndexRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof IndexRoute
  '/detail/$id': typeof DetailIdRoute
  '/browse/': typeof BrowseIndexRoute
  '/create/': typeof CreateIndexRoute
  '/support/': typeof SupportIndexRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/detail/$id' | '/browse' | '/create' | '/support'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/detail/$id' | '/browse' | '/create' | '/support'
  id: '__root__' | '/' | '/detail/$id' | '/browse/' | '/create/' | '/support/'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  IndexRoute: typeof IndexRoute
  DetailIdRoute: typeof DetailIdRoute
  BrowseIndexRoute: typeof BrowseIndexRoute
  CreateIndexRoute: typeof CreateIndexRoute
  SupportIndexRoute: typeof SupportIndexRoute
}

const rootRouteChildren: RootRouteChildren = {
  IndexRoute: IndexRoute,
  DetailIdRoute: DetailIdRoute,
  BrowseIndexRoute: BrowseIndexRoute,
  CreateIndexRoute: CreateIndexRoute,
  SupportIndexRoute: SupportIndexRoute
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/detail/$id",
        "/browse/",
        "/create/",
        "/support/"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/detail/$id": {
      "filePath": "detail/$id.tsx"
    },
    "/browse/": {
      "filePath": "browse/index.tsx"
    },
    "/create/": {
      "filePath": "create/index.tsx"
    },
    "/support/": {
      "filePath": "support/index.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
