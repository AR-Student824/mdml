/* =====
* MDML
* By AbyssDev (replit.com/@lostintheabyss)
* If you are using MDML for production (anything public),
* You must keep all credits to MDML on your project
* ----> Do **NOT** edit this file if you don't know
* ----> what you're doing. Go to the pages folder to edit
* ----> the site.
===== */
const app=require("express")(),fs=require("fs");app.set("views","static"),fs.readdirSync("./pages").forEach(e=>{const r=fs.readdirSync("./pages/").filter(e=>e.endsWith(".md"));for(let e of r)"index.md"==e?fs.readFile(`./pages/${e}`,"utf8",(r,s)=>{if(r)return console.error(r);app.get(`/${e.split(".")[0].replace("index","")}`,(e,r)=>{r.render("render.ejs",{data:require("marked")(s)})})}):fs.readFile(`./pages/${e}`,"utf8",(r,s)=>{if(r)return console.error(r);app.get(`/${e.split(".")[0]}`,(e,r)=>{r.render("render.ejs",{data:require("marked")(s)})})})}),app.get("/styles/:file",(e,r)=>{r.sendFile(__dirname+`/static/styles/${e.params.file}`)}),app.get("/__mdml",(e,r)=>{r.json(!0)}),app.listen(3e3,()=>{console.log("[MDML v1.0.0] Ready to serve MDML webserver")});