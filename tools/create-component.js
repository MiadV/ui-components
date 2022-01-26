#!/usr/bin/env node
'use strict'
/**
 * This script scaffolds React component.
 *
 * For the following command:
 *
 * `yarn run create-components ComponentName`
 *
 * The following file tree will be generated:
 *
 * /src/package-name
 * ├── /stories/
 * │   └── index.stories.js
 * ├── style.css
 * └── index.js
 *
 */
const path = require('path')
const fs = require('fs-extra')
const task = require('./task')

const componentTemplate = require('./component-template')
const componentStoriesTemplate = require('./component-stories-template')

const componentName = process.argv[2]

module.exports = task('create-component', async () => {
  if (!componentName) {
    throw new Error(
      'Missing component name argument, use: `yarn run create-components [ComponentName]`'
    )
  }

  if (!initialIsCapital(componentName)) {
    throw new Error(
      `Wrong format for '${componentName}': use CamelCase for ComponentName`
    )
  }

  const componentDir = path.join('src', componentName)

  // Check if directory already exist
  const componentDirExistsAlready = await fs.pathExists(componentDir)

  if (componentDirExistsAlready) {
    throw new Error(`Directory already exists: ${componentName}`)
  }

  // Create directory
  await fs.ensureDir(componentDir)

  console.info('Component name will be:', componentName)

  await fs.writeFile(
    path.join('src', componentName, 'index.tsx'),
		componentTemplate({ componentName })
  )

  await fs.writeFile(
    path.join('src', componentName, 'style.css'),
		''
  )

  await fs.ensureDir(path.join('src', componentName, 'stories'))
  await fs.writeFile(
    path.join('src', componentName, 'stories', `index.stories.tsx`),
    componentStoriesTemplate({ componentName })
  )
})

function initialIsCapital(word) {
  return word[0] !== word[0].toLowerCase()
}
