import { Request, Response } from "express";
import Job from '../models/jobs.models';

//[GET]/api/v1/jobs
export const index = async (req: Request, res: Response) => {
    try {
        const { jobForm, category, jobType, minSalary, maxSalary } = req.query;

        const query: any = { deleted: false };

        // jobForm: "Làm thêm,Internship"
        if (jobForm) {
            query.jobForm = {
                $in: jobForm.toString().split(",").map(s => s.trim()),
            };
        }

        // category: "Design,Gia sư"
        if (category) {
            query.category = {
                $in: category.toString().split(",").map(s => s.trim()),
            };
        }
        //jobType
        if (jobType) {
            query.jobType = {
                $in: jobType.toString().split(",").map(s => s.trim()),
            };
        }

        //  Thêm lọc theo mức lương
        if (minSalary || maxSalary) {
            query.salary = {};
            if (minSalary) query.salary.$gte = Number(minSalary);
            if (maxSalary) query.salary.$lte = Number(maxSalary);
        }
        const jobs = await Job.find(query);
        // console.log(jobs)
        res.status(200).json(jobs);
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