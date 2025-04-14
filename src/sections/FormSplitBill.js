import { useState } from "react";
import Button from "../components/Button";

function FormSplitBill({ selectedFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [youBill, setYouBill] = useState("");
  const otherBill = bill ? bill - youBill : "";
  const [who, setWho] = useState("you");

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !youBill) return;

    onSplitBill(who === "you" ? otherBill : -youBill);
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>{selectedFriend.name} ile hesabı paylaş</h2>

      <label htmlFor="bill">💰Hesap tutarı</label>
      <input
        type="text"
        id="bill"
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label htmlFor="you">🧍🏼Senin hesabın</label>
      {/* Todo: Buradaki hesap çok iyi */}
      {/* Todo: Anında kontrol yapıyor, toplam hesaptan büyük olmamasını sağlıyor. */}
      <input
        type="text"
        id="you"
        value={youBill}
        onChange={(e) =>
          setYouBill(+e.target.value > bill ? youBill : +e.target.value)
        }
      />

      <label htmlFor="other">👫🏼{selectedFriend.name}'in hesabı</label>
      <input type="text" id="other" disabled value={otherBill} />

      <label htmlFor="who">💱Hesabı kim ödedi?</label>
      <select id="who" value={who} onChange={(e) => setWho(e.target.value)}>
        <option value="you">You</option>
        <option value="other">{selectedFriend.name}</option>
      </select>
      <Button>Hesabı Kaydet</Button>
    </form>
  );
}

export default FormSplitBill;
