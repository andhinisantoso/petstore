# petstore
Project tugas besar pengembangan aplikasi mobile menggunakan React

## Hal yang harus dikerjakan untuk dapat menjalankan project di local computer
---
1. Pastikan kamu sudah clone project API-nya (https://github.com/nardiyansah/laravel-pet-shop-api)
2. Pastikan di local computer kamu sudah terpasang [XAMPP](https://www.apachefriends.org/index.html)
3. Untuk menjalankan project API-nya kamu harus tau IP address komputermu. Bagaimana caranya ?
    
    &#8594; Buka terminal windows
    
    &#8594; Ketikkan `ipconfig`

    &#8594; cari IPv4 Address ![IPv4address](https://github.com/nardiyansah/laravel-pet-shop-api/blob/main/ipv4address.PNG?raw=true)

    &#8594; Catat IP nya (bisa di notepad atau apapun)

4. Setelah itu jalankan XAMPP nya
5. Jika belum pernah membuat database nya dengan data dari seeder, jalankan perintah `php artisan migrate:fresh --seed`
6. Di project API (laravel) , jalankan project dengan menyertakan IP address yang sudah di dapat. Ketikkan `php artisan serve --host <ip address yang didapat tadi>`.
![php artisan serve](https://github.com/nardiyansah/laravel-pet-shop-api/blob/main/phpserver.PNG?raw=true)
7. Setelah itu catat alamat project (API yang sedang berjalan). dalam kasus tutorial ini alamatnya adalah `http://192.168.43.15:8000` ![service run](https://github.com/nardiyansah/laravel-pet-shop-api/blob/main/serve.PNG?raw=true)
8. Lalu ganti nilai variabel HOST di file `src/const/host.js` dengan alamat tadi. (Untuk selanjutnya file ini akan dimasukkan di .gitignore jadi kalau kamu sudah melakukannya sekali kamu tidak perlu lagi mengaturnya).
9. Banyak langkah yang dilalui tapi semoga saat ini projectnya dapat berjalan dengan baik
