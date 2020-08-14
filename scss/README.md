# Hướng dẫn sử dụng SCSS

1. layout
2. button

## 1. `./configs/_layout.config.scss`

> Tạo media, tạo container-grid, tạo main-grid

---

**CONFIG**

```scss
@include config(
  $min-screen: (
    "default": 576px,
    "sm": 768px,
    "md": 992px,
    "lg": 1200px,
  ),
  $max-screen: (
    "default": 767.98px,
    "sm": 991.98px,
    "md": 1199.98px,
    "lg": 1499.98px,
  ),
  $cols: (
    "default": 12,
    "sm": 12,
    "md": 12,
    "lg": 12,
  ),
  $gap: (
    "default": 0,
    "sm": 0,
    "md": 0,
    "lg": 0,
  ),
  $layout-margin: (
    "default": 16px,
    "sm": 3 * 16px,
    "md": 5 * 16px,
    "lg": 7 * 16px,
  )
);
```

---

### 1.1. Cài đặt media-screen

```scss
@include media-screen($screen-type) {
  // some content
}
```

- `$screen-type` loại màn hình đã được config: `sm`, `md`, `lg`, `xl`

### 1.2. Tạo một layout container

```scss
/* SYNTAX */
@include create-container($class-name) {
  // some options content
}
/* SHORT HAND */
@include create-container;
```

- `$class-name` tên class container sẽ được tạo. defaul: `container-grid`

### 1.3. Tạo một GRID layout

```scss
/* SYNTAX */
@include create-main-layout($class-name) {
  // some options content
}
/* SHORT HAND */
@include create-main-layout;
```

**(!)** Không khuyến khích sử đổi thông số tại các map `$min-screen-map` và `$max-screen-map`

## 2. `./configs/_button.config.scss`

### 2.1 Tạo icon burger cho button

---

**CONFIG**

> Chỉ cần config `$scale` (độ phóng đại của button), còn những thuộc tính khác có thể tùy biến vào content

```scss
@include config(
  $zoom: 1,
  $button: (
    "width": 32px,
    "height": 32px,
    "background": #000,
    "cursor": pointer,
  ),
  $icon: (
    "width": 20px,
    "height": 3px,
    "background": #fff,
    "transition": all 0.5s,
    "gap": 7px,
    "cycle": 2,
  )
);
```

---

#### 2.1.1. Tạo icon

> ! Lưu ý: cần phải chứa icon trong một thẻ cha dùng làm button cho burger

```scss
/* SYNTAX */
@include create-burger-icon($class-name) {
  // some options content
}
/* SHORT HAND */
@include create-burger-icon;
```

- `$class-name` tên class của icon sẽ tạo. default: `burger-icon`

#### 2.1.2. Tạo animation cho icon burger khi add marker vào

```scss
/* SYNTAX */
@include set-burger-open-animation($class-name, $class-marker) {
  // some options content
}
/* SHORT HAND */
@include set-burger-open-animation;
```

- `$class-name` tên của class icon đã được tạo. default: `burger-icon`
- `$class-marker` tên của class marker sẽ được tạo. default: `open`

#### 2.1.3. JS thêm marker vào icon khi click vào thẻ cha

```js
/* SYNTAX */
burgerClickAnimation(className, classMarker);
/* SHORT HAND */
burgerClickAnimation();
```

- `className` tên icon burger đã được tạo. Default: `burger-icon`
- `classMarker` tên của class marker sẽ được tạo. Default: `open`
