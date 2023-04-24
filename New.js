import http from "http"

const subject = ["science" , "mathematics" ,"social-science"]

const server = http.createServer((req,res) => {
    if(req.method === "GET"){
        res.writeHead(200 , {"Content-Type" : "application/json"})
        res.end(JSON.stringify(subject))
    }

    else if(req.method === "POST"){
        res.writeHead(200, {"Content-Type" : "application/json"})
        req.on("data" , (data) => {
            const newData = data.toString()
            if(newData.includes(",")){
                const split = newData.split(",")
                subject.push(...split)
            }
            else{
                subject.push(newData)
            }
        })

        req.on("end" , () => {
            res.end(JSON.stringify(subject))
        })
    }

    else if(req.method === "PUT"){
        res.writeHead(200, {"Content-Type" : "application/json"})
        req.on("data" , (data) => {
            const newData = data.toString()
            if(newData.includes(",")){
                const split = newData.split(",")
                subject.splice(0,subject.length,...split)
            }
            else{
                subject.splice(0,subject.length,newData)
            }
        })

        req.on("end" , () => {
            res.end(JSON.stringify(subject))
        })
    }

    else if(req.method === "DELETE"){
        res.writeHead(200, {"Content-Type" : "application/json"})
        subject.splice(0,subject.length)
        res.end(JSON.stringify(subject))
    }
})

server.listen(3000,() => {
    console.log("server started at port 3000")
})