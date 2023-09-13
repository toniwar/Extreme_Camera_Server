const express = require("express");
const router = express.Router();
const elements = { 
    samples: [
        {
        id:1,
        title: "Tornado_1",
        img: "https://github.com/toniwar/Extreme_Camera_Server/blob/master/images/tornado_1.png?raw=true"
    },
    {
        id:2,
        title: "Tornado_2",
        img:"https://github.com/toniwar/Extreme_Camera_Server/blob/master/images/tornado_2.png?raw=true"
    },
    {
        id:3,
        title: "Tornado_3",
        img: "https://github.com/toniwar/Extreme_Camera_Server/blob/master/images/tornado_3.png?raw=true"
    }
]
}

router.get("/destructive_element", (req, res)=>{
    res.send(elements);
})

module.exports = router;