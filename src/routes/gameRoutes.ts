import { Router } from 'express';
import path from 'path';
import { HTML_FILES_PATH } from '../config';

const router = Router();

router.get('/', (req, res) => {
	const page = path.join(HTML_FILES_PATH, 'game.html');
	res.sendFile(page);
});

export default router;
