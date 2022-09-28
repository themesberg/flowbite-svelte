export { default as CompoDescription } from './CompoDescription.svelte';
export { default as ExampleDiv } from './ExampleDiv.svelte';
export { default as GitHubSource } from './GitHubSource.svelte';
export { default as Htwo } from './Htwo.svelte';
export { default as TableDefaultRow } from './TableDefaultRow.svelte';
export { default as TableProp } from './TableProp.svelte';

export const fetchMarkdownPosts = async () => {
  const componentFiles = import.meta.glob('/src/routes/components/*.md')
  const formFiles = import.meta.glob('/src/routes/forms/*.md')
  const typographyFiles = import.meta.glob('/src/routes/typography/*.md')
  const utilFiles = import.meta.glob('/src/routes/utilities/*.md')
  const pageFiles = import.meta.glob('/src/routes/pages/*.md')
  const extendFiles = import.meta.glob('/src/routes/extend/*.md')
  // returns an array of files
  const iterableComponentFiles = Object.entries(componentFiles)
  const iterableFormFiles = Object.entries(formFiles)
  const iterableTypographyFiles = Object.entries(typographyFiles)
  const iterableUtilFiles = Object.entries(utilFiles)
  const iterablePageFiles = Object.entries(pageFiles)
  const iterableExtendFiles = Object.entries(extendFiles)

  const allComponents = await Promise.all(
    iterableComponentFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const filePath = path.slice(22, -3)
      return {
        meta: metadata,
        path: filePath,
      }
    })
  )
  // returns an array of paths, /radio from /src/routes/forms/radio.md
  const allForms = await Promise.all(
    iterableFormFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const filePath = path.slice(17, -3)
      return {
        meta: metadata,
        path: filePath,
      }
    })
  )
  // returns an array of paths, /hr from /src/routes/typography/hr.md
  const allTypographys = await Promise.all(
    iterableTypographyFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const filePath = path.slice(22, -3)
      return {
        meta: metadata,
        path: filePath,
      }
    })
  )
  // returns an array of paths, /closebutton from /src/routes/utilities/closebutton.md
  const allUtils = await Promise.all(
    iterableUtilFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const filePath = path.slice(21, -3)
      return {
        meta: metadata,
        path: filePath,
      }
    })
  )
  // returns an array of paths, /about from /src/routes/pages/about.md
  const allPages = await Promise.all(
    iterablePageFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const filePath = path.slice(17, -3)
      return {
        meta: metadata,
        path: filePath,
      }
    })
  )
  // returns an array of paths, /icons from /src/routes/extend/icons.md
  const allExtends = await Promise.all(
    iterableExtendFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver()
      const filePath = path.slice(18, -3)
      return {
        meta: metadata,
        path: filePath,
      }
    })
  )

  return { components: allComponents, extend: allExtends, forms: allForms, pages: allPages, typography: allTypographys, utils: allUtils }
}

// import fs from 'fs/promises'

export const fetchTypes = async () => {
  const typesFiles = import.meta.glob('/src/lib/*.ts', { as: 'raw' })
  const iterableTypesFiles = Object.entries(typesFiles)

  const allTypes = await Promise.all(
    iterableTypesFiles.map(async ([path, resolver]) => {
      const content = await resolver()
      const filePath = path.slice(9, -3)
      return {
        content,
        path: filePath,
      }
    })
  )
  //  there are only two ts files and the second one is types.ts
  return { types: allTypes[1] }
}