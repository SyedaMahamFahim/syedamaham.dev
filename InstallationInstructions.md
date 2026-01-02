# Installation and Setup Instructions

## 1st Method

### Step 1. Set up the environment

Use the Deploy Button below. It will let you deploy the starter using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=next-sanity-example) as well as connect it to your Sanity Content Lake using [the Sanity Vercel Integration][integration].

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FSyedaMahamFahim%2Fsyedamaham.dev&project-name=nextjs-advance-sanity-portfolio-blog&repository-name=syedamaham.dev&demo-title=Syeda&demo-description=Built%20with%20Sanity%20v3%2C%20Next.js%20(version%2013.4)%2C%20and%20Tailwind%20CSS%2C&demo-url=https%3A%2F%2Fsyedamaham.dev%2F&demo-image=https%3A%2F%2Fgithub.com%2FSyedaMahamFahim%2Fsyedamaham.dev%2Fassets%2F79671325%2Ffb48f81e-99a8-4e3e-8bd9-36d923d2d789&integration-ids=oac_hb2LITYajhRQ0i4QznmKH7gx)


### Step 2. Set up the project locally

[Clone the repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) that was created for you on your GitHub account. Once cloned, run the following command from the project's root directory:

```bash
npx vercel link
```

Download the environment variables needed to connect Next.js and the Studio to your Sanity project:

```bash
npx vercel env pull
```

This will create a git-ignored `.env` file with environment variables that will be used for local development.

### Step 3. Run Next.js locally in development mode

```bash
npm install && npm run dev
```

When you run this development server, the changes you make in your frontend and studio configuration will be applied live using hot reloading.

Your blog should be up and running on [http://localhost:3000][localhost-3000]! You can create and edit content on [http://localhost:3000/studio][localhost-3000-studio].

### Step 4. Import Demo Data

- Import the provided demo data to save time. Execute this command in your terminal:

```bash
sanity dataset import production.tar.gz
```
![image](https://github.com/SyedaMahamFahim/syedamaham.dev/assets/79671325/6aced6fd-eb01-4b2e-a3cc-c530e9b27516)

### Step 5. Deploy to production

To deploy your changes to production you use `git`:

```bash
git add .
git commit
git push
```

Alternatively, you can deploy without a `git` hosting provider using the Vercel CLI:

```bash
npx vercel --prod
```


