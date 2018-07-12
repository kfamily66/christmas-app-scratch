const app = require("express")();
const secret = require("../stripe_sk");
const stripe = require("stripe")(secret.sk);

app.use(require("body-parser").text());

app.post("/charge", async (req, res) => {
  try {
    const body = JSON.parse(req.body);
    const token = body.token;
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
    res.status(500).end();
  }
});

app.listen(9000, () => console.log("Listening on port 9000"));
