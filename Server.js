import http from "http"

const names = ["gaurav", "saurav"]

const server = http.createServer((req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" })
    res.end(JSON.stringify(names))
  } 
  
  else if (req.method === "POST") {
    res.writeHead(200, { "Content-Type": "application/json" })
    req.on("data", (data) => {
      const dataString = data.toString()
      if (dataString.includes(",")) {
        const newData = dataString.split(",")
        names.push(...newData)
      } else {
        names.push(dataString)
      }
    })
    req.on("end", () => {
      res.end(JSON.stringify(names))
    })
  }
  
  else if (req.method === "PUT") {
    res.writeHead(200, { "Content-Type": "application/json" })
    req.on("data", (data) => {
      const dataString = data.toString()
      if (dataString.includes(",")) {
        const newData = dataString.split(",")
        names.splice(0, names.length, ...newData)
      } else {
        names.splice(0, names.length, dataString)
      }
    })
    req.on("end", () => {
      res.end(JSON.stringify(names))
    })
  }
  
  else if (req.method === "DELETE") {
    res.writeHead(200, { "Content-Type": "application/json" })
    names.splice(0, names.length)
    res.end(JSON.stringify(names))
  }

  else if(req.method === "PATCH"){
    res.writeHead(200, {"Content-Type" : "application/json"})
    req.on("data" , (data) => {
      const newData = data.toString()
      if(newData.includes(",")){
        const split = newData.split(",")
        split.forEach((name, index) => {
          if(names[index]){
            names[index] = name
          }
          else{
            names.push(name)
          }
        })
      }
      else{
        names.splice(0,1,newData)
      }
    })
    req.on("end" , () => {
      res.end(JSON.stringify(names))
    })
  }
})

server.listen(3000, () => {
  console.log("Server started at port 3000")
})