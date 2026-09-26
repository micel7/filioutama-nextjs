import mysql from 'mysql2/promise';

const globalForDb = global;

const pool = globalForDb.mysqlPool || mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT || 3306),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  waitForConnections: true,
  connectionLimit: 5,
});

if (process.env.NODE_ENV !== 'production') globalForDb.mysqlPool = pool;

export async function getProjects() {
  const [rows] = await pool.query(`
    SELECT p.*,
      (
        SELECT pi.image
        FROM project_images pi
        WHERE pi.project_id = p.id
        ORDER BY pi.is_cover DESC, pi.sort_order ASC, pi.id ASC
        LIMIT 1
      ) AS cover_image
    FROM projects p
    WHERE p.category IN ('sipil', 'interior')
    ORDER BY p.year DESC, p.id DESC
  `);
  return rows;
}

export async function getProjectById(id) {
  const [projects] = await pool.execute(
    'SELECT id, title, category, description, location, year FROM projects WHERE id = ? LIMIT 1',
    [id],
  );

  if (!projects[0]) return null;

  const [images] = await pool.execute(
    'SELECT image, is_cover FROM project_images WHERE project_id = ? ORDER BY is_cover DESC, sort_order ASC, id ASC',
    [id],
  );

  return { ...projects[0], images };
}
