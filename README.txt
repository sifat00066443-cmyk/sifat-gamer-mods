# SIFAT GAMER MOD WEBSITE

## 1. Put your MediaFire links
Open `script.js`.

Find:
    url: "https://www.mediafire.com/"

Replace it with your real MediaFire file link.

Example:
    url: "https://www.mediafire.com/file/XXXXXXXX/MyAddon.mcaddon/file"

## 2. Add a new mod
Copy one object inside the MODS array:

{
  name: "My New Addon",
  version: "26.33+",
  category: "Addon",
  image: "assets/minecraft.svg",
  description: "My addon description.",
  url: "YOUR_MEDIAFIRE_LINK"
},

You can use these categories:
Patch, Client, Texture Pack, Addon, Shader, Other

## 3. Change website name/social links
Open `index.html`.
Change:
- SIFAT GAMER
- Welcome to the Link Bank
- YouTube / Instagram / Discord href="#"

## 4. Publish for free with GitHub Pages
1. Create a GitHub account.
2. Create a new public repository.
3. Upload all files/folders from this ZIP.
4. Open Settings -> Pages.
5. Select "Deploy from a branch".
6. Select the main branch and `/ (root)`.
7. Save.
8. GitHub will give you your website address.

## Important
This version uses MediaFire as the file host. The website does NOT upload files to MediaFire automatically.
You upload your .mcpack/.mcaddon/.zip to MediaFire, then paste the MediaFire link into script.js.

No database or server is required for this version.
