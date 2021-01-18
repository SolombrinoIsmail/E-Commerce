import bcrypt from "bcryptjs";

const data = {
  users: [
    {
      name: "Ismail",
      email: "ismail@example.com",
      password: bcrypt.hashSync("Ismail1234", 8),
      isAdmin: true,
      isSeller: true,
      seller: {
        name: "Samsung",
        logo: "/images/logo1.png",
        description: "best seller",
        rating: 5,
        numReviews: 112,
      },
    },
    {
      name: "Abraham",
      email: "abraham@example.com",
      password: bcrypt.hashSync("Abraham1234", 8),
      isAdmin: false,
    },
    {
      name: "Luciano",
      email: "luciano@example.com",
      password: bcrypt.hashSync("Luciano1234", 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: "Samsung Galaxy S21 Ultra",
      category: "Phones",
      image: "/images/phones/samsung/SamsungS21_1.webp",
      price: 1249,
      countInStock: 10,
      brand: "Samsung",
      rating: 5,
      numReviews: 100,
      description:
        "Bildschirmdiagonale: 6.8 , Betriebssystem: Android, Farbe: Schwarz, Speicherkapazität total: 128 GB, Verbauter Arbeitsspeicher: 12 GB, Card Reader: Kein.",
    },
    {
      name: "Samsung Galaxy Note 20 Ultra Snapdragon",
      category: "Phones",
      image:
        "/images/phones/samsung/Samsung_Note20-Ultra-5G_mystic-bronze.webp",
      price: 1199,
      countInStock: 20,
      brand: "Samsung",
      rating: 4.9,
      numReviews: 200,
      description:
        "Das Galaxy Note20 Ultra 5G verfügt über ein erstaunliches 6,9'-Edge-Display, das mit einer 120 Hz dynamischen Bildwiederholrate für das flüssigste Bilderlebnis sorgt. Das Galaxy Not20 5G verfügt über ein immersives, flaches 6,7'-Display. Das ikonische Design und die neuen Mystic-Farben mit Matt-Finish fallen überall auf.",
    },
    {
      name: "Apple iPhone 12 Pro",
      category: "Phones",
      image:
        "/images/phones/iphone/iPhone_12_Pro_Gold_PDP_Image_Position-2__en-US.webp",
      price: 1249,
      countInStock: 50,
      brand: "Apple",
      rating: 4.8,
      numReviews: 180,
      description:
        "Das iPhone 12 Pro. Superschnelles 5G. A14 Bionic, der schnellste Chip in einem Smartphone. Pro Kamerasystem für Low‑Light Fotografie auf einem neuen Level. Das ist ein schöner Sprung nach vorn. Ein brillant helles 6,1' Super Retina XDR Display. Ceramic Shield mit 4x besserer Sturzfestigkeit. Unglaubliche Low‑Light Fotografie mit einem neuen Pro Kamerasystem und 4x optischem Zoombereich. Kinoreife Dolby Vision Videoaufnahme, Bearbeitung und Wiedergabe.",
    },
    {
      name: "Apple iPhone 11",
      category: "Phones",
      image: "/images/phones/iphone/iPhone_11_W_2.webp",
      price: 659,
      countInStock: 15,
      brand: "Apple",
      rating: 4.5,
      numReviews: 120,
      description:
        "Ganz neues Zwei-Kamera-System mit Ultraweitwinkel-Objektiv. Nachtmodus und beeindruckende Videoqualität. Schutz vor Wasser und Staub. Batterie für den ganzen Tag. In sechs fantastischen Farben. Erlebe das iPhone hoch 11.",
    },
    {
      name: "Apple iPad Pro (2020)",
      category: "Tablets",
      image:
        "/images/tablets/apple/iPad_Pro_12_9-in_Wi-Fi_Space_Gray_2-up_Vertical_US-EN_SCREEN.webp",
      price: 1151,
      countInStock: 100,
      brand: "Apple",
      rating: 4.5,
      numReviews: 10,
      description: "high quality product",
    },
    {
      name: "Samsung Galaxy Tab S7+",
      category: "Tablets",
      image: "/images/tablets/samsung/TabS7.webp",
      price: 869,
      countInStock: 12,
      brand: "Samsung",
      rating: 4.9,
      numReviews: 250,
      description:
        "Der neuste und schnellste Prozessor bietet höchste Produktivität und beste Performance beim Gamen. Das Tab S7+ ist auch mit 5G erhältlich - für eine superschnelle Datenübertragung und die niedrigste Latenz. Mit mehr als 10’090 mAh Kapazität hält der Akku auch langen Arbeitstagen stand und du bleibst flexibel. Mit dem eindrücklichen 12,4″-sAMOLED-Display wird das Tab S7+ zum perfekten Arbeitsgerät zum Lesen, Schreiben und Festhalten von Notizen.",
    },
  ],
};
export default data;
