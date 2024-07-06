//import {readFile,writeFile} from 'fs';
import { writeFile, readFile } from "fs";
let emp=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
]
writeFile('emp.json',JSON.stringify(emp),'utf-8',(err,data)=>{
    if(err)throw err;
});
readFile('emp.json','utf-8',(err,data)=>{
    if(err)throw err;
    let empjson=JSON.parse(data);
    console.log(empjson);
});