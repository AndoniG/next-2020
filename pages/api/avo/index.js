import DB from "@database";

const allAvos = async (req, res) => {
  const db = new DB();
  let allEntries = await db.getAll();
  res.status(200).json({
    length: allEntries.length,
    data: allEntries,
  });
};

export default allAvos;
