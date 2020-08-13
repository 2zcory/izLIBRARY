# Hướng dẫn sử dụng SCSS

## 1. `./configs/_layout.config.scss`

> Chứa các cài đặt cấu hình sử dụng cho `./_layout.scss`

- Chia làm 3 phần chính

  1. Chứa các thông số chính của layout (**PARAMs**)

  - Thông số cho min-width: `$min-screen-map`
  - Thông số kích thước tối đa cho mỗi media: `$max-screen-map`
  - Số lượng cột cho main-layout đối với mỗi media: `$col-numbers-map`
  - Kích thước gap cho main-layout đối với mỗi media: `$layout-gap-map`
  - Chiều rộng lề 2 bên cho trang: `$page-margin-map`

  2. Chứa các hàm công cụ `@function` và `@mixin`

  - `get-col-numbers($screen-type)`
  - `get-layout-gap($screen-type)`
  - `get-page-margin($screen-type)`
  - `get-col-width($screen-type)`

  - `create-container-properties($screen-type)`
  - `create-gap-properties($screen-type)`
  - `create-layout-properties($screen-type)`
  - `create-col-class($screen-type)`

  3. Chứa các hàm `@mixin` đưa vào sử dụng

### 1.1. `media-screen($screen-type)`

---

- Mixin này dùng để khởi tạo media-query, nhận vào đối số là screen type

### 1.2. `create-container($class-name)`

---

- Mixin này tạo container chứa nội dung ở giữa với 2 lề 2 bên
- Tham số: `$class-name` (option đặt tên cho class)
- Mặc định những nội dung bên trong container này đều nằm đúng vị trí ở giữa 2 lề

### 1.3. `create-main-layout($class-name)`

---

- Mixin này tạo main-layout dưới dạng ô lưới, và các class col con của nó
- Tham số: `$class-name` (option đặt tên cho class)
