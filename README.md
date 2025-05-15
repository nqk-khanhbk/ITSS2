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
   
   http://localhost:8080/api/v1/jobs?jobForm=Làm thêm,Contract&jobType=Part-Time,Full-Time

    ***API để test thêm phần này
  
     http://localhost:8080/api/v1/jobs?jobForm=Làm thêm&jobType=Part-Time&category=Gia sư

     http://localhost:8080/api/v1/jobs?jobForm=Contract&jobType=Part-Time&category=Gia sư,Sales&days=Thứ 2,Thứ 4,Thứ 5
   
4. Lọc theo khoảng lương từ bao nhiêu đến bao nhiêu

    http://localhost:8080/api/v1/jobs?minSalary=200000&maxSalary=500000
5. Sort theo mức lương và ngày mới nhất tạo công việc
   
   http://localhost:8080/api/v1/jobs?sortKey=salary&sortValue=desc

   http://localhost:8080/api/v1/jobs?sortKey=startDate&sortValue=asc

 6.Lấy ra địa chỉ công việc

      http://localhost:8080/api/v1/address

   7.Phân trang sản phẩm

      http://localhost:8080/api/v1/jobs?page=1&limit=6
      
   8.Tìm kiếm sản phẩn theo Keywork (tìm theo category job) và địa chỉ

     http://localhost:8080/api/v1/jobs?keyword=Nhân viên bán hàng&address= Trần Đại Nghĩa
   
