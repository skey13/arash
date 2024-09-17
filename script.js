const sidebar = document.querySelector(".sidebar");
const sidebarclose = document.querySelector("#sidebar-close");
const menu = document.querySelector(".menu-content");
const menuitems = document.querySelectorAll(".sub-menu");
const menutiltle = document.querySelectorAll(".subemenu  .menu-tittle");

sidebarclose.addEventListener("click" , () => {
  sidebar.classList.toggle("close")
})

menuitems.forEach((item, index) => {
  item.addEventListener("click" , () => {
    menu.classList.add("submenu-active");
    item.classList.add("show-menu");
    menuitems.forEach((item2,index2) => {
      if(index !== index2){
        item2.classList.remove("show-menu")
      }
    })
  })
});

menutiltle.forEach(title => {
   title.addEventListener("click" , () => {
    menu.classList.remove("submenu-active");
   })
})
console.log(menuitems,menutiltle);