// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const { username } = req.query;
  res.status(200).json([{ name: username }]);
}
