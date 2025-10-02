import Rank from "../models/rank.js";

const RankController = {
    async index(req, res) {
        const ranks = await Rank.findAll();
        res.json({ 
            success: true, 
            data: ranks
        });
    },
    async show(req, res) {
        const rank = await Rank.findByPk(req.params.id);
        res.json({ 
            success: true, 
            data: rank 
        });
    },
    async store(req, res) {
        const rank = await Rank.create(req.body);
        res.json({ 
            success: true, 
            data: rank
        });
    },
    async update(req, res) {
        const rank = await Rank.findByPk(req.params.id);
        await rank.update(req.body);
        res.json({ 
            success: true, 
            data: rank 
        });
    },
    async destroy(req, res) {
        const rank = await Rank.findByPk(req.params.id);
        const deleted = await rank.destroy();
        res.json({ 
            success: true, 
            data: deleted
        });
    }
}

export default RankController
