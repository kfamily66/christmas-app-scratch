const express = require("express");
const secret = process.env.SK || require("../stripe_sk");
const stripe = require("stripe")(secret.sk);
const path = require("path");

const port = process.env.PORT || 9000;
const publicPath = path.join(__dirname, "..", "build");
const app = express();

app.use(require("body-parser").text());
app.use(express.static(publicPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});
app.post("/charge", async (req, res) => {
  try {
    const body = JSON.parse(req.body);
    let { status } = await stripe.charges.create({
      amount: 4500,
      currency: "gbp",
      description: "test charge",
      source: body.token,
      receipt_email: body.email,
      metadata: { ...body }
    });
    res.json({ status });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
