import express from "express"
/* import data from "./data.json" assert { type: "json" }

import fs from "fs"
 */
import connectDb from "./db/connection"




app.use(express.urlencoded({ extended: false }))

connectDb().then(() => {
    app.listen(8000, () => {
        console.log("server listening at port 8000")
    })
}).catch((err) => {
    console.log("err", err)
})



/* app.get("/user/:id", (req, res) => {
    const id = Number(req.params.id)
    const data1 = User.find((user) => user.id === id)
    res.json(data1)
}) */


//==========------User Register----------===========
app.post("/user/register", async (req, res) => {
    const body = req.body
    /*   console.log(body) */
    await User.create({
        firstName: body.firstName,
        lastName: body.lastName,
        gender: body.gender,
    })
    return res.status(201).json({ status: "User Created Successfully" })
    /*   data.push({ ...body, id: data.length + 1 })
    fs.writeFile("./data.json", JSON.stringify(data), (err, data1) => {
        return res.json({ status: "done" })
    }) */
})

//======----
app.get("/user/find/:id", async (req, res) => {
    const id = (req.params.id)
    const exist = await User.findById(id)

    if (!exist) return res.status(404).json({ status: "User not found" })
    return res.json(exist)
    /*     console.log(exist)
        data.splice(exist, 1)
         fs.writeFile("./data.json", JSON.stringify(data), (err, data1) => {
             return res.json({ status: "done" })
         })  */

})
app.patch("/user/update/:id", async (req, res) => {
    const id = (req.params.id)
    await User.findByIdAndUpdate(id, { lastName: "Hero changed" })
    return res.json({ status: "Successfully changed" })

    /*     data.splice(exist, 1)
         fs.writeFile("./data.json", JSON.stringify(data), (err, data1) => {
             return res.json({ status: "done" })
         })  */

})
app.delete("/user/delete/:id", async (req, res) => {
    const id = (req.params.id)
    await User.findByIdAndDelete(id)
    return res.json({ status: "Successfully deleted" })

    /*     data.splice(exist, 1)
         fs.writeFile("./data.json", JSON.stringify(data), (err, data1) => {
             return res.json({ status: "done" })
         })  */

})

