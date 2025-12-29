export default async function handler(req, res) {
  const { server } = req.query;

  if (!server) {
    res.status(400).json({ success: false, error: "Server parameter missing" });
    return;
  }

  try {
    const r = await fetch(`https://topeaglerservers.com/api/status/${server}`);
    const data = await r.json();

    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
