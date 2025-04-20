import { useState } from "react";
import Button from "./components/Button";
import FormSplitBill from "./sections/FormSplitBill";
import FormAddFriend from "./sections/FormAddFriend";
import FriendList from "./sections/FriendList";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  // Todo: Arkadaş ekleme alanın görünürlüğünü değiştir.
  function handleToggle() {
    setShowAddFriend((showAddFriend) => !showAddFriend);
  }

  // Todo: Arkadaş ekle
  function handleAddFriend(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddFriend(false);
  }

  // Todo: Arkadaş seç veya zaten seçiliyse kapat
  function handleSelection(friend) {
    setSelectedFriend((cur) => (cur?.id === friend.id ? null : friend));
    setShowAddFriend(false);
  }

  // Todo: Hesaplama form işlemi
  function handleSplitBill(value) {
    // Todo: Seçili friend'in balance değerini güncelle
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend,
      ),
    );
    // Todo: Hesaplama formunu kapat
    setSelectedFriend(null);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />
        {showAddFriend && <FormAddFriend handleAddFriend={handleAddFriend} />}
        <Button onClick={handleToggle}>
          {showAddFriend ? "Kapat" : "Arkadaş Ekle"}
        </Button>
      </div>
      {selectedFriend && (
        <FormSplitBill
          key={selectedFriend.id}
          selectedFriend={selectedFriend}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

export default App;
