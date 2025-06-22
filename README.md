# 🛍️ Item Management App - Internship Assignment

This is a 2-page web application built for the internship assignment provided by **AMRR TechSols Pvt Ltd**. It allows users to add new items and view them in a structured and interactive UI.

---

## 🚀 Features

### ✅ 1. Add Items Page (`/additem`)
- Add new items using a form with:
  - Item Name
  - Item Type (Shirt, Pant, Shoes, etc.)
  - Item Description
  - Cover Image URL
  - Additional Image URLs (comma-separated)
- Shows success message: ✅ *Item successfully added*

### ✅ 2. View Items Page (`/viewpage`)
- Displays a list of all items (static + user-added).
- Each item shows:
  - Cover image
  - Item name

### ✅ 3. Item Details Modal
- On clicking any item, a modal opens showing:
  - All item details
  - All images in a responsive carousel
  - An **"Enquire"** button (currently triggers an alert)

### ✅ 4. Cart Functionality *(Bonus UI feature)*
- Items can be added to cart
- A success alert shows briefly after adding to cart
- A button allows clearing the cart

---

## 🧪 How to Run the App Locally

1. Clone the repository:

```bash
git clone https://github.com/your-username/item-management-app.git
cd item-management-app
