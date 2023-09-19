const express = require("express");
const router = express.Router();
const elements = { 
    samples: [
        {
        id:1,
        title: "Tornado 1",
        img: "https://github.com/toniwar/Extreme_Camera_Server/blob/master/images/tornado_1.png?raw=true"
    },
    {
        id:2,
        title: "Tornado 2",
        img:"https://github.com/toniwar/Extreme_Camera_Server/blob/master/images/tornado_2.png?raw=true"
    },
    {
        id:3,
        title: "Tornado 3",
        img: "https://github.com/toniwar/Extreme_Camera_Server/blob/master/images/tornado_3.png?raw=true"
    },

    {
        id:4,
        title: "Black hole",
        img: "https://github.com/toniwar/Extreme_Camera_Server/blob/master/images/black_hole.png?raw=true"
    },

    {
        id:5,
        title: "Meteor 1",
        img: "https://github.com/toniwar/Extreme_Camera_Server/blob/master/images/meteor1.png?raw=true"
    },

    {
        id:6,
        title: "Meteor 2",
        img: "https://github.com/toniwar/Extreme_Camera_Server/blob/master/images/meteor2.png?raw=true"
    },

    {
        id:7,
        title: "UFO",
        img: "https://github.com/toniwar/Extreme_Camera_Server/blob/master/images/ufo_icon.png?raw=true"
    },
    {
        id:8,
        title: "Death Star",
        img: "https://github.com/toniwar/Extreme_Camera_Server/blob/master/images/death_star.png?raw=true"
    }

]
}

router.get("/destructive_element", (req, res)=>{
    res.send(elements);
})

module.exports = router;