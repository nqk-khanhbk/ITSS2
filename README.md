# Cách clone dự án về máy tính
```c
   https://github.com/nqk-khanhbk/ITSS2.git
```
# Cách cài đặt Mongodb trên máy tính mỗi người
1. Tải MongoDB Compass
2. Vào add new connect
   Xong dán cài này vào
   ```c
      mongodb+srv://nguyenquockhanh01022003:xnvB16F3MWx66Dza@databasebuild.7o62o.mongodb.net/ITSS2
   ```



# API 
1. Lấy danh sách các công việc(GET)
   
   http://localhost:8080/api/v1/jobs
3. Lấy thông tin chi tiết công việc(GET) mọi người lấy ID rồi gửi lên url nhé(kia là ID mẫu để test thui)
   
   http://localhost:8080/api/v1/jobs/detail/681ea42f2d17ecbbb9479b23

5. Lọc theo nhiều tiêu chí(GET) Gửi lên đúng như này nha
   
   http://localhost:8080/api/v1/jobs?jobForm=Làm%20thêm,Contract&jobType=Part-Time,Full-Time

    ***API để test thêm phần này
  
     http://localhost:8080/api/v1/jobs?jobForm=Làm%20thêm&jobType=Part-Time&category=Gia%20sư
4. Lọc theo khoảng lương từ bao nhiêu đến bao nhiêu

    http://localhost:8080/api/v1/jobs?minSalary=200000&maxSalary=500000
   
