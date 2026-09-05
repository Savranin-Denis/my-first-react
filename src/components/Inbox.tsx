interface MailboxProps {
  username: string;
  messages: string[];
}

export default function Mailbox({ username, messages }: MailboxProps) {
  return (
    <>
      <p>Hello {username}</p>
      {messages.length > 0 ? (
        <>
          <p>You have {messages} messages</p>
          <p>Check Your inbox</p>
          <button>Opn inbox</button>
        </>
      ) : (
        <p>No unread messages</p>
      )}
    </>
  );
}
