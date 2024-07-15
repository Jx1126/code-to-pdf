# Codes to PDF Converter

This program combines all the codes in the source_code folder into a single PDF document.

## Features

- Supports most file types.
- Reads all the file in the `source_code` folder.
- Combines the content of all the files into a single PDF.
- Display each filename before the code content.
- Adds page break when moving to another file.

## Prerequisite

Before you begin, please ensure ythat you meet the following prerequisites:

- You have installed Node.JS.
- You have installed NPM.
- You have a Window/Linux/Mac machine.

## Installing Code to PDF Converter

To install Code to PDF Converter, follow these steps:

- Clone the repository or download the scripts.
- Navigate to the project directory.
- Run the following command to install the required dependancies:

```
npm install
```

## Using Code to PDF Converter

To use the Code to PDF Converter, follow these steps:

1. Place the code files you want to convert into the `source_code` folder in the project directory.
2. Run the script using the following command:

  ```
  npm run convert
  ```

3. . The script will generate a PDF file named `combined_code.pdf` in the `output` folder.

## Customizing

- To change the output file name or location, modify the `outputFilePath` variable in the script
- To adjust the font sizes or styles, modify the `doc.font()` and `doc.fontSize()` method calls in the script

## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are correctly installed
2. Check that the `source_code` folder exists and contains the files you want to convert
3. Make sure you have write permissions in the project directory for creating the `output` folder and PDF file

## Contributing to Code to PDF Converter

To contribute to Code to PDF Converter, follow these steps:

1. Fork this repository
2. Create a branch: `git checkout -b <branch_name>`
3. Make your changes and commit them: `git commit -m '<commit_message>'`
4. Push to the original branch: `git push origin <project_name>/<location>`
5. Create the pull request

Alternatively, see the GitHub documentation on [creating a pull request](https://help.github.com/articles/creating-a-pull-request/).
  