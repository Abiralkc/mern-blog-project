const Blog = require("../../model/blog")
const getOne = async(req,res) =>{
  
  try{
        const {id} = req.params;
        const blog = await Blog.findById(id);

        if (!blog){
            return res.status(400).send({
                message: `${id} blog not found`
            });
        }

        res.status(200).send({
            data : blog
        })
     } catch (e) {
        res.status(400).send({
            data:e.message ? e.message : "Failed to get blogs",
        })
     }
 
};

module.exports = getOne;