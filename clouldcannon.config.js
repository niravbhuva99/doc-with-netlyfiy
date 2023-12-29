module.exports = {
    collections_config: {
    blog: {
      path: "blog",
      output: true,
      url: "/posts/{category|slugify}/[slug].html",
      icon: "event_available"
    },
    tutorial: {
      path: "docs/tutorial-basics",
      parser: "yaml",
      output: false,
      icon: "people"
    }
  }
  
}