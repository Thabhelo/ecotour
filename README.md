# EcoTour

**EcoTour** is a modern eco-tourism application designed to promote sustainable travel and responsible tourism. Built with React, this app features interactive maps, eco-lodge directories, verified reviews, and travel tips to help users discover and experience eco-friendly destinations.

---

## 🌟 Features

### **1. Interactive Maps**
- Embedded Google Maps with markers for eco-lodges and points of interest.
- Tooltips with basic lodge details (e.g., name, eco-score).
- Future integration support for dynamic location data.

### **2. Eco-Lodge Directory**
- Comprehensive listing of eco-lodges with:
  - **Contact Information**: Easy access to reception and customer support.
  - **Facilities**: Solar power, water recycling, organic gardens, and more.
  - **Amenities**: Green transport, cultural tours, and zero-waste accommodations.
- Filter and search options for users to find lodges by region or amenities.

### **3. Verified Reviews**
- Users can post reviews verified through booking details or voucher codes.
- Simulated authentication for demonstration purposes.
- Authentic reviews help other travelers make informed decisions.

### **4. Sustainable Travel Tips**
- Curated travel tips to encourage eco-conscious tourism.
- Collapsible cards or image carousel for an engaging user experience.

### **5. Community Forum**
- Interactive community space to:
  - Discuss eco-tourism destinations.
  - Share wildlife photography tips.
  - Post and participate in sustainable travel discussions.

---

## 🚀 Tech Stack

- **Frontend**: React, Tailwind CSS
- **Mapping API**: Google Maps Embed API
- **State Management**: React Hooks
- **Development Tools**: ESLint, Prettier
- **Utilities**: PostCSS, Tailwind CSS
- **Backend**: Tentatively Node.js/Express with MongoDB integration.

---

## 🔧 Installation and Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Thabhelo/ecotour.git
   cd ecotour
   ```
2. Install dependencies:

```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3000
```

📁 Project Structure
```plaintext
ecotour/
├── src/
│   ├── app/
│   │   ├── globals.css       # Global CSS styles
│   │   ├── layout.js         # Root layout configuration
│   │   └── page.jsx          # Main app page component
│   ├── components/           # Reusable React components
│   ├── utilities/            # Helper functions
│   └── middleware.js         # Placeholder for future backend logic
├── public/                   # Static assets (images, icons, etc.)
├── tailwind.config.js        # Tailwind CSS configuration
├── package.json              # Dependencies and scripts
└── README.md                 # Project documentation
```

## 💡 Future Enhancements
### Dynamic Data Integration:

- Connect with a backend to fetch real-time eco-lodge information.
- Store user reviews and authentication data securely.
- Personalized User Accounts:
  > Allow users to save favorite lodges and track their eco-footprint.
-AI-Powered Features:
  > Personalized travel suggestions based on user preferences.
  > Chatbot for answering eco-tourism queries.

## 📜 License
This project is licensed under the MIT License.

