const fs = require('fs')
const path = require('path')

// colors for each theme.
const accentColors = [
  {
    newFileName: 'gravity-blue',
    replacementStrings: [
      '#007aff', // color_base
      '#3696ff', // color_light
      '#0063cf', // color_dark
      '#ffffff',  // color_text
      'brightness(0) saturate(100%) invert(46%) sepia(72%) saturate(2025%) hue-rotate(194deg) brightness(103%) contrast(100%)',
      'none'
    ]
  },
  {
    newFileName: 'gravity-purple',
    replacementStrings: [
      '#af52de', // color_base
      '#bb6ce3', // color_light
      '#a338d9', // color_dark
      '#ffffff',  // color_text
      'brightness(0) saturate(100%) invert(74%) sepia(55%) saturate(6062%) hue-rotate(234deg) brightness(93%) contrast(91%);',
      'none'
    ]
  },
  {
    newFileName: 'gravity-pink',
    replacementStrings: [
      '#ff2d55', // color_base
      '#ff4b6d', // color_light
      '#ff0f3d', // color_dark
      '#ffffff',  // color_text
      'brightness(0) saturate(100%) invert(44%) sepia(79%) saturate(2679%) hue-rotate(321deg) brightness(101%) contrast(101%);',
      'none'
    ]
  },
  {
    newFileName: 'gravity-red',
    replacementStrings: [
      '#ff3b30', // color_base
      '#ff584e', // color_light
      '#ff1e12', // color_dark
      '#ffffff',  // color_text
      'brightness(0) saturate(100%) invert(72%) sepia(74%) saturate(6386%) hue-rotate(332deg) brightness(109%) contrast(100%);',
      'none'
    ]
  },
  {
    newFileName: 'gravity-orange',
    replacementStrings: [
      '#ff9500', // color_base
      '#ffac36', // color_light
      '#e68600', // color_dark
      '#ffffff' , // color_text
      'brightness(0) saturate(100%) invert(84%) sepia(18%) saturate(4841%) hue-rotate(331deg) brightness(102%) contrast(101%);',
      'none'
    ]
  },
  {
    newFileName: 'gravity-yellow',
    replacementStrings: [
      '#ffcc00', // color_base
      '#ffe477', // color_light
      '#e6b800', // color_dark
      '#2c2c2c',  // color_text
      'brightness(0) saturate(100%) invert(100%) sepia(30%) saturate(4841%) hue-rotate(313deg) brightness(109%) contrast(104%);',
      'brightness(0) saturate(100%) invert(12%) sepia(11%) saturate(4%) hue-rotate(315deg) brightness(92%) contrast(85%);'
    ]
  },
  {
    newFileName: 'gravity-green',
    replacementStrings: [
      '#28cd41', // color_base
      '#4ddc62', // color_light
      '#20a635', // color_dark
      '#ffffff',  // color_text
      'brightness(0) saturate(100%) invert(94%) sepia(65%) saturate(1389%) hue-rotate(52deg) brightness(92%) contrast(87%);',
      'none'
    ]
  },
  {
    newFileName: 'gravity-gray',
    replacementStrings: [
      '#8e8e93', // color_base
      '#adadb1', // color_light
      '#8e8e93', // color_dark
      '#ffffff',  // color_text
      'brightness(0) saturate(100%) invert(61%) sepia(57%) saturate(0%) hue-rotate(41deg) brightness(96%) contrast(115%);',
      'none'
    ]
  }
]

// Function to replace strings in theme files.
function themeAccentColor(replacementStrings, newFileName) {
  const filePath = './Gravity/build.css'
  const outputDirectory = './Gravity'
  const searchStrings = [
    '--color_base',
    '--color_light',
    '--color_dark',
    '--color_text',
    '--color_filter_color',
    '--color_filter'
  ]

  // Read the content of the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error('Error reading the file:', err)
      return
    }

    // Perform string replacements
    let modifiedContent = data
    searchStrings.forEach((searchString, index) => {
      const replacementString = replacementStrings[index] || '' // Use an empty string if no replacement provided
      modifiedContent = modifiedContent.replace(new RegExp(searchString, 'g'), replacementString)
    })

    // Build the new file path
    const newFilePath = path.join(outputDirectory, newFileName + '.css')

    // Write the modified content to the new file
    fs.writeFile(newFilePath, modifiedContent, 'utf8', (err) => {
      if (err) {
        console.error('Error writing the file:', err)
        return
      }
      console.log('File successfully modified and saved as', newFilePath)
    })
  })
}

// Process each set of data using forEach
accentColors.forEach(({ replacementStrings, newFileName }) => {
  themeAccentColor(replacementStrings, newFileName)
})
