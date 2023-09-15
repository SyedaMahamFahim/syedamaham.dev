Certainly, here are the installation and setup instructions in Markdown format:


## Installation and Setup Instructions

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

To set up Sanity for your project and get it working with demo data, please follow these steps:

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

![Sanity Configuration](https://github.com/SyedaMahamFahim/syedamaham-blog/assets/79671325/5ffe911f-1dcf-4ee2-8b75-6aeb558835b2)

#### 10. Two Sanity Projects

- After completing the setup, you will now have two Sanity projects: **sanity** and **sanity2**.

![Two Sanity Projects](https://github.com/SyedaMahamFahim/syedamaham-blog/assets/79671325/c38687d0-c182-40e9-b966-71b034d5379e)

#### 11. Project ID

- Visit your Sanity account at https://www.sanity.io/manage/personal/projects, and you will see your new project listed.

![Sanity Project Listing](https://github.com/SyedaMahamFahim/syedamaham-blog/assets/79671325/dcc21a3f-113c-456c-ad35-3b7346e89e34)

#### 12. Copy the Project ID

- Click on the project to view its details and copy the project ID.

![Copy Project ID](https://github.com/SyedaMahamFahim/syedamaham-blog/assets/79671325/d81ef4f7-6e4f-469b-bf04-7d2bebd3f630)

#### 13. Deleting the New Sanity Project

- In your code editor, delete the **sanity** project folder that you recently created. Be sure to only delete the **sanity** folder and keep the **sanity2** folder intact.

![Delete Sanity Project](https://github.com/SyedaMahamFahim/syedamaham-blog/assets/79671325/bf628814-be43-4f4a-ba46-c3a42bb402df)

#### 14. Renaming the Folder

- Rename **sanity2** back to **sanity** to avoid copying schemas manually.

#### 15. Creating an Environment File

- Create an `env.local` file in your project's root directory to store environment variables or rename the existing `env.example` to `env.local`.

![Create Environment File](https://github.com/SyedaMahamFahim/syedamaham-blog/assets/79671325/465079c9-a30f-420e-ae18-6d95cd6edc39)

#### 16. Environment Variables

- Add the required environment variables to your `env.local` file. You don't need to search for all of them; you can simply paste the copied project ID.

![Environment Variables](https://github.com/SyedaMahamFahim/syedamaham-blog/assets/79671325/afe0e305-b411-4350-85a5-f7bac93dff31)

#### 17. Creating a Sanity Token

- Visit the Sanity dashboard at https://www.sanity.io/manage/personal/projects, select your project, and navigate to the API section to create a new token.

![Create Sanity Token](https://github.com/SyedaMahamFahim/syedamaham-blog/assets/79671325/193c9260-a572-4ef6-8343-65eab1e0670f)

#### 18. Token Configuration

- Name your token and ensure it is set to read-only access.

![Token Configuration](https://github.com/SyedaMahamFahim/syedamaham-blog/assets/79671325/ab966ae4-0a02-4c8a-8064-f5ee09dda4bb)

#### 19. Importing Demo Data

- Import the provided demo data to save time. Execute this command in your terminal:

```bash
sanity dataset import production.tar.gz
```

#### 20. Sanity Studio

- After importing the data, run your website locally and access the Sanity Studio at `localhost/studio`. Follow any prompts to log in and grant access to localhost.

---

Following these steps should help you set up your project with Sanity, import demo data, and access it seamlessly. If you have any questions or encounter any issues, please feel free to ask for assistance.
```

