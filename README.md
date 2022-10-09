# challenge-05-Muhammad-Sindida-Hilmy-ITTP

# FYI
# REFERENSI PENGERJAAN CHALLENGE DI YT LINK : https://youtu.be/W7JG8P_BY6w
# START NODEMON : NPM RUN START-DEV
# Tools:
- Node Js
- XAMPP untuk mengkoneksikan apache dan mysql database nya
- Postman untuk melakukan testing api

# MENGGUNAKAN ORM YAITU MIGRATION
# MENGGUNAKAN MYSQL2, sequelize, sequelize-cli, dll(di package.json, bagian dependensi)

# SUDAH DIKERJAKAN:
# Manajemen data mobil dapat dilakukan melalui REST API (Menggunakan Postman)
-POST Data : Menggunakan POST, setting ke body, raw, JSON. Link: http://localhost:3000/notes .
-PUT Data : Menggunakan PUT, setting ke body, raw, JSON. Link: http://localhost:3000/notes/(1) . /(1) = merupakan put data sesuai id.  Contoh: http://localhost:3000/notes/1 .
-GET All Data : Menggunakan GET, setting ke Params. Link: http://localhost:3000/notes/ .
-GET Data By ID : Menggunakan GET, setting ke Params. Link: http://localhost:3000/notes/(2) . /(2) = merupakan get data sesuai id.  Contoh: http://localhost:3000/notes/2 .
-DELETE Data : Menggunakan DELETE, setting ke Params. Link: http://localhost:3000/notes/(3) . /(3) = merupakan delete data sesuai id.  Contoh: http://localhost:3000/notes/3 .

# Menambahkan data mobil, Memodifikasi data mobil yang sudah ada, dan melihat daftar mobil yang ada didalam database

# ERD menggunakan dbdiagram.io
![ERD](https://user-images.githubusercontent.com/92351936/194302190-155f2201-90ce-4668-8c89-b52ebc8e7d44.png)

# Membuat sebuah HTTP SERVER Dengan menggunakan express js
-Untuk membuka dashboard : http://localhost:3000
-Untuk membuka addNewCar : http://localhost:3000/addNewCar.html
-Untuk membuka updateCarInformation : http://localhost:3000/updateCarInformation.html 
-Untuk membuka data mobil : http://localhost:3000/notes 
# Membuat sebuah HTTP SERVER sesuai dengan kaidah RESTful API


# BELUM DIKERJAKAN:
-Tidak dapat memanajemen data mobil menggunakan browser, sesuai dengan desain yg tertera
-Tidak dapat upload foto mobil