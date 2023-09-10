const demoArticle = {
  publishedAt: "2023-08-04T13:15:00.000Z",
  _rev: "NrJVS9LrQr6rppmJ4tvVL9",
  body: [
    {
      markDefs: [
        {
          _type: "link",
          _key: "3c22fafcc0e1",
        },
        {
          _type: "link",
          _key: "4be601139633",
        },
        {
          _type: "internalLink",
          _key: "0c93e636c7ba",
        },
        {
          _type: "internalLink",
          _key: "7a7de04843df",
        },
      ],
      children: [
        {
          _type: "span",
          marks: ["3c22fafcc0e1"],
          text: "In",
          _key: "c965136db0fc",
        },
        {
          _type: "span",
          marks: [],
          text: " the previous blog post, we ",
          _key: "cbe68f7470f1",
        },
        {
          _type: "span",
          marks: ["4be601139633"],
          text: "learned",
          _key: "10a855b7a120",
        },
        {
          _type: "span",
          marks: [],
          text: " about ",
          _key: "7d57f971b51a",
        },
        {
          _type: "span",
          marks: ["strong", "em"],
          text: "Docker",
          _key: "35ed289f2b56",
        },
        {
          _type: "span",
          marks: [],
          text: " and its importance in the world of software development. Now, we will guide you through the process of installing Doc",
          _key: "705ae3cdfe99",
        },
        {
          _type: "span",
          marks: ["0c93e636c7ba"],
          text: "ke",
          _key: "93c7dcfcdbc2",
        },
        {
          _type: "span",
          marks: [],
          text: "r on your Windows",
          _key: "bd272ab3884d",
        },
        {
          _type: "span",
          marks: ["7a7de04843df"],
          text: " machine.",
          _key: "e8d1155079e9",
        },
      ],
      _type: "block",
      style: "normal",
      _key: "1c05a7b3b61c",
    },
    {
      _key: "092d1d6fe6ce",
      markDefs: [],
      children: [
        {
          marks: [],
          text: "This is Heading H1:",
          _key: "4e789ae0dace",
          _type: "span",
        },
      ],
      _type: "block",
      style: "h1",
    },
    {
      style: "h2",
      _key: "9087888530ac",
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "This is Heading H2:",
          _key: "5ea818fe3fdb",
        },
      ],
      _type: "block",
    },
    {
      style: "h3",
      _key: "2f95865bf571",
      markDefs: [],
      children: [
        {
          _key: "d5cfd86c71b7",
          _type: "span",
          marks: [],
          text: "This is Heading H3:",
        },
      ],
      _type: "block",
    },
    {
      _type: "block",
      style: "h4",
      _key: "1109121df5ce",
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "This is ",
          _key: "65d945c73c98",
        },
        {
          _type: "span",
          marks: ["underline"],
          text: "Heading ",
          _key: "6129ceb38211",
        },
        {
          _type: "span",
          marks: [],
          text: "H4:",
          _key: "bdba5932681e",
        },
      ],
    },
    {
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "",
          _key: "cb030a92f099",
        },
      ],
      _type: "block",
      style: "h1",
      _key: "f2186ed0f086",
    },
    {
      code: "'use client'\nimport { useState } from 'react';\nimport { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';\nimport { coldarkDark} from 'react-syntax-highlighter/dist/esm/styles/prism'; \n\nconst CopyableCodeBlock = ({ children }) => {\n  const [isCopied, setIsCopied] = useState(false);\n  const handleCopyClick = () => {\n    const textToCopy = children[0];\n\n    navigator.clipboard.writeText(textToCopy).then(() => {\n      setIsCopied(true);\n      setTimeout(() => setIsCopied(false), 2000); // Reset the copied state after 2 seconds\n    });\n  };\n\n  const code = `\n    const greeting = \"Hello, world!\";\n    console.log(greeting);\n  `;\n  const language=\"js\"\n\n  return (\n    <div className=\"relative\">\n      <div className=\"absolute top-0 right-0 p-2\">\n        <button\n          onClick={handleCopyClick}\n          className=\"bg-blue-900 text-white p-1 rounded-lg text-sm\"\n        >\n          {isCopied ? 'Copied' : 'Copy'}\n        </button>\n      </div>\n\n\n      {/* <code className=\"text-white bg-blue-900 p-8 rounded-lg text-sm leading-tight mt-8 mb-8 block\"\n      >\n        {children}\n      </code> */}\n        <SyntaxHighlighter\n        // style={dark}\nstyle={coldarkDark}\n        language={'docker'}\n        wrapLines={true}\n        // customStyle=\"text-white bg-blue-900 p-8 rounded-lg text-sm leading-tight mt-8 mb-8 block\"\n      >\n        {children}\n      </SyntaxHighlighter>\n      {/* <Refractor language={language} value={code} /> */}\n\n    </div>\n  );\n};\n\nexport default CopyableCodeBlock;\n",
      _type: "code",
      language: "jsx",
      _key: "f27e8c706ce5",
    },
    {
      markDefs: [],
      children: [
        {
          _key: "43f1c3aa60ea",
          _type: "span",
          marks: [],
          text: "Windows 10 or later (64-bit)",
        },
      ],
      level: 1,
      _type: "block",
      style: "normal",
      _key: "2985bedcdf32",
      listItem: "bullet",
    },
    {
      level: 1,
      _type: "block",
      style: "normal",
      _key: "f5ae17ce1e66",
      listItem: "bullet",
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "At least 4GB of RAM",
          _key: "f19e7b6eead7",
        },
      ],
    },
    {
      _key: "10e2fe7c9ad2",
      listItem: "bullet",
      markDefs: [],
      children: [
        {
          _key: "6f78cffec8cd",
          _type: "span",
          marks: [],
          text: "At least 1GB of free disk space",
        },
      ],
      level: 1,
      _type: "block",
      style: "normal",
    },
    {
      children: [
        {
          _type: "span",
          marks: [],
          text: "",
          _key: "f414e7f678a3",
        },
      ],
      _type: "block",
      style: "h1",
      _key: "2b4b1a4594a5",
      markDefs: [],
    },
    {
      asset: {
        _ref: "image-809659b8b07e8aa0edf815bc547026ae9c80b086-1242x768-png",
        _type: "reference",
      },
      _type: "image",
      alt: "Download Image",
      _key: "6991ac4b0235",
    },
    {
      style: "h1",
      _key: "1eea09dc5cae",
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "Step 1: Download Docker Desktop",
          _key: "24893f6a2b1b",
        },
      ],
      _type: "block",
    },
    {
      children: [
        {
          _type: "span",
          marks: [],
          text: "The first step to ",
          _key: "3ee6f8162ba2",
        },
        {
          _type: "span",
          marks: ["strike-through"],
          text: "installing ",
          _key: "da494058b0aa",
        },
        {
          _type: "span",
          marks: [],
          text: "Docker on Windows is to download Docker Desktop. You can download the latest version of Docker Desktop from the official Docker website at ",
          _key: "93e243ac1294",
        },
        {
          _key: "fe50187e04c1",
          _type: "span",
          marks: ["strong", "d4b9848cda5e"],
          text: "docker.com/products/docker-desktop",
        },
        {
          _type: "span",
          marks: [],
          text: ".",
          _key: "385a53a8de08",
        },
      ],
      _type: "block",
      style: "normal",
      _key: "be32e0452af1",
      markDefs: [
        {
          _type: "link",
          href: "https://www.docker.com/products/docker-desktop",
          _key: "d4b9848cda5e",
        },
      ],
    },
    {
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "Step 2: Install Docker Desktop",
          _key: "e6123d2f6614",
        },
      ],
      _type: "block",
      style: "h1",
      _key: "27c10112c6e5",
    },
    {
      children: [
        {
          _type: "span",
          marks: [],
          text: "Once you have downloaded the Docker Desktop installer, double-click the .exe file to begin the installation process. The Docker Desktop installer will guide you through the installation process.",
          _key: "dbab438979fc",
        },
      ],
      _type: "block",
      style: "normal",
      _key: "7da481d7702a",
      markDefs: [],
    },
    {
      style: "h1",
      _key: "1ce5cad008a9",
      markDefs: [],
      children: [
        {
          text: "Step 3: Enable Hyper-V and Containers",
          _key: "15a580fd6f39",
          _type: "span",
          marks: [],
        },
      ],
      _type: "block",
    },
    {
      children: [
        {
          _type: "span",
          marks: [],
          text: "Docker Desktop requires Hyper-V to be enabled on your Windows machine. If Hyper-V is not already enabled on your machine, the Docker Desktop installer will prompt you to enable it during the installation process. You will also need to enable the Windows Containers feature.",
          _key: "51032d0a76b2",
        },
      ],
      _type: "block",
      style: "normal",
      _key: "f74d7ca4a40d",
      markDefs: [],
    },
    {
      _key: "2ca99bfd3b6d",
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "To enable Hyper-V and Containers, follow these steps:",
          _key: "3d0712ca8ca1",
        },
      ],
      _type: "block",
      style: "normal",
    },
    {
      listItem: "number",
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "Open the Control Panel",
          _key: "26f0923f6862",
        },
      ],
      level: 1,
      _type: "block",
      style: "normal",
      _key: "1d388b1fd380",
    },
    {
      markDefs: [],
      children: [
        {
          _key: "f4b6bec7aab0",
          _type: "span",
          marks: [],
          text: "Click on Programs and Features",
        },
      ],
      level: 1,
      _type: "block",
      style: "normal",
      _key: "7b538f484d75",
      listItem: "number",
    },
    {
      level: 1,
      _type: "block",
      style: "normal",
      _key: "a35521e48a80",
      listItem: "number",
      markDefs: [],
      children: [
        {
          marks: [],
          text: "Click on Turn Windows features on or off",
          _key: "702133d57060",
          _type: "span",
        },
      ],
    },
    {
      _type: "block",
      style: "normal",
      _key: "7e3cb590867c",
      listItem: "number",
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "Scroll down to Hyper-V and check the box to enable it",
          _key: "9e543ffddfe1",
        },
      ],
      level: 1,
    },
    {
      level: 1,
      _type: "block",
      style: "normal",
      _key: "d38d226bdc8a",
      listItem: "number",
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "Scroll down to Windows Containers and check the box to enable it",
          _key: "0daadc6ae890",
        },
      ],
    },
    {
      style: "normal",
      _key: "6430a62b2707",
      listItem: "number",
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "Click OK to save the changes and close the window",
          _key: "5667f8408012",
        },
      ],
      level: 1,
      _type: "block",
    },
    {
      children: [
        {
          _type: "span",
          marks: [],
          text: "Step 4: Verify Docker Installation",
          _key: "f507b8391dd2",
        },
      ],
      _type: "block",
      style: "h1",
      _key: "9806362256b6",
      markDefs: [],
    },
    {
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "After the installation is complete, open a command prompt or PowerShell window and run the following command to verify that Docker is installed correctly:",
          _key: "aeed876edcfc",
        },
      ],
      _type: "block",
      style: "normal",
      _key: "87032ad97245",
    },
    {
      _type: "block",
      style: "normal",
      _key: "d9ee30a49c75",
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "COPY",
          _key: "ca10189a38fd",
        },
      ],
    },
    {
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: ["code"],
          text: "docker --version\n",
          _key: "8b36f389be5b",
        },
      ],
      _type: "block",
      style: "normal",
      _key: "a1a148c2fcc6",
    },
    {
      style: "normal",
      _key: "0512b11f22ce",
      markDefs: [],
      children: [
        {
          marks: [],
          text: "This command should display the version of Docker that you just installed.",
          _key: "3f0f50acc49c",
          _type: "span",
        },
      ],
      _type: "block",
    },
    {
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "Step 5: Test Docker Installation To test that Docker is working correctly, run the following command in the command prompt or PowerShell window",
          _key: "a75fe4758a83",
        },
      ],
      _type: "block",
      style: "normal",
      _key: "d6ab810fdf1d",
    },
    {
      children: [
        {
          marks: [],
          text: "",
          _key: "248116321abd",
          _type: "span",
        },
      ],
      _type: "block",
      style: "normal",
      _key: "c8d86bd46454",
      markDefs: [],
    },
    {
      children: [
        {
          text: "docker run hello-world\n",
          _key: "de0c8ef19ca8",
          _type: "span",
          marks: ["code"],
        },
      ],
      _type: "block",
      style: "normal",
      _key: "4bd7133491b6",
      markDefs: [],
    },
    {
      _type: "block",
      style: "normal",
      _key: "082f73eb2e80",
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: 'This command will download a small Docker image and run it in a container. If Docker is working correctly, you should see a message that says "',
          _key: "efd8989260ae",
        },
        {
          _type: "span",
          marks: ["code"],
          text: "Hello from Docker",
          _key: "34aa06642ff3",
        },
        {
          marks: [],
          text: '!".',
          _key: "0bb520222d63",
          _type: "span",
        },
      ],
    },
    {
      _type: "block",
      style: "normal",
      _key: "4da71af732b5",
      markDefs: [],
      children: [
        {
          _type: "span",
          marks: [],
          text: "Congratulations! You have successfully installed Docker on your Windows machine. You can now use Docker to package, deploy, and run your applications in containers.",
          _key: "9039e18eb82f",
        },
      ],
    },
  ],
  meta_description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and",
  mainImage: {
    asset: {
      _ref: "image-b44ad4141fe5971dbbef618a915e672d5a13ffce-1242x768-png",
      _type: "reference",
    },
    _type: "image",
    alt: "docker",
  },
  slug: {
    current: "new-post",
    _type: "slug",
  },
  author: {
    _ref: "4bac3e06-9613-4a8d-9842-db9e403e2492",
    _type: "reference",
  },
  title: "New Post ",
  _updatedAt: "2023-08-21T15:50:33Z",
  _type: "post",
  _id: "3f376f82-a20c-427a-9c8f-64faac5bbf05",
  categories: [
    {
      _ref: "1642445a-8e5d-4cb0-b922-1a1d348067b7",
      _type: "reference",
      _key: "c54bbedadc06",
    },
  ],
  tags: [
    {
      _type: "reference",
      _key: "ca4a9b41eff4",
      _ref: "1f8860ee-fd8b-4af9-8e30-d64585cf0667",
    },
  ],
  series: {
    _ref: "cc867ea7-3ec6-4c2e-8bf9-6dd4da787621",
    _type: "reference",
  },
  _createdAt: "2023-08-21T13:13:58Z",
};

export default demoArticle;
