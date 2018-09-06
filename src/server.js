const express = require("express");
const secret = process.env.SK || require("../stripe_sk").sk;
const stripe = require("stripe")(secret);
const path = require("path");
const items = require("./items").items;

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
    const basket = Object.entries(body.basket);
    const composeOrder = (basket, items) =>
      basket.reduce((acc, item) => acc + `${items[item[0]].name} (${item[1]} pieces), `, "");
    const countTotal = (basket, items) => basket.reduce((acc, item) => acc + items[item[0]].price * item[1], 0);
    const amount = countTotal(basket, items) * 100;
    const order = composeOrder(basket, items);
    let { status } = await stripe.charges.create({
      amount,
      currency: "gbp",
      description: "Iconic Christmas Tree",
      source: body.token,
      receipt_email: body.email,
      metadata: {
        name: `${body.firstname} ${body.lastname}`,
        order,
        email: body.email,
        postcode: body.postcode,
        street: body.street,
        city: body.city
      }
    });
    res.json({ status });
  } catch (err) {
    console.log(err);
    res.status(500).end();
  }
});

app.listen(port, () => console.log(`Listening on port ${port}`));
