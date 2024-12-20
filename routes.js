require("dotenv").config({ path: "./.env" });
const express = require("express");

const BlogModel = require("./models/modelBlog");
const TeamModel = require("./models/modelTeam");
const MessageModel = require("./models/modelMessage");
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var mongoose_delete = require('mongoose-delete');

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const fs = require('fs');
const app = express();
const mongoose = require("mongoose");

const { Console } = require("console");


// var cors = require('cors')

// var corsOptions = { 
//   origin: 'http://localhost:8100',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }
// filter 1156

// app.get("/", async (req, res) => {
//   res.sendFile(__dirname + "/main.html");
// });

// serve your css as static
app.use(express.static(__dirname));
app.get("/privacy_policy", async (req, res) => {
  // res.json({ message: "Privacy Policy." });
  res.sendFile(__dirname + "/privacy_policy.html");

});
app.get('/home', (req, res) => {
  res.status(200).json('Welcome, your app is working well');
});

app.get("/delete_data", async (req, res) => {
  // res.json({ message: "Privacy Policy." });
  res.sendFile(__dirname + "/delete_data.html");
  //   fs.readFile('./privacy_policy.html', null, function (error, data) {
  //     if (error) {
  //         // response.writeHead(404);
  //         respone.write('Whoops! File not found!');
  //     } else {
  //         response.write(data);
  //     }
  //     response.end();
  // });
});
//////////////////////////////////send mail/////////////////////////////////////////////////////////////////////////////
// app.post("/send-mailjet", async (req, res) => {
//   try {
//       const response = await mailjetService.sendMail(req, res);
//       res.status(200).json({
//           status: "success",
//           message: "Email sent successfully",
//           data: response,
//       });
//   } catch (error) {
//       res.status(400).json({
//           status: "error",
//           message: "Email not sent",
//       });
//   }
// });
// app.post("/get-mailjet", async (req, res) => {
//   try {
//       const response = await mailjetService.getMail(req, res);
//       res.status(200).json({
//           status: "success",
//           message: "Email sent successfully",
//           data: response,
//       });
//   } catch (error) {
//       res.status(400).json({
//           status: "error",
//           message: "Email not sent",
//       });
//   }
// });
// app.post("/send-message-mailjet", async (req, res) => {
//   console.log(req)
//   try {
//       const response = await mailjetService.sendMessageMail(req, res);
//       res.status(200).json({
//           status: "success",
//           message: "Email sent successfully",
//           data: response,
//       });
//   } catch (error) {
//       res.status(400).json({
//           status: "error",
//           message: "Email not sent",
//       });
//   }
// });
//////////////////////////////////Actors//////////////////////////////////////////////////////////////////////////////////

// app.post("/add_Actors", async (request, response) => {
//   const data = new ActorsModel(request.body);
  
//   console.log('/add_Actors', request.body)
//   try {
//     await data.save();
//     response.send(data);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.get("/get_ActorsAll", async (request, response) => {
//   console.log(request.query)
//   // const query = { category: { $in: [ "Informatika", "Personalistika a HR"] } }
//   const data = await ActorsModel.find().limit(20).sort({ createdAt: -1 });
//   console.log(data)
//   try {
//     response.send(data);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.get("/get_Actors", async (request, response) => {

//   // const query = { category: { $in: [ "Informatika", "Personalistika a HR"] } } ,{ 'status': 'aktiv' }
//   const data = await ActorsModel.find({ 'status': 'aktiv' }).limit(20).sort({ createdAt: -1 });

//   try {
//     response.send(data);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.get("/get_Actors/:id", async (request, response) => {
//   const { id } = request.params;
//   console.log('89', request.params)
//   const data = await ActorsModel.findById(id);

//   try {
//     response.send(data);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.get("/get_ActorsAfterFilter/", async (request, response) => {
//   // const { d } = request.params;
//   console.log('106', request.query)
//   const data = await ActorsModel.find(request.query).limit(20).sort({ createdAt: -1 });
//   console.log('108', data)
//   try {
//     response.send(data);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
// app.put("/update_Actors/:id", async (request, response) => {
//   const { id } = request.params;

//   console.log('99', id, request.body)

//   try {
//     data = await ActorsModel.findByIdAndUpdate(id,

//       { $set: request.body }

//       , { new: true });//respons update data
//     //response.send(product);
//     response.json(data);
//   }
//   catch (e) {
//     response.status(500).send(e);
//   }
// });
// app.delete("/delete_Actors/:id", async (request, response) => {
//   try {
//     console.log('118', request.params.id)
//     const data = await ActorsModel.findByIdAndDelete(request.params.id);

//     if (!data) response.status(404).send("No item found");
//     response.status(200).send();
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });
///////////////////////////////////AllNews///////////////////////////////////////////////////////////////////

// app.get("/get_AllNews", async (request, response) => {
//   let limit = request.query.limit
//   try {
//     const Blog= await BlogModel.find({}).limit(limit).sort({ createdAt: -1 });
//     const ethereum = await EthereumModel.find({}).limit(limit).sort({ createdAt: -1 });
//     const block = await BlockchainModel.find({}).limit(limit).sort({ createdAt: -1 });
//     const defi = await DefiModel.find({}).limit(limit).sort({ createdAt: -1 });
//     const altcoin = await AltcoinModel.find({}).limit(limit).sort({ createdAt: -1 });
//     const nft = await NftModel.find({}).limit(limit).sort({ createdAt: -1 });
//     const regulation = await RegulationModel.find({}).limit(limit).sort({ createdAt: -1 });
//     const metavers = await MetaverseModel.find({}).limit(limit).sort({ createdAt: -1 });
//     const feature = await FeatureModel.find({}).limit(limit).sort({ createdAt: -1 });
//     const opinion = await OpinionModel.find({}).limit(limit).sort({ createdAt: -1 });
//     const foll = await FollowupModel.find({}).limit(limit).sort({ createdAt: -1 });
//     const markets = await MarketsModel.find({}).limit(limit).sort({ createdAt: -1 });
//     const all = [...Blog, ...ethereum, ...block, ...defi, ...altcoin, ...nft, ...regulation, ...metavers, ...feature, ...opinion, ...foll, ...markets];
    
