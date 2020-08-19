import DB from "@database/db";

const allAvos = async (req, res) => {
  const db = new DB();
  const { id } = req.query;

  let entry = await db.getById(id);
  res.status(200).json(entry);
};

export default allAvos;
