module.exports = {


  // Read from ./src instead of .
  source: './',

  // Write to ./output/_cloudcannon/info.json instead of ./_cloudcannon/info.json
  output: 'output',

  // Populates the sidebar navigation and provides metadata for the editor
  collections_config: {
    people: {
      // Reads the contents of each file in this directory
      path: 'docs/tutorial-basics',
      format: 'md'

      
   
    }
 
  },

  // Generates the data for select and multiselect inputs matching these names
 
};