//     response.send(all);
//   } catch (error) {
//     response.status(500).send(error);
//   }
// });

///////////////////////////////////Blog///////////////////////////////////////////////////////////////////
app.post("/add_Blog", async (request, response) => {
  try {
    // if(request.body.top){
    //   const top = new TopNewsModel(request.body);
    //   try {
    //     await top.save();
    //   } catch (error) {
    //     response.status(500).send(error);
    //   }
    // }
    // if(request.body.popular){
    //   const popular = new PopularNewsModel(request.body);
    //   try {
    //     await popular.save();
    //   } catch (error) {
    //     response.status(500).send(error);
    //   }
    // }
    const data = new BlogModel(request.body);
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Blog", async (request, response) => {
  try {
    let limit = request.query.limit
    const category = await BlogModel.find({}).limit(limit).sort({ createdAt: -1 });
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Blog/:slug", async (request, response) => {
  try {
    const { slug } = request.params;
    const data = await BlogModel.findOne({slug:slug});
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_BlogById/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await BlogModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Blog/:id", async (request, response) => {
  const { id } = request.params;

  console.log('254', id, request.body)
  // if(request.body.top){
  //   const top = new TopNewsModel.findByIdAndUpdate(id,
  //     {
  //       $set: request.body
  //     }

  //     , { new: true });
  //   try {
  //     await top.save();
  //   } catch (error) {
  //     response.status(500).send(error);
  //   }
  // }
  // if(request.body.popular){
  //   const popular = new PopularNewsModel.findByIdAndUpdate(id,
  //     {
  //       $set: request.body
  //     }

  //     , { new: true });
  //   try {
  //     await popular.save();
  //   } catch (error) {
  //     response.status(500).send(error);
  //   }
  // }

  try {
    const data = await BlogModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_BlogByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await BlogModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Blog/:id", async (request, response) => {
  try {
    const processor = await BlogModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Team///////////////////////////////////////////////////////////////////
app.post("/add_Team", async (request, response) => {
  try {
    // if(request.body.top){
    //   const top = new TopNewsModel(request.body);
    //   try {
    //     await top.save();
    //   } catch (error) {
    //     response.status(500).send(error);
    //   }
    // }
    // if(request.body.popular){
    //   const popular = new PopularNewsModel(request.body);
    //   try {
    //     await popular.save();
    //   } catch (error) {
    //     response.status(500).send(error);
    //   }
    // }
    const data = new TeamModel(request.body);
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Team", async (request, response) => {
  
  try {
    const category = await TeamModel.find({});
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Team/:slug", async (request, response) => {
  try {
    const { slug } = request.params;
    const data = await TeamModel.findOne({slug:slug});
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_TeamById/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await TeamModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Team/:id", async (request, response) => {
  const { id } = request.params;

  console.log('254', id, request.body)
  // if(request.body.top){
  //   const top = new TopNewsModel.findByIdAndUpdate(id,
  //     {
  //       $set: request.body
  //     }

  //     , { new: true });
  //   try {
  //     await top.save();
  //   } catch (error) {
  //     response.status(500).send(error);
  //   }
  // }
  // if(request.body.popular){
  //   const popular = new PopularNewsModel.findByIdAndUpdate(id,
  //     {
  //       $set: request.body
  //     }

  //     , { new: true });
  //   try {
  //     await popular.save();
  //   } catch (error) {
  //     response.status(500).send(error);
  //   }
  // }

  try {
    const data = await TeamModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_TeamByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await TeamModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Team/:id", async (request, response) => {
  try {
    const processor = await TeamModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
///////////////////////////////////Message///////////////////////////////////////////////////////////////////
app.post("/add_Message", async (request, response) => {
  try {
    const data = new MessageModel(request.body);
    await data.save();
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Message", async (request, response) => {
  try {
    const category = await MessageModel.find({});
    response.send(category);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_Message/:slug", async (request, response) => {
  try {
    const { slug } = request.params;
    const data = await MessageModel.findOne({slug:slug});
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.get("/get_MessageById/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const data = await MessageModel.findById(id);
    response.send(data);
  } catch (error) {
    response.status(500).send(error);
  }
});
app.put("/update_Message/:id", async (request, response) => {
  const { id } = request.params;
  try {
    const data = await MessageModel.findByIdAndUpdate(id,
      {
        $set: request.body
      }
      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.put("/update_MessageByTitle/:title", async (request, response) => {
  const { title } = request.params;

  console.log('299', title, request.body)
   try {
    const data = await MessageModel.updateOne({title:title},
      {
        $set: request.body
      }

      , { new: true });//respons update data
    //response.send(product);
    response.json(data);
  }
  catch (e) {
    response.status(500).send(e);
  }
});
app.delete("/delete_Message/:id", async (request, response) => {
  try {
    const processor = await MessageModel.findByIdAndDelete(request.params.id);

    if (!processor) response.status(404).send("No item found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////







module.exports = app;