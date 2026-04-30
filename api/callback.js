export default function handler(req, res) {
  const { code } = req.query
  return res.status(200).send(`Your code is: ${code}`)
}
