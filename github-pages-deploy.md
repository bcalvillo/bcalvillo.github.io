
# Deploying to GitHub Pages

Follow these steps to deploy your website to GitHub Pages:

## 1. Create a GitHub Repository

First, create a repository with the name `yourusername.github.io` (replace "yourusername" with your actual GitHub username).

## 2. Initialize Git (if needed)

```bash
git init
git add .
git commit -m "Initial commit"
```

## 3. Link to Your GitHub Repository

```bash
git remote add origin https://github.com/yourusername/yourusername.github.io.git
git branch -M main
git push -u origin main
```

## 4. Update package.json for GitHub Pages Deployment

Add these scripts to your package.json:

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

## 5. Install GitHub Pages Package

```bash
npm install --save-dev gh-pages
```

## 6. Deploy to GitHub Pages

```bash
npm run deploy
```

## 7. Configure GitHub Repository Settings

1. Go to your repository on GitHub
2. Navigate to Settings > Pages
3. In the "Source" section, select the `gh-pages` branch
4. Save the changes

Your site will be available at https://yourusername.github.io/

## Notes for Custom Domains

If you want to use a custom domain:

1. Add a CNAME file to the `public` folder with your domain name
2. Configure your domain's DNS settings as directed by GitHub
3. In your repository Settings > Pages, add your custom domain name
