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


## OR
### 2ND Method

#### 1. Clone the Repository

```bash
git clone https://github.com/SyedaMahamFahim/syedamaham.dev.git
```

#### 2. Navigate to the Project Directory

```bash
cd syedamaham
```

#### 3. Install Dependencies

```bash
npm install
```

#### 4. Start the Development Server

```bash
npm run dev
```

#### 5. Setting up Sanity

To set up Sanity for your project and get it working with demo data, there is a slightly lengthy process that needs to be followed. Unfortunately, Sanity does not provide the facility to create a project through their website. Please follow the steps below:

#### 6. Renaming the Sanity Folder

- Firstly, rename the existing Sanity folder to **sanity2**.

```bash
mv sanity sanity2
```

#### 7. Installing Sanity Globally

- Install the Sanity CLI globally.

```bash
npm install -g @sanity/cli
```

#### 8. Creating a New Sanity Project

- After installing the Sanity CLI, create a new Sanity project in the same folder as your project (syedamaham.dev).

```bash
sanity init
```

#### 9. Sanity Configuration

- Configure your new Sanity project. When prompted, select the options as shown in the screenshot below:

![image](https://github.com/SyedaMahamFahim/syedamaham.dev/assets/79671325/3a768976-773b-4a62-b9b0-4e84b2c9a758)

#### 10. Two Sanity Projects

- After completing the setup, you will now have two Sanity projects: **sanity** and **sanity2**.

![image](https://github.com/SyedaMahamFahim/syedamaham.dev/assets/79671325/431d5e3c-d4ca-4145-bfe2-691fd3c31694)

#### 11. Project ID

- Visit your Sanity account at https://www.sanity.io/manage/personal/projects, and you will see your new project listed.

![image](https://github.com/SyedaMahamFahim/syedamaham.dev/assets/79671325/9e4a5961-8c90-4775-909f-dcc365959bd4)

#### 12. Copy the Project ID

- Click on the project to view its details and copy the project ID.

![image](https://github.com/SyedaMahamFahim/syedamaham.dev/assets/79671325/9de91368-c752-4d5c-bce8-4b90df84efd6)

#### 13. Deleting the New Sanity Project

- In your code editor, delete the **sanity** project folder that you recently created. Be sure to only delete the **sanity** folder and keep the **sanity2** folder intact.

![image](https://github.com/SyedaMahamFahim/syedamaham.dev/assets/79671325/ed89de9a-ba82-4509-b1a8-626af60d846d)

#### 14. Renaming the Folder

- Rename **sanity2** back to **sanity** to avoid copying schemas manually.

#### 15. Creating an Environment File

- Create an `env.local` file in your project's root directory to store environment variables or rename the existing `env.example` to `env.local`.

![image](https://github.com/SyedaMahamFahim/syedamaham.dev/assets/79671325/62391c16-8cc5-4233-a765-9903b331a779)

#### 16. Environment Variables

- Add the required environment variables to your `env.local` file. You don't need to search for all of them; you can simply paste the copied project ID. Ignore the other one if you are not planning to use it in a producation 

![image](https://github.com/SyedaMahamFahim/syedamaham.dev/assets/79671325/933c871f-2a7c-4b03-82e9-61d722971c22)

#### 17. Creating a Sanity Token

- Visit the Sanity dashboard at https://www.sanity.io/manage/personal/projects, select your project, and navigate to the API section to create a new token.

![image](https://github.com/SyedaMahamFahim/syedamaham.dev/assets/79671325/12b986b1-d758-42ca-94da-8dc25eaa6003)

#### 18. Token Configuration

- Name your token and ensure it is set to read-only access.

![image](https://github.com/SyedaMahamFahim/syedamaham.dev/assets/79671325/3dc94d2b-ff5a-4128-95e0-82a07bbf88f8)

#### 19. Importing Demo Data

- Import the provided demo data to save time. Execute this command in your terminal:

```bash
sanity dataset import production.tar.gz
```
![image](https://github.com/SyedaMahamFahim/syedamaham.dev/assets/79671325/6aced6fd-eb01-4b2e-a3cc-c530e9b27516)


#### 20. Sanity Studio

- After importing the data, run your website locally and access the Sanity Studio at `localhost/studio`. Follow any prompts to log in and grant access to localhost.

#### 21. Data
- Now, you can see data is imported successfully
![image](https://github.com/SyedaMahamFahim/syedamaham.dev/assets/79671325/2e43cf48-d801-4ec2-b7bb-a91828f585b7)

#### 22. Working Website 
- Now you will see that the website is now functioning successfully on the local system.
![image](https://github.com/SyedaMahamFahim/syedamaham.dev/assets/79671325/ffb3193f-3083-4395-ab83-0ed7656b0d03)

---

Following these steps should help you set up your project with Sanity, import demo data, and access it seamlessly. If you have any questions or encounter any issues, please feel free to ask for assistance.


[integration]: https://www.sanity.io/docs/vercel-integration?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[`.env.local.example`]: .env.local.example
[nextjs]: https://github.com/vercel/next.js
[sanity-create]: https://www.sanity.io/get-started/create-project?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-deployment]: https://www.sanity.io/docs/deployment?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-homepage]: https://www.sanity.io?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-community]: https://slack.sanity.io/
[sanity-schema-types]: https://www.sanity.io/docs/schema-types?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-github]: https://github.com/sanity-io/sanity/discussions
[sanity-groq]: https://www.sanity.io/docs/groq?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-content-modelling]: https://www.sanity.io/docs/content-modelling?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[sanity-webhooks]: https://www.sanity.io/docs/webhooks?utm_source=github.com&utm_medium=referral&utm_campaign=nextjs-v3vercelstarter
[localhost-3000]: http://localhost:3000
[localhost-3000-studio]: http://localhost:3000/studio
[vercel-isr]: https://nextjs.org/blog/next-12-1#on-demand-incremental-static-regeneration-beta
[vercel]: https://vercel.com
[vercel-github]: https://github.com/vercel/next.js/discussions
[app-dir]: https://beta.nextjs.org/docs/routing/fundamentals#the-app-directory
