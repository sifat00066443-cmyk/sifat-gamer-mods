/*
  SIFAT GAMER MOD WEBSITE
  Add your own mods inside the MODS array below.
  IMPORTANT: replace every mediafire URL with your real MediaFire download URL.
*/

const MODS = [
  {
    name: "Minecraft Patch 1.21.124",
    version: "1.21.124",
    category: "Patch",
    image: "assets/minecraft.svg",
    description: "Minecraft patch/download entry. Replace this with your own description.",
    url: "https://www.mediafire.com/"
  },
  {
    name: "Infinity Client",
    version: "Bedrock 26.33+",
    category: "Client",
    image: "assets/infinity.svg",
    description: "Your Minecraft Bedrock client or utility pack.",
    url: "https://www.mediafire.com/file/mhkig6mv4ep63cx/Infinity_Client.mcpack/file"
  },
  {
    name: "SIFAT GAMER Texture Pack",
    version: "Bedrock 26.33+",
    category: "Texture Pack",
    image: "assets/texture.svg",
    description: "Add your texture pack description here.",
    url: "https://www.mediafire.com/"
  },
  {
    name: "Create Bedrock Addon",
    version: "Latest",
    category: "Addon",
    image: "assets/create.svg",
    description: "Your Create-style Bedrock addon download.",
    url: "https://www.mediafire.com/"
  }
];

const state = { category:"All", search:"", page:1, perPage:6 };

const grid = document.getElementById("modGrid");
const empty = document.getElementById("empty");
const pageInfo = document.getElementById("pageInfo");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

function categories(){
  const list = ["All", ...new Set(MODS.map(m=>m.category))];
  document.getElementById("categories").innerHTML = list.map(c =>
    `<button class="cat ${c===state.category?"active":""}" data-cat="${escapeHtml(c)}">${escapeHtml(c)}</button>`
  ).join("");
  document.querySelectorAll(".cat").forEach(b=>b.onclick=()=>{
    state.category=b.dataset.cat; state.page=1; categories(); render();
  });
}

function filtered(){
  const q=state.search.trim().toLowerCase();
  return MODS.filter(m=>{
    const categoryOk=state.category==="All" || m.category===state.category;
    const searchOk=!q || `${m.name} ${m.version} ${m.category} ${m.description}`.toLowerCase().includes(q);
    return categoryOk && searchOk;
  });
}

function render(){
  const data=filtered();
  const pages=Math.max(1,Math.ceil(data.length/state.perPage));
  if(state.page>pages) state.page=pages;
  const start=(state.page-1)*state.perPage;
  const shown=data.slice(start,start+state.perPage);
  grid.innerHTML=shown.map(m=>`
    <article class="card">
      <img class="thumb" src="${escapeAttr(m.image)}" alt="">
      <div>
        <h3>${escapeHtml(m.name)}</h3>
        <div class="meta">${escapeHtml(m.category)} • ${escapeHtml(m.version)}</div>
        <p class="desc">${escapeHtml(m.description)}</p>
        <a class="download" href="${escapeAttr(m.url)}" target="_blank" rel="noopener">DOWNLOAD</a>
      </div>
    </article>
  `).join("");
  empty.classList.toggle("hidden",data.length!==0);
  pageInfo.textContent=`Page ${state.page} / ${pages}`;
  prevBtn.disabled=state.page<=1;
  nextBtn.disabled=state.page>=pages;
}

function escapeHtml(s){return String(s).replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c]))}
function escapeAttr(s){return escapeHtml(s)}

document.getElementById("search").addEventListener("input",e=>{
  state.search=e.target.value; state.page=1; render();
});
prevBtn.onclick=()=>{if(state.page>1){state.page--;render();window.scrollTo({top:350,behavior:"smooth"})}};
nextBtn.onclick=()=>{state.page++;render();window.scrollTo({top:350,behavior:"smooth"})};
document.getElementById("year").textContent=new Date().getFullYear();

categories();
render();
