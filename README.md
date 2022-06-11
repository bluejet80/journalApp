# journalApp

This is the website I am building with Node.js to categorize my journal pages.

# Outline

So in this app we need to do several things.

1. Enter info about pages and the categories associated with them and then save that to a JSON
2. I want to be able to see all the pages that are currently in the JSON file
3. I want to be able to search for just one page and get that info
4. I want to be able to search for categories and have the journal pages associated with those categories returned.

## Capture Page Info

The functionality for this is pretty much done. Now I just need to reformat the page and make it a little more streamlined. I have already drawn out how I want the page to look.

So I would also like to determine what JSON file was written to depending on the name of the journal entered.

1. the name entered in the journal name would have to be processed
   Processed into a string like "owl_journal" and then
2. Tested against all the names to see if it was a valid journal name
3. Then that name would be passed in the headers or something so I could assign it to a variable and then use it to name the file to be appended to.
4. Each Journal would have its own file.
5. Then you would query one journal at a time, or each journal JSON file could be compiled into one big JSON file that could then be queried.

## Display One page

This will be another end point. /pages:"Owl Journal":2

I will need to specify a couple of different arguments.

- The Name of the Journal
- Page Number

So I need to setup two arguments for the endpoint. And then it should be able to return the page I want.

## Display all info in the File

This will just be the pages endpoint. /pages

## Display Pages associated with categories

I want to input one or more categories and get the pages associated with those categories.

This functionality will involve a couple of different approaches

1. There could be
