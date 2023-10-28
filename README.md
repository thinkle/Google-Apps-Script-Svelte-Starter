# Google Apps Script + Svelte

I love Google Apps Script for whipping together projects for our Google Apps School, and I love svelte development in Visual Studio, but before now, I haven't been able to  bring them together. This repo will give me a recipe for fixing that!

## Quick Start
1. Clone this repository.
1. Install the dependencies: npm install
1. Run development server for Svelte: npm run dev
1. Build for production: npm run build
1. Create a new Google Apps Script project: npm run create-clasp-project
1. Push the build to Google Apps Script: npm run push-to-clasp

## Google-Apps-Script

We can use import and export and typescript to build Google Apps Script functions. Whatever is imported into main will be built for export.

The src/gas/serve.ts file contains several utility functions to serve your Svelte code within different Google Workspace apps:

doGet(e): Serves the Svelte application as a web page.
showDialog(title, modal, app): Shows the Svelte application as a dialog in Google Docs, Sheets, or Slides.
title: Title of the dialog.
modal: Whether the dialog should be modal.
app: The Google Workspace app to show the dialog in (DocumentApp, SpreadsheetApp, SlidesApp)

## Roadmap

- Proof of concept: build svelte interface served with GAS!
- Next up
  - Get improved support for working with google.script.run in the editor on the svelte side
  - Get improved support for mocking Google Apps Script for local testing.
