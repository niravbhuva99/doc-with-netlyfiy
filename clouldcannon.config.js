module.exports = {


  // Read from ./src instead of .
  source: 'docs',

  // Write to ./output/_cloudcannon/info.json instead of ./_cloudcannon/info.json
  output: 'output',

  // Populates the sidebar navigation and provides metadata for the editor
  collections_config: {
    people: {
      // Reads the contents of each file in this directory
      path: 'tutorial-basics',

      // The URL template for items in this collection
      url: '/t/{department|slugify}/[slug]/',

      // Tells CloudCannon this collection produces output files
      output: true

      
   
    }
 
  },

  // Generates the data for select and multiselect inputs matching these names
 
};
