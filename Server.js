import http from "http"

const names = ["gaurav" , "saurav"]
const server = http.createServer((req,res) => {
if(req.method === "GET"){
    res.writeHead(200,{"Content-Type" : "application/json"})
    res.end(JSON.stringify(names))
}

else if(req.method === "POST"){
    res.writeHead(200,{"Content-Type" : "application/json"})
    req.on("data" , (data) =>{
        const dataString = data.toString()
        if(dataString.includes(",")){
            const newData = dataString.split(",")
            names.push(...newData)
        }
        else{
            names.push(dataString)
        }
    })
    res.end(JSON.stringify(names))
}
}).listen(3000)