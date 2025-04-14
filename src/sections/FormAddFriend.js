import { useState } from "react";
import Button from "../components/Button";

function FormAddFriend({ handleAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmit(e) {
    e.preventDefault();

    // Todo: Name ve Image değeri boş ise işlem yapma
    if (!name || !image) return;

    // Todo: Rastgele id değeri üret ->> 370ff708-152b-4adc-ab38-b41bf5c3584f
    const id = crypto.randomUUID();

    // Todo: Eklenecek yeni friend nesnesini oluştur
    const newFriend = {
      id,
      name,
      image: `${image}=?${id}`,
      balance: 0,
    };

    // Todo: App içerisindeki fonksiyona parametre olarak yeni friend'i gönder.
    handleAddFriend(newFriend);

    // Todo: Input değerlerini varsayılana döndür.
    setName("");
    setImage("https://i.pravatar.cc/48");
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
      <label htmlFor="name">👫Arkadaş Adı</label>
      <input
        type="text"
        id="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label htmlFor="url">🖼️Resim Url</label>
      <input
        type="text"
        id="url"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <Button>Ekle</Button>
    </form>
  );
}

export default FormAddFriend;
