import Button from "../components/Button";

function FriendsList({ friends, onSelection, selectedFriend }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          key={friend.id}
          friend={friend}
          onSelection={onSelection}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function Friend({ friend, onSelection, selectedFriend }) {
  const isSelected = selectedFriend?.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      {/* Todo: Balance değeri negatif ise */}
      {friend.balance < 0 && (
        <p className="red">
          {friend.name} kişisine {Math.abs(friend.balance)}₺ borçlusun.
        </p>
      )}
      {/* Todo: Balance değeri pozitif ise */}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} sana {friend.balance}₺ borçlu.
        </p>
      )}
      {/* Todo: Balance değeri zero ise */}
      {friend.balance === 0 && <p>{friend.name} ile aranda borç durumu yok.</p>}
      <Button onClick={() => onSelection(friend)}>
        {isSelected ? "Kapat" : "Seç"}
      </Button>
    </li>
  );
}

export default FriendsList;
