
<div align="center">
<h1>Hugo-Lightning</h1>
<img alt="Lightning Icon" src="./static/favicon.svg" width=100px />
<p>
A re-imagined theme based on <a href="https://github.com/math-queiroz/rusty-typewriter" target="_blank">math-queiroz/rusty-typewriter</a>, with inspirations from various other Hugo theme, Like <a href="https://github.com/cx48/NightFolio" target="_blank">cx48/NightFolio</a>
& <a href="https://github.com/luizdepra/hugo-coder" target="_blank">luizdepra/Hugo-Coder</a>.
</p>  
</div>

## Features

- 🎨 Clean, minimalist design
- 📱 Fully responsive layout
- 🔍 Built-in search functionality
- 📚 Table of contents support
- 🏷️ Custom taxonomies by default
- 📝 Rich markdown support with syntax highlighting
- 📋 Customizable sidebar
- 🔄 Related posts suggestions
- 📎 File attachments support

## Quick Start

1. Create a new Hugo site:
```bash
hugo new site my-blog
cd my-blog
```

2. Add the theme as a git submodule:
```bash
git init
git submodule add https://github.com/ThunderE75/hugo-lightning.git themes/lightning
```

3. Add the theme to your `hugo.toml`:
```toml
theme = 'lightning'
```

4. Start the development server:
```bash
hugo server
```

## Configuration

The theme offers extensive configuration options through your site's `config.toml` file. Here are the main settings:

```toml
[params.lightning]
  sidePane = true
  countPageItems = 7

[params.lightning.home]
  showBio = true
  showAuthorImg = true
  sidePaneTags = true
  showFeatured = true
  showRecent = true
  hideRecentWhenFeatured = true
  countRecent = 5

[params.lightning.side.home]
  sidePaneSticky = false
  taxonomies = ['tags']
  countTaxonomy = 5

[params.lightning.side.single]
  sidePaneSticky = true
  showDetails = true
  showTableOfContents = true
  showAttachments = true
  showRelated = true
  countRelated = 5
```

### Front Matter Options

```toml
+++
title = "Your Post Title"
date = "2024-03-28"
tags = ["tag1", "tag2"]
featured = true
indexable = true
+++
```

## Customization

### CSS Customization

You can customize the theme's appearance by creating a custom CSS file:

1. Create `assets/css/custom.css` in your site
2. Add your custom styles
3. The theme will automatically include your custom CSS
4. You may take a look at `_root.css` for existing theme values and variables

> If a css file starts with an undescore (_), it will be bundled with the theme default ones, which may affect caching behavior!

### Layout Customization

The theme's templates can be overridden by creating corresponding files in your site's `layouts` directory.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

