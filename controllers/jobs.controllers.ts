import { Request, Response } from "express";
import Job from '../models/jobs.models';

//[GET]/api/v1/tasks
export const index = async (req: Request, res: Response) => {
    try {
        const jobs = await Job.find({ deleted: false });
        // console.log(jobs)
        res.json(jobs);
    } catch (error) {
        res.status(404).json({ mesage: "Server error" });
    }
}
//[GET]/api/v1/jobs/detail/:id
export const detail = async (req: Request, res: Response) => {
    try {
        const id = req.params.id;
        // console.log(id);
        const task = await Job.findOne({
            _id: id,
            deleted: false
        });
        res.json(task);
    } catch (error) {
        res.status(404).json({ mesage: "Lỗi không lấy được chi tiết công việc!" });
    }

}