import mongoose from "mongoose";

const jobSchema = new mongoose.Schema(
  {
    title: { type: String, required: true }, // Tên công việc
    jobType: { type: String },               // "Part-Time", "Full-Time", ...(thoi gian lm vc)
    category: { type: String },              // "Gia sư", "Sales", ...(vtri cong viec)
    jobForm: { type: String },               // "Internship", "Contract", "Làm thêm", ...(loai cviec)

    company: {
      name: { type: String },
      location: { type: String },
    },

    address: { type: String },               // Địa chỉ cụ thể
    salary: { type: Number },                // Ví dụ: 250000 (đơn vị có thể mặc định là đ/buổi)

    deadline: { type: Number },              // Số ngày còn lại 

    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: { type: Date },
  },
  {
    timestamps: true, // Tự động thêm createdAt và updatedAt
  }
);

const Job = mongoose.model("Job", jobSchema, "Jobs");

export default Job;
